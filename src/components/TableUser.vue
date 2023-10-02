<script setup>
import { ref } from "vue";
import ButtonWhite from "./ButtonWhite.vue";

const props = defineProps(["userData", "handleShowDialog"]);
const selectedUser = ref([]);

const isSelect = (id) => {

	return selectedUser.value.includes(id);
};

const handleIsSelect = (id) => {
	if (selectedUser.value.includes(id)) {
		const index = selectedUser.value.indexOf(id);

		if (index !== -1) {
			selectedUser.value.splice(index, 1);
		}
	} else {
		selectedUser.value.push(id);
	}
};

const dateFormater = (date) => {
	let datee = new Date(date);
	const day = datee.getDate().toString().padStart(2, "0");
	const month = (datee.getMonth() + 1).toString().padStart(2, "0");
	const year = datee.getFullYear();

	return `${day} / ${month} / ${year}`;
};
</script>

<template>
	<table class="w-full">
		<thead class="bg-gray-50 shadow-inner w-full sticky top-6">
			<tr class="w-full">
				<th
					class="px-7 py-3 w-1 text-sm font-semibold tracking-wide text-left"
				>
					ID
				</th>
				<th class="px-7 w-2 text-sm font-semibold tracking-wide text-left">
					User
				</th>

				<th
					class="px-7 py-3 text-sm font-semibold tracking-wide whitespace-nowrap text-left"
				>
					Date of Birth
				</th>

				<th class="px-7 py-3 text-sm font-semibold tracking-wide text-left">
					Email
				</th>

				<th class="px-7 py-3 text-sm font-semibold tracking-wide text-left">
					Job
				</th>
				<th class="px-1 py-3 text-sm font-semibold tracking-wide text-left">
					Country
				</th>
				<th
					class="px-7 py-3 text-center text-sm font-semibold tracking-wide"
				>
					Action
				</th>
			</tr>
		</thead>

		<tbody class="divide-y">
			<tr
				v-for="(user, index) in props.userData"
				:key="index"
				class="shadow-inner"
				:class="{
					'bg-blue-400 ': isSelect(user.id),
				}"
			>
				<td class="px-7 py-3 text-sm">
					{{ user?.id }}
				</td>

				<td
					class="mt-5 text-sm flex flex-row items-center justify-center gap-2"
				>
					<img
						:src="user.profile_picture"
						alt=""
						class="rounded-[50%]"
						width="30"
						height="auto"
					/>
					<p>{{ user?.first_name }} {{ user?.last_name }}</p>
				</td>

				<td class="px-7 py-3 text-sm text-p-card-color whitespace-nowrap">
					{{ dateFormater(user?.date_of_birth) }}
				</td>

				<td class="px-7 py-3 text-sm">
					{{ user?.email }}
				</td>

				<td class="px-7 py-3 text-sm text-p-card-color">
					{{ user?.job }}
				</td>
				<td class="px-1 py-3 text-sm">
					{{ user?.country }}
				</td>
				<td class="px-3 py-1 mb-3 text-sm whitespace-nowrap flex gap-2">
					<ButtonWhite :name="'Select'" @click="handleIsSelect(user.id)" />
					<ButtonWhite
						:name="'View Detail'"
						@click="handleShowDialog(user)"
					/>
				</td>
			</tr>
		</tbody>
	</table>
</template>
