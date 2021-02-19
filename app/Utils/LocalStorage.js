import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";


export function saveState() {
    localStorage.setItem('taskqueen', JSON.stringify({
        list: ProxyState.list,
        // toppings: ProxyState.toppings
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskqueen'))
    if (data) {
        ProxyState.list = data.list.map(otherList => new List(otherList))
        // ProxyState.toppings = data.toppings.map(t=> new Topping(t))
    }
}