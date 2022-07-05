const express = require('express');
const app = express();

app.get('/number/:num', (req,res) => {
    let num = req.params.num;
    var isPrimeNumber = "is a prime number";

    if (num == 1){
        res.send("1 is neither a prime number nor a composite number");
    }
    else{
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                isPrimeNumber = "is a composite number";
            }
        }
    }

   res.send(JSON.stringify(`${num} ${isPrimeNumber}`).replace('"', '').replace('"', ''));
});

app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));