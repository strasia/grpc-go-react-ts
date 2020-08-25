package main

import (
	"testing"
	"fmt"
	"strings"
	"context"

	. "app/covid19api"
)


func TestFetchApi(t *testing.T) {
	resp := FetchApi("GET", "", &ApiRequest{})
	defer resp.Body.Close()
	if resp.StatusCode != 200 {
		t.Fatalf("Expected status code 200, got %v", resp.StatusCode)
	}

	val, ok := resp.Header["Content-Type"]
	if !ok {
		t.Fatalf("Expected Content-Type header to be set")
	}
	if strings.ToLower(val[0]) != "application/json; charset=utf-8" {
		t.Fatalf(`Expected "application/json; charset=utf-8", got %s`, val[0])
	}
}

func TestDecodeJson(t *testing.T) {
	var res map[string]interface{}
	r := strings.NewReader(`{"a": "b"}`)
	DecodeJson(r, &res)
	
	if a := res["a"]; a != "b" {
		t.Fatalf(`Expected "b", got %s`, a)
	}
}


func TestFetchAndDecodeJson(t *testing.T) {
	var res []map[string]string
	FetchAndDecodeJson("GET", "countries", &ApiRequest{}, &res)

	if fmt.Sprintf("%T", res[0]) != "map[string]string" {
		t.Fatalf("Expected map[string]string, got %T", res[0])
	}
}

func TestServerGetCountries(t *testing.T) {
	var (
		s *Server = &Server{}
		ctx context.Context
	)

	resp, _ := s.GetCountries(ctx, &ApiRequest{})
	if fmt.Sprintf("%T", resp) != "*covid19api.ApiCountries" {
		t.Fatalf("Expected *covid19api.ApiCountries, got %T", resp)
	}
}

func TestServerGetSummary(t *testing.T) {
	var (
		s *Server = &Server{}
		ctx context.Context
	)

	resp, _ := s.GetSummary(ctx, &ApiRequest{})
	if fmt.Sprintf("%T", resp) != "*covid19api.ApiSummary" {
		t.Fatalf("Expected *covid19api.ApiSummary, got %T", resp)
	}
}

