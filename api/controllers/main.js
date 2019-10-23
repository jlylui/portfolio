const postTableData = (req, res, db) => {
  const { first, last, email } = req.body;
  const added = new Date();
  db("contacts")
    .insert({ first, last, email, added })
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
