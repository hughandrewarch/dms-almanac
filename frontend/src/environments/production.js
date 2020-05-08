import environment from './base';

/*
 * base.ts is the default environment for production.
 * You shouldn't have override anything.
 */

const baseApi = 'https://localhost:9090';
const env = environment(baseApi);

const productionEnv = {
  ...env,
  // override anything that gets added from base.
  isProduction: true,
  isDevelopment: false,
  isTesting: false,
};

export default productionEnv;