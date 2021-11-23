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

    createTask( desc = ''){

        const task = new Task(desc)
        this._list[task.id] = task;
    }

}

module.exports = Tasks;