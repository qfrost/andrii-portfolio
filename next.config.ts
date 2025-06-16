import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: "/andrii-portfolio",
  images: {
    loader: 'custom',
    loaderFile: './loader.ts',
  },
};

export default nextConfig;
