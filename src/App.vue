<script >

export default {
  name:"App",

};

</script>

<template>
  <nav class="flex flex-row gap-4 ">
  <router-link to="/">Go to Casita</router-link>

  <router-link to="/product">Product</router-link>
  <router-link to="/comment">Comment</router-link>
  <router-link to="/post">Post</router-link>


  </nav>
    <main >
      <router-view/>
    </main>
</template>

<style scoped>

</style>
