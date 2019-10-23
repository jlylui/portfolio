module.exports = app => {
  //db Connection with localhost
  const environment = process.env.NODE_ENV || "development"; // if something else isn't setting ENV, use development
  const configuration = require("../knexfile")[environment]; // require environment's settings from knexfile

  const db = require("knex")(configuration); // connect to DB via knex using env's settings

  // Controllers - aka, the db queries
  const main = require("./controllers/main");

  app.get("/api", (req, res) => {
    return res.status(200).send({
      message: "Welcome"
    });
  });

  app.post("/api", (req, res) => {
    return main.postTableData(req, res, db);
  });
  app.put("/api", (req, res) => {
    return res.send("Received a PUT HTTP method");
  });
  app.delete("/api", (req, res) => {
    return res.send("Received a DELETE HTTP method");
  });
};
