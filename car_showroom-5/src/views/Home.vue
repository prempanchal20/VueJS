<template>
    <ul class="menu">
        <li><button @click="toggle">Add Car</button></li>
    </ul>

    <div class="cars-data">
        <GalleryCard :data="data" @editData="editData" @deleteData="deleteData" />

        <CarForm v-if="editModel" :editModel="editModel" :isAddModel="isAddModel" :editCar="editCar"
            @getFormData="getFormData" @onCancel="onCancel" @alertUpdateData="alertUpdateData" />
    </div>
</template>

<script>
import CarForm from "../components/CarForm.vue";
import GalleryCard from "../components/GalleryCard.vue";
import axios from "axios";

export default {
    name: "App",

    components: {
        GalleryCard,
        CarForm,
    },

    data() {
        return {
            data: "",
            editModel: false,
            isAddModel: true,
        };
    },

    created() {
        this.carsData()
    },

    methods: {

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
            ).catch((error) => alert("Coudn't call the GET API... Please try Again"))
                .then(response => {
                    this.data = response.data.data
                })
        },

        // Post Method - Axios API
        getFormData(carData) {
            axios.post(
                "https://testapi.io/api/dartya/resource/cardata", carData
            ).then(response => this.carsData())

                .catch(error => {
                    alert("Coudn't Call The Post API... Please try Again")
                })

            alert(`"Created Data"\n
                     "Car Name is-" ${carData.name}, 
                     "Car Description is- " ${carData.details}, 
                     "Car Price is- " ${carData.price}, 
                     "Car URL is- " ${carData.image}`);
            this.onCancel()
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
            ).then(response => this.carsData())

                .catch(error => {
                    alert("Coudn't Call The Put API... Please try Again")
                })

            // Edit Data Alert
            alert(`"Edited Data"\n
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
                    .then((response) => this.carsData())
                    .catch(error => {
                        alert("Coudn't Call The Delete API... Please try Again")
                    })
            }
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

.menu {
    position: absolute;
    top: 65px;
}

.menu button {
    border: 1px solid white;
    border-radius: 8px;
    padding: 5px 15px;
    cursor: pointer;
    background-color: transparent;
    color: white;
    font-size: 20px;
    margin-right: 50px;
    margin-top: 20px;
}
</style>
