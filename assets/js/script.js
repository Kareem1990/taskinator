var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);



//lesson 2 code
// // var buttonEl = document.querySelector("#save-task"); 
// var formEl = document.querySelector("#task-form");
// var tasksToDoEl = document.querySelector("#tasks-to-do"); 

// var createTaskHandler = function(event) { 

//     event.preventDefault();
//  //1 choosing the element and create the new element inside it


// //capturing the input content by the user//

//   var taskNameInput = document.querySelector("input[name='task-name']").value;
//   var taskTypeInput = document.querySelector("select[name='task-type']").value;


//           //new task info declaration//

// // create list item
// var listItemEl = document.createElement("li");
// listItemEl.className = "task-item";

// // create div to hold task info and add to list item
// var taskInfoEl = document.createElement("div");
// // give it a class name
// taskInfoEl.className = "task-info";
// // add HTML content to div
// taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

// listItemEl.appendChild(taskInfoEl);

// // add entire list item to list
// tasksToDoEl.appendChild(listItemEl);

//                    //// task name declarations///
                   
//   var listItemEl = document.createElement("li"); //for creating new li inside the ul//
  
//   //2 applying css to the newly created element and adding the conted addy by the user to the li element
//   listItemEl.className = "task-item"; //for Css class//
//   listItemEl.textContent = taskNameInput; //adding content to the li//
//   };

// //the "submit" is the event lisnterer and the createTaskHandler is the event handler
//   formEl.addEventListener("submit", createTaskHandler);

// // buttonEl.addEventListener("click", createTaskHandler);



