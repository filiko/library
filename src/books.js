function findAuthorById(authors, id) {

  
  let found = authors.find((authors) => authors.id == id);
  return found

}

function findBookById(books, id) {
      const result= books.find(books=> books.id == id);
   
  return result
}

function partitionBooksByBorrowedStatus(books) {
                         let booksp= books
 
    const array1= booksp.filter((bookp) => bookp.borrows[0].returned == false)
    console.log(array1)
    const array2= booksp.filter((bookp) => bookp.borrows[0].returned == true)
    let result = [array1,array2]
    return result
    
}

function getBorrowersForBook(book, accounts) {
     //array doesnt work, get borrows from input
  let { borrows } = book;

     //map amount of times checked out
let result = borrows.map(({ id, returned })=> {
 // find account checked out
 const account = accounts.find(account => account.id == id);

 // combine, books.returned = true
 return {
   ...account,
   returned,
 };
});
// console.log(result)
 result.length= 10
return result

//   //  console.log(book)
//   //  console.log(accounts)
//     let bookg= book.borrows
//  //  console.log(bookg)
//  //   console.log(bookg[0])
//  //   console.log(bookg)
//   //  console.log(bookg[0].id)
    
//     let finder = []
//     let result = []
//     let resultt = []
//     let temporary = {}
//     let eyeD= {}
//     let id= {}
// //     let statuss = {}
//      let status= {}
//     //account checked out array
//     for (let quantity in bookg){
        
//        finder= accounts.filter((bookId)=> bookId.id == bookg[quantity].id);
//                    //         console.log(finder)
//         console.log(finder)
// //         finder.returned= true
// //         console.log(finder)
//         eyeD= {id:finder[0].id}
        
//    delete finder[0].id
// //         console.log(eyeD)
// //         id=eyeD
//    //     console.log(id)
// //         statuss= bookg[quantity].returned
//         status= {returned:true}
//    //     finder= [id,...finder]
// //         finder[quantity].returned= true
// //         console.log(finder)
// //         temporary[quantity]={id}
// //         temporary.returned= true
// //      temporary[quantity]={temporary,...finder}
//         result[quantity] = [eyeD, status, ...finder]
// //         finder= [finder,...finder]
// //                        //       console.log(result)
        
// //    result = [result,...finder]
//     }
//   //  console.log(result[0])    
//    console.log(result)
//     return result
    
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
