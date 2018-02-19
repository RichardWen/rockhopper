package main

import (
	"log"
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
	"github.com/gorilla/handlers"
	"user"
)

func SignupEndpoint(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "not implemented yet !")
}
func DeleteEndpoint(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "not implemented yet !")
}

func main() {
	/*session, error := mgo.Dial("localhost")

	if error != nil {
      panic(error)
  }
  defer session.Close()

  session.SetMode(mgo.Monotonic, true)
	*/

	r := user.NewRouter()

	allowedOrigins := handlers.AllowedOrigins([]string{"*"})
 	allowedMethods := handlers.AllowedMethods([]string{"GET", "POST", "DELETE", "PUT"})

	r.HandleFunc("/signup", SignupEndpoint).Methods("GET")
	r.HandleFunc("/signup", DeleteEndpoint).Methods("DELETE")

	fmt.Println("listening on localhost:8000")

	if err := http.ListenAndServe(":8000", r); err != nil {
		log.Fatal(err)
	}
}
