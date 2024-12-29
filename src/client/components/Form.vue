<script setup>

	defineProps({
		form: Object
	});

</script>

<template>

	<template v-for="field in form.fields">
		<label>{{ field.display }}</label>
		<input 
			v-model="field.value"
			:name="field.name"
			:type="field.type ? field.type : 'text'"
			:placeholder="field.placeholder ? field.placeholder : undefined"
			:required="field.required ? field.required : undefined"
			:maxlength="field.maxLength ? field.maxLength : undefined"
		>
		<span v-if="field.error">{{ field.error }}</span>
	</template>

	<button type="submit">{{ form.submitText }}</button>

</template>