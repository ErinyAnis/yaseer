// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    output: 'export',  // Enable static export
    images: {
        unoptimized: true  // Disable Next.js image optimization for static hosting
    },
    basePath: '/your-repository-name',  // Replace with your GitHub repository name
};

export default nextConfig;
