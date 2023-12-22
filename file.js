const mongoose = require(`mongoose`);
mongoose.connect("mongodb://localhost:27017/fruitsDB",{ useNewUrlParser: true})
const fruitSchema =new mongoose.Schema({
    name:String,
    rating: {type:Number,
    min:1,
max:10},
    review:String
});
const Fruit =mongoose.model("Fruit",fruitSchema);
const fruit= new Fruit({
    name:"apple",
    rating:1,
    review:"tasty"
});
//fruit.save()
const personSchema =new mongoose.Schema({
    name:String,
    age:Number,
    favouriteFruit: fruitSchema
})
const Person = mongoose.model("Person",personSchema);
const grapes=new Fruit({
    name:"grapes",
    rating:3,
    review:"great"
})
grapes.save();
const person = new Person({
    name: "amy",
    age: 30,
    favouriteFruit:grapes
   
})
person.save()
const kiwi =new Fruit({
    name:"kiwi",
    score:3,
    review:"good"
});
const orange=new Fruit({
    name:"orange",
    score:3,
    review:"good"
});
const banana =new Fruit({
    name:"banana",
    score:3,
    review:"good"
});
Fruit.insertMany([kiwi,orange,banana]).then(err=> {
    if(err){console.log(err);}
    else{console.log("succesfully saved")}
})
Fruit.find().then((err, fruits) => {
    if(err){
      console.log(err);
  }else{
      fruits.forEach(function(fruit){
          console.log(fruit.name);
      })
  }
  })