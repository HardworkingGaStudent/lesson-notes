# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> REST API - Response

## At the end of this lesson, you should:
1. Understand about the anatomy of REST API - response
2. Understand about HTTP status codes

---

## REST API - Response

Response: Data that is returned from a request

## Anatomy of a request

1. Header
2. Data
3. Status code

### Header

The same definition as in request

### Data

The data that is requested. This can be in various formats

### Status codes

All response will have a status code attach to it. The conventions are:

| Status Code | Meaning |
|:--:|:--:|
| 200 | ok |
| 201 | resource created |
| 204 | ok, and no content |
| 400 | bad request, eg. form validation failed in backend |
| 401 | unauthorised, eg. not logged but try to access profile page |
| 403 | forbidden, eg. logged in, but no permission |
| 404 | not found |
| 500 | server error |

[Click here to view the full list of status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)