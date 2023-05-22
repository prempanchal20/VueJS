<template>
    <div class="fonts">
        <Navbar />
        <RouterView v-slot="{ Component }">
            <Transition name="routew" appear mode="out-in">
                <component :is="Component" />
            </Transition>
        </RouterView>
    </div>
</template>

<script>
export default {
    name: "App",
};

</script>

<style>
.fonts {
    font-family: 'Poppins', sans-serif;
}

.routew-enter-active,
.routew-leave-active {
    transition: all 0.8s ease-in;
}

.routew-enter-from,
.routew-leave-to {
    opacity: 1;
    transform: translateY(100px);
}
</style>
