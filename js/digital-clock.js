


const displayTime = () =>{

    const date = new Date();

    let calender = date.toLocaleDateString();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let session = 'AM';

    if(hours>12){
        session = 'PM';
    }
    if(hours>13)
        hours -=12;

    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }



    const clockcontainer = document.getElementById("clock-face");

    const time = hours + ':' + minutes + ":" + seconds + " " + session;
    clockcontainer.innerHTML = time;

    const calendercontainer = document.getElementById("calender-date");
    calendercontainer.innerHTML = date;
}






setInterval(displayTime,1000)