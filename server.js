const express = require('express');
const app = express();
const port = 3000;
const cors=require('cors');
app.use(cors());//for fixing CORS error
app.use(express.json()); // for parsing application/json
 //get data from json file
 const data = require('./assets/jsonData/projecttreedata.json');
  const ncrdata = require('./assets/jsonData/ncrdata.json');
   const ispodata = require('./assets/jsonData/ispodata.json');
// Mock endpoints
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});
 
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User created', user: newUser });
});
 
app.get('/api/users/:id', (req, res) => {
const userId = req.params.id;
  res.json({ id: userId, name: `User ${userId}` });
});
 //mock data for grid

 app.get('/api/getNCRData', (req, res) => {
  res.json(ncrdata)});
//mock data for node tree
app.get('/api/getCurrentProjects',(req,res)=>{
  res.json(data)
})
app.get('/api/getISPO',(req,res)=>{
  res.json(ispodata)
})
// Start server
app.listen(port, () => {
console.log(`Mock service running at http://localhost:${port}`);
});