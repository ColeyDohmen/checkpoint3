import { ProxyState } from "../AppState.js";
import { listService } from "../Services/ListService.js";


//Private
function _draw() {
    let listElem = document.getElementById("list")
    let template = ""
    ProxyState.list.forEach(l => template += l.Template)
    listElem.innerHTML = template
}

//Public
export default class ListController {
  constructor() {
      console.log(`controller`);
    ProxyState.on("list", _draw);
    ProxyState.on("task", _draw);
    _draw()
  }
  create (event){
      event.preventDefault()
    let form = event.target 
    let rawList = {
        title: form.title.value,
        color: form.color.value
    }
    listService.create(rawList)
    form.reset()
  }


  delete(listId){
      listService.delete(listId)
  }


  // addValue() {
  //   listService.addValue()
  // }

}