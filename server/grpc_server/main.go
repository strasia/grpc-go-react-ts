package main

import (
	"fmt"
	"net"

	. "app/covid19api"
	
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"google.golang.org/grpc/codes"
	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_recovery "github.com/grpc-ecosystem/go-grpc-middleware/recovery"
)

func main() {

	opts := []grpc_recovery.Option{
		grpc_recovery.WithRecoveryHandler(
			func (p interface{}) error {
				fmt.Printf("p: %+v\n", p)
				return grpc.Errorf(codes.Internal, "Unexpected error")
			},
		),
	}
	
	server := grpc.NewServer(
		grpc_middleware.WithUnaryServerChain(
			grpc_recovery.UnaryServerInterceptor(opts...),
		),
	)
	RegisterApiServiceServer(server, &Server{})
	reflection.Register(server)

	lis, err := net.Listen("tcp", ":9000")
	if err != nil {
		panic(err)
	}

	if err :=server.Serve(lis); err != nil {
		panic(err)
	}
}