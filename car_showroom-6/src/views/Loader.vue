<template>
    <div class="loader">
        <video src="../assests/loader.gif"></video>
    </div>
</template>
<script>

export default {
    components: { Loader },
    name: "Loader",

    showLoading() {
        this.loading = !false
        setTimeout(() => {
            this.loading = !true
        }, 2000)
    },
}

</script>
