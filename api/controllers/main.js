const postTableData = (req, res, db) => {
  const { name, email, message } = req.body;
  const added = new Date();
  db("contacts")
    .insert({ name, email, message, added })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ dbError: "db error", errorCode: err.code });
    });
};

module.exports = {
  postTableData
};
