<template>
  <section class="header-go">
    <div class="header-content">
      <div class="header-logo">
        <a href="">Car Showroom</a>
      </div>
    </div>
  </section>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  list-style: none;
}

.header-go {
  position: sticky;
  top: 0;
  width: 100%;
  background-color: black;
  z-index: 1;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
}

.header-logo a {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  border: 1px solid white;
  padding: 10px;
  border-radius: 10px;
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
</style>
