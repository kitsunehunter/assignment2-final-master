#!/usr/bin/env node

"use strict";

/*
index.js
xavier zhang
300944977
Oct 19 2021
*/

//this file handles all the server start up with creatign the port.
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./Server/Config/app"));
var debug_1 = __importDefault(require("debug"));
debug_1.default("new-assignment1:server");
var http_1 = __importDefault(require("http"));
var port = normalizePort(process.env.PORT || "3000");
app_1.default.set("port", port);
var server = http_1.default.createServer(app_1.default);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug_1.default("Listening on " + bind);
}
//# sourceMappingURL=index.js.map
