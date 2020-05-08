export default function baseEnv(baseApi) {
  return {
    baseApi: baseApi,
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}
