module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'froes.cloud',
        port: '',
        pathname: '/*',
      },
    ],
  },
  // nextConfig,
  // rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: '/:path*',
  //     },
  //     {
  //       source: '/:path*',
  //       destination: 'http://localhost:8080/:path*'
  //     },
  //   ]
  // }
}
