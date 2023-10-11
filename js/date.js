window.document.onload = startTime();


const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","November","Dec"];

const d = new Date();

let day = weekday[d.getDay()];
let year = d.getFullYear();
let m = month[d.getMonth()];

let hour = d.getHours();
let minute = d.getMinutes();

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

document.getElementById("year").innerText = "< " + year + " />"
document.getElementById("weekend").innerText = day;
document.getElementById("date").innerText = d.getDate();
document.getElementById("month").innerText = m;