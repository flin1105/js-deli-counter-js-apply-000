var counter=0;
function takeANumber (katzDeliLine){
  var last =[]
  while (var i=0 <katzDeliLine.length){
  
  return ('Welcome! You are number ' + );
}

function nowServing (katzDeliLine) {

  if (katzDeliLine.length === 0) {
    return ("There is nobody waiting to be served!")
  }
  else {
    return ("Currently serving " + katzDeliLine.shift() +".")
  }
}

function currentLine (katzDeliLine) {
  var line =[];
  var i =0;
  while (i<katzDeliLine.length){
    line.push(" " + [i+1] + ". " + katzDeliLine[i])
    i++
  }
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  }
  else {
    return ("The line is currently:" + line)
  }
}