const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat.js");

main()
  .then((res) => {
    console.log("successfully connected");
  })
  .catch((err) => {
    console.log("error", err);
    // console.log(err.errors.category.properties.message);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "pavan1",
    to: "pawan1",
    msg: "hello",
    created_at: new Date(),
  },
  {
    from: "pavan1",
    to: "pawan1",
    msg: "hello",
    created_at: new Date(),
  },
  {
    from: "pavan1",
    to: "pawan1",
    msg: "hello",
    created_at: new Date(),
  },
  {
    from: "pavan1",
    to: "pawan1",
    msg: "hello",
    created_at: new Date(),
  },
];

chat.insertMany(allChats).then((res) => {
  console.log(res);
});
