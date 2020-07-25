import * as grpcWeb from 'grpc-web';

import {
  HelloRequest,
  HelloResponse} from './example_pb';

export class ExampleServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  hello(
    request: HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: HelloResponse) => void
  ): grpcWeb.ClientReadableStream<HelloResponse>;

}

export class ExampleServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  hello(
    request: HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<HelloResponse>;

}

