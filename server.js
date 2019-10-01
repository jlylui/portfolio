const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const setupApi = require("./api");

// Express Middleware
const cors = require("cors"); // allows/disallows cross-site communication
const bodyParser = require("body-parser"); // turns response into usable format
const morgan = require("morgan");

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(cors());
    server.use(bodyParser.json());
    server.use(morgan("combined")); // use 'tiny' or 'combined'

    //db Connection with localhost
    var db = require("knex")({
      client: "pg",
      connection: {
        host: "127.0.0.1",
        user: "",
        password: "",
        database: ""
      }
    });

    setupApi(server);

    server.get("/shares/:shareCode", (req, res) => {
      app.render(req, res, "/shares", { shareCode: req.params.shareCode });
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
