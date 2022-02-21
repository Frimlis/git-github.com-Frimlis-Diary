function isEven(number) {
    if (number === 0) {
        return 'even';
    }
    else if (number === 0){
        return 'odd';
    }
    else return isEven(number-2)
}