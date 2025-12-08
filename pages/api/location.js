import geoip from 'geoip-lite';

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

    // Handle local development (localhost)
    if (!ip || ip === '::1' || ip === '127.0.0.1') {
      return res.status(200).json({ 
        city: 'Rabat (Dev)', 
        country: 'Morocco' 
      });
    }

    // Look up the location using the library
    const geo = geoip.lookup(ip);

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
