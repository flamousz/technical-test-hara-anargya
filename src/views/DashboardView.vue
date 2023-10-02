<script setup>
import { computed, onMounted, ref } from "vue";
import CardStatus from "../components/CardStatus.vue";
import LayoutDefault from "../layouts/LayoutDefault.vue";
import axios from "axios";
import TableUser from "../components/TableUser.vue";

const userData = ref(null);

const props = defineProps(["handleShowDialog"]);

const dummyCardData = [
	{
		status: "Pending",
		firstNum: 2480.3,
		secondNum: 2.15,
	},
	{
		status: "Paid",
		firstNum: 84.31,
		secondNum: 1.1,
	},
	{
		status: "Rejected",
		firstNum: 12.155,
		secondNum: 2.15,
	},
];

onMounted(async () => {
	try {
		const res = await axios.get(
			"https://api.slingacademy.com/v1/sample-data/users"
		);

		userData.value = res.data.users;
	} catch (error) {
		console.log(error);
	}
});
</script>

<template>
	<LayoutDefault v-slot="slotProps">

		<div class="min-h-[80vh] flex flex-row bg-gray-100">
			<main class="w-full relative bg-content-bg flex flex-col gap-6">
				<div
					class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
				>
					<CardStatus
						:showdialog="slotProps.showdialog"
						v-for="(dummyData, index) in dummyCardData"
						:key="index"
						:status="dummyData.status"
						:firstNum="dummyData.firstNum"
						:secondNum="dummyData.secondNum"
					/>
				</div>

				<div
					class=" rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
				>
					<h1 class="text-xl p-6 font-medium bg-white sticky  -top-10">User List</h1>
					<TableUser
						:userData="userData"
						:handleShowDialog="slotProps.handleShowDialog"
					/>
				</div>
			</main>
		</div>
	</LayoutDefault>
</template>
