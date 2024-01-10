const headName = document.querySelector('.heading_name');
const hoursEl = document.querySelector('.hour_text');
const minutesEl = document.querySelector('.minutes_text');
const secondsEl = document.querySelector('.seconds_text');
const millisecEl = document.querySelector('.milliseconds_text');
const reText = document.querySelector('.remainder_text');
const middlePointer = document.querySelectorAll('.middle_pointer');
const body = document.querySelector('.body');

const hoursClass = document.querySelector('.hour_class');
const minutesClass = document.querySelector('.minutes_class');
const secondsClass = document.querySelector('.seconds_class');
const millisecClass = document.querySelector('.millisecond_class');
const ampm = document.querySelector('.ampm_name');
const copyRight = document.querySelector('.copy_right');

function updateTime() {
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let millisec = new Date().getMilliseconds();

    if (hr > 6 && hr < 18) {
        reText.innerHTML = "It's Day Time Buddy!";
    } else {
        reText.innerHTML = "It's Night Time Buddy!";
        headName.style.color = 'white';
        body.style.backgroundColor = 'black';
        hoursClass.style.backgroundColor = 'white';
        hoursClass.style.color = 'black';
        minutesClass.style.backgroundColor = 'white';
        minutesClass.style.color = 'black';
        secondsClass.style.backgroundColor = 'white';
        secondsClass.style.color = 'black';
        millisecClass.style.backgroundColor = 'white';
        millisecClass.style.color = 'black';
        ampm.style.backgroundColor = 'white';
        ampm.style.color = 'black';
        middlePointer.forEach(element => {
            element.style.color = 'white';
        });
        copyRight.style.color = 'white';
    }

    if (hr > 12) {
        hr = hr - 12;
        ampm.innerHTML = 'PM.';
    } else {
        ampm.innerHTML = 'AM.';
    }

    
    hoursEl.innerHTML = hr;
    minutesEl.innerHTML = min;
    secondsEl.innerHTML = sec;
    millisecEl.innerHTML = millisec;
}


setInterval(updateTime, 1);

updateTime();