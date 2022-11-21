const sum = (a, b) => {
    if(a && b ) {
        return a + b;
    }
    throw new Error('Invalid Argument');
}

try {
    console.log(1);
} catch(error){
    console.log('Error occurred')
    console.log(error);
}