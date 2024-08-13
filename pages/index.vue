<script setup lang="ts">
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

</script>

<template>
<Textarea v-model="value" rows="5" cols="30" />
<Button label="Submit" />

</template>