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

import { SEPAInstructionBeneficiary } from "./sepainstruction-beneficiary";
import { SEPAInstructionBeneficiaryBank } from "./sepainstruction-beneficiary-bank";

/**
 *
 * @export
 * @interface SEPAInstruction
 */
export interface SEPAInstruction {
  /**
   * Circle tracking reference that needs to be set in the SEPA transfer reference field.
   * @type {string}
   * @memberof SEPAInstruction
   */
  trackingRef?: string;
  /**
   *
   * @type {SEPAInstructionBeneficiary}
   * @memberof SEPAInstruction
   */
  beneficiary?: SEPAInstructionBeneficiary;
  /**
   *
   * @type {SEPAInstructionBeneficiaryBank}
   * @memberof SEPAInstruction
   */
  beneficiaryBank?: SEPAInstructionBeneficiaryBank;
}
