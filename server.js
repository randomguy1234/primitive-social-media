const express= require('express');
const mongoose= require('mongoose');

const app= express();
const PORT= process.env.PORT || 3010;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//line for mongoose connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/psm-db', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

//line to use routes
app.use(require('./routes'));

app.listen(PORT, () => console.log(`Connected to the localhost at: ${PORT}`));