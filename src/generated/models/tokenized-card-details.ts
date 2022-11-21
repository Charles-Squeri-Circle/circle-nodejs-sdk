/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface TokenizedCardDetails
 */
export interface TokenizedCardDetails {
  /**
   * The card\'s expiration month.
   * @type {number}
   * @memberof TokenizedCardDetails
   */
  expMonth: number;
  /**
   * Four digit number representing the card\'s expiration year.
   * @type {number}
   * @memberof TokenizedCardDetails
   */
  expYear: number;
  /**
   * The network of the card.
   * @type {string}
   * @memberof TokenizedCardDetails
   */
  network?: TokenizedCardDetailsNetworkEnum;
  /**
   * The last 4 digits of the card.
   * @type {string}
   * @memberof TokenizedCardDetails
   */
  last4: string;
  /**
   * The bank identification number (BIN), the first 6 digits of the card.
   * @type {string}
   * @memberof TokenizedCardDetails
   */
  bin: string;
  /**
   * The funding type of the card.
   * @type {string}
   * @memberof TokenizedCardDetails
   */
  fundingType?: TokenizedCardDetailsFundingTypeEnum;
  /**
   * The country code of the issuer bank. Follows the ISO 3166-1 alpha-2 standard.
   * @type {string}
   * @memberof TokenizedCardDetails
   */
  issuerCountry?: string;
}

export const TokenizedCardDetailsNetworkEnum = {
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Unknown: "UNKNOWN"
} as const;

export type TokenizedCardDetailsNetworkEnum =
  typeof TokenizedCardDetailsNetworkEnum[keyof typeof TokenizedCardDetailsNetworkEnum];
export const TokenizedCardDetailsFundingTypeEnum = {
  Credit: "credit",
  Debit: "debit",
  Prepaid: "prepaid",
  Unknown: "unknown"
} as const;

export type TokenizedCardDetailsFundingTypeEnum =
  typeof TokenizedCardDetailsFundingTypeEnum[keyof typeof TokenizedCardDetailsFundingTypeEnum];