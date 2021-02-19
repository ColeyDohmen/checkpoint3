import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor({title, id = generateId()}) {
        this.title = title
        this.id = id
    }

    get Template() {

        return /*html*/`
        <div class="col-4 border rounded bg-primary">
            <h1>${this.title}<button class="text close"
            onclick="app.listController.delete('${this.id}')"><span>&times;</span></button> </h1>
            <h5>Tasks</h5>
            <form onsubmit="app.listController.create(event, '${this.id}')">
                <div class="form-group">
                    <input type="text" name="title" placeholder="Enter new task...">
                    <button type="submit">Add Task</button>
                    <div class="row">
                    
                    </div>
                </div>
            </form>
        </div>
`
    }
}
