<template>
	<div class="tac">
		<pre>{{ items }}</pre>

		// render list of data with &lt;input /> element. Value of each element corresponds to the 'value' key in the input data objectarray

		<!-- <div>
			<h3>Filtered data</h3>

			// filter the following data:
			// get elements
			<pre>{{ filtered_data }}</pre>

		</div> -->
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
