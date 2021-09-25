var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
let MyToDoList = class MyToDoList extends LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.listItems = [
            { text: '', completed: true }
        ];
    }
    render() {
        const { title, listItems } = this;
        return html `
      <h2>${title}</h2>
      <ul>
        ${listItems.map((item) => html `<li>${item.text}</li>`)}
      </ul>
      <input class="todo-input" aria-label="アイテム">
      <button @click=${this.addToDo}>Add</button>
    `;
    }
    addToDo() {
        this.listItems.push({ text: this.input.value, completed: false });
        this.input.value = '';
        this.requestUpdate();
    }
};
__decorate([
    property({ type: String })
], MyToDoList.prototype, "title", void 0);
__decorate([
    property({ type: Array })
], MyToDoList.prototype, "listItems", void 0);
__decorate([
    query('.todo-input')
], MyToDoList.prototype, "input", void 0);
MyToDoList = __decorate([
    customElement('my-todo-list')
], MyToDoList);
//# sourceMappingURL=my-todo-list.js.map