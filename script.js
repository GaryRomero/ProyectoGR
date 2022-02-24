//Gary
//Fechas 


const dateNumber = document.getElementById('dateNumber')

const dateText = document.getElementById('dateText')

const fechaM = document.getElementById('fechaM')

const fechaA = document.getElementById('fechaA')





//Se almacenan las tareas
const tasksContainer = document.getElementById('tasksContainer')






//se devuelven las fechas en el idioma especificado
const setDate = () => {
    const fecha = new Date()
    dateNumber.textContent = fecha.toLocaleString('es', { day: 'numeric' })
    dateText.textContent = fecha.toLocaleString('es', { weekday: 'long' })
    fechaM.textContent = fecha.toLocaleString('es', { month: 'short' })
    fechaA.textContent = fecha.toLocaleString('es', { year: 'numeric' })
}


//evento de agregar nueva tarea
const addNewTask = event => {
    event.preventDefault()
           const { value } = event.target.taskText;


 if(!value) return


//crear un elemento tipo section
    const task = document.createElement('section')
    task.classList.add('task', 'roundBorder')

//evento listener para cambiar estado al hacer click en funcion changetaskstate
    task.addEventListener('click', changeTaskState)

    //el texto que agrego el usuario por eso el valor "value"
    task.textContent = value

    //prepen para que se ubique al principio de la tabla
    tasksContainer.prepend(task)


    //limpiar el campo al agregar tarea y se pueda agregar una nueva
    event.target.reset()
}

//evento para cambiar estado,agregar o sacar estado DONE.....
const changeTaskState = event => {
    event.target.classList.toggle('done')
    
}

// 2 arrar donde me devuelva las tareas hechas y por hacer, accediendo a sus hijos para alterar sus elementos dentro
const order = () => {
    const done = []
    const toDo = []
    tasksContainer.childNodes.forEach( el => {
        //si la lista tiene el string DONE se agrega el elemento done con el push, si no se agrega al final de array
        el.classList.contains('done') ? done.push(el) : toDo.push(el)
    })


//devuelve primero las que no estan marcadas como DONE
    return [...toDo, ...done]
}



//llamar al boton ordernar  y llamar al array para agregar al taskcontainer uno por uno

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}




setDate()