const express = require('express')
const app = express()

const bodyParser = require("body-parser");

const port = 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here
app.get("/" ,(req , res )=>{
    res.send("hello world")
})

//method post---add
app.post((req , res)=>{
    if(Number(req.body.num1) && Number(req.body.num2)< -1000000){
        req.status(404).send({
            satus : "error",
            message:"underflow"
        })
    }
    else if(Number(req.body.num1) && Number(req.body.num2) > 1000000){
        req.status(404).send({
            satus : "error",
            message:"Over flow"
        })
    }
    else{
        req.status(200).send({
            status : "sucess",
            message : "the sum of two number is ",
            add : Number(req.body.num1) + Number(req.body.num2)
        })
    }
})

//method post ---sub
app.post("/sub",(req,res)=>{
    console.log(req.body);
    if(Number(req.body.num1)&&Number(req.body.num2)<-1000000){
        res.status(404).send({
            status:"error",
            message:"underflow"
        })
    }
    else if(Number(req.body.num1)&&Number(req.body.num2)>1000000){
            res.status(404).send({
                status:"error",
                message:"overflow"
            })
    }
    else {
    res.status(200).send({
        status:"success",
        message:"the difference of given two numbers",
        sub:Number(req.body.num1)-Number(req.body.num2)
    })
}
})

//method post ---multiply
app.post("/multiply",(req,res)=>{
    console.log(req.body);
    if(Number(req.body.num1)&&Number(req.body.num2)<-1000000){
        res.status(404).send({
            status:"error",
            message:"underflow"
        })
    }
    else if(Number(req.body.num1)&&Number(req.body.num2)>1000000){
            res.status(404).send({
                status:"error",
                message:"overflow"
            })
    }
    else{
        res.status(200).send({
        status:"success",
        message:"The product of given numbers”,",
        multiply:Number(req.body.num1)*Number(req.body.num2)
    })
}
})

//method post ---divide
app.post("/divide",(req,res)=>{
    console.log(req.body);
    if(Number(req.body.num2)===0){
        res.status(404).send({
            status:"error",
            message:"Cannot divide by zero",
        })
    }
    if(Number(req.body.num1)&&Number(req.body.num2)<-1000000){
        res.status(404).send({
            status:"error",
            message:"underflow"
        })
    }
    else if(Number(req.body.num1)&&Number(req.body.num2)>1000000){
            res.status(404).send({
                status:"error",
                message:"overflow"
            })
    }
    else{
    res.status(200).send({
        status:"success",
        message:"The division of given numbers",
        div:Number(req.body.num1)/Number(req.body.num2)
    })
}
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
module.exports = app;