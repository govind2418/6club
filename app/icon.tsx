import { ImageResponse } from "next/og";
import { LogoMark } from "@/lib/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<LogoMark size={32} fontSize={18} />, { ...size });
}
