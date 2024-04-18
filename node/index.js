const express = require('express')
const mysql = require('mysql')
var randomName = require('node-random-name');

const app = express()
const PORT = process.env.PORT || 3000


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

app.get('/', (req, res) => {

    const conn = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'nodedb'
    })

    conn.connect(function (err) {
        if (err) throw err;
        var name = randomName()
        conn.query('insert into people(name) values(?)', [name],
            function (err, _, _) {
                sleep(1000)
                if (err) {
                    throw err;
                }
                
            })

        conn.query("SELECT * FROM people",
            function (err, result, fields) {
                if (err) {
                    conn.release()
                    throw err;
                }
                conn.end()
                var items = ""
                for (let item of result) {
                    items += `<span>${item.id}</span> -> <span>${item.name}</span><br>`
                }
                res.send('<h1>Full Cycle Rocks!</h1>' + '<br> ' + items)
            })
    })

})


app.listen(PORT, () => {
    console.log('Rodando na porta::::  ' + PORT)
})