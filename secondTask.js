function getMin(inputArr){
	let minNumber = Number.MAX_VALUE;
	
	for(let i = 0; i < inputArr.length; ++i){
		if(minNumber >= inputArr[i]){
			minNumber = inputArr[i];
		}
	}

	return minNumber;
}

alert(getMin([2, 4, 5, 7, 9, 4, 1, 16]));