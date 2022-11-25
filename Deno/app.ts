
const text = 'this is some text to store in a file';
const encoder = new TextEncoder();
const data = encoder.encode(text);
Deno.writeFile('message.txt', data)
.then(() => {
    console.log('Wrote to file!');
})
