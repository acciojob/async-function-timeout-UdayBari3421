const text = document.querySelector("#text");
const delay = document.querySelector("#delay");
const body = document.querySelector("body");

async function delayFn(){
	let value = await parseInt(delay.value)*1000;
	setTimeout(function name() {
		body.innerHTML = `<h1>${text.value}</h1>`;
	},value);
}


document.getElementById("btn").addEventListener("click",()=>{
	delayFn();
});