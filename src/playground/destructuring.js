// const person = {
//   name: 'Martin',
//   age: 40,
//   location: {
//     city: 'Toronto',
//     temp: 28
//   }
// }

// console.log(`${person.name} age is ${person.age}.`)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'self-publisher' } = book.publisher;

// console.log(publisherName);


const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`)
