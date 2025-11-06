<template>
    <h1 class="text-3xl font-bold underline">
      안녕하세요!
    </h1>
    <UButton @click="store.increment()">Click Me</UButton>
    <UIcon name="i-lucide-lightbulb" class="size-5" />
    <div>{{ store.count }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter';
const store = useCounterStore();
</script>
