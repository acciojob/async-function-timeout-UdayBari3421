const text = document.querySelector("#text");
const delay = document.querySelector("#delay");
const output = document.querySelector("#output");

async function delayFn(){
	let value = await parseInt(delay.value)*1000;
	setTimeout(function name() {
		output.innerHTML = `<h1>${text.value}</h1>`;
	},value);
}


document.getElementById("btn").addEventListener("click",()=>{
	output.innerHTML = "";
	delayFn();
});