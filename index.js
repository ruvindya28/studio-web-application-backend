import express from 'express';

let app = express();

app.get('/',
  ()=>{
    console.log("get request received")
  }
)

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});