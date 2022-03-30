const mongoose = require("mongoose");

const config = require("config");

const db = config.get("mongoURI");

const connectDB = async () => {

    try{
        mongoose
            .connect(db, {
            useNewUrlParser: true,
            //   useCreateIndex: true,
            //   useFindAndModify: false,
            //   useUnifiedTopology: true
            })

        console.log("Mongodb connected");
    } catch(error){
        console.log(error.message);
        process.exit(1);
    }
//   mongoose
//     .connect(db, {
//       useNewUrlParser: true,
//     //   useCreateIndex: true,
//     //   useFindAndModify: false,
//     //   useUnifiedTopology: true
//     })
//     .then(() => {
//       console.log("Mongodb connected");
//     })
//     .catch((error) => {
//       console.log(error.message);
//       process.exit(1);
//     });
};

module.exports = connectDB;
