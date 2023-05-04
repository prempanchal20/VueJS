<template>
    <vee-form class="modal" :validation-schema="schema">
        {{ editCar }}
        <div class="modal-content">

            <h2 v-if="editCar">Edit car</h2>
            <h2 v-else>Add car</h2>

            <div class="car-details">
                <label for="name">Car Name: </label>
                <vee-field type="text" id="car-name" name="name" placeholder="enter car name" v-model="editCar.name" />
                <ErrorMessage class="error-text" name="name" />

                <label for="description">Car Description:</label>
                <vee-field id="car-description" name="description" as="textarea" rows="4" cols="50"
                    placeholder="enter car description" v-model="editCar.description"></vee-field>

                <ErrorMessage class="error-text" name="description" />

                <label for="price">Car Price:</label>
                <vee-field type="number" id="price" name="price" placeholder="enter car price" v-model="editCar.price" />
                <ErrorMessage class="error-text" name="price" />

                <label for="url">Car Image:</label>
                <vee-field name="url" type="url" id="car-url" placeholder="enter Image URL" v-model="editCar.image" />
                <ErrorMessage class="error-text" name="url" />

                <div class="button">
                    <button type="reset" class="reset" v-on:click.prevent="onCancel">Cancel</button>

                    <button type="submit" class="submit" v-on:click.prevent="alertUpdateData" v-if="editCar">Submit</button>

                    <button type="submit" class="submit" v-on:click.prevent="getFormData" v-else>Submit</button>
                </div>
            </div>
        </div>
    </vee-form>
</template>

<script>
import {
    ErrorMessage,
} from 'vee-validate';

export default {
    name: "CarForm",
    data() {
        return {
            schema: {
                name: "required",
                description: "required|min:30|max:120",
                url: "required|url",
                price: "required",
            },

            editCar: {
                name: this.editCar.name,
                price: this.editCar.price,
                image: this.editCar.image,
                description: this.editCar.description,
            },
        };
    },
    props: {
        editModel: {
            type: Boolean,
        },

        editCar: {
            type: Object,
        },

        isAddModel: {
            type: Boolean,
        }
    },

    methods: {
        getFormData() {
            alert(` 
            "Created Data"\n
            "Car Name is-" ${this.name}, 
            "Car Description is- " ${this.description}, 
            "Car Price is- " ${this.price}, 
            "Car URL is- " ${this.url}`);
        },

        alertUpdateData() {
            alert(` 
            "Edited Data"\n
            "Car Name is-" ${this.editCar.name}, 
            "Car Description is- " ${this.editCar.description}, 
            "Car Price is- " ${this.editCar.price}, 
            "Car URL is- " ${this.editCar.image}`);
        },

        onCancel() {
            this.$emit('onCancel');
        }
    },
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: white;
}

.car-details {
    display: grid;
}

.modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #151418;
    border-radius: 10px;
}

.modal-content {
    background-color: rgba(0, 0, 0, 0.5);
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    border-radius: 20px;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
}

input[type="text"],
input[type="number"],
input[type="url"],
textarea {
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: none;
    color: black;
}

button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    width: 30%;
    margin-right: 10%;
}

button[type="reset"] {
    background-color: rgb(209, 91, 91);
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    width: 30%;
    margin-right: 10%;
}

.button {
    display: flex;
    justify-content: space-evenly;
}

h2 {
    color: white;
    text-align: center;
}

.error-text {
    color: rgb(219, 81, 81);
}
</style>
