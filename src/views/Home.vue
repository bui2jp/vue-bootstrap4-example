<template>
  <div class="home">


    <NavibarSidebar />

  </div>

</template>

<script>
// @ is an alias to /src
import NavibarSidebar from "@/components/NavibarSidebar.vue";

export default {
  name: "Home",
  components: {
    NavibarSidebar,
  },
};
</script>
