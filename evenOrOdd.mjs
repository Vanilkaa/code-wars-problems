const evenOrOdd = (number) => number.toString(2).substr(-1,1) == 0 ? 'Even': 'Odd';
export default evenOrOdd;