const express = require("express");
const path = require("path");
const app = express();

// Define the port the web server will listen to
app.set("port", 3123);

// Use Express to serve the static assets
app.use("/person/prototype", express.static(path.join(__dirname, "../build")));

app.get("/person/prototype/internal/isAlive", (req, res) => {
  return res.status(200).send("I'm alive!");
});

app.get("/person/prototype/internal/isReady", (req, res) => {
  return res.status(200).send("I'm ready!");
});

// Start the server and report the port on which it is running
const server = app.listen(app.get("port"), function () {
  console.log("The server is running on: " + app.get("port"));
});

const shutdown = () => {
  console.log("Server shutting down");

  server.close(() => {
    console.log("Shutdown complete!");
    process.exit(0);
  });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
