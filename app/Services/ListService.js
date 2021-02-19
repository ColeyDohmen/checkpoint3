import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

class ListService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new List({ title: Math.random() })]
  }
  constructor () {
    console.log(`service`);
}
create(rawList){
    ProxyState.list = [new List(rawList), ...ProxyState.list]
}

}


export const listService = new ListService();

