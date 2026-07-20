import { useRouter } from "next/router";

export default function TikTokCallback() {
  const router = useRouter();
  const { code, state, error, error_description } = router.query;

  return (
    <div style={{ fontFamily: "monospace", padding: "2rem", maxWidth: 600, margin: "0 auto" }}>
      <h1>TikTok OAuth Callback</h1>
      {error ? (
        <>
          <p style={{ color: "red" }}>Error: {error}</p>
          <p>{error_description}</p>
        </>
      ) : code ? (
        <>
          <p>Copy this authorization code to complete the token exchange:</p>
          <pre style={{ background: "#f0f0f0", padding: "1rem", wordBreak: "break-all" }}>
            {code}
          </pre>
          {state && (
            <p>
              state: <code>{state}</code>
            </p>
          )}
        </>
      ) : (
        <p>Waiting for redirect params...</p>
      )}
    </div>
  );
}
