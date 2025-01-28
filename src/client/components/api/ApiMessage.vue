<script setup>
import { ref } from 'vue'

const props = defineProps({
	message: String,
  status: Number
})

// Add error class if necessary
let isError = ref(false)
if (props.status >= 400 && props.status < 500) isError.value = true

// Get rid of self on click
let showSelf = ref(true) 
const handleSelfClick = () => {
  showSelf.value = false
}

</script>



<template>
	<div 
    v-if="showSelf" 
    @click="handleSelfClick"
    :class="['api-message', isError ? 'error' : '']"
    >
		{{ message }}
  </div>
</template>



<style>
  .api-message{
    background: limegreen;
    color: white;
    font-size: 1rem;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
  }
  .api-message.error{
    background: crimson;
  }
</style>


