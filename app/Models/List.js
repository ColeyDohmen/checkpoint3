import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor({title, id = generateId()}) {
        this.title = title
        this.id = id
    }

    get Template() {

        return /*html*/`
        <div class="col-3 border rounded bg-primary shadow-lg" >
            <h2>${this.title}<button class="text close text-light"
            onclick="app.listController.delete('${this.id}')"><span>&times;</span></button> </h2>
            <h5>Tasks</h5>
            <form onsubmit="app.taskController.create(event, '${this.id}')">
                <div class="form-group">
                    <input type="text" name="title" placeholder="Enter new task...">
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

