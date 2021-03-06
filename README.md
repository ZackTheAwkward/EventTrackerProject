# EventTrackerProject

## Description
- Week 1
 The goal for this project was to create a simple Spring boot application that would model a plain java object to implement RESTful operations on. This was achieved by first creating a database with one object to model. From there a Spring Java Persistence API (JPA) project was created to map out the database entity. Once created, a JUNIT test was ran to ensure that the entity was mapped correctly and matched the data entered to the database. Once all test were passing, a REST application was created and joined on the JPA project to allow for CRUD (Create, Read, Update, Destroy) operations to be implemented on the entity. With all CRUD operations created in a service interface and implemented in the service implementation class, a controller class was created to route incoming browser requests. However, for this project there is no user interface or front end code. So to test the route from our controller, Postman was utilized to test the connection to the localhost and to ensure that the controller routing was correct.

- Week 2
 The goal for this project was to take the existing code from last week, and create a dynamic web page using javascript and XMLhttpRequests. This was achieved by creating an index html page, adding a form on the page, and using javascript to dynamically add and create elements to the page. For an example, a function was added to the javascript page to search for a beer by a range of ABV percentage. In order to this, a form was added to the index html file that prompted the user to enter a minimum and maximum value they would like to search by. From there the javascript page took in those numbers, added them to the controller mapping to search for those ranges, and if a result was found, javascript would dynamically create a list element and add the name of the beer as well as the ABV percentage to the list. Then the list element would be added to a div tag on the html page to display this information to the user.

- Week 3
The goal for this project was to update the existing dynamic web application by using angular and typescript. This was achieved by first configuring an angular project, and creating a components and services class. Once created, the entity was mapped using the services class, and then displayed using the components class. In the services class, the CRUD methods were created as well as the mapping url to connect to the controller class. Using typescript, methods were created to implement basic CRUD operations, as well as a counter method. This allowed for the web application to be dynamically changed based on user interaction. For an example, the first thing the user is presented is a form allowing them to add a beer to the database. As soon as the user hits submit, they will see their creation added to the bottom of the table, as well as an increase in the counter.


## How to run the application
- Week 1
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
- XMLhttpRequests
- Javascript
- HTML
- Bootstrap
- Angular
- Typescript
- Node
- VS Code


- Week 2
 Now that there is a front end for this application, the user can implement basic CRUD operations by following the forms presented to them. The first form presented is a text field asking for the user to enter the ID of the beer they wish to find, if a result is found, the user is presented the information on the beer. The second option given allows the user to add a beer to the data base by enter the correct information into the form fields. The third option allows the user to enter the ID of the beer they would like to update, as well as the information that they wish to update. The fourth option will allow the user to enter the ID of a beer they wish to delete from the database, and will be given a message if they did so successfully. Finally, the last option will allow the user to search for a list of beers by their ABV percentage, if a match is found the user will be presented the name and percentage of the beer.


- Week 3
The user is now presented with a new index page that will offer similar features from the last index page. However this time it will be in a much more organized and dynamic application. The user is presented with a from allowing them to create a beer and add it to the database. Once the beer is added, the user will see a count displayed next to the header increase, as well as that beer added to a table below. In that table, the user will see the beers displayed with the ID, name, company, style, ABV%, description, an image thumbnail, and the option to update or delete a beer. If the user selects the option to delete a beer, it will be removed from the database as well as the table, and the user will see the counter go down. If the user selects to update a beer, instead of being redirected, the user will see the page change to only display the details of the beer selected. From there two buttons will be presented to the user, one to go back, and another to edit the beer. If they choose to update the beer, a form will be added to the page with placeholders of the current beers values. Once they make the changes, they can either save the changes, or choose to cancel them and go back to the details page.



## Lessons Learned
This project really helped solidify my understanding of how to use the REST API. The initial CRUD operations were very simple to understand, however going beyond that I struggled with. To help me understand how to use the REST repository at bit better I added a few other queries to my project to search for a beer by its name or company name, by the type of beer, or search by an ABV% range. Before going into Postman to test the routing, I first made a JUNIT test to make sure my repository methods were functional. The search by ABV test passed, but the other 2 search methods were failing.

```
List<Beer> findByCompanyLikeOrNameLike(@Param("k") String keyword1, @Param("k") String keyword2);
```

The JUNIT test helped me realize for my search by company/name method I had missed a like statement in front of name so my test could only find a beer by the company name. The type test was failing because I wasn't correctly passing my string value into the method. After getting my test to pass, I was able to then test the mappings in Postman and see my queries returning the correct results.


One struggle I faced when adding the javascript elements to the html page, was overthinking the update function. I made the solution far more complex than it needed to be, which resulted in all updates being given null or zero values. After stubbornly working through the function for a few hours, I finally asked for help from a TA. They were able to help me better understand how Javascript can dynamically read data from a from as well, which helped me fix my function and make it much easier.

This final addition to the project helped tie in every aspect from the cohort, and solidify my understanding of how to create a full stack application. Typescript and Angular are still very new to me however, one thing I will work on over the new few weeks is better understanding the dynamics of the two, and how they can improve any other aspects. 
