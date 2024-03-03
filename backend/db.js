const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://testadmin:Satyam1749@test.w5bhmvv.mongodb.net/');

const todosSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model("todo", todosSchema);

module.exports={
    todo
}