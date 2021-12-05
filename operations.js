export default function operations(ops) {
    let result = [];
    ops = ops.split(" ");
    console.log(ops)
    ops.forEach(element => {
        if (element == "D") {
            if (result.length > 0)
                result.push(result[result.length - 1] * 2)
        }
        else if (element == "R") {
            if (result.length > 0)
                result.pop()
        }
        else if (element == "+") {
            if (result.length > 1)
                result.push(result[result.length - 1] + result[result.length - 2])
        }
        else result.push(parseInt(element))
        console.log(result)
    });
    return result;
}