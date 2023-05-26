<template>
  <section class="navbar">
    <div class="navbar-logo">
      <div class="button-home">
        <button>Car Showroom</button>
      </div>

      <div class="nav-menu">
        <div class="navbar-links">
          <RouterLink v-if="userValid" class="home" to="/">Home</RouterLink>
          <RouterLink v-else class="login" to="/login">Login</RouterLink>
          <button v-if="userValid" to="/login" @click="logoutBtn" class="logout-btn">Logout</button>
          <RouterLink v-else class="register" to="/register">Register</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { mapWritableState, mapActions, mapState } from "pinia";
import { RouterLink } from "vue-router";
import { useUserStore } from "../stores/userStore";

export default {
  name: "Navbar",

  computed: {
    ...mapWritableState(useUserStore, ["login"]),
    ...mapState(useUserStore, ['userValid']),
  },

  methods: {
    ...mapActions(useUserStore, ["logout", "logout"]),

    async logoutBtn() {
      const response = await this.logout();
      if (response) {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style >
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

.navbar {
  position: sticky;
  top: 0;
  background-color: #334756;
  z-index: 1;
}

.navbar-logo {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  justify-content: space-between;
}

.navbar-logo button {
  border: none;
  background-color: transparent;
  color: white;
  font-size: 25px;
  font-weight: 600;
}

.navbar-links {
  display: flex;
  justify-content: flex-end;
}

.navbar-links button {
  font-size: 20px;
  color: white;
  padding-left: 30px;
  font-weight: 100;
  cursor: pointer;
}

.home,
.login,
.register {
  border: none;
  background-color: transparent;
  font-size: 20px;
  color: white;
  padding-left: 30px;
}

@media only screen and (max-width: 950px) {

  .button-home {
    width: 40%;

  }

  .navbar-logo {
    padding: 3%;
  }

  .navbar-logo button {
    font-size: 20px;
  }

  .home,
  .login,
  .register,
  .logout-btn {
    font-size: 16px;
  }

  .navbar-links button {
    font-size: 16px;
  }

}
</style> 
