/**
 * @fileoverview gRPC-Web generated client stub for example
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.example = require('./example_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.example.ExampleServiceClient =
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
proto.example.ExampleServicePromiseClient =
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
 *   !proto.example.HelloRequest,
 *   !proto.example.HelloResponse>}
 */
const methodDescriptor_ExampleService_Hello = new grpc.web.MethodDescriptor(
  '/example.ExampleService/Hello',
  grpc.web.MethodType.UNARY,
  proto.example.HelloRequest,
  proto.example.HelloResponse,
  /**
   * @param {!proto.example.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.example.HelloResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.example.HelloRequest,
 *   !proto.example.HelloResponse>}
 */
const methodInfo_ExampleService_Hello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.example.HelloResponse,
  /**
   * @param {!proto.example.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.example.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.example.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.example.HelloResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.example.HelloResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.example.ExampleServiceClient.prototype.hello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/example.ExampleService/Hello',
      request,
      metadata || {},
      methodDescriptor_ExampleService_Hello,
      callback);
};


/**
 * @param {!proto.example.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.example.HelloResponse>}
 *     A native promise that resolves to the response
 */
proto.example.ExampleServicePromiseClient.prototype.hello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/example.ExampleService/Hello',
      request,
      metadata || {},
      methodDescriptor_ExampleService_Hello);
};


module.exports = proto.example;

