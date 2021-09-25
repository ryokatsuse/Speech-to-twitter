import { LitElement } from 'lit';
declare class MyToDoList extends LitElement {
    title: string;
    listItems: {
        text: string;
        completed: boolean;
    }[];
    input: HTMLInputElement;
    render(): import("lit-html").TemplateResult<1>;
    addToDo(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-todo-list': MyToDoList;
    }
}
export {};
//# sourceMappingURL=my-todo-list.d.ts.map