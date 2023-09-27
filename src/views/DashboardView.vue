<script setup>
import CardStatus from "../components/CardStatus.vue";
import LayoutDefault from "../layouts/LayoutDefault.vue";

const dummyCardData = [{
	status: 'Pending',
	firstNum: 2480.30,
	secondNum: 2.15
},{
	status: 'Paid',
	firstNum: 84.310,
	secondNum: 1.10
},{
	status: 'Rejected',
	firstNum: 12.155,
	secondNum: 2.15
}]

</script>

<template>
	<LayoutDefault>
		<div class="min-h-[80vh] flex flex-row bg-gray-100">
			<main class="w-full bg-content-bg flex flex-col">
				<div class="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
					<CardStatus
						v-for="(dummyData, index) in dummyCardData"
						:key="index"
						:status="dummyData.status"
						:firstNum="dummyData.firstNum"
						:secondNum="dummyData.secondNum"
					/>
				</div>
				<h1>ds</h1>
			</main>
		</div>
	</LayoutDefault>
</template>
