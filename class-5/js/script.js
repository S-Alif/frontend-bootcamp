// keep the tasks inside the array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [] // get the tasks from local storage

// filter 
let currentFilter = "all"

// get the elements - input
const taskTitle = document.getElementById("taskTitle")
const taskDesc = document.getElementById("taskDesc")

// get other elements
const addTaskBtn = document.getElementById("addTaskBtn") // submit button
const taskList = document.getElementById("taskList")  // task list
const taskCount = document.getElementById("taskCount") // task count
const filterBtns = document.querySelectorAll(".filter-btn") // filter buttons

// save tasks to local storage
const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

// show tasks on the list / render tasks
const renderTasks = () => {
    console.log(currentFilter)

    // clear the task list
    taskList.innerHTML = ""
    let filteredTasks = tasks // by default all tasks

    if (currentFilter === "active") {
        filteredTasks = tasks.filter(task => !task.completed)
    }
    else if (currentFilter === "completed") {
        filteredTasks = tasks.filter(task => task.completed)
    }

    // loop through the tasks and create the HTML
    filteredTasks.forEach((item) => {
        const li = document.createElement("li")
        li.className = `task-item ${item.completed ? "completed" : ""}` // completed হলে CSS class add করা হবে

        // টাস্কের HTML কন্টেন্ট তৈরি
        li.innerHTML = `
      <div>
        <strong>${item.title}</strong><br/>
        <small>${item.description}</small><br/>
      </div>
      <div>
        <button onclick="toggleTask('${item.id}')">✔️</button>
        <button onclick="deleteTask('${item.id}')">❌</button>
      </div>
    `
        taskList.appendChild(li) // taskList-এ যোগ করা
    })

    // update the task count
    const remaining = tasks.filter(task => !task.completed)
    taskCount.textContent = `${remaining.length} task(s) left`
}

// add task
const addTask = () => {
    // get the values from input
    const title = taskTitle.value.trim()
    const description = taskDesc.value.trim()

    // alert(`${title} - ${description}`)
    // alert(Date.now())

    const task = {
        id: Date.now().toString(),
        title: title,
        description: description,
        completed: false
    }

    // add the task to the array using array push method
    tasks.push(task)
    saveTasks() // save the tasks to local storage
    console.log(tasks)

    renderTasks() // render the tasks

    // clear the input fields
    taskTitle.value = ""
    taskDesc.value = ""
}

// task complete toggle
const toggleTask = (id) => {
    console.log(id)
    tasks = tasks.map((task) =>{
        return task.id === id ? { ...task, completed: !task.completed } : task
    })
    saveTasks() // save the tasks to local storage
    renderTasks()
}

// delete task
const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== id)
    saveTasks() // save the tasks to local storage
    renderTasks()
}

// submit button on click
addTaskBtn.addEventListener("click", addTask)

// filter tasks when filter button is clicked
filterBtns.forEach((btn) => {
    console.log("Filter changed to:", btn.id)
    btn.addEventListener("click", () => {
        currentFilter = btn.id // change filter
        renderTasks()
    })
})

renderTasks() // render the tasks for the first time