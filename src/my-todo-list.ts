import {LitElement, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

@customElement('my-todo-list')
class MyToDoList extends LitElement {
  @property({ type: String })
  title = '';

  @property({type: Array})
  listItems = [
    { text: '', completed: true }
  ];

  @query('.todo-input')
  input!: HTMLInputElement;

  render() {
    const { title, listItems} = this
    return html`
      <h2>${title}</h2>
      <ul>
        ${listItems.map((item) =>
          html`<li>${item.text}</li>`
          )}
      </ul>
      <input class="todo-input" aria-label="アイテム">
      <button @click=${this.addToDo}>Add</button>
    `;
  }

addToDo() {
  this.listItems.push({text: this.input.value, completed: false});
  this.input.value = '';
  this.requestUpdate();
}
}

declare global {
  interface HTMLElementTagNameMap {
    'my-todo-list': MyToDoList;
  }
}