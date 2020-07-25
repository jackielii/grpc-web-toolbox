[modeline]: # ( vim: set ts=4 sw=4 et: )
# simple example

## original grpc-web gen

### step by step guide

1. install protoc https://github.com/protocolbuffers/protobuf/releases/latest
    ```shell
    cd tools
    curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.12.3/protoc-3.12.3-linux-x86_64.zip
    unzip protoc-3.12.3-linux-x86_64.zip
    ```
2. install grpc-web-gen
    ```
    cd tools/bin
    curl -L https://github.com/grpc/grpc-web/releases/download/1.2.0/protoc-gen-grpc-web-1.2.0-linux-x86_64 -o protoc-gen-grpc-web
    chmod +x protoc-grpc-web-gen
    ```
3. generate
    ```
    export PATH=`pwd`/tools/bin:$PATH
    protoc --js_out=import_style=commonjs+dts:. --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:. example.proto
    ```


