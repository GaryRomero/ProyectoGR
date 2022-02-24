const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const fechaM = document.getElementById('fechaM');
const fechaA = document.getElementById('fechaA');

const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const fecha = new Date();
    dateNumber.textContent = fecha.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = fecha.toLocaleString('es', { weekday: 'long' });
    fechaM.textContent = fecha.toLocaleString('es', { month: 'short' });
    fechaA.textContent = fecha.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('section');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
    
};


const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}




setDate();