FROM node:latest

WORKDIR /go/src

ARG GRPC_SERVER=http://localhost:8080
ADD ./app /go/src
RUN cd ./client && npm install && REACT_APP_GRPC_SERVER=$GRPC_SERVER npm run build



FROM golang:latest

WORKDIR /go/src

ENV GO111MODULE=on

COPY --from=0 /go/src .
RUN go mod download
# RUN go mod download && \
#     cd /go/src/server && go test && go build && \
#     cd ../grpc_server && go test && go build

# ###### protobuf compiler #######
# RUN go get github.com/golang/protobuf/protoc-gen-go
# ADD https://github.com/grpc/grpc-web/releases/download/1.2.0/protoc-gen-grpc-web-1.2.0-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web
# RUN chmod +x /usr/local/bin/protoc-gen-grpc-web

# RUN apt-get update && apt install -y protobuf-compiler

EXPOSE 80 9000
