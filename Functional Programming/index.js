/*********************************
 * Functional Programming
 **********************************/

// Imperative

 const array = [];

 for (let i = 0; i < 10; i++) {
 array.push(i);
 }
 

 //Declarative
 const range = (from, to) => {
  const array = [];
  for (let from = 0; from < to; from++) {
  array.push(from);
  }
  
  return array;
  };
  
  const array = range(0, 10);

  
  //Mutable

  const book = {
    title: "Game of Thrones",
    author: "George R. R. Martin",
    rating: 4
    };
    
    const rate = (book, rating) => {
    book.rating = rating;
    return book;
    };

    
    // Immutable

    const book = {
      title: "Game of Thrones",
      author: "George R. R. Martin",
      rating: 4
      };
      
      const rate = (book, rating) => {
      return {...book, rating }
      };
      

      // Impure 

      const johnDoe = {
        name: "John Doe",
        canRead: false,
        canWrite: false
        };
        
        const selfEducate = () => {
        johnDoe.canRead = true;
        johnDoe.canWrite = true;
        
        return johnDoe;
        };

        // Pure but mutable


        const johnDoe = {
          name: "John Doe",
          canRead: false,
          canWrite: false
          };
          
          const selfEducate = person => {
          person.canRead = true;
          person.canWrite = true;
          
          return person;
          };
          