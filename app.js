document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    const deleteAllButton = document.getElementById('delete-all-button');
    const recoveryButton = document.getElementById('recovery-button');
    const permanentlyDeleteButton = document.getElementById('permanently-delete-button');
    const deletedList = document.getElementById('deleted-list');
    const historyButton = document.getElementById('history-button');
    const historyHeading = document.getElementById('history-heading');

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    todoInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const todoText = todoInput.value.trim();
            if (todoText !== '') {
                addTodoItem(todoText);
                todoInput.value = '';
            }
        }
    });

    function addTodoItem(text) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="todo-text">${text}</span>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;
        todoList.appendChild(listItem);

        const deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            
            const deletedItem = document.createElement('li');
            deletedItem.textContent = text;
            deletedList.appendChild(deletedItem);

            todoList.removeChild(listItem);

            
            historyButton.style.display = 'inline-block';
        });

        const editButton = listItem.querySelector('.edit-button');
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit the item:', text);
            if (newText !== null) {
                listItem.querySelector('.todo-text').textContent = newText;
            }
        });

        deleteAllButton.addEventListener('click', () => {
            todoList.innerHTML = '';
        });

        historyButton.addEventListener('click', () => {
            
            historyHeading.style.display = 'block';
            deletedList.style.display = 'block';
            recoveryButton.style.display = 'inline-block';
            permanentlyDeleteButton.style.display = 'inline-block';
        });

        recoveryButton.addEventListener('click', () => {
            
            alert('Recovery functionality will be implemented soon.');
        });

        permanentlyDeleteButton.addEventListener('click', () => {

            alert('Permanent delete functionality will be implemented soon.');
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');
    const deleteAllButton = document.getElementById('delete-all-button');
    const recoveryButton = document.getElementById('recovery-button');
    const permanentlyDeleteButton = document.getElementById('permanently-delete-button');
    const deletedList = document.getElementById('deleted-list');
    const historyButton = document.getElementById('history-button');
    const historyHeading = document.getElementById('history-heading');

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            todoInput.value = '';
        }
    });

    todoInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const todoText = todoInput.value.trim();
            if (todoText !== '') {
                addTodoItem(todoText);
                todoInput.value = '';
            }
        }
    });

    function addTodoItem(text) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="todo-text">${text}</span>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;
        todoList.appendChild(listItem);

        const deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            
            const deletedItem = document.createElement('li');
            deletedItem.textContent = text;
            deletedList.appendChild(deletedItem);

            todoList.removeChild(listItem);

            
            historyButton.style.display = 'inline-block';
        });

        const editButton = listItem.querySelector('.edit-button');
        editButton.addEventListener('click', () => {
            const newText = prompt('Edit the item:', text);
            if (newText !== null) {
                listItem.querySelector('.todo-text').textContent = newText;
            }
        });

        deleteAllButton.addEventListener('click', () => {
            todoList.innerHTML = '';
        });

        historyButton.addEventListener('click', () => {
            historyHeading.style.display = 'block';
            deletedList.style.display = 'block';
            recoveryButton.style.display = 'inline-block';
            permanentlyDeleteButton.style.display = 'inline-block';
        });

        recoveryButton.addEventListener('click', () => {
            
            alert('Recovery functionality will be implemented soon.');
        });

        permanentlyDeleteButton.addEventListener('click', () => {
        
            alert('Permanent delete functionality will be implemented soon.');
        });
    }
});
