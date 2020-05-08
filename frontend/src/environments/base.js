export default function baseEnv(baseApi) {
  return {
    route: {
      baseRoute: '/react-redux-architecture', // Fixes issue with Github Pages
    },
    api: {
      settlements: `${baseApi}/settlements`,
    },
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}
