export function LogoMark({ size, fontSize }: { size: number; fontSize: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#1d1610",
        borderRadius: size * 0.22,
        border: `${Math.max(2, Math.round(size * 0.02))}px solid #d4af37`,
      }}
    >
      <div
        style={{
          fontSize,
          fontWeight: 700,
          color: "#f7d774",
          fontFamily: "Georgia, serif",
        }}
      >
        6
      </div>
    </div>
  );
}
