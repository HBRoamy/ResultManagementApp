const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const {students} = require('./students_data');
app.use(express.json())
app.use(express.urlencoded({extended:false}));

//the middleware below is for CORS policies to allow Get Put etc methods and Server Connection
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//to check status of server  
app.get('/',(req, res)=>{
    
    return res.send('<h1>Server is listening. API is up and running</h1>');

})
//to get all students
app.get('/api/students', (req, res)=>{
    
    return res.json(students);
})
//to get details of a single student
app.get('/api/students/:rollno',(req, res)=>{
    
    const studentRollNo = req.params.rollno;
    
    const student = students.find((s)=>s.RollNo===parseInt(studentRollNo));

        return res.json(student);
       
});
// to create new student
app.post('/api/students',(req, res)=>{
    console.log(req.body);
    let IsStudentAlreadyPresent_Flag=false;

    if(!students.find(s=>s.RollNo===parseInt(req.body.RollNo)))
    {students.push(req.body);
    return res.json('students');
    }
    IsStudentAlreadyPresent_Flag=true;
    console.log('Couln\'t add student as Roll Number already exists')
    return res.send(IsStudentAlreadyPresent_Flag.toString());
    //after it starts working send true as a response so that we can use it to navigate to students list page
});


//to edit student
app.post('/api/students/:roll', (req, res)=>{
    const studentRollNo1 = req.params.roll;
    let student1 = students.find((s)=>s.RollNo===parseInt(studentRollNo1));

    if(student1)
    {
        // if(req.body.RollNo!=studentRollNo1 && students.find((s)=>s.RollNo===parseInt(req.body.RollNo))){
        //     console.log('exists!!')
        //     return res.send(true.toString());
        // }
        console.log('student details previously: {' + student1.RollNo + ', ' + student1.Name + ', ' + student1.DOB  + ', ' + student1.Score + ' }')
        students.splice(students.indexOf(student1),1);
        students.push(req.body);
        console.log('student details now: {' + req.body.RollNo + ', ' + req.body.Name + ', ' + req.body.DOB  + ', ' + req.body.Score + ' }')
        return res.json(students);

    }
    console.log('student not present')
    return res.status(404).write('Student not present');

});

app.delete('/api/students/:roll',(req, res)=>{
    console.log('Deleted Roll No. :'+req.params.roll);
    const statusStud = students.find((s)=>s.RollNo==parseInt(req.params.roll));

    if(statusStud)
    {
        students.splice(students.indexOf(statusStud),1);
        return res.json(students);
    }
    return res.status(404).json('Student not found')

    
})

app.listen(3000,()=>{
    console.log('listening at port 3000.....');
});

// app.get('/api/students/search',(req, res)=>{
//     const rn = req.query.rollno;
//     const stDob = req.query.DOB;
   
//    //  const studentReq = students.find((s)=>s.RollNo===parseInt(rollno) && s.DOB===DOB);
//     const studentReq = students.find((s)=>s.RollNo===parseInt(rn) && s.DOB===stDob);
//     if(studentReq)
//     {
//        return res.json(studentReq);
//     }
//     return res.status(404).send("<h1>Student doesn't exist</h1>");
//    })




//

// mongoose.connect(url,
//     err => {
//         if(err) throw err;
//         console.log('connected to MongoDB')
//     });
//
//app.use(bodyParser.json());
