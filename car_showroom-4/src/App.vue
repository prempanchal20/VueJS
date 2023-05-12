<template>
    <div class="fonts" :style="{ fontFamily: 'Poppins, sans-serif' }">
        <Navbar />
        <ul class="menu">
            <li><button v-on:click="toggle">Add Car</button></li>
        </ul>

        <div class="cars-data">
            <GalleryCard :data="data" v-on:emitPriceAlert="emitPrice" v-on:editData="editData" ref="carsDataRef" />

            <CarForm v-if="editModel" v-on:getFormData="apiCall" :editModel="editModel" :isAddModel="isAddModel"
                :editCar="editCar" v-on:onCancel="onCancel" @updatedData="updatedData"/>
        </div>
    </div>
</template>

<script>
import CarForm from "./components/CarForm.vue";
import GalleryCard from "./components/GalleryCard.vue";
// import axios from "axios";

export default {
    name: "App",

    components: {
        GalleryCard,
        CarForm,
    },

    // created() {
    //     this.getapi();
    // },

    data() {
        return {
            data: "",
            editModel: false,
            isAddModel: true,
        };
    },

    methods: {
        // getapi() {
        //     axios.get(
        //         "https://testapi.io/api/dartya/resource/cardata"
        //     ).then(response => {
        //         this.data = response.data.data
        //     })
        // },

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

        updatedData(dataT){
            console.log("object pass",dataT);
        },

        // apiCall() {
        //     // this.getapi();
        //     this.carData()
        //     console.log("demo");
        //     console.log(this.editData());
        // },

        apiCall(prem) {
            // this.carData
            // console.log("object",prem);
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
