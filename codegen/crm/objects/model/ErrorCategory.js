/**
 * CRM Objects
 * CRM objects such as companies, contacts, deals, line items, products, tickets, and quotes are native objects in HubSpot’s CRM. These core building blocks support custom properties, store critical information, and play a central role in the HubSpot application.  ## Supported Object Types  This API provides access to collections of CRM objects, which return a map of property names to values. Each object type has its own set of default properties, which can be found by exploring the [CRM Object Properties API](https://developers.hubspot.com/docs/methods/crm-properties/crm-properties-overview).  |Object Type |Properties returned by default | |--|--| | `companies` | `name`, `domain` | | `contacts` | `firstname`, `lastname`, `email` | | `deals` | `dealname`, `amount`, `closedate`, `pipeline`, `dealstage` | | `products` | `name`, `description`, `price` | | `tickets` | `content`, `hs_pipeline`, `hs_pipeline_stage`, `hs_ticket_category`, `hs_ticket_priority`, `subject` |  Find a list of all properties for an object type using the [CRM Object Properties](https://developers.hubspot.com/docs/methods/crm-properties/get-properties) API. e.g. `GET https://api.hubapi.com/properties/v2/companies/properties`. Change the properties returned in the response using the `properties` array in the request body.
 *
 * OpenAPI spec version: v3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CrmObjects) {
      root.CrmObjects = {};
    }
    root.CrmObjects.ErrorCategory = factory(root.CrmObjects.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ErrorCategory model module.
   * @module model/ErrorCategory
   * @version v3
   */

  /**
   * Constructs a new <code>ErrorCategory</code>.
   * @alias module:model/ErrorCategory
   * @class
   * @param httpStatus {module:model/ErrorCategory.HttpStatusEnum} 
   * @param name {String} 
   */
  var exports = function(httpStatus, name) {
    var _this = this;

    _this['httpStatus'] = httpStatus;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>ErrorCategory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorCategory} obj Optional instance to populate.
   * @return {module:model/ErrorCategory} The populated <code>ErrorCategory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('httpStatus')) {
        obj['httpStatus'] = ApiClient.convertToType(data['httpStatus'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ErrorCategory.HttpStatusEnum} httpStatus
   */
  exports.prototype['httpStatus'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Allowed values for the <code>httpStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HttpStatusEnum = {
    /**
     * value: "CONTINUE"
     * @const
     */
    "CONTINUE": "CONTINUE",
    /**
     * value: "SWITCHING_PROTOCOLS"
     * @const
     */
    "SWITCHING_PROTOCOLS": "SWITCHING_PROTOCOLS",
    /**
     * value: "PROCESSING"
     * @const
     */
    "PROCESSING": "PROCESSING",
    /**
     * value: "OK"
     * @const
     */
    "OK": "OK",
    /**
     * value: "CREATED"
     * @const
     */
    "CREATED": "CREATED",
    /**
     * value: "ACCEPTED"
     * @const
     */
    "ACCEPTED": "ACCEPTED",
    /**
     * value: "NON_AUTHORITATIVE_INFORMATION"
     * @const
     */
    "NON_AUTHORITATIVE_INFORMATION": "NON_AUTHORITATIVE_INFORMATION",
    /**
     * value: "NO_CONTENT"
     * @const
     */
    "NO_CONTENT": "NO_CONTENT",
    /**
     * value: "RESET_CONTENT"
     * @const
     */
    "RESET_CONTENT": "RESET_CONTENT",
    /**
     * value: "PARTIAL_CONTENT"
     * @const
     */
    "PARTIAL_CONTENT": "PARTIAL_CONTENT",
    /**
     * value: "MULTI_STATUS"
     * @const
     */
    "MULTI_STATUS": "MULTI_STATUS",
    /**
     * value: "ALREADY_REPORTED"
     * @const
     */
    "ALREADY_REPORTED": "ALREADY_REPORTED",
    /**
     * value: "IM_USED"
     * @const
     */
    "IM_USED": "IM_USED",
    /**
     * value: "MULTIPLE_CHOICES"
     * @const
     */
    "MULTIPLE_CHOICES": "MULTIPLE_CHOICES",
    /**
     * value: "MOVED_PERMANENTLY"
     * @const
     */
    "MOVED_PERMANENTLY": "MOVED_PERMANENTLY",
    /**
     * value: "FOUND"
     * @const
     */
    "FOUND": "FOUND",
    /**
     * value: "SEE_OTHER"
     * @const
     */
    "SEE_OTHER": "SEE_OTHER",
    /**
     * value: "NOT_MODIFIED"
     * @const
     */
    "NOT_MODIFIED": "NOT_MODIFIED",
    /**
     * value: "USE_PROXY"
     * @const
     */
    "USE_PROXY": "USE_PROXY",
    /**
     * value: "TEMPORARY_REDIRECT"
     * @const
     */
    "TEMPORARY_REDIRECT": "TEMPORARY_REDIRECT",
    /**
     * value: "PERMANENT_REDIRECT"
     * @const
     */
    "PERMANENT_REDIRECT": "PERMANENT_REDIRECT",
    /**
     * value: "BAD_REQUEST"
     * @const
     */
    "BAD_REQUEST": "BAD_REQUEST",
    /**
     * value: "UNAUTHORIZED"
     * @const
     */
    "UNAUTHORIZED": "UNAUTHORIZED",
    /**
     * value: "PAYMENT_REQUIRED"
     * @const
     */
    "PAYMENT_REQUIRED": "PAYMENT_REQUIRED",
    /**
     * value: "FORBIDDEN"
     * @const
     */
    "FORBIDDEN": "FORBIDDEN",
    /**
     * value: "NOT_FOUND"
     * @const
     */
    "NOT_FOUND": "NOT_FOUND",
    /**
     * value: "METHOD_NOT_ALLOWED"
     * @const
     */
    "METHOD_NOT_ALLOWED": "METHOD_NOT_ALLOWED",
    /**
     * value: "NOT_ACCEPTABLE"
     * @const
     */
    "NOT_ACCEPTABLE": "NOT_ACCEPTABLE",
    /**
     * value: "PROXY_AUTHENTICATION_REQUIRED"
     * @const
     */
    "PROXY_AUTHENTICATION_REQUIRED": "PROXY_AUTHENTICATION_REQUIRED",
    /**
     * value: "REQUEST_TIMEOUT"
     * @const
     */
    "REQUEST_TIMEOUT": "REQUEST_TIMEOUT",
    /**
     * value: "CONFLICT"
     * @const
     */
    "CONFLICT": "CONFLICT",
    /**
     * value: "GONE"
     * @const
     */
    "GONE": "GONE",
    /**
     * value: "LENGTH_REQUIRED"
     * @const
     */
    "LENGTH_REQUIRED": "LENGTH_REQUIRED",
    /**
     * value: "PRECONDITION_FAILED"
     * @const
     */
    "PRECONDITION_FAILED": "PRECONDITION_FAILED",
    /**
     * value: "REQUEST_ENTITY_TOO_LARGE"
     * @const
     */
    "REQUEST_ENTITY_TOO_LARGE": "REQUEST_ENTITY_TOO_LARGE",
    /**
     * value: "REQUEST_URI_TOO_LONG"
     * @const
     */
    "REQUEST_URI_TOO_LONG": "REQUEST_URI_TOO_LONG",
    /**
     * value: "UNSUPPORTED_MEDIA_TYPE"
     * @const
     */
    "UNSUPPORTED_MEDIA_TYPE": "UNSUPPORTED_MEDIA_TYPE",
    /**
     * value: "REQUESTED_RANGE_NOT_SATISFIABLE"
     * @const
     */
    "REQUESTED_RANGE_NOT_SATISFIABLE": "REQUESTED_RANGE_NOT_SATISFIABLE",
    /**
     * value: "EXPECTATION_FAILED"
     * @const
     */
    "EXPECTATION_FAILED": "EXPECTATION_FAILED",
    /**
     * value: "IM_A_TEAPOT"
     * @const
     */
    "IM_A_TEAPOT": "IM_A_TEAPOT",
    /**
     * value: "MISDIRECTED_REQUEST"
     * @const
     */
    "MISDIRECTED_REQUEST": "MISDIRECTED_REQUEST",
    /**
     * value: "UNPROCESSABLE_ENTITY"
     * @const
     */
    "UNPROCESSABLE_ENTITY": "UNPROCESSABLE_ENTITY",
    /**
     * value: "LOCKED"
     * @const
     */
    "LOCKED": "LOCKED",
    /**
     * value: "FAILED_DEPENDENCY"
     * @const
     */
    "FAILED_DEPENDENCY": "FAILED_DEPENDENCY",
    /**
     * value: "UPGRADE_REQUIRED"
     * @const
     */
    "UPGRADE_REQUIRED": "UPGRADE_REQUIRED",
    /**
     * value: "PRECONDITION_REQUIRED"
     * @const
     */
    "PRECONDITION_REQUIRED": "PRECONDITION_REQUIRED",
    /**
     * value: "TOO_MANY_REQUESTS"
     * @const
     */
    "TOO_MANY_REQUESTS": "TOO_MANY_REQUESTS",
    /**
     * value: "REQUEST_HEADERS_FIELDS_TOO_LARGE"
     * @const
     */
    "REQUEST_HEADERS_FIELDS_TOO_LARGE": "REQUEST_HEADERS_FIELDS_TOO_LARGE",
    /**
     * value: "INTERNAL_STALE_SERVICE_DISCOVERY"
     * @const
     */
    "INTERNAL_STALE_SERVICE_DISCOVERY": "INTERNAL_STALE_SERVICE_DISCOVERY",
    /**
     * value: "UNAVAILABLE_FOR_LEGAL_REASONS"
     * @const
     */
    "UNAVAILABLE_FOR_LEGAL_REASONS": "UNAVAILABLE_FOR_LEGAL_REASONS",
    /**
     * value: "INTERNAL_SERVER_ERROR"
     * @const
     */
    "INTERNAL_SERVER_ERROR": "INTERNAL_SERVER_ERROR",
    /**
     * value: "NOT_IMPLEMENTED"
     * @const
     */
    "NOT_IMPLEMENTED": "NOT_IMPLEMENTED",
    /**
     * value: "BAD_GATEWAY"
     * @const
     */
    "BAD_GATEWAY": "BAD_GATEWAY",
    /**
     * value: "SERVICE_UNAVAILABLE"
     * @const
     */
    "SERVICE_UNAVAILABLE": "SERVICE_UNAVAILABLE",
    /**
     * value: "GATEWAY_TIMEOUT"
     * @const
     */
    "GATEWAY_TIMEOUT": "GATEWAY_TIMEOUT",
    /**
     * value: "HTTP_VERSION_NOT_SUPPORTED"
     * @const
     */
    "HTTP_VERSION_NOT_SUPPORTED": "HTTP_VERSION_NOT_SUPPORTED",
    /**
     * value: "VARIANT_ALSO_NEGOTIATES"
     * @const
     */
    "VARIANT_ALSO_NEGOTIATES": "VARIANT_ALSO_NEGOTIATES",
    /**
     * value: "INSUFFICIENT_STORAGE"
     * @const
     */
    "INSUFFICIENT_STORAGE": "INSUFFICIENT_STORAGE",
    /**
     * value: "LOOP_DETECTED"
     * @const
     */
    "LOOP_DETECTED": "LOOP_DETECTED",
    /**
     * value: "NOT_EXTENDED"
     * @const
     */
    "NOT_EXTENDED": "NOT_EXTENDED",
    /**
     * value: "NETWORK_AUTHENTICATION_REQUIRED"
     * @const
     */
    "NETWORK_AUTHENTICATION_REQUIRED": "NETWORK_AUTHENTICATION_REQUIRED"  };


  return exports;
}));

