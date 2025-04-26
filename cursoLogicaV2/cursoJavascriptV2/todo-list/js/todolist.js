(function () {
  "use strict";

  const itemInput = document.getElementById("item-input");
  const todoAddForm = document.getElementById("todo-add");
  const todoList = document.getElementById("todo-list");
  const todoListLi = todoList.getElementsByTagName("li");

  let arrTasks = getSavedData();

  // function addEventLi(li) {
  //   li.addEventListener("click", function (e) {
  //     console.log(this);
  //   });
  // }

  function getSavedData() {
    const tasksData = localStorage.getItem("tasks");
  
    if (!tasksData) {
      return [
        {
          name: "Example",
          createAt: Date.now(),
          completed: false,
        },
        {
          name: "Example 2",
          createAt: Date.now(),
          completed: false,
        }
      ];
    }
  
    try {
      const parsed = JSON.parse(tasksData);
      return Array.isArray(parsed) ? parsed : [
        {
          name: "Example",
          createAt: Date.now(),
          completed: false,
        },
        {
          name: "Example 2",
          createAt: Date.now(),
          completed: false,
        }
      ];
    } catch (error) {
      console.error("Erro ao fazer parse das tasks:", error);
      return [];
    }
  }
  

  function setNewData() {
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
  }

  function generateLiTask(task) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const checkButton = document.createElement("button");
    const checkButtonIcon = document.createElement("i");
    const editButton = document.createElement("i");
    const deleteButton = document.createElement("i");
    const containerEdit = document.createElement("div");
    const inputEdit = document.createElement("input");
    const buttonEdit = document.createElement("button");
    const buttonCancel = document.createElement("button");

    checkButton.className = "button-check";
    checkButtonIcon.className = "fas fa-check";
    checkButton.appendChild(checkButtonIcon);
    editButton.className = "fas fa-edit";
    deleteButton.className = "fas fa-trash-alt";
    li.className = "todo-item";
    p.className = "task-name";
    p.textContent = task.name;
    containerEdit.className = "editContainer";
    inputEdit.setAttribute("type", "text");
    inputEdit.className = "editInput";
    inputEdit.value = task.name;
    buttonEdit.className = "editButton";
    buttonEdit.textContent = "Edit";
    buttonCancel.className = "cancelButton";
    buttonCancel.textContent = "Cancel";
    containerEdit.appendChild(inputEdit);
    containerEdit.appendChild(buttonEdit);
    containerEdit.appendChild(buttonCancel);

    if (!task.completed) {
      checkButtonIcon.classList.add("displayNone");
    }

    checkButton.setAttribute("data-action", "checkButton");
    checkButtonIcon.setAttribute("data-action", "checkButton");
    editButton.setAttribute("data-action", "editButton");
    deleteButton.setAttribute("data-action", "deleteButton");
    buttonCancel.setAttribute("data-action", "buttonCancel");
    buttonEdit.setAttribute("data-action", "buttonEdit");

    li.appendChild(containerEdit);
    li.appendChild(checkButton);
    li.appendChild(p);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    // addEventLi(li);

    return li;
  }

  function renderTasks() {
    todoList.innerHTML = "";

    arrTasks.forEach((task) => {
      todoList.appendChild(generateLiTask(task));
    });

    setNewData();
  }

  function addTask(task) {
    arrTasks.push({
      name: task,
      createAt: Date.now(),
      completed: false,
    });

    renderTasks();
  }

  function clickedUl(e) {
    const dataAction = e.target.getAttribute("data-action");
    if (!dataAction) return;

    let currentLi = e.target;
    while (currentLi.nodeName !== "LI") {
      currentLi = currentLi.parentElement;
    }

    const currentLiIndex = [...todoListLi].indexOf(currentLi);

    const actions = {
      editButton: function () {
        [...todoList.querySelectorAll(".editContainer")].forEach((editContainer) => {
          editContainer.style.display = "none";
        })

        const editContainer = currentLi.querySelector(".editContainer")
        editContainer.style.display = "flex";


      },
      deleteButton: function () {
        arrTasks.splice(currentLiIndex, 1);
        renderTasks();
      },
      buttonEdit: function () {
        const value = currentLi.querySelector(".editInput").value;
        arrTasks[currentLiIndex].name = value;
        renderTasks();
      },
      buttonCancel: function () {
        const editContainer = currentLi.querySelector(".editContainer")
        editContainer.style.display = "none";

        currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].name
      },
      checkButton: function () {
        const checkButton = currentLi.querySelector(".button-check");
        const checkIcon = currentLi.querySelector(".button-check i");
        arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed;

        // if (arrTasks[currentLiIndex].completed) {
        //   checkIcon.classList.remove("displayNone");
        // } else {
        //   checkIcon.classList.add("displayNone");
        // }

        renderTasks();
      }
    }

    if (actions[dataAction]) {
      actions[dataAction]();
    }

  }

  todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(itemInput.value);
    addTask(itemInput.value);
    itemInput.value = "";
    itemInput.focus();
  });

  todoList.addEventListener("click", clickedUl);

  renderTasks();
})()
