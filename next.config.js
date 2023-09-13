/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/api/:path*'
            : '/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['links.papareact.com']
// },
// }

// module.exports = nextConfig
