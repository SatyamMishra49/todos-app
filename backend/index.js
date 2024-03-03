const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/todo', async function(req,res){
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg:"You have wrong inputs"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed: false
    })
    req.json({
        msg:"Created"
    })
});

app.get('/todos', async function(req, res){
    const todos = await todo.find({});
    res.json({
        todo
    })
});

app.put('/completed', async function(req,res){
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success){
        res.sendStatus(411).json({
            msg: "Invalid"
        })
        return;
    }
    await todo.update({
        _id:body.req,
    },{
        completed:true
    })
    res.json({
        msg:"Todos completed"
    })
});




app.listen(3000);