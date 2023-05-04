<template>
    <section class="car-content">
        <div class="car-card">
            <div class="car-box">
                <div class="car-container">
                    <div class="car-name">
                        <h3>{{ name }}</h3>
                    </div>
                    <div class="car-images">
                        <img :src="image" alt="car - image" />
                    </div>

                    <p>{{ truncatedDescription(description) }}</p>

                    <div class="button">
                        <button v-if="price === ''" class="avilable-btn">Available Soon </button>

                        <button v-else class="info-btn" v-on:click="emitPrice(price, item.name)">Info
                        </button>
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
        name: String,
        image: String,
        price: Int8Array,
        description: String,
    }
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
    background-color: #212A3E;
}


.car-card {
    position: relative;
    min-width: 320px;
    height: 440px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
        inset -5px -5px 15px rgba(255, 255, 255, 0.1),
        5px 5px 5px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    margin: 30px;
}

.cars-data {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
}

.car-box {
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

.car-container {
    padding: 20px;
    text-align: center;
}

.car-container h2 {
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8em;
    color: rgba(255, 255, 255, 0.05);
}

.car-container h3 {
    font-size: 1.8em;
    color: rgba(255, 255, 255, 0.5);
    z-index: 1;
}

.car-container p {
    font-size: 16px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
}

.card:hover h3,
.card:hover p {
    color: rgba(255, 255, 255, 1);
}

.car-container button {
    position: relative;
    display: inline-block;
    padding: 5px 40px;
    background: #e91e63;
    margin-top: 15px;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    border: none;
}

.car-images img {
    width: 90%;
}

.car-images {
    height: 170px;
}

.car-name {
    height: 90px;
}

.car-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card-button {
    cursor: pointer;
}

.button .avilable-btn {
    background-color: #1e1f23;
    cursor: default;
}
</style>
