# Food Recipes
### Below are the URLs and the operations associated with them.
---
| Method | URL | Description | 
| ------ | ------ | ------ | ------ | 
| GET | ````/recipes```` | Get list of recipes | 
| GET | ````/youtube/:q```` | Get youtubes's videos list | 
| POST | ````/youtube```` | Create a request to search videos | 
| GET | ````/maps```` | Displaying supermarkets near-by | 
| GET | ````/facts```` | Listing noutrishment facts of food products | 

* **URL:**  
/recipes
* **Method:**
`GET`
 * **Success Response:**
    * **Code:** 200
    * **Content:** 
    `{
        username: string,
        email: string,
        role: string
    }`
 * **Error Response:**
    * **Code:** 400
    * **Content:** `{
        message: err.message
    }`
 ***

 * **URL:**  
/youtube/:q
* **Method:**
`GET`
 * **Success Response:**
    * **Code:** 200
    * **Content:** 
    `{
      items: [
          {id: {videoId: string}, ...},
          {...},
          ...
      ]
    }`
 * **Error Response:**
    * **Code:** 400
    * **Content:** `{
      message: err.message
    }`
 ***

 * **URL:**  
/youtube
* **Method:**
`POST`
 * **Success Response:**
    * **Code:** 200
    * **Content:** 
    `{
        link: string
    }`
 * **Error Response:**
    * **Code:** 400
    * **Content:** `{
        message: err.message
    }`
 ***
 * **URL:**  
/maps
* **Method:**
`GET`
 * **Success Response:**
    * **Code:** 200
    * **Content:** 
    `{
        results: [
            {
                geometry: {location: object},
                name: string,
                ...
            }, {
                ...
            },
            ...
        ]
    }`
 * **Error Response:**
    * **Code:** 400
    * **Content:** `{
        message: err.message
    }`
 ***
 * **URL:**  
/facts
* **Method:**
`POST`
 * **Success Response:**
    * **Code:** 200
    * **Content:** 
    `{
        product: object
    }`
 * **Error Response:**
    * **Code:** 400
    * **Content:** `{
        message: err.message
    }`
 ***