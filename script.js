



// codes------
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDay();
    let date = now.getDate();
    let year = now.getFullYear();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    let month = now.getMonth() + 1;

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    date = date < 10 ?
      `0${date}` : date;

    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} ${ampm} - ${date} ${getMonthName(month)} ${year}`;
}

function getMonthName(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month - 1];
}

setInterval(updateClock, 1); // Update every milisecond

// loginPage Function----
var loginSection = document.getElementById('l-page');
    let logVisible = false;
    function loginPage() {
      logVisible = !logVisible;
      loginSection.style.display = logVisible ? 'flex' : 'none';
    }
    
    
 // game changer------
 // admin panel-------
 // login function----

document.getElementById('submit').addEventListener('click', () => {
    const userName = document.getElementById('username').value;
    const userPassword = document.getElementById('password').value;
    
    if(userName=="fenixsdummy" && userPassword=="fenix.log!"){
      document.getElementById('editor-panel').style.display= "flex";
      document.getElementById('l-page').style.display = "none";
    }
    else {
      alert("You Are Not a Admin!");
    }
});

document.getElementById('mitem-4').addEventListener('click', ()=> {
    window.location = "/login.html";
});

