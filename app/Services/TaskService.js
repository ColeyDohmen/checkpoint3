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
    ProxyState.task = ProxyState.task.filter(t => t.id != taskId)
}

}

export const taskService = new TaskService();