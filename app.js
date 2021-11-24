//node pakages
require('colors');

// modules 
// const { showMenu, pause } = require('./helpers/msg');
const { 
    inquirerMenu, 
    pause,
    readInput } = require('./helpers/inquirer');

const { saveDB, 
        readDB } = require('./helpers/recordFiles');
// const Task = require('./models/task');
const Tasks = require('./models/tasks');

// console.clear()

const main = async() => {
    console.log('hola mundo');

    let opt = '';
    const tasks = new Tasks();
    // const task = new Task()

    //to read the db 
    const tasksDB = readDB()

    if( tasksDB ){
        // set tasks
        tasks.loadTasksFromArray()
    }

    // await pause()

    do{
        //opt are the options
        //print the manu
       opt = await inquirerMenu();
       console.log( {opt} );
    
        switch( opt ) {
            case '1':
                //create option
                const desc = await readInput('Description:')
                // console.log(desc);
                tasks.createTask(desc)
            break;
            case '2':
                console.log(tasks.listArr);
            break;
        }
       
        saveDB( tasks.listArr)

    //    tasks._list[tasks.id] = task;
    //    console.log(tasks);
        
        await pause()

    }while(opt !== '0')
    // pause()
}

main();

//51
/**
 * randy 1
 * andrea 2
 * christian 3
 * david 4
 * 
 * carlos 5
 * novia del carlos 6
 * grace 7
 * kike 8
 * julio 9
 */