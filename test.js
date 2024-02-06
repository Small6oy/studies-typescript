const string = 'ABCDDAV'

const getLongestNonRepeatingChars = (string) => {

    let currNonRepeatingChars = '';
    let longestNonRepeatingChars = '';

    for (let index in string) {
        let currChar = string[+index]
        let nextChar = string[+index + 1]

        currNonRepeatingChars += currChar

        if((currChar == nextChar) || !nextChar){
            if (currNonRepeatingChars.length > longestNonRepeatingChars.length) {
                longestNonRepeatingChars = currNonRepeatingChars
                currNonRepeatingChars = ''
            }
        }
    }

    return longestNonRepeatingChars;
}

console.log(getLongestNonRepeatingChars(string))

// Time Complexity Big O(n)
// Space Complexity Big O(1)