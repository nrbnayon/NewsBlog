const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://nrbnayon:nrbnayon@nbapp.inund6i.mongodb.net/news-blog?retryWrites=true&w=majority')
    .then(() => console.log(" DB Connected "))
    .catch((err) => console.log("Db connection Failed ", err.message || err));
        // .connect('mongodb://127.0.0.1:27017/news-blog')