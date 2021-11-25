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

    deleteTast(id = ''){

        if( this._list[id]){
            delete this._list[id]
        }

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
                    console.log(`${ (counter + '.').green} ${desc} :: ${completedIn.green }`);
                }
            }else{
                // show pendings
                if( !completedIn ){
                    counter +=1;
                    // console.log(`${ counter.toString().green}. ${desc} :: ${state}`);
                    console.log(`${ (counter + '.').green}. ${desc} :: ${state}`);
                }
            }                 

        })

    }

    toggleCompletes( ids = []){

        ids.forEach( id => {

            const task = this._list[id];

            if( !task.completedIn ){
                task.completedIn = new Date().toISOString()
            }

        })

        this.listArr.forEach( task =>{

            if(!ids.includes(task.id) ){
                const task = this._list[task.id];
                task.completedIn = null;
            }

        })

    }
}

module.exports = Tasks;