export default function Terms() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: 700, margin: "0 auto", lineHeight: 1.6 }}>
      <h1>Terms of Service</h1>
      <p>Last updated: July 20, 2026</p>

      <p>
        This site provides a personal utility ("the App") that splits a video file into
        shorter clips and posts them to the developer's own TikTok account using TikTok's
        Content Posting API. The App is operated by an individual developer for personal,
        non-commercial use.
      </p>

      <h2>Use of the App</h2>
      <p>
        The App is not offered as a public service. It authenticates only the developer's
        own TikTok account via TikTok's OAuth flow and uploads only videos that the
        developer has selected locally. The App does not access, modify, or post content on
        behalf of any other TikTok user.
      </p>

      <h2>No Warranty</h2>
      <p>
        The App is provided "as is" without warranty of any kind. The developer is not
        liable for any content posted, TikTok account actions, or service interruptions
        resulting from use of the App.
      </p>

      <h2>Changes</h2>
      <p>These terms may be updated from time to time. Continued use of the App constitutes acceptance of the current terms.</p>

      <h2>Contact</h2>
      <p>For questions about these terms, contact the site owner via the contact details on the homepage.</p>
    </div>
  );
}
