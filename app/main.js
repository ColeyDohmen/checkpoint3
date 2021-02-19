import ValuesController from "./Controllers/ValuesController.js";
import ListController from "./Controllers/ListController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  // valuesController = new ValuesController();
  listController = new ListController();
}

window["app"] = new App();
loadState()