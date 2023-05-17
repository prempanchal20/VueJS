<template>
    <h3>Home Components</h3>
</template>
  
<script>
export default {
    data() {
        return {
            post: []
        }
    },

    methods: {
        carsData() {
            fetch(
                "https://testapi.io/api/dartya/resource/cardata"
            ).catch((error) => alert("Coudn't call the GET API... Please try Again"))
                .then(response => response.json())
                .then(data => this.post = data)
        },
    },
    mounted() {
        this.getPosts()
    }
}
</script>