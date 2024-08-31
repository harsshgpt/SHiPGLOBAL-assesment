let todos = {
    backlog: [],
    todo: [],
    ongoing: [],
    done: []
};

document.getElementById('addTodoButton').addEventListener('click', function() {
    const newTodo = document.getElementById('newTodo').value;
    if (newTodo) {
        todos.backlog.push(newTodo);
        document.getElementById('newTodo').value = '';
        renderTodos();
    }
});

function renderTodos() {
    ['backlog', 'todo', 'ongoing', 'done'].forEach(status => {
        const list = document.getElementById(`${status}-list`);
        list.innerHTML = '';
        todos[status].forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo;

            const navButtons = document.createElement('div');
            navButtons.className = 'nav-buttons';

            if (status !== 'backlog') {
                const leftButton = document.createElement('button');
                leftButton.textContent = '<';
                leftButton.addEventListener('click', () => moveTodoLeft(status, index));
                navButtons.appendChild(leftButton);
            }

            if (status !== 'done') {
                const rightButton = document.createElement('button');
                rightButton.textContent = '>';
                rightButton.addEventListener('click', () => moveTodoRight(status, index));
                navButtons.appendChild(rightButton);
            }

            li.appendChild(navButtons);
            list.appendChild(li);
        });
    });
}

function moveTodoLeft(status, index) {
    const statuses = ['backlog', 'todo', 'ongoing', 'done'];
    const currentIndex = statuses.indexOf(status);
    const newStatus = statuses[currentIndex - 1];
    todos[newStatus].push(todos[status][index]);
    todos[status].splice(index, 1);
    renderTodos();
}

function moveTodoRight(status, index) {
    const statuses = ['backlog', 'todo', 'ongoing', 'done'];
    const currentIndex = statuses.indexOf(status);
    const newStatus = statuses[currentIndex + 1];
    todos[newStatus].push(todos[status][index]);
    todos[status].splice(index, 1);
    renderTodos();
}

renderTodos();
