FROM golang:latest

WORKDIR /go/src/app

# ###### protobuf compiler #######
# ENV GO111MODULE=on
# RUN go get github.com/golang/protobuf/protoc-gen-go
# ENV GO111MODULE=

# ADD https://github.com/grpc/grpc-web/releases/download/1.2.0/protoc-gen-grpc-web-1.2.0-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web
# RUN chmod +x /usr/local/bin/protoc-gen-grpc-web

# RUN apt-get update && apt install -y protobuf-compiler

RUN go get google.golang.org/grpc github.com/gin-gonic/gin github.com/mitchellh/mapstructure github.com/grpc-ecosystem/go-grpc-middleware
RUN cd /go/src/app && \
    go build Server.go && \
    go build GrpcServer.go

EXPOSE 80 9000
