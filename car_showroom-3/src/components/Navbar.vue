<template>
  <section class="header-go">
    <div class="header-content">
      <div class="header-logo">
        <a href="">Car Showroom</a>
      </div>
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="menu-icon">&#9776;</label>

      <ul class="menu">
        <li><button v-on:click="toggle">Add Car</button></li>
      </ul>
    </div>
  </section>
</template>

<script>
import CarForm from "./CarForm.vue";
export default {

  components: {
    CarForm,
  },
  methods: {
    toggle() {
      this.$emit('toggleBtn');
    }
  },
};
</script>

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

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.menu button {
  background-color: transparent;
  color: white;
  font-size: 20px;
  border: none;
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

  .menu button {
    margin-left: 30px;
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
}
</style>
