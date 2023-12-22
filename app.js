const mongoose = require(`mongoose`);
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true})
const fruitSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please check your data entry"]
        

    },
    rating: {
        type: Number,
        min:1,
        max:10
    },
    review:String
});
const Fruit =mongoose.model("Fruit",fruitSchema);
const fruit= new Fruit({
    
    rating:7,
    review:"peaches are tasty"
});
fruit.save()
const personSchema =new mongoose.Schema({
    name:String,
    age:Number
})
const Person = mongoose.model("Person",personSchema);
const person = new Person({
    name: "john",
    age: 37
})
person.save()

Fruit.find().then((err, fruits) => {
    if(err){
      console.log(err);
  }else{
      fruits.forEach(function(fruit){
          console.log(fruit.name);
      })
  }
  })
  //fruit.updateOne({_id:},{name:},then(err){
    if(err){console.log}

    //)
    person.deleteMany({name:"john"})