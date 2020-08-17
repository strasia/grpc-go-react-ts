/**
 * @fileoverview gRPC-Web generated client stub for covid19api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.covid19api = require('./covid19api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.covid19api.ApiServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.covid19api.ApiServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.covid19api.ApiRequest,
 *   !proto.covid19api.ApiCountries>}
 */
const methodDescriptor_ApiService_getCountries = new grpc.web.MethodDescriptor(
  '/covid19api.ApiService/getCountries',
  grpc.web.MethodType.UNARY,
  proto.covid19api.ApiRequest,
  proto.covid19api.ApiCountries,
  /**
   * @param {!proto.covid19api.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.covid19api.ApiCountries.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.covid19api.ApiRequest,
 *   !proto.covid19api.ApiCountries>}
 */
const methodInfo_ApiService_getCountries = new grpc.web.AbstractClientBase.MethodInfo(
  proto.covid19api.ApiCountries,
  /**
   * @param {!proto.covid19api.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.covid19api.ApiCountries.deserializeBinary
);


/**
 * @param {!proto.covid19api.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.covid19api.ApiCountries)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.covid19api.ApiCountries>|undefined}
 *     The XHR Node Readable Stream
 */
proto.covid19api.ApiServiceClient.prototype.getCountries =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/covid19api.ApiService/getCountries',
      request,
      metadata || {},
      methodDescriptor_ApiService_getCountries,
      callback);
};


/**
 * @param {!proto.covid19api.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.covid19api.ApiCountries>}
 *     A native promise that resolves to the response
 */
proto.covid19api.ApiServicePromiseClient.prototype.getCountries =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/covid19api.ApiService/getCountries',
      request,
      metadata || {},
      methodDescriptor_ApiService_getCountries);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.covid19api.ApiRequest,
 *   !proto.covid19api.ApiSummary>}
 */
const methodDescriptor_ApiService_getSummary = new grpc.web.MethodDescriptor(
  '/covid19api.ApiService/getSummary',
  grpc.web.MethodType.UNARY,
  proto.covid19api.ApiRequest,
  proto.covid19api.ApiSummary,
  /**
   * @param {!proto.covid19api.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.covid19api.ApiSummary.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.covid19api.ApiRequest,
 *   !proto.covid19api.ApiSummary>}
 */
const methodInfo_ApiService_getSummary = new grpc.web.AbstractClientBase.MethodInfo(
  proto.covid19api.ApiSummary,
  /**
   * @param {!proto.covid19api.ApiRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.covid19api.ApiSummary.deserializeBinary
);


/**
 * @param {!proto.covid19api.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.covid19api.ApiSummary)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.covid19api.ApiSummary>|undefined}
 *     The XHR Node Readable Stream
 */
proto.covid19api.ApiServiceClient.prototype.getSummary =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/covid19api.ApiService/getSummary',
      request,
      metadata || {},
      methodDescriptor_ApiService_getSummary,
      callback);
};


/**
 * @param {!proto.covid19api.ApiRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.covid19api.ApiSummary>}
 *     A native promise that resolves to the response
 */
proto.covid19api.ApiServicePromiseClient.prototype.getSummary =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/covid19api.ApiService/getSummary',
      request,
      metadata || {},
      methodDescriptor_ApiService_getSummary);
};


module.exports = proto.covid19api;

