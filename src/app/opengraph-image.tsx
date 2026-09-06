import { ImageResponse } from "next/og";

export const alt = "Mohammed Alshaheri — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0b0d0f",
        color: "#f5f5ef",
        padding: "76px 84px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26 }}>
        <div style={{ display: "flex", width: 52, height: 52, borderRadius: 15, background: "#d9ff74", color: "#111417", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>MA</div>
        <span>Mohammed Alshaheri</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ fontSize: 76, lineHeight: 1.02, fontWeight: 700, letterSpacing: "-3px", maxWidth: 920 }}>Full-Stack Developer</div>
        <div style={{ fontSize: 30, color: "#b7bbb4" }}>React · Node.js · TypeScript · Germany</div>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#d9ff74" }}>Building practical software for real workflows.</div>
    </div>,
    size,
  );
}
