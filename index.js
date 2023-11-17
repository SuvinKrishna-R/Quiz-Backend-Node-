//import json-server
const jsonserver=require('json-server')

//create server
const server=jsonserver.create()

//router to connect index.js and db.json
const router=jsonserver.router("db.json")

//parse json data to js-middleware
const middleware=jsonserver.defaults()

//use middleware
server.use(middleware)

//use router
server.use(router)

// port setup
const PORT=process.env.PORT|| 4001

//listen port
server.listen(PORT,()=>{
    console.log(`json server start at the port${PORT}`);
})

