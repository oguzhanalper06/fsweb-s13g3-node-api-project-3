const express = require("express");
const { logger } = require("./middleware/middleware");
const server = express();
server.use(express.json());

const usersRoute = require("./users/users-router");
server.use("/api/users", usersRoute);

server.get("/", (req, res, next) => {
  res.send(`<h2>Biraz ara yazılım yazalım!</h2>`, (err) => {
    if (err) {
      next({ message: "hata oluştu" });
    } else {
      console.log("başarılı");
    }
  });
});

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message || "hata aldık" });
});
module.exports = server;
