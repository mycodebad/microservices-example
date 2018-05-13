/**
 * Module dependencies.
 */
import * as express from "express";
import * as session from "express-session";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as path from "path";
import * as cors from "cors";

import { default as config} from './config/config';
import { default as RabbitConnect} from './rabbit/rabbit.connection';
const conn:any = RabbitConnect(['email','rpc_queue','response.fib']);
/**
 * Controllers (route handlers).
 */
import * as indexController from "./controllers/index";
import { CoursesController} from "./controllers/CoursesUserController";
import { UsersController } from "./controllers/UsersController";

/**
 * Create Express server.
 */
const app = express();

const options:cors.CorsOptions = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: 'http://localhost:3030',
  preflightContinue: false
};


/**
 * Connect to MongoDB.
 */

// Connect.then(()=>{


  /**
   * Express configuration.
   */

  app.set("port", config.port);
  app.use(logger("dev"));  
  app.use(bodyParser.json());
  app.use(cors(options));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

  console.log(path.join(__dirname, "public"))
  /**
   * Primary app routes.
   */
  app.get("/", indexController.index);
  app.use("/courses", new CoursesController(express.Router()).router);
  app.use("/users", new UsersController(express.Router()).router);
  
  // app.use("/courses-user", new CoursesUserController(express.Router()).router);


  app.options("*", cors(options));

  /**
   * Error Handler. Provides full stack - remove for production
   */
  app.use(errorHandler());

  /**
   * Start Express server.
   */
  app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
  });
// });

