const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/news-blog')
    .then(() => console.log("DB Connected "))
    .catch((err) => console.log("Db connection Failed ", err.message || err));