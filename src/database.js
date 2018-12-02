const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/node-notes-db', {
  useCreateIndex: true,
  useNewUrlParser: true
  //useFindAndModify: true
})
   .then(db => console.log('DB is connected'))
   .catch(err => console.error(err));

   