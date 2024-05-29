
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = async () => {
    await delay(2000);
};

module.exports = {sleep};