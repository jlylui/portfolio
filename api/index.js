module.exports = app => {
  app.get("/api", (req, res) => {
    return res.status(200).send({
      message: "Welcome"
    });
  });

  app.post("/api", (req, res) => {
    return res.status(200).send(req.body);
  });
  app.put("/api", (req, res) => {
    return res.send("Received a PUT HTTP method");
  });
  app.delete("/api", (req, res) => {
    return res.send("Received a DELETE HTTP method");
  });
};
