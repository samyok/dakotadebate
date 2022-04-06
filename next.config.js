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
        source: "/smile",
        destination: "https://smile.amazon.com/ch/87-3383622",
        permanent: false,
      },
      {
        source: "/donate",
        destination: "https://www.paypal.com/donate/?hosted_button_id=ZGXMTR233E6QN",
        permanent: false,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
