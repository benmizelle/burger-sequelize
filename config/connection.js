// Require MySQL .
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
    mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    var connection = mysql.createConnection({
        port: 3306,
        host: "jsk3f4rbvp8ayd7w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "vj6g64645yf1iyml",
        password: "gutnksm99gtkf5fx",
        database: "burgers_db"
    });
};


// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;