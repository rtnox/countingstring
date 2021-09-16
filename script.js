const textarea = document.getElementById("stringInput");
textarea.addEventListener("input", () => {
	const str = textarea.value;
	document.getElementById("output").innerHTML = [...str].length;
});

		
