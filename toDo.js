const addTaskButton = document.getElementById("addTask");

addTaskButton.addEventListener("click", () => {
    const taskInput = document.getElementById("taskName");
    const taskName = taskInput.value.trim();

    if (taskName) {
        addTaskToColumn("toDo", taskName);
        taskInput.value = "";
    }
});

function addTaskToColumn(columnId, taskName) {
    const column = document.getElementById(columnId);
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
    ${taskName}
    <div>
        <button class="delete" title="Delete" onclick="deleteTask(event)">🗑️</button>
    </div>
    `
    column.appendChild(taskElement);
}

function deleteTask(event) {
    const taskElement = event.target.closest(".task");
    taskElement.remove();
}