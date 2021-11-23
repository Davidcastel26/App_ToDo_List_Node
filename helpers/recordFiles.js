//requires
const fs = require('fs')

//global var
const file = './db/data.json'

const  saveDB = (data) => {
    
    fs.writeFileSync( file, JSON.stringify(data) );


}

const readDB = () => {
}

module.exports = {
    saveDB
}