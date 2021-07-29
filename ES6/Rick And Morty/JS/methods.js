export const myFunction = () => {
  console.log('hello from myFunction()');
}

export const customFetch = (url) => {
  return fetch(url)
          .then(result => result.json())
          .catch(error => {
              console.log(error);
              alert('Error occured, please reload the page');;
          });
} 