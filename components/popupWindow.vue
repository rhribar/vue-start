<template>
	<div class="parent" @click="onOutsideClick">
		<div v-for="(item, i) in 100" :key="i">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eveniet provident molestiae corporis eligendi illo animi distinctio saepe placeat facere?</div>
		<div class="content">
			<button @click="onOpen">Open</button>
			<div class="center" v-if="isOpen">
				<div class="center-child">
					<h3>Popup contentt</h3>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, minus?</p>
					<button @click="onClose">X</button>	
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
/* export default {
    setup() {}
}; */

	let isOpen = ref(false);

	function onOpen() {
		isOpen.value = true;
		console.log(isOpen.value);
	}

	function onClose() {
		isOpen.value = false;
		console.log(isOpen.value);
	}

	/* function onOutsideClick(e) {
		e.stopPropagation();

		isOpen.value = false;
		console.log(isOpen.value);
	} */

</script>

<style scoped>

.center {
	/* display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh; */
	top: 50%;
    left: 50%;
	position: fixed;
	background-color: grey;
	translate: -50%;
}


.parent {
	position: absolute;
	
}


</style>
