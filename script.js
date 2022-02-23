
const dateNumber = document.getElementById('dateNumber')
const dateText = document.getElementById('dateText')
const fechaM = document.getElementById('fechaM')
const fechaA = document.getElementById('fechaA')

const tasksContainer = document.getElementById('tasksContainer')

const setDate = () => {
    const date = new Date()
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' })
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' })
    fechaM.textContent = date.toLocaleString('es', { month: 'short' })
    fechaA.textContent = date.toLocaleString('es', { year: 'numeric' })
};

const addNewTask = event => {
    event.preventDefault()
    const { value } = event.target.taskText
    if(!value) return
    const task = document.createElement('div')
    task.classList.add('task',)
    task.addEventListener('click', changeTaskState)
    task.textContent = value
    tasksContainer.prepend(task)
    event.target.reset()
};

const changeTaskState = event => {
    event.target.classList.toggle('done')
}
setDate()