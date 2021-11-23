//node pakages
require('colors');

// modules 
// const { showMenu, pause } = require('./helpers/msg');
const { inquirerMenu, pause } = require('./helpers/inquirer');
const Task = require('./models/task');
const Tasks = require('./models/tasks');

console.clear()

const main = async() => {
    console.log('hola mundo');

    let opt = ''

    do{
    //    opt = await inquirerMenu();
    //    console.log( {opt} );
       const tasks = new Tasks()
       const task = new Task('something here')
       
       tasks._list[tasks.id] = task;
        
       console.log(tasks);
        
        await pause()

    }while(opt !== '0')
    // pause()
}

main();

//51