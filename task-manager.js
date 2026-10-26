
const myTasks = [];

//make list element 
const listElement = document.createElement("ul");

//assign id and append
const taskList = document.getElementById("task-list");
listElement.id="user-tasks";
taskList.appendChild(listElement);

//add task logic to button
const clickbutdoc = document.getElementById("add-task");
clickbutdoc.addEventListener("click",addToListUL);

function addToListUL(){
    //get and store string from input field  id="task-name"
    const inputString = document.getElementById("task-name").value;
    //.push() string to myTask
    myTasks.push(inputString);
    //create list item with document.createElement("li")
    const outputstring = document.createElement("li");
    //append list item to <li> 
    outputstring.innerText = myTasks;
    //append <li> to <ul>
    listElement.appendChild(outputstring);
}   





const myBigTasks = [];

//list element
const listElement2 = document.createElement('ul');
//id and append
const bigTasklist = document.getElementById("big-task-list");
listElement2.id = 'big-user-tasks';
bigTasklist.appendChild(listElement2);
class task{
    constructor(id,name,priority,isImportant,isCompleted=false){
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.isImportant = isImportant;
        this.isCompleted = isCompleted;
    }

}
let id = 0

function addToBigList(){
    const task_name2 = document.getElementById('task-name2').value;
    const priority2 = document.getElementById('prior').value;
    const important2 = document.getElementById('checkimport');
    const checked = important2.checked;
    //fuction to add tasks
    //make important tasks highlighted red
    let taskadd = new task(id,task_name2,priority2,checked);
    
    myBigTasks.push(taskadd);

    //create list item with document.createElement("li")
    const outputstring = document.createElement("li");
    outputstring.id = 'bigTaskInst';
    //append list item to <li> 
    outputstring.innerText = JSON.stringify(myBigTasks[id].name);
    //turn new <li> to be highlighted if important
    if (checked){
        outputstring.style.background = 'red';
    }
    //make and append done button
    const doneButton = document.createElement('button');
    doneButton.style.height = '15px';
    outputstring.appendChild(doneButton);
    //append <li> to <ul>
    listElement2.appendChild(outputstring);
    doneButton.addEventListener('click',function (event){
    outputstring.style.textDecoration = "line-through";
    })
    
    id +=1 ;


    //log task
    console.log(JSON.stringify(myBigTasks));
}


function markTaskComplete(){
    //mark each task as complete
    //this has to be a DOM node
    //change the task so it has a strikethough
    //text-decoration: line-through;
    



    //log task
    console.log(JSON.stringify(myBigTasks));
}

function deleteTaskList(){
    //delete 'big-task-list' list
    counting = listElement2.children.length;
    console.log(counting);
    while (counting > 0){
        listElement2.removeChild(listElement2.firstChild);
        counting -= 1;
    
    }
    //log task
    console.log(JSON.stringify(myBigTasks));
}

document.getElementById('add-big-task').onclick = function(){
    //make a task with task constructor
    addToBigList();


}

document.getElementById('delete-button').onclick = function(){
    //delete lists shown
    deleteTaskList();
}











function weeklyGoal(userName,dailyGoal,bonusTasks) {
    // Weekly Goal: Calculate the total weekly task goal for a user.
    userName = document.getElementById("name").value;
    dailyGoal = document.getElementById("dailytarget").value;
    bonusTasks = document.getElementById("bonus").value;
    console.log('debug 19 ' + userName + dailyGoal + bonusTasks);

    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = dailyGoal * 5; 

    // Add bonusTasks to weeklyGoal. 
    let totalGoal = Number(weeklyGoal) + Number(bonusTasks); 

    // Output results to web page
    let output = ("User: " + userName + "<br>");
    output += ("Total Weekly Goal:  "+ totalGoal);
    document.getElementById("goal-message").innerHTML = output;
}

const element = document.getElementById("goal-btn");
element.addEventListener("click",weeklyGoal)