import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "Joisson Miguel portfolio cover";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "72px 96px",
        color: "#ecf3ff",
        backgroundColor: "#070b16",
        backgroundImage:
          "radial-gradient(circle at 14% 18%, rgba(62, 161, 255, 0.18), transparent 40%), radial-gradient(circle at 86% 2%, rgba(36, 134, 235, 0.22), transparent 42%), radial-gradient(circle, rgba(236, 243, 255, 0.08) 1px, transparent 0)",
        backgroundSize: "100% 100%, 100% 100%, 42px 42px",
        backgroundPosition: "0 0, 0 0, 0 0",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(62, 161, 255, 0.45)",
          borderRadius: "999px",
          padding: "12px 28px",
          fontSize: 20,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          fontWeight: 600,
          backgroundColor: "rgba(36, 134, 235, 0.18)",
        }}
      >
        Joisson Miguel
      </div>
      <div
        style={{
          marginTop: 32,
          fontSize: 64,
          fontWeight: 700,
          lineHeight: 1.05,
          maxWidth: 980,
        }}
      >
        Analista de Dados &amp; Engenheiro de Software
      </div>
      <div
        style={{
          marginTop: 28,
          fontSize: 22,
          color: "rgba(155, 176, 209, 0.92)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        joisson.me
      </div>
    </div>,
    {
      ...size,
    },
  );
}
