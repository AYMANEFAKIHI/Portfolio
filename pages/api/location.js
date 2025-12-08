import geoip from 'geoip-lite';

export default function handler(req, res) {
  // Get the IP address from the request headers (Vercel automatically passes this)
  const forwarded = req.headers['x-forwarded-for'];
  // Prioritize the forwarded IP (which is the user's) over the local connection IP
  let ip = forwarded ? forwarded.split(',')[0] : req.connection.remoteAddress;

  // Handle local development (localhost)
  if (ip === '::1' || ip === '127.0.0.1') {
    // Use a dummy IP for testing (e.g., a Google IP or just return mock data)
    // Or just return a specific "Development" location
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
}
