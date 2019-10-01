<template>
  <div>
    <div>名前: {{ user.name }}</div>
    <div>パスワード: {{ user.password }}</div>
    <button v-on:click="$router.back()">戻る</button>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
};
</script>