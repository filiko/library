
function getTotalBooksCount(books) {
    
    
  return(books.length)
}

function getTotalAccountsCount(accounts) {
 
 return(accounts.length)
}

function getBooksBorrowedCount(books) {
 let counter = 0 
 
//     if (!books.borrows) counter++
     
 for (let bookNumber in books){
     if  (books[bookNumber].borrows[0].returned == false){
        counter++
     }
     
 }
 return counter
 
}

function getMostCommonGenres(books) {
 
 
//     //sorter into n ame: whichever object array 
function groupByKey(array, tnum) {
return array.reduce((booke, bookers) => {
   return Object.assign(booke, { [bookers[tnum]]:( booke[bookers[tnum]] || [] ).concat(bookers)})
 }, {});
}

//size calculator
Object.sizer = function(bookers) {
var size = 0, tnum;
for (tnum in bookers) {
   if (bookers.hasOwnProperty(tnum)) size++;
}
return size;
};

//What are we looking for
const genres = groupByKey(books, 'genre');

let results = [];

// create the array
for (const tnum in genres) {
results.push({
name: tnum,
 count: Object.sizer(genres[tnum]),
})
}

//sort
 
 results.sort((a,b) => b.count - a.count);
 results.length = 5
console.log(results);
 return results
 
}





function getMostPopularBooks(books) {
  //sorter into n ame: x 
//     console.log(books)
function groupByKey(array, tnum) {
return array.reduce((booke, bookers) => {
   return Object.assign(booke, { [bookers[tnum]]:( booke[bookers[tnum]] || [] ).concat(bookers)})
 }, {});
}

//size calculator
 
Object.sizer = function(bookers) {
let size = 0
 for (let titles in bookers){
     console.log(bookers[titles.length])
     size = size + bookers[titles].borrows.length
 }
     
return size;
};

//What are we looking for
const genres = groupByKey(books, 'title');

let results = [];

// create the array
for (const tnum in genres) {
results.push({
name: tnum,
 count: Object.sizer(genres[tnum]),
})
}

//sort
 
 results.sort((a,b) => b.count - a.count);
 results.length = 5
console.log(results);
 return results
}





function getMostPopularAuthors(books, authors) {

 function groupByKey(array, tnum) {
return array.reduce((booke, bookers) => {
   return Object.assign(booke, { [bookers[tnum]]:( booke[bookers[tnum]] || [] ).concat(bookers)})
 }, {});
}

//size calculator
 
Object.sizer = function(bookers) {
let size = 0
 for (let titles in bookers){
   //  console.log(bookers[titles.length])
     size = size + bookers[titles].borrows.length
 }
     
return size;
};

//What are we looking for
const genres = groupByKey(books, 'authorId');

let results = [];

// create the array
for (const tnum in genres) {
results.push({
name: tnum,
 count: Object.sizer(genres[tnum]),
})
}

//sort
 
 results.sort((a,b) => b.count - a.count);
 results.length = 5
 
 //authors[authorNam].name[0].first + authors[authorNam].name[1].last
 // replace author ID with author name
 for (let authorNam in authors){
     
     for (let namnumber in results)
     if (authors[authorNam].id== results[namnumber].name){
//              results[namnumber]= authors[authorNam].name[0].first + authors[authorNam].name[1].last
 //        console.log(authors[authorNam].name.first)
         results[namnumber].name = `${authors[authorNam].name.first} ${authors[authorNam].name.last}`; 
  //       console.log(results)
         
     }
        
 }
     
//console.log(results);
 return results
}

module.exports = {
getTotalBooksCount,
getTotalAccountsCount,
getBooksBorrowedCount,
getMostCommonGenres,
getMostPopularBooks,
getMostPopularAuthors,
};