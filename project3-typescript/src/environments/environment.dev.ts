/**
 * This is the base URI
 */

const baseUri = `http://34.199.129.2`;
/**
 * Set the port to 8099
 */
const port = '8099';

/**
 * google map api key
 */
const googleKey = 'AIz*********hA';

  /**
   * These are the dev environment variables
   */
export const environment = {

  production: false,
  environmentName: 'Default Dev Environment',
  userUri: `${baseUri}:${port}/users/`,
  batchesUri: `${baseUri}:${port}/batches`,
  carUri: `${baseUri}:${port}/cars/`,
  adminUri: `${baseUri}:${port}/admins/`,
  googleMapAPIKey: `${googleKey}`
};
