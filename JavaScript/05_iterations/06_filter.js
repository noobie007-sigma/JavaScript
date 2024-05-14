const coding = ["js", "ruby", "java", "C", "python"]

const values = coding.forEach( (item) => {
    console.log(item)
    return item
})
console.log(values) //undefined: It implies that forEach loop doesn't return any value.

//But many times situation arises where we have to return a value after performing some opeartion on that element. So, for that: 


const myNums = [1, 2, 3, 4, 5, 6, 7]
const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);
//filter returns the value after performing some operation. A callback function is executed in each iteration, and that function evaluates to a boolean value- true or false. If true, that value gets passed to the array.

//This same task can be done using forEach loop also, but in a different way:
const myNums2 = [1, 2, 3, 4, 5, 6, 7]
const newNums2 = []
myNums2.forEach( (num) => {
    if(num > 4){
        newNums2.push(num)
    }
})
console.log(newNums2);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//Filter History books
// const userBooks = books.filter((book) => {
//     if(book.genre == "History") return book
// })
const userBooks = books.filter((book) => book.genre === 'Fiction')
console.log(userBooks);

//Filter books that were published after 2000 having History genre
const userBooks2 = books.filter((book) => (book.publish >= 1995 && book.genre === 'History'))
console.log(userBooks2)


//filter(): filter() is a built-in mehtod in JS available for arrays. It creates a new array containing all elements for which the provided function returns true. Original array remains unchanged.
//In filter() also, just like in forEach(), we get not only the element, but also its index and the whole array. We can use these 3 in our callback function.

//Important Points: 
/**
 * The callback function passed to filter() should be a pure function, i.e. it should not modify the original array.
 * The return value of the callback function should be a Boolean.
 */