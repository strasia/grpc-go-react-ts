package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	NewServer().Run(":80")
}

func NewServer() *gin.Engine {
	router := gin.Default()
	router.Static("/", "./client/build")
	return router
}