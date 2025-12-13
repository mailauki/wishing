import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, '..'), // Sets the root to the parent directory
  }
};

export default nextConfig;
