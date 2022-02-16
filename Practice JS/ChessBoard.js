let back = ' ';
let square = '#'
for (let i = 0; i < 4; i++) {
    let string = '';
    let question = i%2    
    if (question===0) {
        for (let j = 0; j < 4; j++) {
            string = string+back+square;    
        }
    }
    else {
        for (let j = 0; j < 4; j++) {
            string = string+square+back;    
        }
    }
    console.log(string);
} 