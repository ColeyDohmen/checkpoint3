import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js"

export default class Task {
    constructor({title, id = generateId(), listId, checked = false}) {
        this.title = title
        this.id = id
        this.listId = listId
        this.checked = checked
    }

    get Template() {

        return /*html*/`
        <div class="col-12">
        <h4>${this.title}<input type="checkbox" ${this.checked ? "checked": ``} onclick="app.taskController.checkMark('${this.id}')">
        <button type="button" class="text-dark close mt-3" 
                onclick="app.taskController.delete('${this.id}')"><span>&times;</span></button> 
                </h4>
    </div>
    `
    }


}