import environment from './base';

const baseApi = 'http://localhost:8080';
const env = environment(baseApi);

const developmentEnv = {
  ...env,
  isProduction: false,
  isDevelopment: true,
  isTesting: true,
};

export default developmentEnv;