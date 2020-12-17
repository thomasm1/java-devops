/**
 * This file can be replaced during build by using the `fileReplacements` array.
 * The list of file replacements can be found in `angular.json`.
 * `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
 */

const baseUri = `http://34.199.129.2`;
/**
 * Set the port to 8099
 */
const port = '8099';

/**
 * google map api key
 */
const googleKey = 'AIzaSyCG************************j_qZPjthA';
 /**
   * This is the environment config.
   */

export const environment = {

  production: false,
  environmentName: 'Default Environment',
  userUri: `${baseUri}:${port}/users/`,
  loginUri: `${baseUri}:${port}/login`,
  batchesUri: `${baseUri}:${port}/batches/`,
  carUri: `${baseUri}:${port}/cars/`,
  adminUri: `${baseUri}:${port}/admins/`,
  // googleMapKey: `${googleKey}`,
  googleMapAPIKey: `${googleKey}`,
  fullUrl: `${baseUri}:${port}`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
