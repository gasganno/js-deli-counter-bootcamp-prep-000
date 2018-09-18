var katzDeliLine = [];

function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  let n = 
  if (!line.length) {
    return "The line is currently empty."
  } else {

  }
}
=======





>>>>>>> a1011d49cfd6a05f1b2baf9342d9e10cb515ada5





















/*var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`

}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  } else {
    var lineup = []
      for (let n = 0; n < line.length; n++)
        lineup.push(`${n + 1}. ${line[n]}`)
        }
  return `The line is currently: ${lineup.join(', ')}`
}
*/
