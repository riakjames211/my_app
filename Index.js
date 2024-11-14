const express = require('express');

// import service
const my_business_logic = require('.\service\my_business_logic');


const app = express();
const port = 8000;

//GET
// greetigs
app.get('/greetings',(request,response)=>{

    return response.send({msg:"Hello, james"});
});

// list of students
let students = [
    {"Id": 1,"name": "churchill"},
    {"id": 2, "name": "ottoman"},
    {"id": 3,"name": "charles"},
    {"id": 4, "name": "emma256"}
        ];
app.get('/list-of-students',(request,response) => {

    return response.send(friends);
});

app.get('/list-of-students',(request, response) => {
    console.log("i got here too");
    return response.send(my_business_logic.getstudents);
})

// list of students by id
app.get('/list-of-students-by-id/:id',(request,response) => {

 // console.log("loging request params", request.params);

// console.log("use value from front end", request.params);
for (i = 1; i < 5 ; i++){

    if(request.params.studentsid == students[i].id) {
         
        return response.send(students[i]);

    }
    console.log(students[i]);
}

  return response.status(400).send("found nothing");

});

// POST
app.post('/sign up',(request,response) => {
    console.log("loging request body", request.body);
});

app.listen(port, () => { 

    console.log(`Example app listening at http://localhost:${port}`);
   
});