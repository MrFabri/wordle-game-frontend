export default (endTime: Date, startTime: Date): string => {
    let seconds = Math.floor((endTime.getTime() - (startTime.getTime())) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

    let secondsString = seconds.toString();
    let minutesString = minutes.toString();
    let hoursString = hours.toString();

    if (hoursString.length === 1) {
        hoursString = `0${hours}`
    }
    if (minutesString.length === 1) {
        minutesString = `0${minutes}`
    }
    if (secondsString.length === 1) {
        secondsString = `0${seconds}`
    }

    const duration = `${hoursString}:${minutesString}:${secondsString}`
    return duration;
}