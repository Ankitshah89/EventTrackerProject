## Event Tracker Project


#### Week 12 Homework for Skill Distillery

### Overview

This project works around Spring Rest C.R.U.D. API. My event tracker is an api to request Covid cases all around the United States. With a request to the  api, it will return a list of Covid cases and details in various states in the country.

#### Table of REST Endpoints
| Return Type (JSON)| Route                     | Functionality                      |
|-------------------|---------------------------|------------------------------------|
| `List<Cases>`     |`GET api/cases`            | Gets all Covid Cases               |
| `Cases`           |`GET api/cases/{id}`       | Gets one Case by id                |
| `List<Cases>`     |`GET api/search/{keyword}` | Finds cases by State acronym       |
| `Cases`           |`POST api/cases`           | Creates a new Case                 |
| `Cases`           |`PUT api/cases/{id}`       | Replaces an existing Case by id    |
| `Void`            |`DELETE api/cases/{id}`    | Deletes an existing Case by id     |


### How to Use

load the site in the web browser and use the route mentioned above to find specific details.

### Technologies Used
* Spring Rest
* Spring Data JPA
* Spring Tool Suite
* MySql
* J-Unit Testing
* PostMan
* JSON
* AWS
* Gradle

### Lessons Learned
 While playing around with the Database, I happened to use a reserved keyword for my table name. This caused all my sql statement to crash. I figured it out with a help of my classmate. Also, the naming of the columns in the database gave me some errors while trying to use the JPArepository. I read the errors in the console and was able to fix it.

### Future Implementation
I would like to update my database with live data and also additional entity classes for in depth results.
