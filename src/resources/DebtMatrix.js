export class DebtMatrix {
    constructor(names) {
        /**
         * Parameters
         *      names: Array - list of names of the people involved in the spending calculations.
         */

        this.names = names;
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

        return null
    }

    static #subtractMatrices (matrix1, matrix2) {
        /**
         * Subtracts matrix2 from matrix1 (matrix1 - matrix2), and returns the result.
         */

        return null
    }

    static #removeRedundantData (matrix) {
        /**
         * Removes the data under the main diagonal (replaces the numbers by 0) of the argument matrix, 
         * and returns the result.
         */

        return null
    }

    static #simplifyMatrix (matrix) {
        /**
         * Does the operations necesary to minimize the number of debts, returns the simplified matrix
         */

        return null
    }

    static #getListOfDebts (names, matrix) {
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

        return null
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

        const transposed = DebtMatrix.#transpose(this.matrix);
        const subtracted = DebtMatrix.#subtractMatrices(this.matrix, transposed);
        const cleaned = DebtMatrix.#removeRedundantData(subtracted);
        const simplified = DebtMatrix.#simplifyMatrix(cleaned);
        return DebtMatrix.#getListOfDebts(simplified);
    }
}