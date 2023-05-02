<template>
<GalleryCard :cars="cars"></GalleryCard>
</template>

<script>
import GalleryCard from "./components/GalleryCard.vue";

export default {
    name: "App",
    components: {
        GalleryCard,
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
                    name: "Kia Seltos",
                    price: "₹9.95 - ₹17.65 Lakh",
                    description: "The Kia Seltos is a stylish and spacious SUV with a range of advanced features. It comes with a choice of petrol and diesel engines, and offers excellent performance on both city and highway roads.",
                    image: "https://www.pngarts.com/files/6/Kia-Seltos-Transparent-Background-PNG.png",
                },
            ],
        };
    },
};
</script>
