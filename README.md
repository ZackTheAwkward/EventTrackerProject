# EventTrackerProject

## Description
The goal for this project was to create a simple Spring boot application that would model a plain java object to implement RESTful operations on. This was achieved by first creating a database with one object to model. From there a Spring Java Persistence API (JPA) project was created to map out the database entity. Once created, a JUNIT test was ran to ensure that the entity was mapped correctly and matched the data entered to the database. Once all test were passing, a REST application was created and joined on the JPA project to allow for CRUD (Create, Read, Update, Destroy) operations to be implemented on the entity. With all CRUD operations created in a service interface and implemented in the service implementation class, a controller class was created to route incoming browser requests. However, for this project there is no user interface or front end code. So to test the route from our controller, Postman was utilized to test the connection to the localhost and to ensure that the controller routing was correct.

## How to run the application
As mentioned in the description, there is no user interface for this project. We can use Postman to test out the correct mapping of our controller, and our CRUD operations were successfully created in the service implementation class. Here are the route mappings created in the controller to be used in Postman.

**Get Methods:**

*Index of all Beers:*
http://localhost:8080/api/beers

*Index of a Beer by it's ID:*
http://localhost:8080/api/beers/1

*Find a Beer by it's Type:*
http://localhost:8080/api/beers/search/type/Hazy

*Find a Beer by it's Company or Name:*
http://localhost:8080/api/beers/search/companyorname/ne

*Find a Beer by searching a range of ABV%:*
http://localhost:8080/api/beers/search/abv/6.0/7.5

**Post Method:**

*Create a Beer:*
http://localhost:8080/api/beers

**Put Method:**

*Update a Beer:*
http://localhost:8080/api/beers/2

**Delete Method:**

*Delete a Beer:*
http://localhost:8080/api/beers/3

**JSON Body template for Adding a Beer:**
```
{
    "company": "String",
    "name": "String",
    "abv": double,
    "type": "String",
    "description": "String(Can Be Null)",
    "imageUrl": "String(Can Be Null)"
}
```
**JSON Body template for Updating a Beer:**
```
{
    "id": int(Int ID of the beer being updated),
    "company": "String",
    "name": "String",
    "abv": double,
    "type": "String",
    "description": "String(Can Be Null)",
    "imageUrl": "String(Can Be Null)"
}
```
## Technologies Used
- MySQL Workbench
- Spring Tool Suite 4
- Atom
- ZSH shell
- Postman
- Tomcat
- Gradle
- AWS
- JPA
- Spring Boot REST
- REST API
- Spring Data JPA
- JUNIT


## Lessons Learned
This project really helped solidify my understanding of how to use the REST API. The initial CRUD operations were very simple to understand, however going beyond that I struggled with. To help me understand how to use the REST repository at bit better I added a few other queries to my project to search for a beer by its name or company name, by the type of beer, or search by an ABV% range. Before going into Postman to test the routing, I first made a JUNIT test to make sure my repository methods were functional. The search by ABV test passed, but the other 2 search methods were failing.

```
List<Beer> findByCompanyLikeOrNameLike(@Param("k") String keyword1, @Param("k") String keyword2); 
```

The JUNIT test helped me realize for my search by company/name method I had missed a like statement in front of name so my test could only find a beer by the company name. The type test was failing because I wasn't correctly passing my string value into the method. After getting my test to pass, I was able to then test the mappings in Postman and see my queries returning the correct results.
