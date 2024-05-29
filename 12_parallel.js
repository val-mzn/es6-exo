/**
 * Utilisez la fonction Promise.all pour exécuter 3 appels API en parallèle
 * 
 * urls:
 * - https://jsonplaceholder.typicode.com/todos/1
 * - https://jsonplaceholder.typicode.com/todos/2
 * - https://jsonplaceholder.typicode.com/todos/3
 * 
 * Retournez un tableau contenant les 3 résultats
 * 
 * Vous pouvez utiliser votre fonction apiResponse créé précedement: const {apiResponse} = require("./11_async");
 * 
 * documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
*/

const {apiResponse} = require("./11_async");

const parallel = async () => {
    let promises = [
        apiResponse('https://jsonplaceholder.typicode.com/todos/1'),
        apiResponse('https://jsonplaceholder.typicode.com/todos/2'),
        apiResponse('https://jsonplaceholder.typicode.com/todos/3')
    ]
    await Promise.all([...promises]).then((results) => {
        return results
    })
}
console.log('parallel(): ', parallel())
module.exports = {parallel};
