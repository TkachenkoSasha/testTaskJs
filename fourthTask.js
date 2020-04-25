let sourceArr = [
	{name: 'Jonny Walker', birthDate: '1995-12-17'},
	{name: 'Andrew', birthDate: '2001-10-29'},
	{name: 'Viktor', birthDate: '1998-11-09'},
	{name: 'Andrew', birthDate: '2011-05-09'},
];

function searchByName(name){
	let resultArr = [];

	for(let i = 0; i < sourceArr.length; ++i ){
		if(sourceArr[i].name === name){
			resultArr.push(sourceArr[i]);
		}
	}

	return resultArr;
}

console.log(searchByName('Andrew'));