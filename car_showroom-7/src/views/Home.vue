<template>
    <div class="cars-data">
        <ul class="menu">
            <li><button @click="toggle">Add Car</button></li>
        </ul>
        <GalleryCard :data="data" @editData="editData" />

        <CarForm v-if="editModel" :editModel="editModel" :isAddModel="isAddModel" :editCar="editCar" @onCancel="onCancel" />
    </div>
</template>

<script>
import CarForm from "../components/CarForm.vue";
import GalleryCard from "../components/GalleryCard.vue";
import { useCarStore } from "../stores/carStore";
import { mapActions, mapWritableState } from "pinia";

export default {
    name: "Home",

    components: {
        GalleryCard,
        CarForm,
    },

    data() {
        return {
            data: "",
        };
    },
    computed: {
        ...mapWritableState(useCarStore, ['editModel', 'isAddModel']),
    },

    created() {
        this.carsData()
    },

    methods: {
        ...mapActions(useCarStore, ['carsData']),

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
    },
};
</script>