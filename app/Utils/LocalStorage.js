import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";

export function saveState() {
    localStorage.setItem('taskqueen', JSON.stringify({
        list: ProxyState.list,
        task: ProxyState.task,
        // toppings: ProxyState.toppings
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskqueen'))
    if (data) {
        ProxyState.list = data.list.map(otherList => new List(otherList))
        ProxyState.task = data.task.map(otherTask => new Task(otherTask))
        // ProxyState.toppings = data.toppings.map(t=> new Topping(t))
    }
}