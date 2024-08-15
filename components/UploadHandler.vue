<script setup lang="ts">
import { useDropZone } from '@vueuse/core'

//ref -> para usar propriedades reativas e manipular o dom, acessamos o valor usando .value
//reactive -> usar propriedades reativas
const dropZoneRef = ref<HTMLDivElement>()

//emitir evento do componente filho para o pai
const emit = defineEmits<{
    (e: "file-upload", file: File)
}>()

function onDrop(files: File[] | null) {
  // called when files are dropped on zone
    console.log("files", files)
    const [file] = files
    emit("file-upload", file)
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  dataTypes: ['image/jpeg', 'image/jpg', 'image/png']
})
</script>

<template>
<div ref="dropZoneRef"
    :class="{
        'border-gray-400': !isOverDropZone,
        'bg-blue-200 border-red-700': isOverDropZone
    }"
    class="w-64 h-64 bg-gray-100 border-4 border-dashed rounded-lg p-5 flex flex-col items-center justify-center hover:bg-gray-200 transition-all duration-100">
    <p class="text-gray-500 font-bold">arraste a imagem pra cá!</p>
    <p class="text-sm text-gray-500 ">arquivos .png/.jpeg/.jpg</p>
</div>
</template>