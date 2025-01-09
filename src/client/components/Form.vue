<script setup>

	defineProps({
		form: Object,
		showLabel: Boolean
	});

</script>

<template>

	<template v-for="field in form.fields">
		<label v-if="showLabel">{{ field.display }}</label>
		<input 
			v-model="field.value"
			:name="field.name"
			:type="field.type ? field.type : 'text'"
			:placeholder="field.display"
			:required="field.required ? field.required : undefined"
			:maxlength="field.maxLength ? field.maxLength : undefined"
		>
		<span v-if="field.error" class="form-error">{{ field.error }}</span>
	</template>

	<input type="submit" :value="form.submitText">

</template>