import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor({title, id = generateId(), color}) {
        this.title = title
        this.id = id
        this.color = color
    }

    get Template() {

        return /*html*/`
        <div class="col-3 border rounded shadow-lg" style="background-color: ${this.color}" >
            <h2>${this.title}<button class="text close text-light"
            onclick="app.listController.delete('${this.id}')"><span>&times;</span></button> </h2>
            <h5>Tasks</h5>
            <form onsubmit="app.taskController.create(event, '${this.id}')" autocomplete="off">
                <div class="form-group">
                    <input type="text" name="title" required minlength="3" maxlength="50" placeholder="Enter new task...">
                    <button type="submit" class="btn-info">Add Task</button> 
                    <div class="row">
                    ${this.Task}
                    
                    </div>
                </div>
            </form>
        </div>
`
    }
    get Task() {
        let template = ''
        let task = ProxyState.task.filter(t => t.listId == this.id)
        task.forEach(t => template += t.Template)
        return template
    }
}

