<script setup lang="ts">
import { Gender, Popularity, Length } from "@/interfaces/form";

interface OptionProps {
	option: {
		title: string;
		category: string;
		buttons: Gender[] | Popularity[] | Length[];
	};
	options: {
		gender: Gender;
		popularity: Popularity[];
		length: Length[];
	};
}

const props = defineProps<OptionProps>();
</script>

<template>
	<div class="option-container">
		<h4>{{ option.title }}</h4>
		<p>{{ option.category }}</p>
		<div class="d-flex">
			<button v-for="(item, i) in option.buttons" :key="i">{{ item }}</button>
		</div>
	</div>
</template>
