// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name){
drivers.push(name)
}

function destructivelyPrependDriver(name){
  drivers.unshift(name)
}


function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  drivers.shift()
}

function appendDriver(name){
  return x = [...drivers, name]
}

function prependDriver(name){
  return y = [name, ...drivers]
}

function removeFirstDriver(){
  return drivers.slice(1)
}

function removeLastDriver(){
  return drivers.slice(0, drivers.length -1)
}
