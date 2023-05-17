<template>
  <section class="header-go">
    <div class="header-content">
      <a href="">Car Showroom</a>
      <div class="header-data">
        <RouterLink class="home" to="/">Home</RouterLink>
        <RouterLink class="login" to="/login">Login</RouterLink>
        <RouterLink class="register" to="/register">Register</RouterLink>
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

.header-go {
  position: sticky;
  top: 0;
  background-color: #334756;
  z-index: 1;
}

.header-content {
  display: flex;
  align-items: center;
  padding: 20px 30px;
  justify-content: space-between;
}

.header-content a {
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.header-data {
  display: flex;
  justify-content: flex-end;
}

.home,
.login,
.register {
  border: none;
  background-color: transparent;
  font-size: 15px;
  color: white;
  padding-left: 30px;
}
</style>
