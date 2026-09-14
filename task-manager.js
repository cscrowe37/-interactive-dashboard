    //userName = document.getElementById("name");
    //dailyGoal = document.getElementById("dailytarget");
    //bonusTasks = document.getElementById("bonus");
//documnet.getElementById("goal-btn").onclick 

function weeklyGoal(userName,dailyGoal,bonusTasks) {
    // Weekly Goal: Calculate the total weekly task goal for a user.
    userName = document.getElementById("name").value;
    dailyGoal = document.getElementById("dailytarget").value;
    bonusTasks = document.getElementById("bonus").value;
    console.log('debug 18 ' + userName + dailyGoal + bonusTasks);

    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = dailyGoal * 5; 

    // Add bonusTasks to weeklyGoal. 
    let totalGoal = weeklyGoal + bonusTasks; 

    // Output results to web page
    let output = ("User: " + userName + "<br>");
    output += ("Total Weekly Goal:  "+ totalGoal);
    document.getElementById("goal-message").innerHTML = output;

}

//weeklyGoal(userName,dailyGoal,bonusTasks);
const element = document.getElementById("goal-btn");
element.addEventListener("click",weeklyGoal)
//document.getElementById("goal-btn").addEventListener("goal-btn",weeklyGoal(userName,dailyGoal,bonusTasks));