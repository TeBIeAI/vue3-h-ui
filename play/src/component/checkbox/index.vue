<template>
  <h-checkbox-group :max="3" v-model="checkList" @change="change">
    <h-checkbox label="Option A" />
    <h-checkbox label="Option B" />
    <h-checkbox label="Option C" />
    <h-checkbox label="disabled" disabled />
    <h-checkbox label="selected and disabled" disabled />
  </h-checkbox-group>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'

const checkList = ref(['selected and disabled', 'Option A'])

const change = (val) => {}
</script>
