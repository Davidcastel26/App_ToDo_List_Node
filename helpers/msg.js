require('styled-components');
require('colors');

const showMenu = () => {
    
  return new Promise( resolve => {
        console.clear();
    console.log('==============================='.green);
    console.log(' Select an option'.green);
    console.log('===============================\n'.green);
    //creating a menu
    console.log(`${ '1.'.brightGreen } Set work`);
    console.log(`${ '2.'.brightGreen } Order work`);
    console.log(`${ '3.'.brightGreen } Order work completed`);
    console.log(`${ '4.'.brightGreen } Order pending's work`);
    console.log(`${ '5.'.brightGreen } Complete work(s)`);
    console.log(`${ '6.'.brightGreen } Delete work`);
    console.log(`${ '0.'.brightGreen } Exit\n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question('Select an option now: ', (opt) => {
        // console.log({opt});
        readline.close();
        resolve(opt)
    })
  })
}

//creating a stop for the app and try to 
const pause = () => {
  return new Promise( resolve => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question(`\n Press ${'ENTER'.magenta} to continue \n`, (opt) => {
        readline.close();
        resolve();
    })
  })
}

module.exports = {
    showMenu,
    pause
}