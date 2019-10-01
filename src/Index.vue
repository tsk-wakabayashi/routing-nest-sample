<template>
  <div>
    <div>
      入力
      <span v-if="$route.meta.isConfirm">> 確認</span>
    </div>
    <router-view v-bind:user.sync="user"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  }
};
</script>