<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

const sidebarState = ref(true);
const showDialog = ref(false);
const detailUser = ref({
	id: Number,
	first_name: String,
	last_name: String,
	date_of_birth: Date,
	email: String,
	job: String,
	country: String,
	profile_picture: String,
	phone: String,
	state: String,
	street: String,
	gender: String,
});

const sidebarFunction = {
	toggleSidebar: () => {
		sidebarState.value = !sidebarState.value;
	},
	sidebarStateFalse: () => {
		sidebarState.value = false;
	},
	sidebarStateTrue: () => {
		sidebarState.value = true;
	},
};

const toggleBodyScroll = () => {
	showDialog.value
		? document.body.classList.add("no-scroll")
		: document.body.classList.remove("no-scroll");
};

const handleShowDialog = (input) => {
	showDialog.value = !showDialog.value;
	toggleBodyScroll();

	detailUser.value.id = input.id;
	detailUser.value.first_name = input.first_name;
	detailUser.value.last_name = input.last_name;
	detailUser.value.date_of_birth = input.date_of_birth;
	detailUser.value.email = input.email;
	detailUser.value.job = input.job;
	detailUser.value.country = input.country;
	detailUser.value.profile_picture = input.profile_picture;
	detailUser.value.phone = input.phone;
	detailUser.value.state = input.state;
	detailUser.value.street = input.street;
	detailUser.value.gender = input.gender;

};
</script>

<template>
	<Transition name="opacity" v-show="showDialog">
		<div
			@click="handleShowDialog"
			class="bg-slate-500 h-full w-screen z-30 absolute opacity-90 grid place-content-center"
		>
			<div class="bg-white p-6 rounded-xl flex flex-col">
				<div  class="flex flex-row items-center gap-6">
					<img
						:src="detailUser.profile_picture"
						width="100"
						height="auto"
						class="rounded[50%]"
					/>
					<div>
						<h1 class="text-3xl font-medium">
							{{ detailUser.first_name }} {{ detailUser.last_name }}
						</h1>
						<p>{{ detailUser.email }}</p>
						<p>{{ detailUser.phone }}</p>
					</div>
				</div>
				
		
			</div>
		</div>
	</Transition>
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
			<main class="p-10 bg-content-bg overflow-hidden">
				<slot
					:showdialog="showDialog"
					:handleShowDialog="handleShowDialog"
				></slot>
			</main>
		</div>
	</div>
</template>

<style>
.opacity-enter-active,
.opacity-leave-active {
	transition: opacity 0.5s ease;
}

.opacity-enter-from,
.opacity-leave-to {
	opacity: 0;
}
</style>
