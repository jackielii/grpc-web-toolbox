# grpc-web-toolbox

## why?

https://github.com/protocolbuffers/protobuf/issues/1591
https://github.com/grpc/grpc-web/issues/393

## though process

1. start from `js_out=import_style=commonjs` && `grpc-web_out=import_style=commonjs,mode=grpcwebtext`
2. https://github.com/protocolbuffers/protobuf-go
3. try to be as simple as possible: type + set
4. reuse protobuf js toObject bits

## components

### ts-proto

generate protobuf messages in typescript

### grpc-web-wrap

generate grpc-web calls

## tested at version

grpc-web@1.2.0
