const mongoose = require('mongoose');
mongoose.connect('');

const todosSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model("todo", todosSchema);

module.exports={
    todo
}
