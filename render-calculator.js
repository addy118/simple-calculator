const buttons = [
	{
		input: 1,
		class: 'operand'
	},
	{
		input: 2,
		class: 'operand'
	},
	{
		input: 3,
		class: 'operand'
	},
	{
		input: ' + ',
		class: 'operator'
	},
	{
		input: 4,
		class: 'operand'
	},
	{
		input: 5,
		class: 'operand'
	},
	{
		input: 6,
		class: 'operand'
	},
	{
		input: ' - ',
		class: 'operator'
	},
	{
		input: 7,
		class: 'operand'
	},
	{
		input: 8,
		class: 'operand'
	},
	{
		input: 9,
		class: 'operand'
	},
	{
		input: ' * ',
		class: 'operator'
	},
	{
		input: 0,
		class: 'operand'
	},
	{
		input: '.',
		class: 'operand'
	},
	{
		input: '=',
		class: 'operand'
	},
	{
		input: ' / ',
		class: 'operator'
	}
]

buttons.forEach(button =>
	document.querySelector('.rows-container').innerHTML += `
		<button class="${button.class} js-button" data-input="${button.input}">${button.input}</button>
	`
)

document.querySelector('.clear').addEventListener(('click'), () => clearCalculation())

document.querySelectorAll('.js-button')
.forEach(button => {
	button.addEventListener(('click'), () => {
		const {input} = button.dataset
		if (!(input === '=')) {
			updateCalculation(input)
		} else {
			evaluateCalculation()
		}
	})
})

document.body.addEventListener(('keydown'), event => {
	if (event.key === '0') {
		updateCalculation(0)
	} else if (event.key === '1') {
		updateCalculation(1)
	} else if (event.key === '2') {
		updateCalculation(2)
	} else if (event.key === '3') {
		updateCalculation(3)
	} else if (event.key === '4') {
		updateCalculation(4)
	} else if (event.key === '5') {
		updateCalculation(5)
	} else if (event.key === '6') {
		updateCalculation(6)
	} else if (event.key === '7') {
		updateCalculation(7)
	} else if (event.key === '8') {
		updateCalculation(8)
	} else if (event.key === '9') {
		updateCalculation(9)
	} else if (event.key === '+') {
		updateCalculation(' + ')
	} else if (event.key === '-') {
		updateCalculation(' - ')
	} else if (event.key === '*') {
		updateCalculation(' * ')
	} else if (event.key === '/') {
		updateCalculation(' / ')
	} else if (event.key === '.') {
		updateCalculation('.')
	} else if (event.key === '=') {
		evaluateCalculation()
	} else if (event.key === 'Enter') {
		evaluateCalculation()
	} else if (event.key === 'Backspace') {
		clearCalculation()
	} else if (event.key === 'Delete') {
		clearCalculation()
	}
})