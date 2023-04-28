<template>
<vee-form class="modal" :validation-schema="schema">
    <div class="modal-content">
        <h2>Add Car</h2>
        <div class="car-details">
            <label for="name">Car Name:</label>
            <vee-field type="text" id="car-name" name="name" placeholder="enter car name" />
            <ErrorMessage class="error-text" name="name" />

            <label for="description">Car Description:</label>
            <textarea id="description" name="description" rows="4" cols="50" placeholder="enter car description"></textarea>

            <ErrorMessage class="error-text" name="description" />

            <label for="price">Car Price:</label>
            <vee-field type="number" id="car-price" name="price" placeholder="enter car price" />
            <ErrorMessage class="error-text" name="price" />

            <label for="image">Car Image:</label>
            <vee-field type="text" id="car-image" name="image" placeholder="enter Image URL" />
            <ErrorMessage class="error-text" name="image" />
            <div class="button">
                <button type="reset" class="cancel">Cancel</button>
                <button type="submit" class="submit" @submit="modal"> Submit</button>
            </div>
        </div>
    </div>
</vee-form>
</template>

<script>
import { ErrorMessage } from 'vee-validate';
export default {
    data() {
        return {
            schema: {
                name: "required",
                description: "required|min:30|max:120",
                image: "required",
                price: "required",
            }
        }
    },
    methods: {
        modal(values) {
            console.log(values);
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

.modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
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

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
}

input[type="text"],
input[type="number"],
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
    background-color: red;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    width: 30%;
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
