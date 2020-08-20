package main

import (
	"testing"
	"fmt"
	"net/http"
	"net/http/httptest"
)

func TestServer(t *testing.T) {
	ts := httptest.NewServer(NewServer())
	defer ts.Close()

	resp, err := http.Get(fmt.Sprintf("%s/", ts.URL))
	if err != nil {
		t.Fatalf("Expected no error, got %v", err)
	}
	if resp.StatusCode != 200 {
		t.Fatalf("Expected status code 200, got %v", resp.StatusCode)
	}

	val, ok := resp.Header["Content-Type"]
	if !ok {
		t.Fatalf("Expected Content-Type header to be set")
	}
	if val[0] != "text/html; charset=utf-8" {
		t.Fatalf("Expected \"text/html; charset=utf-8\", got %s", val[0])
	}
}