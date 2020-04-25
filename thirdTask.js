function getEven(inputArr){
	let resultArr = [];

	for(let i = 0; i < inputArr.length; ++i){
		if(inputArr[i] % 2 === 0){
			resultArr.push(inputArr[i]);
		}
	}

	return resultArr;
}

//2-rd desicion
function getEvenFilter(inputArr){
	return inputArr.filter((value, index, arr) => {if(value % 2 === 0){return value;}});
}

alert(getEven([2, 4, 5, 7, 9, 4, 1, 16]));