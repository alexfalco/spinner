

const spin = function(data) {
  for (const char of data) {
  count = count + 1
  setTimeout(() => process.stdout.write(`\r ${char}  `), count*1000) 
}

}
let count = 0
spin('|/-|/-|/-')