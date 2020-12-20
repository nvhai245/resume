package main

import (
	"fmt"
	"gopkg.in/gomail.v2"
	"net/http"
	"os"
)

func mailToMyself(w http.ResponseWriter, req *http.Request) {
	query := req.URL.Query()
	email := query.Get("email")
	message := query.Get("message")
	fmt.Println("email: ", email)
	fmt.Println("message: ", message)

	// Send Email
	// Sender data.
	user := os.Getenv("MY_EMAIL")
	password := os.Getenv("MY_EMAIL_PASSWORD")

	m := gomail.NewMessage()
	m.SetHeader("From", user)
	m.SetHeader("To", "nvhai245@gmail.com")
	m.SetHeader("Subject", "A new resume visitor")
	m.SetBody("text/html", fmt.Sprintf("<b>Visitor <i>%s<i> has sent: </b><div>%s</div>", email, message))

	d := gomail.NewDialer("smtp.gmail.com", 587, user, password)

	// Send the email to myself
	if err := d.DialAndSend(m); err != nil {
		fmt.Println(err)
		w.WriteHeader(500)
		w.Write([]byte("sent message failed!"))
		return
	}

	fmt.Println("Email Sent!")
	w.WriteHeader(200)
	w.Write([]byte("sent message successful!"))
}

func main() {
	http.HandleFunc("/mail", mailToMyself)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err)
	}
}
