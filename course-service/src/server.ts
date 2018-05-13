/**
 * Module dependencies.
 */
import * as express from "express";
import * as session from "express-session";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import * as errorHandler from "errorhandler";
import * as mongo from "connect-mongo";
import * as path from "path";
import * as mongoose from "mongoose";
import { default as Connect} from './db/db';
import { default as config} from './config/config';
// import { default as RabbitConnect} from './rabbit/rabbit.connection';

const MongoStore = mongo(session);
// const conn:any = RabbitConnect(['email','rpc_queue','response.fib']);
/**
 * Controllers (route handlers).
 */
import * as indexController from "./controllers/index";
import { CourseController} from "./controllers/CourseController";
import { CoursesUserController} from "./controllers/CoursesUserController";

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */

Connect.then(()=>{


  /**
   * Express configuration.
   */

  app.set("port", config.port);
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));

  /**
   * Primary app routes.
   */
  app.get("/", indexController.index);
  app.use("/courses", new CourseController(express.Router()).router);
  app.use("/courses-user", new CoursesUserController(express.Router()).router);

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
});

