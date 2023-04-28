<template>
<section class="car_content">
    <div class="car_details" v-for="item in cars" :key="item.getPrice">
        <div class="card">
            <div class="box">
                <div class="content">
                    <div class="car-name">
                        <h3>{{ item.name }}</h3>
                    </div>
                    <div class="images">
                        <img :src="item.image" v-bind:alt="car - image" />
                    </div>

                    <p>{{ truncatedDescription(item.description) }}</p>

                    <div class="button">
                        <a v-if="item.price === ''" class="avilable">Available Soon </a>

                        <a v-else class="info" v-on:click="emitPrice(item.price, item.name)">Info 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "GalleryCard",
    methods: {
        truncatedDescription(description) {
            let maxLength = 50;
            if (description.length > maxLength) {
                return description.slice(0, maxLength) + "...";
            } else {
                return description;
            }
        },

        emitPrice(price, carName) {
            this.$emit('emitAlert', price, carName)
        },
    },

    props: {
        getPrice: {
            type: Function,
        },
        cars: {
            type: Object,
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    background: #232427;
}

.car_details {
    margin: 40px 0;
}

.card {
    position: relative;
    min-width: 320px;
    height: 440px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
        inset -5px -5px 15px rgba(255, 255, 255, 0.1),
        5px 5px 5px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    margin: 30px;
}

.box {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    display: flex;
    justify-content: center;
    background: #2a2b2f;
    border: 2px solid #1e1f23;
    border-radius: 15px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.content {
    padding: 20px;
    text-align: center;
}


.content h2 {
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8em;
    color: rgba(255, 255, 255, 0.05);
}

.content h3 {
    font-size: 1.8em;
    color: rgba(255, 255, 255, 0.5);
    z-index: 1;
}

.content p {
    font-size: 16px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
}

.card:hover h3,
.card:hover p {
    color: rgba(255, 255, 255, 1);
}

.content a {
    position: relative;
    display: inline-block;
    padding: 5px 40px;
    background: #e91e63;
    margin-top: 15px;
    border-radius: 20px;
    color: #fff;
}

.images img {
    width: 90%;
}

.images {
    height: 170px;
}

.car-name {
    height: 90px;
}

.car_content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card-button {
    cursor: pointer;
}

.button .avilable {
    background-color: #1e1f23 !important;
    cursor: default;
}
</style>
