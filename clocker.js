function testClock() {
    let clockInit = new Date();
    let localTime = clockInit.toLocaleTimeString();

    let hours = clockInit.getHours();
    let minutes = clockInit.getMinutes();
    let seconds = clockInit.getSeconds();

    return {
        hours,
        minutes,
        seconds
    }
}


const {hours, minutes, seconds} = testClock();

console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(testClock());