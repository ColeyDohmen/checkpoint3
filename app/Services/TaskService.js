import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TaskService {
 

  create(rawTask){
    ProxyState.task = [new Task(rawTask), ...ProxyState.task]
}
constructor() {
    console.log(`service`);
    ProxyState.on(`task`, saveState)
    
}

delete (taskId){
    if (window.confirm("But are you REALLY sure?")){
    ProxyState.task = ProxyState.task.filter(t => t.id != taskId)}
}

checkMark(taskId){
    let CheckedTask = ProxyState.task.find(t => t.id == taskId)

    if (CheckedTask.checked == true){
        CheckedTask.checked = false
    }
    else if (CheckedTask.checked == false){
        CheckedTask.checked = true
    }
    
    ProxyState.task = ProxyState.task 
    console.log(`checked`);
}

}

export const taskService = new TaskService();