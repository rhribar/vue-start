<template>
	<div class="tac">
		<pre>{{ items }}</pre>

		<div>
			<h3>Array operations</h3>

			<p>// filter the following data:</p>
			<p>// get elements with type bar</p>
			<p>// display the sum ov all values</p>
			<p>// check weather the object with type: 'circle' exists (display true/false)</p>

			<pre>{{ filtered_data }}</pre>
		</div>
	</div>
</template>

<script setup>
const items = ref([
	{
		id: 1,
		type: "bar",
		value: 34,
	},
	{
		id: 2,
		type: "bar",
		value: 12,
	},
	{
		id: 3,
		type: "line",
		value: 34,
	},
	{
		id: 4,
		type: "dot",
		value: 50,
	},
]);

const filtered_data = computed(() => {
	let data = items.value;

	// do something

	return data;
});
</script>

<style scoped></style>
