export const arrayHasRepeatedElement = (array) => {
    /**
     * Takes an array as input and returns true if at least 
     * one of its elements is repeated or false if not.
     */

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] == array[j] && i != j) {
                return true
            }
        }
    }

    return false
}