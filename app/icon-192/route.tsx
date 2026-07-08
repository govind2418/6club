import { ImageResponse } from "next/og";
import { LogoMark } from "@/lib/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(<LogoMark size={192} fontSize={108} />, {
    width: 192,
    height: 192,
  });
}
