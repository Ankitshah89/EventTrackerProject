## Event Tracker Project


#### Week 12 Homework for Skill Distillery

### Overview

This project works around Spring Rest C.R.U.D. API. My event tracker is an api to request Covid cases all around the United States. With a request to the  api, it will return a list of Covid cases and details in various states in the country.

#### Table of REST Endpoints
| Return Type (JSON)| Route                     | Functionality                      |
|-------------------|---------------------------|------------------------------------|
| `List<Cases>`     |`GET api/cases`            | Gets all Covid Cases               |
| `Cases`           |`GET api/cases/{id}`       | Gets one Case by id                |
| `List<Cases>`     |`GET api/search/{keyword}` | Finds cases by matching keyword    |
| `Cases`           |`POST api/cases`           | Creates a new Case                 |
| `Cases`           |`PUT api/cases/{id}`       | Replaces an existing Case by id    |
| `Void`            |`DELETE api/cases/{id}`    | Deletes an existing Case by id |


### How to Use

### Technologies Used

### Lessons Learned
