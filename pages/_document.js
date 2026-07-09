import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <meta name="theme-color" content="#14b8a6" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Aymane Fakihi" />
          <meta name="keywords" content="Aymane Fakihi, Full Stack Developer, Next.js, React, Node.js, MERN Stack, Web Developer, Morocco, Rabat, EMSI" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://portfolio-mu-ten-al9isz6c5k.vercel.app/" />
          <meta property="og:title" content="Aymane Fakihi | Full Stack Developer" />
          <meta property="og:description" content="Full Stack Developer specializing in Next.js, Node.js and scalable web applications. Building real products used by thousands." />
          <meta property="og:image" content="https://portfolio-mu-ten-al9isz6c5k.vercel.app/og-image.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="Aymane Fakihi Portfolio" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Aymane Fakihi | Full Stack Developer" />
          <meta name="twitter:description" content="Full Stack Developer specializing in Next.js, Node.js and scalable web applications." />
          <meta name="twitter:image" content="https://portfolio-mu-ten-al9isz6c5k.vercel.app/og-image.png" />
          <link rel="canonical" href="https://portfolio-mu-ten-al9isz6c5k.vercel.app/" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Aymane Fakihi",
                "url": "https://portfolio-mu-ten-al9isz6c5k.vercel.app",
                "image": "https://portfolio-mu-ten-al9isz6c5k.vercel.app/images/aymanefakihi.JPG",
                "jobTitle": "Full Stack Developer",
                "alumniOf": { "@type": "EducationalOrganization", "name": "EMSI Rabat" },
                "address": { "@type": "PostalAddress", "addressLocality": "Rabat", "addressCountry": "MA" },
                "sameAs": [
                  "https://github.com/AYMANEFAKIHI",
                  "https://www.linkedin.com/in/aymane-fakihi-9a3435335/"
                ]
              })
            }}
          />
        </Head>
        <body>
          <a
            href="#main-content"
            style={{
              position: 'absolute',
              left: '-9999px',
              top: 'auto',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
            }}
            onFocus={(e) => {
              e.target.style.left = '16px';
              e.target.style.top = '16px';
              e.target.style.width = 'auto';
              e.target.style.height = 'auto';
            }}
            onBlur={(e) => {
              e.target.style.left = '-9999px';
              e.target.style.width = '1px';
              e.target.style.height = '1px';
            }}
          >
            Skip to main content
          </a>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
