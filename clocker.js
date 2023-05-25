function testClock() {
    let clockInit = new Date();
    let localTime = clockInit.toLocaleTimeString();

    let hours = clockInit.getHours() < 10 ? `0${clockInit.getHours()}` : clockInit.getHours();
    let minutes = clockInit.getMinutes() < 10 ? `0${clockInit.getMinutes()}` : clockInit.getHours();
    let seconds = clockInit.getSeconds() < 10 ? `0${clockInit.getSeconds()}`: clockInit.getSeconds();


    process.stdout.write(`${hours.toString()}:${minutes.toString()}:${seconds.toString()} \r`);
    

    return {
        hours,
        minutes,
        seconds
    }

}

testInterval = setInterval(testClock,1000);