<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
    <section class="car-content" v-for="item in data" :key="item.id">
        <div class="car-card">
            <div class="car-box">
                <div class="car-container">
                    <div class="car-images">
                        <img :src="item.image" alt="car - image" />
                    </div>

                    <div class="car-name">
                        <h3>{{ item.name }}</h3>
                    </div>

                    <div class="description">
                        <p>{{ truncatedDescription(item.details) }}</p>
                    </div>

                    <div class="buttons-icon">
                        <div class="edit-icon">
                            <button class="bi bi-pencil" id="edit-icon" @click.prevent="editData(item)"></button>
                        </div>

                        <div class="info-button">
                            <button v-if="item.price === ''" class="avilable-btn">
                                Available Soon
                            </button>

                            <RouterLink :to="{ name: 'details', params: { id: item.id } }" v-else class="info-btn"
                                @click="emitPrice(item.name, item.price)">
                                Info
                            </RouterLink>
                        </div>

                        <div class="delete-icon">
                            <button class="bi bi-trash" id="delete-icon" @click.prevent="deleteData(item.id, item.name)">
                            </button>
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

    props: ['data'],
    emits: ["emitPrice", "editData", "deleteData"],


    methods: {
        truncatedDescription(details) {
            let maxLength = 50;
            if (details?.length > maxLength) {
                return details?.slice(0, maxLength) + "...";
            } else {
                return details;
            }
        },

        emitPrice(carName, carPrice) {
            this.$emit("emitPrice", carName, carPrice);
        },

        editData(cars) {
            this.$emit("editData", cars);
        },

        deleteData(itemID, itemName) {
            this.$emit("deleteData", itemID, itemName);
        },

        navigateToRoute() {
            this.$router.push('/CarDetails');
        }
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    margin: 20% 20px;
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
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
}

.car-container {
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
    padding: 8px 36px;
    background: #e91e63;
    margin-top: 15px;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    border: none;
}

.car-images img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.car-images {
    height: 50%;
}

.car-name {
    height: 25%;
    padding: 6%;
}

.car-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.buttons-icon {
    display: flex;
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
    top: 1px;
    cursor: pointer;
}

.description {
    height: 10%;
    width: 100%;
}

.button .avilable-btn {
    background-color: #1e1f23;
    cursor: default;
}

.icons {
    display: flex;
    justify-content: space-between;
    position: relative;
    bottom: 50px;
}

#edit-icon,
#delete-icon {
    background-color: transparent;
    font-size: 20px;
}
</style>
