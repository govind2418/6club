import { ImageResponse } from "next/og";
import { LogoMark } from "@/lib/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(<LogoMark size={512} fontSize={288} />, {
    width: 512,
    height: 512,
  });
}
