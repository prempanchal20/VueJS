<template>
    <div class="fonts" :style="{ fontFamily: 'Poppins, sans-serif' }">
        <Navbar v-on:toggleBtn="toggleBtn" />
        <div class="cars-data">

            <GalleryCard v-for="car in cars" :name="car.name" :image="car.image" :price="car.price"
                :description="car.description" v-on:emitPriceAlert="emitPrice" v-on:editData="editData" />
               
            <CarForm v-if="editModel" :editModel="editModel" :editCar="editCar" v-on:onCancel="onCancel" />
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

    methods: {
        emitPrice(carName, price) {
            alert(`${carName}, ₹${price}`);
        },

        editData(data) {
            this.editModel = true;
            this.editCar = data;
            this.isAddModel = false;
        },

        toggleBtn(value) {
            this.editModel = true;
        },

        onCancel() {
            this.isAddModel = false;
            this.editModel = false;
        },
    },

    data() {
        return {
            editModel: false,
            isAddModel: true,
            editCar: {},
            cars: [{
                name: "Maruti Suzuki Swift",
                price: 581000,
                description: "The Maruti Suzuki Swift is a popular hatchback known for its sporty looks and excellent performance. It comes with a 1.2L petrol engine and offers great fuel efficiency, making it a top choice for city driving.",
                image: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-profile-shots/swift-launch-2021/fireredmidnightblack.webp",
            },
            {
                name: "Mahindra Tuv 300",
                price: 8767868,
                description: "The TUV 300 is a 7 seater 3 cylinder car and has length of 3995mm, width of 1795mm and a wheelbase of 2680mm.",
                image: "https://www.seekpng.com/png/full/250-2507030_mahindra-tuv300-mahindra-tuv-300-black.png",
            },
            {
                name: "Honda City",
                price: "",
                description: "The Honda City is a premium sedan with a sleek and modern design. It comes with a range of advanced features including a touchscreen infotainment system, automatic climate control, and a sunroof.",
                image: "https://www.pngmart.com/files/22/Honda-City-PNG-Transparent.png",
            },
            ],

        };
    },
};
</script>
