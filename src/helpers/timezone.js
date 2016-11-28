export function getTimeZone(time, tz) {
    return time.tz(tz).format('h:mm A z');
}
