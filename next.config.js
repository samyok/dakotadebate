module.exports = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 30, // cache for a month
  },
  async redirects() {
    return [
      {
        source: "/apply",
        destination: "https://forms.gle/pr8dBF4z6F2RtNc29",
        permanent: false,
      },
      {
        source: "/scholarships",
        destination: "https://forms.gle/RK7WppSmTnAR6qxz8",
        permanent: false,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
