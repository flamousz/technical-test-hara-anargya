<script setup>
const props = defineProps({
    showSidebar: Boolean
})

const emits = defineEmits(["toggleSidebar"]);

const handleToggleSidebar = () => {
	emits("toggleSidebar");
};
</script>

<template>
	<nav class="bg-white text-lg px-10 py-6 z-10 drop-shadow-xl flex justify-between sticky top-0 min-w-full ">
		<h3>Conversion</h3>
		<button class="md:hidden" v-if="!showSidebar"  @click="handleToggleSidebar">
			<Icon icon="pajamas:hamburger" />
		</button>
	</nav>
</template>
