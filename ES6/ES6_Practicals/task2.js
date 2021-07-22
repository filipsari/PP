// 2.	Write a function that calculates sale tax that should be paid for the product of the given price. Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
// 	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
//	Output2: [ 24, 20 ] // tax only

const products = [{ name: "Banana", price: 120}, { name: "Orange", price: 100}]

const products_with_tax = products.map( (everyObjectElement) => {   // element is 0:{object}  1:{object} from an array products 

    const { price: thatValue } = everyObjectElement; // Destructuring assignment- take part of the object ES6

    // const thatValue = everyObjectElement.price;   // the old way ES5

    const newProd = {   // new object 
        ...everyObjectElement, //spread operator
        priceWithTax: thatValue * 1.2,
        tax: thatValue * 0.2
    }

    return newProd
})

console.log(products_with_tax);

/* 
everyObjectElement is:
{ name: 'Banana', price: 120 }
{ name: 'Orange', price: 100 }*/

