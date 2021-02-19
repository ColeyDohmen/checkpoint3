import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListService {


  addValue() {
    ProxyState.values = [...ProxyState.values, new List({ title: Math.random() })]
  }
  constructor () {
    console.log(`service`);
    ProxyState.on(`list`, saveState)
}
create(rawList){
    ProxyState.list = [new List(rawList), ...ProxyState.list]
}

delete (listId){
    ProxyState.list = ProxyState.list.filter(l => l.id != listId)
}

}


export const listService = new ListService();

