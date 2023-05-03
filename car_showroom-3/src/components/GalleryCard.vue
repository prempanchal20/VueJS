<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
<div class="container-content">
    <div class="container" v-for="item in cars">
        <div class="card">
            <div class="box">
                <div class="content">
                    <div class="car-name">
                        <h3>{{ item.name }}</h3>
                    </div>
                    <div class="images">
                        <img :src="item.image" alt="car - image" />
                    </div>

                    <p>{{ truncatedDescription(item.description) }}</p>
                    <div class="icons">
                        <i class="bi bi-pencil" v-on:click="editData(item)"></i>
                        <i class="bi bi-trash" v-on:click="deleteData(item.name)"></i>
                    </div>

                    <div class="button">
                        <a v-if="item.price === ''" class="card-btn">Available Soon </a>
                        <a v-else class="card-button" v-on:click="emitPrice(item.price, item.name)">Info
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "GalleryCard",
    methods: {
        truncatedDescription(description) {
            let maxLength = 50;
            if (description.length > maxLength) {
                return description.slice(0, maxLength) + "...";
            } else {
                return description;
            }
        },
        emitPrice(price, carName) {
            this.$emit("emitAlert", price, carName);
        },
        deleteData(carName) {
            alert(`Deleted ${carName}`);
        },
        editData(car) {
            this.$emit('editData', car)
        },

        getEditData() {
            alert(` 
            "Edited Data"\n\n
            "Car Name is-" ${this.name}, 
            "Car Description is- " ${this.description}, 
            "Car Price is- " ${this.price}, 
            "Car URL is- " ${this.url}`);
        },
    },
    emits: ['editData'],
    props: {
        cars: {
            type: Object,
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #232427;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1600px;
    margin: 40px 0;
}

.container .card {
    position: relative;
    min-width: 320px;
    height: 440px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
        inset -5px -5px 15px rgba(255, 255, 255, 0.1),
        5px 5px 5px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    margin: 30px;
}

.container .card .box {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    display: flex;
    justify-content: center;
    background: #2a2b2f;
    border: 2px solid #1e1f23;
    border-radius: 15px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    overflow: hidden;
}

.container .card .box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(212, 182, 182, 0.05);
    pointer-events: none;
}

.container .card .box .content {
    padding: 20px;
    text-align: center;
}

.container .card .box .content h2 {
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8em;
    color: rgba(255, 255, 255, 0.05);
}

.container .card .box .content h3 {
    font-size: 1.8em;
    color: rgba(255, 255, 255, 0.5);
    z-index: 1;
    transition: 0.5s;
}

.container .card .box .content p {
    font-size: 16px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.5);
    z-index: 1;
    transition: 0.5s;
}

.container .card:hover .box .content h3,
.container .card:hover .box .content p {
    color: rgba(255, 255, 255, 1);
}

.container .card .box .content a {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background: #e91e63;
    margin-top: 35px;
    text-decoration: none;
    border-radius: 20px;
    font-weight: 400;
    color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.images img {
    width: 90%;
}

.images {
    height: 170px;
}

.car-name {
    height: 90px;
}

.container-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card-button {
    cursor: pointer;
}

.container .card .box .content a.card-btn {
    background-color: #1e1f23;
    cursor: default;
}

.icons {
    position: absolute;
    color: white;
    left: 10px;
    bottom: 15px;
}

.bi-trash {
    position: absolute;
    left: 240px;
    cursor: pointer;
}

.bi-pencil {
    cursor: pointer;
}
</style>
