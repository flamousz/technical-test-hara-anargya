<script setup>
    const props = defineProps({
        name: String
    })
</script>


<template>
    <button class="shadow-[0_1px_4px_rgb(0,0,0,0.3)] py-1 px-3 hover:bg-slate-400">
        {{ props.name }}
    </button>
</template>