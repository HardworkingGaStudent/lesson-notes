# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> REST API - Request

## At the end of this lesson, you should:
1. Understand about the anatomy of REST API - request

---

## REST API - Request

A URL is called a **request**

## Anatomy of a request

1. Endpoint / Route
2. Header
3. Verb / Methods
4. Body / data

### Endpoint / Route
Basically, this is referring to the URL

The basic structure is:
> root/path?query parameters

- root: this refers to the starting point of the endpoint
- path: refers to the resource you are requesting for

Eg:
The URL of this course material in github is: `git.generalassemb.ly/SG-SEIF-9/Course-Materials`

- Root: `git.generalassemb.ly`
- Path: `SG-SEIF-9/Course-Materials`

To fully understand what paths are available, you would need to go through the documentation provided by the REST API provider

#### Query Parameters (or query params for short)
Technically, query parameters are not part of the REST architecture, but you’ll see lots of APIs use them.

They always begin with `?` and data is separated by `&`.

Eg:
> ?query1=value1&query2=value2

Query params are sent over to the server as part of the URL and as such can hold certain data

### Header

Headers are used to provide information to both the client and server. It can be used for many purposes, such as authentication and providing information about the body content. You can find a list of valid headers on [MDN's HTTP Headers Reference](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

Headers are `property-value` pairs. A common example is:
```
Content-Type: application/json
```

### Verb / Methods

There are a list of HTTP verbs / methods. But the following are the 5 most commonly used ones

| Verb | Action |
|:---:|:---:|
| GET (default) | Fetches a record or set of resources from the server |
| POST | Creates a new set of resources or a resource |
| PUT |	Updates or replaces the given record |
| PATCH |	Modifies the given record |
| DELETE | Deletes the given resource |

[Click here to see the list of verbs / methods available](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

### Body / data

This is the section of the request that holds information you want to send to the server. This option is only used with `POST`, `PUT`, `PATCH` or `DELETE` requests.

## Conventions

URL: `root/version/resource-in-plural`

Eg:
| Verb / Method | Endpoint | Meaning |
|:--:|:--:|:--:|
| GET | my-api.com/v1/users | Server to return list of users |
| GET | my-api.com/v1/users/1 | Server to return user with ID 1 |
| POST | my-api.com/v1/users | Server to create a new user |
| PUT / Path | my-api.com/v1/users/1 | Update data of user with ID 1 |
| DELETE | my-api.com/v1/users/1 | Server to delete user with ID 1 |

Note that these are all conventions. This means we can interchange and things will still work as long you intend it to be. However, the above are the standards