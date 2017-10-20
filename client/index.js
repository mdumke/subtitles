console.log('hello from client/index.js')

const x = {
  a: 1,
  b: 2
}

const y = {
  ...x,
  c: 3
}

console.log(x, y)
