

function findAccountById(accounts, id) {   const found = accounts.find((accounts) => accounts.id=== id);
  console.log(found)
  return found
  }

function sortAccountsByLastName(accounts) {
  
  
  accounts.sort((accA, accB) => (accA.name.last > accB.name.last ? 1 : -1));
console.log(accounts);
  return accounts
}


function getTotalNumberOfBorrows(account, books) {

  console.log( books[0].borrows[0].id)
  const booked = books.map((borrowsArray) => borrowsArray.borrows);
 
  
console.log(booked)
  console.log(booked.length)
 var counter = 0
  for ( let namer in booked) {

for (let i = 0; i < booked[namer].length; i++) {
  if (books[namer].borrows[i].id == account.id)
    {
      counter = counter +1
    }
    
}
    
  }
  return counter
}

function getBooksPossessedByAccount(account, books, authors) {
  
  
  //author ID finder
  
  function authorId(authors, id) {  
//    console.log(authors)
//    console.log(id)
    var found = {}
    for (let namer in authors) {
      if (authors[namer].id == id)
      found = { author: authors[namer]}
    }
   
 //console.log(found)
  return found
  }
  
  
  //  console.log( books[0].borrows[0].returned)
  const booked = books.map((borrowsArray) => borrowsArray.borrows);
 
  
// console.log(booked)
//   console.log(booked.length)
 var counter = 0
 var foundBook= {}
  for ( let namer in booked) {
for (let i = 0; i < booked[namer].length; i++) {
  if (books[namer].borrows[i].id == account.id && books[namer].borrows[i].returned == false)
    {
 
      foundBook= (books[namer])
    }
    
}
    
  }
  
  let authored= authorId(authors,foundBook.authorId);
  
 // console.log(authored)
 // console.log(authored)
  
  
  //combine everything
  
  let result = {
    ...foundBook,
    ...authored,
//     ...borrowedBack
  }
  
  
 console.log(result)
  return [result]
  
 
}




module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};







