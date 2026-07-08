import { ImageResponse } from "next/og";
import { LogoMark } from "@/lib/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#130d08",
          fontFamily: "Georgia, serif",
        }}
      >
        <LogoMark size={140} fontSize={80} />
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          Six<span style={{ color: "#f7d774" }}>Club</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 28,
            color: "#d4af37",
          }}
        >
          6Club Game — Login, Register &amp; APK Download Guide
        </div>
      </div>
    ),
    { ...size }
  );
}
