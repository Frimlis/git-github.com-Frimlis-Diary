for (let index = 1; index < 100; index++) {
    let Fizz = index%3;
    let Buzz = index%5;
    let FizzBuzz = Fizz+Buzz;
    if (FizzBuzz===0) {console.log('FizzBuzz');}
    else if (Fizz===0) {console.log('Fizz');}
    else if (Buzz===0) {console.log('Buzz');}
    else {console.log(index);}
}