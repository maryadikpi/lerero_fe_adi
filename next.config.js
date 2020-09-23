module.exports = {
    basePath: '',
    distDir: 'outdir2',
    async redirects() {
      return [
        {
          source: '/_next',
          destination: '/lerero_learning/_next',
          permanent: true,
        },
        {
          // does not add /docs since basePath: false is set
          source: '/dist',
          destination: '/lerero_learning/dist',
          permanent: true,
        },
        {
          source: '/admin',
          destination: '/lerero_learning/admin',
          permanent: true,
        },
        {
          source: '/img',
          destination: '/lerero_learning/img',
          permanent: true,
        },
        {
          source: '/plugins',
          destination: '/lerero_learning/plugins',
          permanent: true,
        },
      ]
    },
  }