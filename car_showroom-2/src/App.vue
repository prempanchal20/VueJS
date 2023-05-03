<template>
<navbar />
<GalleryCard :cars="cars" v-on:emitAlert="emitPrice"></GalleryCard>
</template>

<script>
import GalleryCard from "./components/GalleryCard.vue";
import navbar from "./components/Navbar.vue";

export default {
    name: "App",
    components: {
        GalleryCard,
        navbar,
    },

    methods: {
        emitPrice(price, carName) {
            alert(`${carName}, ${price}`);
        },
    },

    data() {
        return {
            cars: [{
                    name: "Maruti Suzuki Swift",
                    price: "₹5.81 - ₹8.56 Lakh",
                    description: "The Maruti Suzuki Swift is a popular hatchback known for its sporty looks and excellent performance. It comes with a 1.2L petrol engine and offers great fuel efficiency, making it a top choice for city driving.",
                    image: "https://marutisuzukiarenaprodcdn.azureedge.net/-/media/images/maruti/marutisuzuki/car/car-profile-shots/swift-launch-2021/fireredmidnightblack.webp",
                },
                {
                    name: "Mahindra Tuv 300",
                    price: "₹9.00 - ₹15.70 Lakh",
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
