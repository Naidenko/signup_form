import isEmail from 'validator/lib/isEmail';

function signUpForm() {
	let emailInput = document.querySelector('.email__input');
	let	emailLabel = document.querySelector('.email__label');

	emailInput.addEventListener('input', function (){
		if (isEmail(this.value)){
			emailLabel.classList.remove('error');
			emailLabel.classList.add('correct');
		}else {
			emailLabel.classList.remove('correct');
			emailLabel.classList.add('error');
		}
	});
}

module.exports = signUpForm;

