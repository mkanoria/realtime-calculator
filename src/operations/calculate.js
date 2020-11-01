
function isNumber(buttonName) {
    return !isNaN(buttonName)
}

// Expecting object of the format
//  {
//     total : Number,
//     nextVal: Number,
//     operation: String,
// }
export default function calculate (obj, buttonName) {
    if (buttonName == "AC") {
        return {
            total : 0,
            nextVal : 0,
            operation : ""
        }
    }
    // If current button pressed was a number
    if (isNumber(buttonName)) {
        if (buttonName == "0" && obj.nextVal == "0") {
            return {}
        }
        // TODO: If there's an operation
        // if (obj.operation) {
        //     if (obj.nextVal) {
        //         return {
                    
        //         }
        //     }
        // }
        return {
            total : 0,
            nextVal : 0,
            operation : ""
        }
    }
    return {
        total : 0,
        nextVal : 0,
        operation : ""
    }
}