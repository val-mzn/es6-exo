
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = async () => new Promise(res => setTimeout(res, 2000));

module.exports = {sleep};