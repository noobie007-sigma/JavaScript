 //Destructuring of Objects: It allows us to extract values from objects and assign them to variables in a more concise and convinient way.
 const course = {
    courseName: "JS-Hindi",
    courseInstructor: "Hitesh Choudhary",
    coursePrice: 999
 }

 const {courseInstructor: mentor, courseName: playlist, coursePrice} = course
 console.log(mentor);
 //Baar baar course.courseInstructor likhne ki jagah ab directly mentor (key name) likh ke access kar skta hu. Agar key name bhi bada hai to 'key_name: short_key_name'..iss syntax ki tahat, uss bade naam ki chota naam de skte hain.
 console.log(coursePrice);
 console.log(playlist);

 //If there is a nested object, then..
 const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        pincode: 100001
    }
 }
 const {name, age, address: {city, pincode}} = person
 console.table([name, age, city, pincode])

 //APIs in JS: In earlier times, values which used to come from APIs through backend calls used to be in XML format But now they come in JSON format. JSON is nothing but an object without any name. Keys in a JSON are written explicitly inside "".
//https://api.github.com/users/hiteshchoudhary


//Real life use cases of Object destructuring is in ReactJS.:
/*
const navbar = (company) => {

}
navbar(company = "hitesh")
*/
