import fetch from "node-fetch";

async function main() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  console.log(await response.json());
}

main();
