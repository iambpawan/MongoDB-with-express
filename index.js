const express = require("express");
const app = express();
// const ejs = require('ejs');

const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

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

app.get("/chats", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  // res.send(chats);
  res.render("index.ejs", { chats });
});

app.get("/chats/new", async (req, res) => {
  res.render("newChat.ejs");
});

app.post("/chat", (req, res) => {
  //  console.log(req.body);
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});
// EDIT
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  // console.log(id);
  let chat = await Chat.findById(id);
  // console.log(chat);
  res.render("edit.ejs", { chat });
});

app.put("/chats/:id", async(req, res) => {
  let { id } = req.params;
  let { msg:newMsg } = req.body;
  let updateChat =await Chat.findByIdAndUpdate(
    id,
    { msg: newMsg },
    { runValidators: true, new: true }
  );
  res.redirect("/chats");
});

app.delete("/chats/:id", async(req, res) => {
  
  // console.log("delete start")
  // console.log(req.body);
  // console.log(confirmedValue);
  let { id } = req.params;
  
  // console.log(conf);
  let deleted =await Chat.findByIdAndDelete(id);
  res.redirect("/chats");
});


app.get("/", (req, res) => {
  res.send("working as excepted!");
});

app.listen(8080, () => {
  console.log("Listening on port :8080");
});
