const mongoose = require('mongoose');

let mongoConfig =()=>{
    mongoose.connect('mongodb+srv://newxm:J$z5njKez7!J-h5@cluster0.3u2lkfh.mongodb.net/new-xm?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Database Connected!'));  
}

module.exports = mongoConfig;