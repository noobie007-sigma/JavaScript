//Date() is an object in JS which represents a single moment in a time. It has reference from !st January 1970.

const myDate = new Date();
console.table([myDate.toString(), myDate.toLocaleDateString(), myDate.toISOString(), myDate.toDateString(), myDate.toJSON()]); //various readable formats to display time.

console.table([myDate.getDay(), myDate.getDate(), myDate.getMonth(), myDate.getFullYear(), myDate.getHours(), myDate.getMinutes(), myDate.getSeconds(), myDate.getTime()]);
//getDay() returns the index of day, starting from 0
//getMonth() return the index of month, starting from 0
//getTime() return the number of miliseconds passed since 1 Jan 1970.

const date = myDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZoneName: " long"
})
console.log(date);
//toLocaleString() is used to convert date and time to a format which is appropriate for the user's Locale.