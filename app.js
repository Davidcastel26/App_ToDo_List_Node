//node pakages
require('colors');

// modules 
const { showMenu, pause } = require('./helpers/msg');


console.clear()

const main = async() => {
    console.log('hola mundo');

    let opt = ''

    do{
       opt = await showMenu();
       console.log( opt );
       if(opt !== '0' ) await pause()
    }while(opt !== '0')
    // pause()
}

main();