export class DebtMatrix {
    constructor(names) {
        /**
         * Parameters
         *      names: Array - list of names of the people involved in the spending calculations.
         */

        this.names = [ ...names ];
        this.matrix = [];

        for (const name of names) {
            this.matrix.push(names.map(person => {return 0}));
        }
    }

    addPayment ({payer, amount, consumers}) {
        /**
         * Takes an object looking like: 
         *      {payer: 'name1', amount: 100, consumers: ['name1', 'name2', ... ]}
         * and adds the data to the matrix.
         */

        const payerIndex = this.names.indexOf(payer);
        if (payerIndex != -1) {
            for (const consumer of consumers) {
                let consumerIndex = this.names.indexOf(consumer);
                if (consumerIndex != -1) {
                    this.matrix[payerIndex][consumerIndex] = amount / consumers.length;
                }
            }
        }
    }

    static #transpose (matrix) {
        /**
         * Takes a matrix as argument and returns the transpose
         */

        const rows = matrix.length
        const cols = matrix[0].length

        let transposed = [];
        for (let col = 0; col < cols; col++) {
            transposed.push([])
            for (let row = 0; row < rows; row++) {
                transposed[transposed.length - 1].push(0)
            }
        }

        for (let col = 0; col < cols; col++) {
            for (let row = 0; row < rows; row++) {
                transposed[row][col] = matrix[col][row]
            }
        }

        return transposed
    }

    static #subtractMatrices (matrix1, matrix2) {
        /**
         * Subtracts matrix2 from matrix1 (matrix1 - matrix2), and returns the result.
         */

        if (matrix1.length == matrix2.length && matrix1[0].length == matrix2[0].length) {
            const rows = matrix1.length
            const cols = matrix1[0].length

            let result = [];
            for (let row = 0; row < rows; row++) {
                result.push([])
                for (let col = 0; col < cols; col++) {
                    result[result.length - 1].push(0)
                }
            }

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    result[row][col] = matrix1[row][col] - matrix2[row][col]
                }
            }

            return result

        }

        return null
    }

    static #removeRedundantData (matrix) {
        /**
         * Removes the data under the main diagonal (replaces the numbers by 0) of the argument matrix, 
         * and returns the result.
         */

        const rows = matrix.length
        const cols = matrix[0].length

        let result = [];
        for (let row = 0; row < rows; row++) {
            result.push([])
            for (let col = 0; col < cols; col++) {
                result[result.length - 1].push(0)
            }
        }

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (row <= col) {
                    result[row][col] = matrix[row][col]
                }
            }
        }

        return result
    }

    static #simplifyMatrix (matrix) {
        /**
         * Does the operations necesary to minimize the number of debts, returns the simplified matrix
         */

        const rows = matrix.length
        const cols = matrix[0].length

        // copy of the input matrix
        let result = [];
        for (let row = 0; row < rows; row++) {
            result.push([])
            for (let col = 0; col < cols; col++) {
                result[result.length - 1].push(matrix[row][col])
            }
        }

        for (let col = cols - 1; col > 1; col--) {
            for (let row = 0; row < col - 1; row++) {
                result[col - 1][col] += result[row][col]
                result[row][col - 1] += result[row][col]
                result[row][col] = 0
            }
        }

        return result
    }

    #getListOfDebts (matrix) {
        /**
         * Constructs the array
         *      [
         *          {giver: 'name1',
         *           amount: 100,
         *           receiver: 'name2'},
         *          {giver: 'name3',
         *           amount: 200,
         *           receiver: 'name4'},
         *          .
         *          .
         *          .
         *      ]
         * using the simplified matrix, and returns it.
         */

        let listOfDebts = []

        const rows = matrix.length

        for (let row = 0; row < rows - 1; row++) {
            const col = row + 1
            const debt = matrix[row][col]
            if (debt > 0) {
                listOfDebts.push(
                    {
                        giver: this.names[col],
                        amount: debt,
                        receiver: this.names[row]
                    }
                )
            }
            if (debt < 0) {
                listOfDebts.push(
                    {
                        giver: this.names[row],
                        amount: -debt,
                        receiver: this.names[col]
                    }
                )
            }
        }

        return listOfDebts
    }

    resolve () {
        /**
         * When called, calculates the debts and returns an array of objects looking like:
         *      [
         *          {giver: 'name1',
         *           amount: 100,
         *           receiver: 'name2'},
         *          {giver: 'name3',
         *           amount: 200,
         *           receiver: 'name4'},
         *          .
         *          .
         *          .
         *      ]
         * where 'giver' represents the person who owes the 'amount' of money to the 'receiver' person.
         */

        console.log('matrix')
        console.log(this.matrix)

        const transposed = DebtMatrix.#transpose(this.matrix);
        console.log('transposed')
        console.log(transposed)

        const subtracted = DebtMatrix.#subtractMatrices(this.matrix, transposed);
        console.log('subtracted')
        console.log(subtracted)

        const cleaned = DebtMatrix.#removeRedundantData(subtracted);
        console.log('cleaned')
        console.log(cleaned)

        const simplified = DebtMatrix.#simplifyMatrix(cleaned);
        console.log('simplified')
        console.log(simplified)

        return this.#getListOfDebts(simplified);
    }
}