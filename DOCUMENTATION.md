
- [API Endpoints](#api-endpoints)
- [Sample Usage](#sample-usage)
- [Local Deployment](#local-deployment)

  API Endpoints
The API provides the following endpoints for managing person records:

-Create a Person: POST /api
--Request Format:
json

{
  "name": "John Doe"
}
--Response Format:
json
{
  "statusCode": 201,
  "status": "success",
  "message": "Person created successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "createdAt": "2023-09-10T12:00:00.000Z",
    "updatedAt": "2023-09-10T12:00:00.000Z"
  }
}
-Get a Person by ID: GET /api/:id

--Response Format (Success):
json
{
  "statusCode": 200,
  "status": "success",
  "message": "Person retrieved successfully",
  "data": {
    "id": 1,
    "name": "John Doe",
    "createdAt": "2023-09-10T12:00:00.000Z",
    "updatedAt": "2023-09-10T12:00:00.000Z"
  }
}
--Response Format (Not Found):
json
{
  "statusCode": 404,
  "status": "error",
  "message": "Person not found"
}
-Update a Person's Name by ID: PUT /api/:id
--Request Format:
json

{
  "newName": "Jane Doe"
}
--Response Format (Success):
json
{
  "statusCode": 200,
  "status": "success",
  "message": "Person updated successfully",
  "data": {
    "id": 1,
    "name": "Jane Doe",
    "createdAt": "2023-09-10T12:00:00.000Z",
    "updatedAt": "2023-09-10T13:00:00.000Z"
  }
}
--Response Format (Not Found):
json
{
  "statusCode": 404,
  "status": "error",
  "message": "Person not found"
}
- Delete a Person by ID: DELETE /api/:id

--Response Format (Success):
json
{
  "statusCode": 200,
  "status": "success",
  "message": "Person deleted successfully"
}

--Response Format (Not Found):
json
{
  "statusCode": 404,
  "status": "error",
  "message": "Person not found"
}

 # Sample Usage
Here are sample usage examples of the API endpoints using cURL:

Create a Person (POST):

- POST http://localhost:PORT/api -H "Content-Type: application/json" -d '{"name": "John Doe"}'
Get a Person by ID (GET):

- curl http://localhost:PORT/api/u_id
Update a Person's Name (PUT):

- PUT http://localhost:PORT/api/u_id -H "Content-Type: application/json" -d '{"newName": "Jane Doe"}'
Delete a Person by ID (DELETE):


- DELETE http://localhost:PORT/api/u_id
Known Limitations and Assumptions
The API assumes that the "name" field is a string for all endpoints.
The API expects valid person IDs for retrieving, updating, and deleting.
This README provides comprehensive instructions for setting up and using the Person API. Enjoy working with the API.
