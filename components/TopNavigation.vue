<template>
	<div class="wr">
		<nuxt-link to="/center">Center div</nuxt-link>
		<nuxt-link to="/popup">Popup</nuxt-link>
		<nuxt-link to="/form">Form</nuxt-link>
		<nuxt-link to="/datafilter">Filter data</nuxt-link>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.wr {
	display: flex;
	gap: 30px;
	padding: 20px;
	align-items: center;
	justify-content: center;
}
</style>
