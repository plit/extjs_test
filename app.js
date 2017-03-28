var express = require('express');
var mysql = require('mysql');
var Promise = require("bluebird");
var app = express();


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12341234',
    database: 'travel'
});

connection.connect();

function mysql_query(sql) {
    return new Promise(function (resolve, reject) {
        connection.query(sql, function (error, results, fields) {
            if (error) {
                reject(error);
            }

            resolve(results);
        });
    });
}

app.get('/', function (req, res) {
    res.send('Hello World!')
});


app.get('/get_table/:table_name*', function (req, res) {

    var tables = ['ports', 'timetables'];

    if (req.params['table_name'] && tables.indexOf(req.params['table_name']) != -1) {

        var table_name = req.params['table_name'];
        mysql_query("SELECT * FROM " + table_name)
            .then(function (rows) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.json(rows);

            })
            .catch(function(e) {
                //Generic catch-the rest, error wasn't TypeError nor
                //ReferenceError
            });
    } else {
        res.send('error params');
    }

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});
