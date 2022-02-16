

let hasUniqueChars = function(string){
    let splitstring = string.split("")
    const set1 = new Set()

    for(i=0; i < splitstring.length; i++) {
    set1.add(splitstring[i])
    }

    let set1Array = Array.from(set1)

    if (set1Array.length === splitstring.length){
        console.log("True")
    } else {
        console.log("False")
    }

}



hasUniqueChars("Monday")