let calculation =  localStorage.getItem('updatedCalc') || ''
let output = document.querySelector('.js-input-bar')
output.innerHTML = calculation

console.log(document.querySelectorAll('.operator'))


function updateCalculation(input) {
	calculation += input
	output.innerHTML = calculation
	localStorage.setItem('updatedCalc', calculation)
}
function evaluateCalculation() {
	calculation = eval(calculation)
	output.innerHTML = calculation
	localStorage.setItem('updatedCalc', calculation)
}

function clearCalculation() {
	calculation = ''
	output.innerHTML = calculation
	localStorage.setItem('updatedCalc', calculation)
	console.log(calculation)
}