export default function getReapeatedInfo(number) {
    var digits = number.toString().split('');
    var realDigits = digits.map(Number)
    var number = realDigits
    var output = {}
    number.forEach(element => {
        output[element] = ''
        for (var i = 0; i < element; i++) {
            output[element] += element.toString()
        }
    });
    return output
}

console.log(getReapeatedInfo(125))
