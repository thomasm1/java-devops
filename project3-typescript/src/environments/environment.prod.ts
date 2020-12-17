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
const googleKey = 'AIzaSyC*********************Uj_qZPjthA';

  /**
 * These are the constants for the production config
 */

export const environment = {

  production: true,
  environmentName: 'Production Environment',
  userUri: `${baseUri}:${port}/users/`,
  loginUri: `${baseUri}:${port}/login`,
  batchesUri: `${baseUri}:${port}/batches/`,
  carUri: `${baseUri}:${port}/cars/`,
  adminUri: `${baseUri}:${port}/admins/`,
  googleMapAPIKey: `${googleKey}`,
  fullUrl: `${baseUri}:${port}`
};
