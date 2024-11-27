<template>
  <view>
    <nut-button type="primary" @click="click">JDT 风格按钮</nut-button>
    <nut-popup v-model:visible="show" closeable position="bottom" style="height: 50%;">
      这里是 popup 的内容
    </nut-popup>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const click = () => {
  show.value = true;
};
</script>
