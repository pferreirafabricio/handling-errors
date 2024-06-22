package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type PlaceholderResponse struct {
	UserID    int    `json:"userId"`
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

func CastResponse(data map[string]interface{}) PlaceholderResponse {
	return PlaceholderResponse{
		UserID:    int(data["userId"].(float64)),
		ID:        int(data["id"].(float64)),
		Title:     data["title"].(string),
		Completed: data["completed"].(bool),
	}
}

func GetData(url string) (PlaceholderResponse, error) {
	resp, err := http.Get(url)

	if err != nil {
		return PlaceholderResponse{}, err
	}

	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)

	if err != nil {
		return PlaceholderResponse{}, err
	}

	var data map[string]interface{}

	err = json.Unmarshal(body, &data)

	if err != nil {
		return PlaceholderResponse{}, err
	}

	return CastResponse(data), nil
}

func main() {
	url := "https://jsonplaceholder.typicode.com/todos/1"
	response, err := GetData(url)

	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Printf("Response: %+v\n", response)
}
