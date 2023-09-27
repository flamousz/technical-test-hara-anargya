<script setup>
import { Icon } from "@iconify/vue";
import { onMounted, onUnmounted, ref } from "vue";

const showSidebar = ref(false);

const screenHeight = ref(window.innerHeight);
const screenWidth = ref(window.innerWidth);

const handleResize = () => {
	screenHeight.value = window.innerHeight;
	screenWidth.value = window.innerWidth;
	if (screenWidth.value >= 768) {
		// Reset to true on larger screens
		showSidebar.value = true;
	} else {
		showSidebar.value = false
	}
};
if (screenWidth.value >= 768) {
	// Reset to true on larger screens
	showSidebar.value = true;
}

const toggleSidebar = () => {
	if (screenWidth.value >= 768) {
		// Reset to true on larger screens
		showSidebar.value = true;
	} else {
		// Toggle on smaller screens
		showSidebar.value = !showSidebar.value;
	}
	console.log(showSidebar.value, "<< ini showSidebar");
};

onMounted(() => {
	window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
	window.removeEventListener("resize", handleResize);
});

</script>

<template>
	<div class="min-h-[100vh] flex flex-row bg-gray-100">
		<!-- Mobile sidebar toggle button -->
		<button
			class="md:hidden px-4 py-2 absolute top-4 left-4 z-10"
			@click="toggleSidebar"
		>
			<Icon icon="pajamas:hamburger" />
		</button>

		<!-- Sidebar (hidden on mobile by default, shown when the button is clicked) -->
		<aside
			class="bg-gray-800 z-40 text-white h-screen w-3/4 md:w-[300px]  md:block fixed md:static left-0 top-0 transition-transform duration-300 transform"
			:class="{
				'translate-x-0 ': showSidebar,
				'-translate-x-full ': !showSidebar,
			}"
		>
			<div class="py-4 px-8">
				<div class="flex flex-row">
					<h1 class="text-2xl font-semibold mb-4">Sidebar</h1>
					<button class="md:hidden px-4 py-2" @click="toggleSidebar">
						<Icon icon="pajamas:hamburger" />
					</button>
				</div>

				<ul>
					<li class="mb-2">
						<router-link to="/dashboard" class="block"
							>Dashboard</router-link
						>
					</li>
					<!-- Add more sidebar links as needed -->
				</ul>
			</div>
		</aside>

		<!-- Content -->
		<main
			class="p-4 w-full bg-slate-500"
			:class="{ 'ml-0': !showSidebar, 'md:ml-1/4': showSidebar }"
		>
			<h1>{{ screenHeight }}</h1>
			<h1>{{ screenWidth }}</h1>
			<h1>{{ showSidebar }}</h1>
		</main>
	</div>
</template>
