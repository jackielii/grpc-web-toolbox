SHELL := /bin/bash -o pipefail
GIT_HASH := $(shell git rev-parse --short HEAD)
VERSION ?= $(if $(CI_COMMIT_TAG),$(CI_COMMIT_TAG),dev)

.PHONY: build
build:
	@go build -ldflags="-X main.Version=$(VERSION)-git-$(GIT_HASH)"

.PHONY: test
test: build
	protoc -I./test/proto --plugin=protoc-gen-grpc-web-wrap=`pwd`/protoc-gen-grpc-web-wrap --grpc-web-wrap_out=. test/proto/exampleservice.proto
