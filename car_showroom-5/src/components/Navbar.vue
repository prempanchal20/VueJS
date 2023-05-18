<template>
  <section class="navbar">
    <div class="navbar-logo">
      <button>Car Showroom</button>

      <div class="navbar-links">
        <RouterLink class="home" to="/">Home</RouterLink>
        <RouterLink class="login" to="/login">Login</RouterLink>
        <RouterLink class="register" to="/register">Register</RouterLink>
      </div>

      <!-- <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="menu-icon">&#9776;</label> -->
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
  font-size: 15px;
  color: white;
  padding-left: 30px;
}

/* .menu {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
}

.menu-icon {
  display: none;
}

#menu-toggle {
  display: none;
}

#menu-toggle:checked~.menu {
  transform: scale(1, 1);
}

@media only screen and (max-width: 950px) {
  .menu {
    flex-direction: column;
    background-color: #151418;
    align-items: start;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    z-index: 1;
    transform: scale(1, 0);
    transform-origin: top;
    transition: transform 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .menu a {
    margin-left: 12px;
  }

  .menu li {
    margin-bottom: 10px;
  }

  .menu-icon {
    display: block;
    color: #fff;
    font-size: 28px;
    cursor: pointer;
  }
} */
</style>
