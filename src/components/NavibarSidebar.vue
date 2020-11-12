<template>
  <div>
    <nav
      class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"
    >
      <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#"
        >Company name</a
      >

      <!-- navbar-toggler -->
      <button
        class="navbar-toggler position-absolute d-md-none collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      /> -->
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click="signOut">Sign out</a>
        </li>
      </ul>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <nav
          id="sidebarMenu"
          class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          :class="{ show: isSidebarMenuShow }"
        >
          <div class="sidebar-sticky pt-3">
            <ul class="nav flex-column">
              <!-- Dashboard -->
              <li class="nav-item">
                <router-link to="/dashboard">
                  <a class="nav-link active" href="#">
                    <span data-feather="home"></span>
                    Dashboard <span class="sr-only">(current)</span>
                  </a>
                </router-link>
              </li>
              <!-- Dashboard -->
              <li class="nav-item">
                <router-link to="/dashboard2">
                  <a class="nav-link active" href="#">
                    <span data-feather="home"></span>
                    Dashboard2 <span class="sr-only">(current)</span>
                  </a>
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    <!-- ルートとマッチしたコンポーネントがここへ描画されます -->
    <router-view></router-view>
    <!-- <Dashboard /> -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    signOut: function(){
      console.log('signOut')
      this.$store.commit('afterSignOut')

      //ログイン画面へ戻る
      this.$router.push('/')
    }
  }
}
</script>
