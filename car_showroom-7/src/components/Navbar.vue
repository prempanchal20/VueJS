<template>
  <section class="navbar">
    <div class="navbar-logo">
      <div class="button-home">
        <button>Car Showroom</button>
      </div>

      <div class="nav-menu">
        <div class="navbar-links">
          <RouterLink class="home" to="/">Home</RouterLink>
          <RouterLink class="login" to="/login">Login</RouterLink>
          <RouterLink class="register" to="/register">Register</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
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

.navbar-links button {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
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
    width: 30%;

  }

  .navbar-logo {
    padding: 3%;
  }

  .navbar-logo button {
    font-size: 20px;
  }

  .home,
  .login,
  .register {
    font-size: 16px;
  }

}
</style> 
