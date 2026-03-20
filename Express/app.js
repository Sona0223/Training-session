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

app.listen(port, () => {  
    console.log(`server is run at:http://localhost:${port}`);
}) 