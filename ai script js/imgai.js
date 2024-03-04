const API_TOKEN="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"
const inputxt=document.getElementById("input")
const image=document.getElementById("image")
const button=document.getElementById("btn")
async function query() {
	const response = await fetch(
		// "https://api-inference.huggingface.co/models/kr-manish/text-to-image-sdxl-lora-dreemBooth-rashmika_v2",
        // "https://api-inference.huggingface.co/models/shrikant11/pokemon_text_to_image",
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
		{
			headers: { Authorization: `Bearer ${API_TOKEN}` },
			method: "POST",
			body: JSON.stringify({"inputs":inputxt.value}),
		}
	);
	const result = await response.blob();
	return result;
}
button.addEventListener("click", async function() {
query().then((response) => {
	const objectURL=URL.createObjectURL(response)
    image.src=objectURL
});
});





/* HTML: <div class="loader"></div> */
