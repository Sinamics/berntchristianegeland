/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: { domains: ['tailwindui.com', 'images.unsplash.com', 'helpx.adobe.com'] },
  // next/image support `srcSet` using the below deviceSizes
  // for more info, visit https://nextjs.org/docs/basic-features/image-optimization#device-sizes
  deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  // https://nextjs.org/docs/basic-features/image-optimization#image-sizes
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  webpack: function (config, { isServer }) {
    config.experiments = { topLevelAwait: true };
    // Fixes npm packages that depend on `fs` module
    // if (!isServer) {
    //   config.resolve.fallback.fs = false;
    // }
    return config;
  }
};
