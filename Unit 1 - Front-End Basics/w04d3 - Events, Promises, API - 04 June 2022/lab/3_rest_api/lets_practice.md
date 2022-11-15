# <span><img src="../../../../ga_cog.png" width="30" height="30" style="vertical-align: middle;"></span> Let's Practice

## At the end of this lesson, you should:
1. Understand about cURL
2. Understand how to use cURL
3. Try out some REST API endpoints

---

## What is cURL

`cURL` is a CLI tool that allows us to make API requests.

The reason for introducing about `cURL` is because almost all API documentation will have a sample code for cURL. If you know how to use cURL, you’ll have no problems understanding API documentations.

## System check

Check if you have `cURL` installed. Run the following in your terminal
  ```
  curl --version
  ```

Please let the IA / Instructor know if you see an error.

## Anatomy of cURL

```
curl -X <verb> <url> -d <data>
```

eg:
```
curl -X POST example.com -d property1=value1 -d property2=value2
```

Or
```
curl -X POST example.com \
  -d property1=value1 \
  -d property2=value2
```

By default, cURL sends data as if they are sent through the form fields on a page. If we want it to use JSON, we can do the following:

```
curl -X POST example.com \
  -H "Content-Type: application/json" \
  -d '{
    "property1":"value1",
    "property2":"value2"
  }'
```

## Poke API
Let's have a look at PokeAPI (An API for pokemon) at https://pokeapi.co/ using curl.

*Note: you'll need https://jsoneditoronline.org/ to view the JSON response


Run the following in your terminal

```
curl https://pokeapi.co/api/v2/ability/battle-armor
```

Copy out the response and paste it at [jsoneditoronline](https://jsoneditoronline.org/). What do you see?

Questions:
1. Do you know how they store the data?
2. Do you know how they get the data?
3. Do we need to know the above to be able to work with the data?