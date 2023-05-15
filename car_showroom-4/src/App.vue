<template>
    <div class="fonts" :style="{ fontFamily: 'Poppins, sans-serif' }">
        <Navbar />
        <ul class="menu">
            <li><button v-on:click="toggle">Add Car</button></li>
        </ul>
        <div class="cars-data">
            <GalleryCard :data="data" @emitPriceAlert="emitPrice" @editData="editData" @deleteData="deleteData" />

            <CarForm v-if="editModel" @getFormData="getFormData" :editModel="editModel" :isAddModel="isAddModel"
                :editCar="editCar" v-on:onCancel="onCancel" @updatedData="updatedData" @alertUpdateData="alertUpdateData" />
        </div>
    </div>
</template>

<script>
import CarForm from "./components/CarForm.vue";
import GalleryCard from "./components/GalleryCard.vue";
import axios from "axios";

export default {
    name: "App",

    components: {
        GalleryCard,
        CarForm,
    },

    created() {
        this.carsData()
    },

    data() {
        return {
            data: "",
            editModel: false,
            isAddModel: true,
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
            this.editCar = {}
        },

        onCancel() {
            this.isAddModel = false;
            this.editModel = false;
        },

        deleteData(itemId, itemName) {
            this.deleteData(itemId, itemName);
        },


        //----------------Axios APIs - GET, Post, Put, Delete----------------//

        // GET Method - Axios API
        carsData() {
            axios.get(
                "https://testapi.io/api/dartya/resource/cardata"
            ).then(response => {
                this.data = response.data.data
            })
        },

        // Post Method - Axios API
        getFormData(carData) {
            axios.post(
                "https://testapi.io/api/dartya/resource/cardata", carData
            ).then(response => console.log(response));
            alert(`"Created Data"\n
                     "Car Name is-" ${carData.name}, 
                     "Car Description is- " ${carData.details}, 
                     "Car Price is- " ${carData.price}, 
                     "Car URL is- " ${carData.image}`);
            this.carsData()
            this.onCancel()
        },

        // DELETE Method - Axios API
        async deleteData(itemId, itemName) {
            // Delete Data Alert
            const deleteAlert = window.confirm(
                `Are You Sure Want to Delete ${itemName}`
            );

            if (deleteAlert == true) {
                await axios
                    .delete(`https://testapi.io/api/dartya/resource/cardata/${itemId}`)
                    .then((response) => console.log(response));
                this.carsData();
            }
        },

        // Put Method - Axios API
        async alertUpdateData(carData) {
            await axios.put(
                `https://testapi.io/api/dartya/resource/cardata/${carData.id}`,
                {
                    name: carData.name,
                    price: carData.price,
                    image: carData.image,
                    details: carData.details,
                }
            ).then((response) => console.log(response));

            // Edit Data Alert
            alert(`"Edited Data"\n
                    "Car Name is-" ${carData.name}, 
                    "Car Description is- " ${carData.details}, 
                    "Car Price is- " ${carData.price}, 
                    "Car URL is- " ${carData.image}`);
            this.carsData()
            this.onCancel()
        },
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
