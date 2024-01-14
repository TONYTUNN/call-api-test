var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = mysql.createConnection({
  host : 'localhost', user : 'root' , password : '' , database : 'film'
})
db.connect (()=> console.log("da ket noi thanh cong!"));
module.exports = router;

router.get('/room/',(req,res)=>{
  let sql = `SELECT room_id , cinema_id, room_name FROM room WHERE room_id `;
  db.query(sql,(err,data)=>{
    if(err) res.json({"thong bao": "Loi lay list room",err});
    else res.json(data);
  })
})
module.exports = router;

router.get('/seat/',(req,res)=>{
  let sql = `SELECT seat_id,seat_type,room_id,seat_row,seat_number FROM seats`;
  db.query(sql,(err,data)=>{
    if(err) res.json({"Thong Bao":"Loi lay list seat "});
    else res.json(data);
  })
})
module.exports = router;