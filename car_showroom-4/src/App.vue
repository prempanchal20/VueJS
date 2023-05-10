<template>
    <div class="fonts" :style="{ fontFamily: 'Poppins, sans-serif' }">
        <Navbar />
        <ul class="menu">
            <li><button v-on:click="toggle">Add Car</button></li>
        </ul>

        <div class="cars-data">
            <GalleryCard v-on:emitPriceAlert="emitPrice" v-on:editData="editData"  />

            <CarForm v-if="editModel" :editModel="editModel" :isAddModel="isAddModel" :editCar="editCar"
                v-on:onCancel="onCancel" />
        </div>
    </div>
</template>
    
<script>
import CarForm from "./components/CarForm.vue";
import GalleryCard from "./components/GalleryCard.vue";

export default {
    name: "App",
    components: {
        GalleryCard,
        CarForm,
    },

    data() {
        return {
            editModel: false,
            isAddModel: true,
            editCar: {},
        };
    },

    methods: {
        emitPrice(carName, price) {
            alert(`${carName}, ₹${price}`);
        },

        editData(data) {
            this.editCar = data;
            this.editModel = true;
            this.isAddModel = false;
        },

        toggle() {
            this.editModel = true;
            this.isAddModel = true;
        },

        onCancel() {
            this.isAddModel = false;
            this.editModel = false;
        },

        // carsData() {
        //     this.carsData
        // },
    },
};
</script>

<style>
.menu {
    position: absolute;
    top: 80px;
    right: 10px;
}

.menu button {
    border: 1px solid white;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
}

.menu button {
    background-color: transparent;
    color: white;
    font-size: 20px;
}
</style>
