var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '123456',
	database:'item'
})

/* GET home page. */
router.post('/brl', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  var a = req.body.a
  con.query(`SELECT * FROM baobao WHERE name LIKE "%${a}%"`,function(err,rows){
  	res.send(rows)
  })
});




module.exports = router;
