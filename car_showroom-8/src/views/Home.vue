<template>
    <section class="cars-data">
        <ul class="menu">
            <li><button @click="addCarBtn">Add Car</button></li>
        </ul>
        <GalleryCard :data="data" @editData="editData" />

        <CarForm v-if="openEditModel" :openEditModel="openEditModel" :isAddModel="isAddModel" :editCar="editCar"
            @onCancel="onCancel" />
    </section>
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
        ...mapWritableState(useCarStore, ['openEditModel', 'isAddModel']),
    },

    created() {
        this.carsData()
    },

    methods: {
        ...mapActions(useCarStore, ['carsData']),

        editData(data) {
            this.editCar = data;
            this.openEditModel = true;
            this.isAddModel = false;
        },

        addCarBtn() {
            this.openEditModel = true;
            this.isAddModel = true;
            this.editCar = {}
        },

        onCancel() {
            this.isAddModel = false;
            this.openEditModel = false;
        },
    },
};
</script>