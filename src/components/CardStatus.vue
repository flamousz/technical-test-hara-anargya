<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
	status: String,
	firstNum: Number,
	secondNum: Number,
});
</script>

<template>
	<main class="flex flex-col shadow-lg bg-white rounded-xl w-full">
		<div
			class="flex flex-row justify-between items-center text-p-card-color font-semibold px-5 mt-5"
		>
			<p>{{ props.status }}</p>
			<button class="p-1 bg-downside-bg-card rounded-md">
				<Icon
					icon="icon-park-outline:switch"
					color="rgba(153, 151, 151, 0.862)"
					width="30"
				/>
			</button>
		</div>
		<div class="px-5 pb-8 pt-2 text-lg font-semibold">
			<h3>{{ props.firstNum }}</h3>
		</div>
		<div
			class="flex flex-row bg-downside-bg-card p-5 justify-between rounded-b-xl"
		>
			<div class="flex flex-row gap-1">
				<div class="flex sm:flex-col xl:flex-row">
					<button>
						<Icon
							icon="ic:sharp-arrow-outward"
							color="#4CBF93"
							width="20"
						/>
					</button>
					<p class="text-p-card-green font-semibold">
						{{ props.secondNum }}%
					</p>
				</div>
				<p class="text-p-card-color ml-2">Last Month</p>
			</div>
			<div>
				<button class="text-p-card-color font-semibold">View More</button>
			</div>
		</div>
	</main>
</template>
