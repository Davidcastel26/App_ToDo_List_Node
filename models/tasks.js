const Task = require("./task");

class Tasks {

    _list = {};

    get listArr(){
        
        const listt = [];

        Object.keys(this._list).forEach(key => {
            // console.log(key);
            const task = this._list[key];
            listt.push( task )
        })

        return listt;

    }

    constructor(){
        this._list = {}
    }

    loadTasksFromArray( tasks = []){

        // this._list[task.id] = task;
        tasks.forEach(task => {
            this._list[task.id] = task
        })

    }

    createTask( desc = ''){

        const task = new Task(desc)
        this._list[task.id] = task;
    }

    listComplete(){
        // if is complete
        // 1 should be of color green
        // pending should be in color red
        // 1.alma :: completado | pending  2.       
        this.listArr.forEach( ( work, i ) => {
            
            const idx = `${i + 1}`.green;
            const { desc, completedIn } = work;
            const state = ( completedIn)
                                ? 'Completed'.green
                                : 'Pending'.red;
            // console.log(idx);
            console.log(`${idx} ${desc} :: ${state}`);

        })
    }

    listPendingsComplets( complets = true){
        
        console.log();
        let counter = 0;
        this.listArr.forEach( (task) =>{
            
            const { desc, completedIn } = task;
            const state = ( completedIn )
                                ?'Completed'.green
                                :'Pending'.red;
            
            if(complets){
                //show completes
                if( completedIn ){
                    counter +=1;
                    console.log(`${ (counter + '.').green} ${desc} :: ${completedIn}`);
                }
            }else{
                // show pendings
                if( !completedIn ){
                    counter +=1;
                    console.log(`${ counter.toString().green}. ${desc} :: ${state}`);
                }
            }                 

        })

    }

}

module.exports = Tasks;