// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// }
// );
// app.get('/about', (req, res) => {
//     const student = [{
//         id: 1,
//         name: 'John Doe',
//         age: 22,
//     },
//     {
//         id: 2,
//         name: 'John Doe',
//         age: 22,
//     },
//     {
//         id: 3,
//         name: 'John Doe',
//         age: 22,
//     },
//     {
//         id: 4,
//         name: 'John Doe',
//         age: 22,
//     },
//     {
//         id: 5,
//         name: 'John Doe',
//         age: 22,
//     },
// ]
// res.send(student);});
    
// app.get('/contact', (req, res) => {
//     res.send('<h2>Contact Page</h2>');
// }
// );
// app.listen(port, () =>{
//     console.log(`Server is running on http://localhost:${port}`);
// } 
// );

// app.get('/services', (req, res) => {
//     try{
//         const id=res.params.id;
//         const student = students.find(s => s.id === parseInt(id));
//         if(!student) throw new Error('Service not found');
//         res.send(student);
//         students[index]={
//             ...students[index]
//             ...req.body 
//         }
//     }catch(err){
//         res.status(404).send(err.message);
//     }
//         res.send(`Service ID: ${id}`);
//     }) ;

//     .listen(port, () => {
//         console.log(`Server is running on http://localhost:${port}`);
//     });




