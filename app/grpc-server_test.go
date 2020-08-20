package main

import (
	"testing"
	"strings"

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
	var res interface{}
	r := strings.NewReader(`{"a": "b"}`)
	DecodeJson(r, &res)

	m := res.(map[string]interface{})
	if a := m["a"]; a != "b" {
		t.Fatalf("Expected b, got %s", a)
	}
}


// func TestFetchAndDecodeJson(t *testing.T) {
// 	var res interface{}
// 	FetchAndDecodeJson("GET", "countries", &ApiRequest{}, &res)
// }