
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