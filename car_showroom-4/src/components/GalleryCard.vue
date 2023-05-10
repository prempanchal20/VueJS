<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
    <section class="car-content" v-for="item in data" :key="item.id">
        <div class="car-card">
            <div class="car-box">
                <div class="car-container">
                    <div class="car-name">
                        <h3>{{ item.name }}</h3>
                    </div>
                    <div class="car-images">
                        <img :src="item.image" alt="car - image" />
                    </div>

                    <p>{{ truncatedDescription(item.details) }}</p>

                    <div class="button">
                        <button v-if="item.price === ''" class="avilable-btn">
                            Available Soon
                        </button>

                        <button v-else class="info-btn" v-on:click="emitPrice(item.name, item.price)">
                            Info
                        </button>
                    </div>
                    <div class="icons">
                        <button class="bi bi-pencil" id="edit-icon" v-on:click="editData(item)"></button>
                        <button class="bi bi-trash" id="delete-icon" v-on:click="deleteData(item.name)"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
export default {
    name: "GalleryCard",

    data() {
        return {
            data: ''
        };
    },

    created() {
        this.carsData();
    },

    methods: {
        truncatedDescription(details) {
            let maxLength = 50;
            if (details?.length > maxLength) {
                return details?.slice(0, maxLength) + "...";
            } else {
                return details;
            }
        },

        emitPrice(carName, price) {
            this.$emit("emitPriceAlert", carName, price);
        },

        deleteData(name) {
            alert(`Deleted ${name}`);
        },

        editData(cars) {
            this.$emit("editData", cars);
        },

        // GET Method - Axios API
        async carsData() {
            const result = await axios.get(
                "https://testapi.io/api/dartya/resource/cardata"
            );
            this.data = result.data.data
            // this.$emit('carsData', this.carsData);
        },

        //GET Method for ID - Axios API
        async carsID() {
            const result = await axios.get("https://testapi.io/api/dartya/resource/cardata/id");
            this.data = result.data.data.id
            console.log(result)
            console.log(carsID);
        }
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

body {
    background-color: #212a3e;
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
    padding: 8px 50px;
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

.info-btn {
    font-size: 15px;
}

.avilable-btn {
    font-size: 15px;
}

.button {
    position: relative;
    top: 23px;
    cursor: pointer;
}

.button .avilable-btn {
    background-color: #1e1f23;
    cursor: default;
}

#edit-icon,
#delete-icon {
    background-color: transparent;
}

.icons {
    display: flex;
}

#edit-icon {
    right: 55px;
    bottom: 25px;
    font-size: 20px;
}

#delete-icon {
    left: 55px;
    bottom: 25px;
    font-size: 20px;
}

@media only screen and (max-width: 958px) and (min-width: 350px) {
    .car-content {
        margin-top: 10%;
    }
}
</style>
