let addTodoButton = document.getElementById('addTodo') as HTMLButtonElement;
let todoContainer = document.getElementById('todoContainer') as HTMLDivElement;
let inputField = document.getElementById('inputField') as HTMLInputElement;

if (addTodoButton && todoContainer && inputField) {
    addTodoButton.addEventListener('click', function() {
        const paragraph: HTMLParagraphElement = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
        paragraph.innerText = inputField.value;
        todoContainer.appendChild(paragraph);
        inputField.value = "";

        paragraph.addEventListener('click', function() {
            paragraph.style.textDecoration = "line-through";
        });

        paragraph.addEventListener('dblclick', function() {
            todoContainer.removeChild(paragraph);
        });
    });
} else {
    console.error('One or more elements not found.');
}
