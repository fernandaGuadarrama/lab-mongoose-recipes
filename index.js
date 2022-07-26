const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose

  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
   Recipe.create ({
          title: "Maruchan",
          level: "Easy Peasy",
          ingredients: [
            "Maruchan",
            "Water",
            "Lemon",
            "Salsa Valentina"
          ],
          cuisine: "Mexican",
          dishType: "soup",
          image: "https://superviquez.com/index.php?route=product/product&tag=SOPA%20INST%20MARUCHAN%20CAMARON/PIC&product_id=5377",
          duration: 5,
          creator: "Estudihambre",
          created:""
        }) 
        .then(recipe =>
          console.log(recipe))
        .catch(err =>
          console.log("ERROR!"))

          Recipe.insertMany(data)
          .then()
          .catch(err =>
            console.log("ERROR!"))
          
      //     Recipe.updateOne({title: "Maruchan"}, {duration:5})
      //     .then(recipe => console.log("Update successful"))
      //     .catch((err) => console.log(err))
      //     })
    
      //     Recipe.find({}, {title: 1})
      // .then(console.log)
      // .catch((err) => console.log(err))

      // Recipe.updateOne({title: "Rigatoni alla Genovese"}, {duration: 100})
      // .then( recipe => console.log("create"))
      // .catch((err) => console.log(err))


      // Recipe.find({}, {title: 1, _id: 0})
      // .then(console.log)
      // .catch((err) => console.log(err))

      // Recipe.deleteOne({title: "Carrot Cake"})
      // .then( recipe => {
      //   console.log("delete")
      //   mongoose.connection.close(() => {
      //     console.log('disconnect')
      //     process.exit(0)
      //     })
      // })
      // .catch((err) => console.log(err))
  

    .catch(error => {
      console.error('Error connecting to the database', error);
    });