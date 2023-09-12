
- [API Endpoints](#api-endpoints)
- [Sample Usage](#sample-usage)
- [Local Deployment](#local-deployment)

## Endpoints

### Create a Person

- **Endpoint**: `POST /api`
- **Request Format**: JSON
  - **Request Body**:
    ```json
    {
      "name": "John Doe"
    }
    ```
- **Response Format**: JSON
  - **Response Body**:
    ```json
    {
      "person": {
        "id": 1,
        "name": "John Doe",
        "createdAt": "2023-09-12T00:00:00.000Z",
        "updatedAt": "2023-09-12T00:00:00.000Z"
      }
    }
    ```

### Fetch a Person

- **Endpoint**: `GET /api/:id`
- **Response Format**: JSON
  - **Response Body**:
    ```json
    {
      "person": {
        "id": 1,
        "name": "John Doe",
        "createdAt": "2023-09-12T00:00:00.000Z",
        "updatedAt": "2023-09-12T00:00:00.000Z"
      }
    }
    ```

### Update a Person

- **Endpoint**: `PUT /api/:id`
- **Request Format**: JSON
  - **Request Body**:
    ```json
    {
      "name": "New name"
    }
    ```
- **Response Format**: JSON
  - **Response Body**:
    ```json
    {
      "person": {
        "id": 1,
        "name": "Updated Name",
        "createdAt": "2023-09-12T00:00:00.000Z",
        "updatedAt": "2023-09-12T00:00:00.000Z"
      }
    }
    ```

### Delete a Person

- **Endpoint**: `DELETE /api/:id`
- **Response Format**: JSON
  - **Response Body**:
    ```json
    {
      "message": "Person deleted successfully"
    }
    ```

 # Sample Usage
Here are sample usage examples of the API endpoints using cURL:

Create a Person (POST):

- POST http://localhost:PORT/api -H "Content-Type: application/json" -d '{"name": "John Doe"}'
- https://hng-task-2-i324.onrender.com/api
  Set the request body to JSON format:
   ```json
   {
     "name": "bayo dayo"
   } then send


Get a Person by ID (GET):

- http://localhost:PORT/api/u_id
- or https://hng-task-2-i324.onrender.com/api/1  (replace 1 with the desired person's ID). 

Update a Person's Name (PUT):

- PUT http://localhost:PORT/api/u_id -H "Content-Type: application/json" -d '{"newName": "Jane Doe"}'
- https://hng-task-2-i324.onrender.com/api/1  (replace 1 with the desired person's ID).
Delete a Person by ID (DELETE):


- DELETE http://localhost:PORT/api/u_id
- https://hng-task-2-i324.onrender.com/api/1  (replace 1 with the desired person's ID).
Known Limitations and Assumptions
The API assumes that the "name" field is a string for all endpoints.
The API expects valid person IDs for retrieving, updating, and deleting.
This README provides comprehensive instructions for setting up and using the Person API. Enjoy working with the API.
