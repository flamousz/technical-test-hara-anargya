<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

const sidebarState = ref(true);

const sidebarFunction = {
	toggleSidebar: () => {
		sidebarState.value = !sidebarState.value;
		console.log(sidebarState.value, "<< ini sidebar");
	},
	sidebarStateFalse: () => {
		sidebarState.value = false;
	},
	sidebarStateTrue: () => {
		sidebarState.value = true;
	},
};

console.log(sidebarState.value, "<< ini sidebar");
</script>

<template>
	<div class="flex flex-row">
		<Sidebar
			:showSidebar="sidebarState"
            @toggleSidebar="sidebarFunction.toggleSidebar"
			@sidebarStateFalse="sidebarFunction.sidebarStateFalse"
			@sidebarStateTrue="sidebarFunction.sidebarStateTrue"
		/>
		<div class="w-full">
			<Navbar
				@toggleSidebar="sidebarFunction.toggleSidebar"
				:showSidebar="sidebarState"
			/>
			<main class="p-10 bg-content-bg">
				<slot></slot>
			</main>
		</div>
	</div>
</template>
