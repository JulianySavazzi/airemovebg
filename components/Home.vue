<script setup lang="ts">
const handleFileUpload = async (file: File) => {

	//enviar arquivo da imagem usando form-data
	const formData = new FormData()
	formData.append('file', file)

	//$fetch -> global 
	const response = await $fetch('/api/upload', {
		method: 'POST',
		body: formData
	})
	console.log("file", file)
}
</script>

<template>
<section class="pt-10 flex flex-col items-center justify-center">
	<h1 class="text-3xl md:text-4xl text-gray-700 font-bold">Remova o fundo das suas imagens</h1>
	<p class="text-lg md:text-2xl text-gray-600">100% automático e de graça!</p>
</section>
<section class="p-10 flex flex-col items-center justify-center">
<UploadHandler @file-upload="handleFileUpload"/>
</section>
</template>