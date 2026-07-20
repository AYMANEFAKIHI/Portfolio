export default function Privacy() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: 700, margin: "0 auto", lineHeight: 1.6 }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: July 20, 2026</p>

      <p>
        This policy describes how the personal video-posting utility ("the App") handles
        data when connected to TikTok's Content Posting API.
      </p>

      <h2>What data is used</h2>
      <ul>
        <li>The TikTok OAuth access token and refresh token for the developer's own authorized account.</li>
        <li>Local video files selected by the developer for upload.</li>
        <li>Basic account info returned by TikTok (e.g. username) if the user.info.basic scope is used, solely to confirm the correct account is authorized.</li>
      </ul>

      <h2>How data is used</h2>
      <p>
        Access tokens are stored locally (in an environment file on the developer's own
        machine) and used only to call TikTok's Content Posting API to upload videos to the
        developer's own TikTok profile. No data is shared with, sold to, or accessed by any
        third party.
      </p>

      <h2>Data retention</h2>
      <p>
        Tokens and video files are retained locally only for as long as needed to operate
        the App and can be deleted at any time by the developer.
      </p>

      <h2>Third parties</h2>
      <p>
        The App communicates only with TikTok's official API endpoints. It does not
        integrate with any analytics, advertising, or other third-party data services.
      </p>

      <h2>Contact</h2>
      <p>For questions about this policy, contact the site owner via the contact details on the homepage.</p>
    </div>
  );
}
