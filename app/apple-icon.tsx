import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #00d4d4 0%, #5c7cfa 50%, #a855f7 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 18,
            left: 28,
            width: 130,
            height: 130,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            color: "white",
            fontFamily: "system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 100,
            lineHeight: 1,
            letterSpacing: -3,
          }}
        >
          CT
        </div>
      </div>
    ),
    { ...size }
  );
}
