var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
let MyToDoList = class MyToDoList extends LitElement {
    constructor() {
        super(...arguments);
        this.title = '';
        this.listItems = [
            { text: '歯を磨く', completed: true }
        ];
        this.disabled = true;
    }
    render() {
        const { title, listItems } = this;
        return html `
      <h2>${title}</h2>
      <ul class="todo-list">
      <div class="todo-add-block">
        <input @keyup=${this.handleButtonDisabled} class="todo-input" aria-label="アイテム">
        <button ?disabled=${this.disabled} @click=${this.addToDo}>追加</button>
      </div>
        ${listItems.map((item) => html `
            <li
                class=${item.completed ? 'completed' : 'normal'}
                @click=${() => this.todoCompleted(item)}>
              ${item.text}
            </li>`)}
      </ul>
    `;
    }
    todoCompleted(item) {
        item.completed = !item.completed;
        this.requestUpdate();
    }
    handleButtonDisabled() {
        this.input.value ? this.disabled = false : this.disabled = true;
    }
    addToDo() {
        this.listItems.push({ text: this.input.value, completed: false });
        this.input.value = '';
        this.disabled = true;
        this.requestUpdate();
    }
};
MyToDoList.styles = css `

  .todo-add-block {
    margin-bottom: 20px;
  }

  .todo-input {
    padding: 5px;
  }

  .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .todo-list > li {
    cursor: pointer;
    width: 300px;
    margin-bottom: 10px;
    border: 1px solid #333;
    padding: 5px;
  }
  .completed {
    text-decoration-line: line-through;
    color: #777;
  }
  .normal {
    
  }
`;
__decorate([
    property({ type: String })
], MyToDoList.prototype, "title", void 0);
__decorate([
    property({ attribute: false })
], MyToDoList.prototype, "listItems", void 0);
__decorate([
    property({ type: Boolean })
], MyToDoList.prototype, "disabled", void 0);
__decorate([
    query('.todo-input')
], MyToDoList.prototype, "input", void 0);
MyToDoList = __decorate([
    customElement('my-todo-list')
], MyToDoList);
export { MyToDoList };
//# sourceMappingURL=my-todo-list.js.map