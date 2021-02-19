import ValuesController from "./Controllers/ValuesController.js";
import ListController from "./Controllers/ListController.js";

class App {
  // valuesController = new ValuesController();
  listController = new ListController();
}

window["app"] = new App();
