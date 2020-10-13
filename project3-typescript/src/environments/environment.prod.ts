/**
 * This is the base URI
 */
const baseUri = `http://54.174.82.153`;


/**
 * Set the port var
 */
const port = '8080';


/**
 * google map api key
 */
const googleKey = 'AIz*********hA';

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
  googleMapAPIKey: `${googleKey}`
};
