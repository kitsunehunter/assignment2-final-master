/*
app.js
xavier zhang
300944977
Oct 19 2021
*/
"use strict";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var http_errors_1 = __importDefault(require("http-errors"));
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var index_1 = __importDefault(require("../routes/index"));
var app = express_1.default();
exports.default = app;
app.set("views", path_1.default.join(__dirname, "../Views"));
app.set("view engine", "ejs");
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(
  express_1.default.static(path_1.default.join(__dirname, "../../Client"))
);
app.use(
  express_1.default.static(path_1.default.join(__dirname, "../../node_modules"))
);
app.use("/", index_1.default);
app.use(function (req, res, next) {
  next(http_errors_1.default(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;
//# sourceMappingURL=app.js.map
