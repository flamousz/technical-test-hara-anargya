<script setup>
import { Icon } from "@iconify/vue";
import { onMounted, onUnmounted, ref } from "vue";
import { RouterLink } from "vue-router";

// const showSidebar = ref(false); // di notice 1

const props = defineProps({
	showSidebar: Boolean,
});

const emits = defineEmits([
	"sidebarStateFalse",
	"sidebarStateTrue",
	"toggleSidebar",
]);
const screenHeight = ref(window.innerHeight);
const screenWidth = ref(window.innerWidth);

const handleSidebarStateFalse = () => {
	emits("sidebarStateFalse");
};
const handleSidebarStateTrue = () => {
	emits("sidebarStateTrue");
};
const handleToggleSidebar = () => {
	emits("toggleSidebar");
};

const handleResize = () => {
	screenHeight.value = window.innerHeight;
	screenWidth.value = window.innerWidth;
	if (screenWidth.value >= 768) {
		// Reset to true on larger screens
		handleSidebarStateTrue();
	} else {
		handleSidebarStateFalse();
	}
};

onMounted(() => {
	window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
	window.removeEventListener("resize", handleResize);
});
</script>

<template>
	<aside
		class="bg-white z-10 drop-shadow-xl text-sidebar-color min-h-[100vh] w-3/4 md:w-[281px] md:block fixed md:static left-0 top-0 transition-transform duration-300 transform"
		:class="{
			'translate-x-0 ': props.showSidebar,
			'-translate-x-full ': !props.showSidebar,
		}"
	>
		<div class="py-4 px-8">
			<div class="flex flex-row">
				<h1 class="text-3xl font-semibold mb-4">heylink.</h1>
				<button class="md:hidden px-4 py-2" @click="handleToggleSidebar">
					<Icon icon="pajamas:hamburger" />
				</button>
			</div>

			<ul class="ml-3">
				<li
					@click="handleSidebarStateTrue"
					class="mb-3 p-3 rounded-md"
					:class="{
						'bg-sidebar-hover': this.$route.name === 'dashboard',
					}"
				>
					<RouterLink to="/" class="flex items-center gap-1"
						><Icon
							icon="ph:chart-line-down-fill"
							width="25"
							height="25"
						/>Dashboard</RouterLink
					>
				</li>
				<li
					@click="handleSidebarStateTrue"
					class="mb-3 p-3 rounded-md"
					:class="{
						'bg-sidebar-hover': this.$route.name === 'overview',
					}"
				>
					<RouterLink to="/overview" class="flex items-center gap-1"
						><Icon
							icon="material-symbols:chart-data-outline-sharp"
							width="25"
							height="25"
						/>Overview</RouterLink
					>
				</li>
				<!-- Add more sidebar links as needed -->
			</ul>
		</div>
	</aside>
</template>
