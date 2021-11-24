//requires
const fs = require('fs');

//global var
const file = './db/data.json';

const  saveDB = (data) => {
    
    fs.writeFileSync( file, JSON.stringify(data) );

}

const readDB = () => {

    if(!fs.existsSync(file)){
        return null;
    }

    const info = fs.readFileSync( file, { encoding: 'utf-8'});
    //if we don't use parse we won't get the array
    const data = JSON.parse( info )
    console.log(data);

    return data;
}

module.exports = {
    saveDB,
    readDB,

}