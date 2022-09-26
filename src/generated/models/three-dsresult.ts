/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, and Accounts APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.0.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Enumerated status of the check. `pass` indicates successful 3DS authentication. `fail` indicates failed 3DS authentication.
 * @export
 * @enum {string}
 */

export const ThreeDSResult = {
  Pass: "pass",
  Fail: "fail"
} as const;

export type ThreeDSResult = typeof ThreeDSResult[keyof typeof ThreeDSResult];
