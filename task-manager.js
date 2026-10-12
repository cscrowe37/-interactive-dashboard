
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