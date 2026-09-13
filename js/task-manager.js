

userName = document.getElementById("name");
dailyGoal = document.getElementById("dailytarget");
bonusTasks = document.getElementById("bonus");


documnet.getElementById("goal-btn").onclick 

function weeklyGoal(userName,dailyGoal,bonusTasks) {
    // Weekly Goal: Calculate the total weekly task goal for a user.


    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = dailyGoal * 5; 

    // Add bonusTasks to weeklyGoal. 
    let totalGoal = weeklyGoal + bonusTasks; 

    // Output results to web page
    let output = ("User: " + userName + "<br>");
    output += ("Total Weekly Goal:  "+ totalGoal);
    document.getElementById("goal-message").innerHTML = output;
    preventDefault();

}

weeklyGoal(userName,dailyGoal,bonusTasks);
Element.addEventListener("goal-btn",weeklyGoal);