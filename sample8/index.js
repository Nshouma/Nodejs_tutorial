//console.log(JSON.stringify(process.env, null, 2));

for(i=0; i < process.argv.length; i++){
  console.log(`${i} : ${process.argv[i]}`);
}

console.log(`cwd()    : ${process.cwd()}`);
console.log(`__dirname: ${__dirname}`);

console.log(process.platform);