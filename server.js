const { response } = require('express')
const express = require('express')
const app = express()

const rappers = {
    '21 savage':{'age':29,
    'birthName': 'real name',
    'birthLocation': 'UK'
},
'chance the rapper':{
    'age': 29,
    'birthName': 'some other name',
    'birthLocation': 'USA'
},
'dylon': {
    'age': 'dylon',
    'birthName': 'dylon',
    'birthLocation': 'dylon'
}
}

app.get('/', (request, response)=>{
response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperNames',(request, response)=>{
   const rappersName = request.params.rapperNames.toLowerCase()
   if(rappers[rappersName]){
    response.json(rappers[rappersName])
   }else{response.json(rappers['dylon'])}
    
})

app.listen(8000, ()=>{
    console.log(`The server is running on ${8000}! You better go catch it!`)
})