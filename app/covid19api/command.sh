cd $(dirname "$0")
protoc -I . covid19api.proto --go_out=plugins=grpc:.
protoc -I=. covid19api.proto --js_out=import_style=commonjs:.
protoc -I=. covid19api.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.