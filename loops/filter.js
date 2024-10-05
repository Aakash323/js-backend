// filter is used in araay looping to check certain condition in the array for all elements

const array12 =[1,2,3,4,5,6,7,8,9,11]
const result = array12.filter((number)=>{
    return number<6
})
console.log(result);


// another example  with objects in araray and using chaining

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

  const mybooks = books.filter((output)=>{
    return output.edition>2005 && output.publish>1990
  })
  .filter((output1)=>{             // chaining is used to check multiple conditions
    return output1.genre=="Non-Fiction"
  })
  console.log(mybooks);
  