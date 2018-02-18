package main

import (
	"log"
	"fmt"
	"net/http"
	"gopkg.in/macaron.v1"
	"gopkg.in/mgo.v2"
)

func main() {
	m := macaron.Classic()
	session, error := mgo.Dial("localhost")

	if error != nil {
      panic(error)
  }
  defer session.Close()

  session.SetMode(mgo.Monotonic, true)
	
	renderer := macaron.Renderer()
	m.Use(renderer)

	m.Get("/*", func(ctx *macaron.Context) {
		ctx.HTML(200, "homepage", nil)
	})

	m.Use(macaron.Static("dist"))

	http.Handle("/", m)

	fmt.Println("listening on localhost:8000")

	err := http.ListenAndServe(":8000", nil)

	if err != nil {
		log.Fatal(err)
	}
}
