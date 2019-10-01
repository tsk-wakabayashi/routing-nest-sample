<template>
  <div>
    <form v-on:submit="$router.push('/confirm')">
      <div>
        名前
        <input v-model="user.name" type="text" required />
      </div>
      <div>
        パスワード
        <input v-model="user.password" type="password" required />
      </div>
      <button>確認する</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    user: Object
  }
};
</script>

<style scoped>
</style>