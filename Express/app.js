const express = require('express');
const app = express();
const port = 8080;

// app.get('/', (req, res) => {
//     res.send('this is my first server');
// })

// app.get('/about', (req, res) => {
//     res.send('this is about page');
// })

//Data Base(json)
const students=[
    {
        id:1,
        name:"deepak"
    },
    {
        id:2,
        name:"rupak"
    }
]

//APT for read all data(R)
app.get('/read',(req,res)=>{
    res.json(students);
}) 

//API for read(for id)
app.get('/read/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const student=students.find(s=>s.id==id);
    if(student){
        res.json({message:"data found", student});
    }else{
        res.status(404).json({message:"student not found"});
    }
})

//API for create(C)
app.post('/create',(req,res)=>{
    const newStudent={
        id:students.length+1,
        name:req.body.name
    }
    students.push(newStudent);
    res.status(201).json({message:"student created", student:newStudent});
})
//API for update(U)
app.put('/update/:id',(req,res)=>{
    const id=parseInt(req.params.id);  
    const student=students.find(s=>s.id==id);
    if(student){
        student.name=req.body.name;
        res.json({message:"student updated", student});
    }else{
        res.status(404).json({message:"student not found"});
    }
})
//API for delete(D)
app.delete('/delete/:id',(req,res)=>{
    const id=parseInt(req.params.id);  
    const index=students.findIndex(s=>s.id==id);
    if(index!==-1){
        students.splice(index,1);
        res.json({message:"student deleted"});
    }else{
        res.status(404).json({message:"student not found"});
    }
}) 

app.listen(port, () => {  
    console.log(`server is run at:http://localhost:${port}`);
}) 