import {LitElement, html, css} from 'lit';
import {customElement, property, state, query} from 'lit/decorators.js';

interface ToDoItem  {
  text: string,
  completed: boolean
}
@customElement('my-todo-list')
export class MyToDoList extends LitElement {

  static styles = css`

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
  @property({ type: String })
  title = '';

  @property({attribute: false})
  listItems = [
    { text: '歯を磨く', completed: true }
  ];

  @property({type: Boolean})
  disabled = true

  @query('.todo-input')
  input!: HTMLInputElement;

  render() {
    const { title, listItems} = this
    return html`
      <h2>${title}</h2>
      <ul class="todo-list">
      <div class="todo-add-block">
        <input @keyup=${this.handleButtonDisabled} class="todo-input" aria-label="アイテム">
        <button ?disabled=${this.disabled} @click=${this.addToDo}>追加</button>
      </div>
        ${listItems.map((item) =>
          html`
            <li
                class=${item.completed ? 'completed' : 'normal'}
                @click=${() => this.todoCompleted(item)}>
              ${item.text}
            </li>`
        )}
      </ul>
    `;
  }

  todoCompleted(item: ToDoItem) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  handleButtonDisabled() {
    this.input.value ? this.disabled = false : this.disabled = true
  }

  addToDo() {
    this.listItems.push({text: this.input.value, completed: false});
    this.input.value = '';
    this.disabled = true
    this.requestUpdate();
  }
}
