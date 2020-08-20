package main

import (
	"fmt"
	"io"
	"net"
	"net/http"
	"context"
	"encoding/json"

	. "app/covid19api"
	
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"google.golang.org/grpc/status"
	"google.golang.org/grpc/codes"
	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_recovery "github.com/grpc-ecosystem/go-grpc-middleware/recovery"

	"github.com/mitchellh/mapstructure"
)

func main() {

	opts := []grpc_recovery.Option{
		grpc_recovery.WithRecoveryHandler(Recovery),
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


func Recovery(p interface{}) error {
	fmt.Printf("p: %+v\n", p)
	return grpc.Errorf(codes.Internal, "Unexpected error")
}


type Server struct{}

func (s *Server) GetCountries(ctx context.Context, req *ApiRequest) (*ApiCountries, error) {
	var data []*ApiCountries_Item
	err := FetchAndDecodeJson("GET", "countries", req, &data)

	return &ApiCountries{ Item: data }, err
}

func (s *Server) GetSummary(ctx context.Context, req *ApiRequest) (*ApiSummary, error) {
	var (
		data interface{}
		res ApiSummary
	)

	err := FetchAndDecodeJson("GET", "summary", req, &data)
	mapstructure.Decode(data, &res)

	return &res, err
}


func FetchApi(method string, query string, req *ApiRequest) *http.Response{
	var (
		endpoint string = "https://api.covid19api.com/"
		resp *http.Response
		err error
	)

	if query != "" {
		endpoint = endpoint + query
	}
	
	switch method {
		case "GET":
			resp, err = http.Get(endpoint)
		case "POST":
			//resp, err := http.PostForm(endpoint, url.Values{"key":{"value"}})
			panic("Bad Method")
		default:
			panic("Bad Method")
	}

	if err != nil {
		panic(err)
	}

	return resp
}


func DecodeJson(rawJson io.Reader, res interface{}) {
	err := json.NewDecoder(rawJson).Decode(res)
	if err != nil {
		panic(err)
	}
}


func FetchAndDecodeJson(method string, query string, req *ApiRequest, res interface{}) error{
	
	resp := FetchApi(method, query, req)
	defer resp.Body.Close()

	if resp.StatusCode == 200 {
		DecodeJson(resp.Body, &res)
	} else {
		return status.Error(codes.InvalidArgument, "Bad Request")
	}

	return nil
}


