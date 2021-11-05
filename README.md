# nutcache-front-end-test

# API (Backend)
## Technologies
* Node
* Express
## How to use
| Action      | HTTP        | Payload     | URL               | Description                                    |
| ----------- | ----------- | ----------- | ---------------   | ---------------------------------------------- |
| Create      | POST        | json        | /nutemployee      | Create a nutemployee entity with this payload  |
| Read        | GET         | -           | /nutemployee      | Get all nutemployee entities from the resource |
| Read        | GET         | -           | /nutemployee/:id  | Get a single nutemployee entity                |
| Update      | PUT         | json        | /nutemployee/:id  | Update a nutemployee entity with this payload  | 
| Delete      | DELETE      | -           | /nutemployee/:id  | Delete a nutemployee entity                    |

Payload must be incluide as body json raw and formatte like below:

```json
{
    "name":"Nutcache Employee",
    "gender": "male",
    "email": "nutcache@nutcache.com",
}
```

# Frontend
## Technologies
* React
* Axios
