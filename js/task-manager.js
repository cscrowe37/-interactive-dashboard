




        Element.addEventListener("goal-btn",weeklyGoal);

        function weeklyGoal(userName,dailyGoal,bonusTasks) {
        // Weekly Goal: Calculate the total weekly task goal for a user.
        
        // Declare variables and values
        let userName = "Jane Doe";
        let dailyGoal = 5; 
        let bonusTasks = 2; 
 
        // Output message to console
        // FIXED: added missing parathesis to consol.log
        console.log("Checking status for: " + userName); 
 
        // Calculate weekly goal based on number of workdays (5) per week
        //FIXED: dailyGoal was misspelled, now spelled correctly
        //FIXED: multiplier now 5 
        let weeklyGoal = dailyGoal * 5; 
 
        // Add bonusTasks to weeklyGoal. 
        // Note: Check for data type issues
        //FIXED: incorect math now addtion
        let totalGoal = weeklyGoal + bonusTasks; 
 
        // Output results to web page
        let output = ("User: " + userName + "<br>");
        //FIXED: made it write totalGoal value rather than a string
        output += document.write("Total Weekly Goal:  "+ totalGoal);
        output += document.getElementById("goal-message").innerHTML;
        document.getElementById("username").value = "Jane Doe";
        document.getElementById("dailyGoal").value = 5;
        document.getElementById("bonusTasks").value = 2;
        }