<template>
    <div class="cars-data">
        <ul class="menu">
            <li><button @click="toggle">Add Car</button></li>
        </ul>
        <GalleryCard :data="data" @editData="editData" @deleteData="deleteData" />

        <CarForm v-if="editModel" :editModel="editModel" :isAddModel="isAddModel" :editCar="editCar"
            @getFormData="getFormData" @onCancel="onCancel" @alertUpdateData="alertUpdateData" />
    </div>
</template>

<script>

import CarForm from "../components/CarForm.vue";
import GalleryCard from "../components/GalleryCard.vue";
import { useCarStore } from "../stores/carStore";
import { mapActions } from "pinia";

export default {
    name: "Home",

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

        ...mapActions(useCarStore, ['carsData']),
    },
};
</script>