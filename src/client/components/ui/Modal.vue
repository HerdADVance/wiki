<script setup>
import { defineEmits, ref } from 'vue'

const props = defineProps({
	message: String,
  buttons: Array
})

const emit = defineEmits(['emitConfirmation']);

const handleConfirmationClick = () => {
  emit('emitConfirmation', true)
}


</script>


<template>
  <div class="modal">
    <p>{{ message }}</p>
    <button @click="handleConfirmationClick()">Yes</button>
  </div>
</template>


<style lang="scss">
  @use "@/assets/scss/_standard-vars.scss" as v;

  $modalHeight: 250px;

  .modal{
    background: v.$pri-lighter;
    border: 1px solid v.$pri-dark;
    border-radius: 0.75rem;
    box-shadow: 4px 4px 30px v.$pri-darker;
    height: $modalHeight;
    left: 35%;
    padding: 2rem 1rem;
    position: fixed;
    text-align: center;
    top: calc(50vh - ($modalHeight / 2));
    width: 30%;
    z-index: 9999999;
  }
  .modal p{
    color: white;
    margin-bottom : 1rem;
  }

</style>




