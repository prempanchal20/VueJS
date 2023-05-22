<template>
    <div>
        <button class="back-btn" @click="goBack">Back</button>

        <div class="car-data">
            <div class="car-image-container">
                <img :src="carDetail.image" :alt="carDetail.name" class="car-image">
            </div>
            <div class="car-info">
                <div class="car-name">
                    <h1>Car Name: {{ carDetail.name }}</h1>
                </div>
                <div class="car-details">
                    <h3>Details: {{ carDetail.details }}</h3>
                </div>
                <div class="car-price">
                    <h3>Price: ₹{{ carDetail.price }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapState, mapActions } from 'pinia'
import { useCarStore } from "../stores/carStore";
export default {

    created() {
        this.fetchData(this.$route.params.id);
    },

    computed: {
        ...mapState(useCarStore, ['carDetail'])
    },

    methods: {
        goBack() {
            this.$router.push('/home');
        },
        ...mapActions(useCarStore, ['fetchData']),
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
    border: 1px solid white;
    background: transparent;
    cursor: pointer;
    margin-left: 10%;
    margin-top: 5%;
    font-size: 25px;
    border-radius: 10px;
    padding: 2px 20px;
}

.car-name,
.back-btn,
.car-details,
.car-price {
    color: white;
    margin-top: 30px;
}

.car-name h1 {
    font-size: 40px;
}

.car-data {
    display: flex;
    width: 70%;
    margin: 0 auto;
    border: 1px solid white;
    padding: 3%;
    box-shadow: inset 15px 15px 15px rgba(0, 0, 0, 0.2),
        inset -5px -5px 15px rgba(255, 255, 255, 0.1),
        15px 15px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    margin-top: 7%;
}

.car-data,
.car-details h3,
.car-price h3 {
    font-size: 22px;
    font-weight: 100;
}

.car-image-container {
    width: 55%;
}

.car-info {
    width: 45%;
}

.car-image {
    width: 85%;
}

@media only screen and (max-width: 1302px) and (min-width: 350px) {
    .car-data {
        display: flex;
        flex-direction: column;
        margin-top: 20%;
    }

    .car-image-container {
        width: 100%;
    }

    .car-image {
        width: 100%;
    }

    .car-details {
        font-size: 20px;
    }

    .car-info {
        width: 100%;
    }

    .car-name h1 {
        font-size: 24px;
    }

    .car-details h3 {
        font-size: 20px;
    }
}
</style>
  