const content = await Deno.readTextFile(new URL("./README.md", import.meta.url));
console.log(content);