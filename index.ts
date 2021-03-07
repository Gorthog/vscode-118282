import fetch from "node-fetch";


function sleep(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData() {
  return await fetch('https://jsonplaceholder.typicode.com/posts/1')
}

async function main() {
  await sleep(3000);
  const response = await getData();
  console.log(await response.json());
}

main();
