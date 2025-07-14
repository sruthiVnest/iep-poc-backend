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
   const otrdr = require('./assets/jsonData/otrdrchart.json');
   const chartdatancr = require('./assets/jsonData/chartdatancr.json');
   const ecnchart = require('./assets/jsonData/ecnchart.json');
   const ecnTabular = require('./assets/jsonData/ecntabular.json');
const fs = require('fs');
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
app.post('/api/getNCRDataBymonth',(req,res)=>{

  //filter ncrdata by month
  const month = req.body.month; 
  
  const year = req.body.year;
  fs.readFile('assets/jsonData/chartdatancr.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    
    let jsondata=JSON.parse(data); //get array length
    let filteredData = jsondata.data.activities.filter(item => (item.MONTH === month && item.YEAR===year));  debugger;
 
    res.json(filteredData); //send response

}});
});
app.get('/api/getotrdr',(req,res)=>{
  res.json(otrdr)
})
//ecn
app.get('/api/getECNChart',(req,res)=>{
  res.json(ecnchart)
})
app.get('/api/getECNData',(req,res)=>{
  res.json(ecnTabular)
})

//add data to json file while clicking on save filter button
app.post('/api/saveFilter', (req, res) => {
  fs.readFile('assets/jsonData/savedfilter.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
     
    let jsondata=JSON.parse(data); //get array length
    console.log(jsondata.data.length);
    let count = jsondata.data.length +1;
    let obj={}; 
    let filter="Filter "+count; //create filter name
    obj[filter]=req.body //add some data
    jsondata.data.push(obj); //push it to data array
    console.log(jsondata);
   // json = JSON.stringify(jsondata); //convert it back to json
    fs.writeFile('assets/jsonData/savedfilter.json', JSON.stringify(jsondata), (err) => {
    if (err) {  console.error(err);  return; };
   
}); 
    res.json({message:"Filter saved successfully",filterName:filter}); //send response
}});
});
app.get('/api/getFilterList',(req,res)=>{
  const fs = require('fs');
 
fs.readFile('assets/jsonData/savedfilter.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Failed to read file:', err);
    return;
  }
 
  const jsonData = JSON.parse(data);
   res.json(jsonData);
});


})
// Start server
app.listen(port, () => {
console.log(`Mock service running at http://localhost:${port}`);
});