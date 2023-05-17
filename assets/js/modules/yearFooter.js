export default function yearFooter(){
	let year = document.querySelector('[data-js="yearFooter"]');
	
	const date = new Date().getFullYear();
	
	year.innerText = date;
}