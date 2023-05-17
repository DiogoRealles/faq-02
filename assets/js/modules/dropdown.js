export default function dropdown(){
	document.querySelectorAll('.faq__content').forEach((item) => {
	item.style.maxHeight = 0;
});

document.querySelectorAll('.faq__button').forEach((button) => {
	button.addEventListener('click', () => {
		const faqContent = button.nextElementSibling;
		button.classList.toggle('active');

		if (button.classList.contains('active')) {
			faqContent.style.maxHeight = faqContent.scrollHeight + 'px';
		} else {
			faqContent.style.maxHeight = 0;
		}
	})
});
}