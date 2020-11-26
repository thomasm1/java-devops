/**
 * This is the base URI
 */
const baseUri = `http://52.70.39.146`;

const port = '8080';

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
