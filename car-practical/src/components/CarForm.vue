<template>
<vee-form div class="modal">
    <div class="modal-content">
        <h2>Add Car</h2>
        <form>
            <label for="name">Car Name:</label>
            <input type="text" id="car-name" name="name" placeholder="enter car name" required />

            <label for="description">Car Description:</label>
            <textarea id="description" name="description" placeholder="enter car description" required></textarea>

            <label for="price">Car Price:</label>
            <input type="number" id="car-price" name="price" placeholder="enter car price" required />

            <label for="image">Car Image:</label>
            <input type="text" id="car-image" name="image" placeholder="enter Image URL" required />
            <div class="button">
                <button type="reset" class="cancel">Cancel</button>
                <button type="submit" class="submit">Save Changes</button>
            </div>
        </form>
    </div>
</vee-form>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
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
}

.modal-content {
    background-color: rgba(0, 0, 0, 0.5);
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
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
</style>
