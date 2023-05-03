<template>
<div class="fonts" :style="{ fontFamily: 'Poppins, sans-serif' }">
    <navbar v-on:toggleBtn="toggleBtn" />
    <GalleryCard :cars="cars" v-on:emitAlert="emitPrice" v-on:editData="editData"></GalleryCard>
    <CarForm v-if="editModel" :editModel="editModel" :editCar="editCar" />
</div>
</template>

<script>
import CarForm from "./components/CarForm.vue";
import GalleryCard from "./components/GalleryCard.vue";
import Navbar from "./components/Navbar.vue";

export default {
    name: "App",
    components: {
        GalleryCard,
        Navbar,
        CarForm,
    },

    methods: {
        emitPrice(price, carName) {
            alert(`${carName}, ${price}`);
        },

        editData(data) {
            this.editModel = true;
            this.editCar = data;
            this.isAddModel= false;
        },

        toggleBtn(value) {
            console.log(value);
            this.editModel = true;
        }
    },
    data() {
        return {
            editModel: false,
            isAddModel:false,
            cars: [{
                    name: "Maruti Suzuki Swift",
                    price: "555854",
                    description: "The Maruti Suzuki Swift is a popular hatchback known for its sporty looks and excellent performance. It comes with a 1.2L petrol engine and offers great fuel efficiency, making it a top choice for city driving.",
                    image: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-profile-shots/swift-launch-2021/fireredmidnightblack.webp",
                },
                {
                    name: "Mahindra Tuv 300",
                    price: "986786",
                    description: "The TUV 300 is a 7 seater 3 cylinder car and has length of 3995mm, width of 1795mm and a wheelbase of 2680mm.",
                    image: "https://www.seekpng.com/png/full/250-2507030_mahindra-tuv300-mahindra-tuv-300-black.png",
                },
                {
                    name: "Kia Seltos",
                    price: "96785987",
                    description: "The Kia Seltos is a stylish and spacious SUV with a range of advanced features. It comes with a choice of petrol and diesel engines, and offers excellent performance on both city and highway roads.",
                    image: "https://www.pngarts.com/files/6/Kia-Seltos-Transparent-Background-PNG.png",
                },
                {
                    name: "Range Rover Sports",
                    price: "5677643",
                    description: "Land Rover is crafted to reflect bold design with genuine capability & composure at heart. A reflection of modernity. Captivating in its simplicity.",
                    image: "https://i.pinimg.com/originals/52/ac/01/52ac0169c1ead77f6e33180d129900af.png",
                },
                {
                    name: "Mahindra Thar",
                    price: "89769076",
                    description: "The Mahindra Thar is a rugged SUV with an iconic design and excellent off-road capabilities. It comes with a choice of petrol and diesel engines, and offers advanced features like touchscreen infotainment and cruise control.",
                    image: "https://www.pharaohautomotive.com/wp-content/uploads/2022/06/Mahindra-Thar.png",
                },
                {
                    name: "Honda City",
                    price: "",
                    description: "The Honda City is a premium sedan with a sleek and modern design. It comes with a range of advanced features including a touchscreen infotainment system, automatic climate control, and a sunroof.",
                    image: "https://www.pngmart.com/files/22/Honda-City-PNG-Transparent.png",
                },
                {
                    name: "Maruti Suzuki Alto",
                    price: "",
                    description: "The Maruti Suzuki Alto is a budget-friendly hatchback with a simple yet functional design. It comes with a choice of petrol engines and offers great fuel efficiency, making it a top choice for first-time car buyers.",
                    image: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-profile-shots/alto-800/alto800_blazing_red/alto800_blazing_red_new.ashx",
                },
                {
                    name: "Renault Kwid",
                    price: "565645643",
                    description: "The Renault Kwid is a stylish and compact hatchback with a bold design. It comes with a range of features including touchscreen infotainment, a reverse camera, and a digital instrument cluster.",
                    image: "https://www.pharaohautomotive.com/wp-content/uploads/2022/06/Renault-Kwid.png",
                },
            ],
            editCar: ''
        };
    },
};
</script>
