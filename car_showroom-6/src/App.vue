<template>
    <div class="fonts">
        <Navbar />
        <RouterView v-slot="{ Component }">
            <transition name="route" appear>
                <component :is="Component" />
            </transition>
        </RouterView>
    </div>
</template>

<script>

export default {
    name: "App",

};
</script>

<style>
.menu {
    position: absolute;
    top: 70px;
    right: 10px;
}

.menu button {
    border: 1px solid white;
    border-radius: 8px;
    padding: 5px 15px;
    cursor: pointer;
    background-color: transparent;
    color: white;
    font-size: 20px;
    margin-right: 50px;
    margin-top: 20px;
}

.fonts {
    font-family: 'Poppins', sans-serif;
}

.route-enter-active,
.route-leave-active {
    transition: transform 1s;
}

.route-enter-from,
.route-leave-to {
    transform: translateY(30%);
}

/* .route-enter-from:hover,
.route-leave-to:hover {
    transform: translateY(-50px);
} */
</style>
