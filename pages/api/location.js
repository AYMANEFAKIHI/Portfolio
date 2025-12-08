export default function handler(req, res) {
  try {
    // Get the IP address from the request headers
    const forwarded = req.headers['x-forwarded-for'];
    let ip;
    
    if (typeof forwarded === 'string') {
      ip = forwarded.split(',')[0];
    } else if (Array.isArray(forwarded)) {
      ip = forwarded[0];
    } else {
      ip = req.socket?.remoteAddress || req.connection?.remoteAddress;
    }

    // Normalize IP (strip IPv6 prefix if present)
    if (ip && ip.startsWith('::ffff:')) {
      ip = ip.replace('::ffff:', '');
    }

    console.log('Debug Location API:', { ip, env: process.env.NODE_ENV });

    // Handle local development (localhost) and private IP ranges
    const isLocal = process.env.NODE_ENV !== 'production' || 
                    !ip || 
                    ip === '::1' || 
                    ip === '127.0.0.1' || 
                    ip === 'localhost' ||
                    ip.includes('127.0.0.1') ||
                    ip.startsWith('192.168.') ||
                    ip.startsWith('10.') ||
                    (ip.startsWith('172.') && parseInt(ip.split('.')[1], 10) >= 16 && parseInt(ip.split('.')[1], 10) <= 31);

    if (isLocal) {
      return res.status(200).json({ 
        city: 'Rabat (Dev)', 
        country: 'Morocco' 
      });
    }

    // Dynamically require geoip-lite to prevent top-level crashes and handle missing data
    let geo = null;
    try {
      const geoip = require('geoip-lite');
      geo = geoip.lookup(ip);
    } catch (libError) {
      console.error('GeoIP Library Error:', libError);
    }

    if (geo) {
      res.status(200).json({ 
          city: geo.city || 'an undisclosed location', 
          country: geo.country || 'the globe' 
      });
    } else {
      // Fallback if IP lookup fails
      res.status(200).json({ city: 'an undisclosed location', country: 'the globe' });
    }
  } catch (error) {
    console.error('Location API Error:', error);
    // Return a fallback instead of crashing
    res.status(200).json({ city: 'an undisclosed location', country: 'the globe' });
  }
}
