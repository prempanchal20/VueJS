<template>
    <div>
        <button class="back-btn" @click="goBack">Back</button>
        <div class="car-details">
            <div class="car-name">
                {{ carDetail.name }}
            </div>

            <div class="car-details">
                {{ carDetail.details }}
            </div>

            <div class="car-image">
                <img :src="carDetail.image" :alt="carDetail.name">
            </div>

            <div class="car-price">
                {{ carDetail.price }}
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {

    data() {
        return {
            carDetail: {
                name: "",
                details: "",
                image: "",
                price: "",
            },
        };
    },
    created() {
        this.fetchData();
    },

    methods: {
        fetchData() {
            axios.get(`https://testapi.io/api/dartya/resource/cardata/${this.$route.params.id}`)
                .then(response => {
                    this.carDetail = response.data;
                    console.log(this.carDetail);
                })
                .catch(error => {
                    alert(error);
                });
        },

        goBack() {
            this.$router.push('/home');
        },
    },
};
</script>


<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.back-btn {
    border: none;
    background: transparent;
    color: white;
    cursor: pointer;
    margin-left: 10%;
    margin-top: 5%;
    font-size: 25px;
}

.car-name {
    color: white;
}
</style>
  