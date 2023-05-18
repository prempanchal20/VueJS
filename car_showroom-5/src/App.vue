<template>
    <div :class="{ 'fonts': fontFamily }">
        <Navbar />
        <RouterView />
        
    </div>
</template>

<script>
export default {
    name: "App",

    data() {
        return {
            fontFamily: true,
        };
    },
};
</script>

<style>
.menu {
    position: absolute;
    top: 80px;
    right: 10px;
}

.menu button {
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px 15px;
    cursor: pointer;
    background-color: transparent;
    color: white;
    font-size: 20px;
    margin-right: 20px;
}

.fonts {
    font-family: 'Poppins', sans-serif;
}
</style>
