const mongoose = require('mongoose');
const uri = "mongodb+srv://Abraham4284:computadora77@cluster0.sirjb.mongodb.net/Origen?retryWrites=true&w=majority";


mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});