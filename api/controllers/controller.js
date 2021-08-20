function getDb() {
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://apiuser:<PASS>@krudlahednacluster.2zmkj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const db = {};

    db.client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return db;
}

function getLastItem (sCollection) {
    let db = getDb();

    return new Promise((resolve, reject) => {
        db.client.connect(function (err, db) {
            if (err) {
                res.status(500).send({
                    message: err.message || "Some error occurred."
                });
                db.close();
                reject(err.message);
            }

            var dbo = db.db("krudlahedna");

            dbo.collection(sCollection).findOne({},
                { sort: { _id: -1 } },
                (e, s) => {
                    if (e) {
                        db.close();
                        reject("cannot find " + e);
                    }
                    resolve(s);
                    db.close();
                }
              )
        })
    })
}

exports.getData = async (req, res) => {
    getLastItem("history").then(o =>{
        res.send(o);
    });

    let db = getDb();

    db.close;
};

exports.getConfig = async (req, res) => {
    getLastItem("config").then(o =>{
        res.send(o);
    });

    let db = getDb();

    db.close;
};