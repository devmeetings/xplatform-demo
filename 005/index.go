package main

import "os"
import "fmt"
import "time"

func main() {
  var port = os.Getenv("PORT")
  fmt.Println("Hello, 世界")
  time.Sleep(100 * time.Millisecond)
  fmt.Println(port)
}
