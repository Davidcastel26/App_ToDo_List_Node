require('styled-components');

require('styled-components');

require('colors');

const showMenu = () => {

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
}

module.exports = {
    showMenu
}