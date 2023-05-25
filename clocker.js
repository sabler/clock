function testClock() {
    let clockInit = new Date();
    let localTime = clockInit.toLocaleTimeString();

    let hours = clockInit.getHours();
    let minutes = clockInit.getMinutes();
    let seconds = clockInit.getSeconds();


    process.stdout.write(`${hours.toString()}:${minutes.toString()}:${seconds.toString()} \r`);
    

    return {
        hours,
        minutes,
        seconds
    }

}


const {hours, minutes, seconds} = testClock();




testInterval = setInterval(testClock,1000);