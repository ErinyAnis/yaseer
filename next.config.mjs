// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
      locales: ['en', 'ar'], // Add your desired locales here
      defaultLocale: 'en', // Set the default locale
    },
    eslint: {
        ignoreDuringBuilds: true
    }
    // Other configurations can go here if needed
};

export default nextConfig; // Use export default instead of module.exports
