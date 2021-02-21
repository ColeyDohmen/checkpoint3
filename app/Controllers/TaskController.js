import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService.js";


//Private
// function _draw() {

//         let taskElem = document.getElementById("list")
//         let template = ""
//         ProxyState.task.forEach(t => template += t.Template)
//         taskElem.innerHTML = template
//     }



//Public
export default class TaskController {
    constructor() {
        console.log(`controller`);
    
    }
    create (event, listId){
        event.preventDefault()
      let form = event.target 
      let rawTask = {
          title: form.title.value,
          listId: listId
      }
      taskService.create(rawTask)
    }
  
    delete(taskId){
        taskService.delete(taskId)
    }

    checkMark(taskId){
        taskService.checkMark(taskId)
    }


}