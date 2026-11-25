import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local SVG placeholders (public/images/*.svg) to be used with next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
