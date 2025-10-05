// let arr = ['hello', 'go', 'come'];

// function addTodo(){
//   const input = document.querySelector('#input-box');
//   let task = input.value;
//   arr.push(task);
//   console.log(arr);
//   input.value = "";
// }

// let htmlPart_1 = "";

// for (let i = 0; i< arr.length; i++){
//   const task = arr[i];
//   const showScreen = `<div class="bg-orange-500 p-4 rounded-lg mt-5 flex justify-between">
//         <p class="text-white text-xl font-bold mt-3">${task}</p>
//         <button class="bg-red-600 text-white font-bold rounded-lg p-4 hover:bg-red-700 ">Delete</button>`
//   htmlPart_1 += showScreen;
// }

// let showTask = document.querySelector('#show-task');
// showTask.innerHTML = htmlPart_1;

// let arr = [];

// function addTodo() {
//   const input = document.querySelector('#input-box');
//   const task = input.value.trim();

//   if (task === "") return; // prevent empty input

//   arr.push(task);
//   input.value = "";
//   renderTasks(); // refresh task display
// }

// function renderTasks() {
//   const showTask = document.querySelector('#show-task');
//   let htmlPart_1 = "";

//   for (let i = 0; i < arr.length; i++) {
//     const task = arr[i];
//     const showScreen = `
//       <div class="bg-orange-500 p-4 rounded-lg mt-5 flex justify-between items-center">
//         <p class="text-white text-xl font-bold">${task}</p>
//         <button 
//           class="bg-red-600 text-white font-bold rounded-lg p-2 hover:bg-red-700"
//           onclick="deleteTask(${i})"
//         >
//           Delete
//         </button>
//       </div>
//     `;
//     htmlPart_1 += showScreen;
//   }

//   showTask.innerHTML = htmlPart_1;
// }

// function deleteTask(index) {
//   arr.splice(index, 1);
//   renderTasks(); // refresh task list
// }

// // render once initially
// renderTasks();


let arr =[];

function takeTask(){
  const task = document.querySelector('#input-box');
  let taskName = task.value.trim();
  if (taskName === "") return;
  task.value = "";
  arr.push(taskName);
  console.log(arr);
  showTask();
  saveTodo();
}

function showTask(){
  let showingTask = '';

for (let i = 0;i < arr.length; i++){
  const todo = arr[i];
  showingTask +=`<div class="bg-orange-500 p-4 rounded-lg mt-5 flex justify-between items-center">
              <p class="text-white text-xl font-bold">${todo}</p>
              <div class="flex gap-2">
               <button 
                class="bg-green-600 text-white font-bold rounded-lg p-2 hover:bg-green-700"
                onclick="updateTask(${i})">
                Update
            </button>
             <button 
                class="bg-red-600 text-white font-bold rounded-lg p-2 hover:bg-red-700"
                onclick="deleteTask(${i})">
                Delete
            </button>
            </div>
      </div>
    `;
}
  const visableTask = document.querySelector('#show-task');
  visableTask.innerHTML = showingTask;
}

function keyReading(event){
  if(event.key === "Enter"){
    takeTask();
  }
  return;
}

let deleteTask = (index)=>{
  arr.splice(index,1);
  showTask();
  saveTodo();
}

let updateTask = (index)=>{
  const newTask = prompt("Enter the updated task:");
  if (newTask && newTask.trim() !== "") {
    arr[index] = newTask.trim();
    showTask();
    saveTodo();
  }
}

let saveTodo = ()=>{
  localStorage.setItem('task',JSON.stringify(arr));
}

let getSaveTodo =()=>{
  const data = localStorage.getItem('task');
  if(data)arr =JSON.parse(data);
}

getSaveTodo();

showTask();