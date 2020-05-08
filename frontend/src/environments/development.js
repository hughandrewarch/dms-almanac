import environment from './base';

const baseApi = 'https://localhost:8080';
const env = environment(baseApi);

const developmentEnv = {
  ...env,
  api: {
    ...env.api,
  },
  isProduction: false,
  isDevelopment: true,
  isTesting: true,
};

export default developmentEnv;