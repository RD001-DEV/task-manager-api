// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID("5f422d59815238d94e7bfc45") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 32 }).toArray((error, users) => {
    //     if (error) {
    //         console.log('Unable to fetch')
    //     }
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 32 }).count((error, count) => {
    //     if (error) {
    //         console.log('Unable to fetch')
    //     }
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('5f422f87e9dc52dc7e7ae15c')}, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5f4228c72d159fd27d6bcf81')
    // },{
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((reject) => {
    //     console.log(reject)
    // })

    // db.collection('tasks').updateMany({
    //    completed: false 
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((reject) => {
    //     console.log(reject)
    // })
    // db.collection('users').deleteMany({
    //     age: 32
    // }).then((result) => {
    //     console.log(result)
    // }).catch((reject) => {
    //     console.log(reject)
    // })

    // db.collection('tasks').deleteOne({
    //     _id: new ObjectID('5f422f87e9dc52dc7e7ae15a')
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((reject) => {
    //     console.log(reject)
    // })

})

    
