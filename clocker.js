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

//testInterval = setInterval(testClock,1000);


function backwardsClock() {
    const event = new Date('August 19, 2023 23:15:30');
    const today = new Date();

    const eventMS = event.getTime();
    const todayMS = today.getTime();

    console.log(eventMS, todayMS)

    const difference = eventMS - todayMS;

    console.log(difference);

}

backwardsClock();