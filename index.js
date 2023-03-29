const path = require('path')
const express = require('express')
const app = express();

const fs = require('fs');

function openPage(page){
  console.log(__dirname);
  fs.readFile(__dirname+'\\'+page, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    return data
  });
}

const dirname = path.resolve()

app.get('style.css', (req, res) => {
    res.sendFile(path.resolve(dirname, 'style.css'))
  });

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.sendFile(path.resolve(dirname, 'index.html'))
});

app.get('/createimage', (req, res) => {
  res.sendFile(path.resolve(dirname, '../html/createimage.html'))
});


app.get('/test', (req, res) => {
  res.send(template)
});



app.use(express.static('public'));

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});


class router{
  template = ""
  
  constructor(name){

  }
  show(){
    
  }
}