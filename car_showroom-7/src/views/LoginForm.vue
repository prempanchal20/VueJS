<template>
    <div>
        <div class="login-form">
            <div class="login-form-title">
                <h2>Login Form</h2>
            </div>

            <vee-form id="login-form-details" :validation-schema="loginSchema" @submit="loginUser">
                <label for="email">Email:</label>
                <vee-field type="email" id="email" name="email" placeholder="Enter your mail id"
                    v-model="loginUserData.email" />
                <ErrorMessage class="error-text" name="email" />

                <label for="password">Password:</label>
                <vee-field type="password" id="password" name="password" placeholder="Enter your password"
                    v-model="loginUserData.password" />
                <ErrorMessage class="error-text" name="password" />

                <div class="buttons">
                    <button type="submit" class="login-btn">
                        Login
                    </button>
                </div>
            </vee-form>
        </div>
    </div>
</template>

<script>
import { ErrorMessage } from "vee-validate";
import { mapActions } from "pinia";
import { useCarStore } from "../stores/carStore";
export default {
    name: "LoginForm",
    data() {
        return {

            loginSchema: {
                email: "required|email",
                password: "required|min:8|max:12|regex:^(?=.*\\d)(?=.*[^\\w\\d\\s]).+$",
            },

            loginUserData: {
                email: "",
                password: "",
            },
        };
    },

    methods:{
        ...mapActions(useCarStore, ["loginUser"]),
    },
};
</script>

<style scoped>
.login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    margin-top: 5%;
    border-radius: 20px;
}

h2 {
    text-align: center;
    color: white;
}

label {
    display: block;
    margin-bottom: 10px;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type="radio"] {
    margin-right: 5px;
}

.login-btn {
    border: none;
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
}

.cancel-btn {
    border: none;
    background-color: red;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: left;
}

.buttons {
    display: flex;
    justify-content: center;
    margin: 2%;
}

#login-form-details {
    color: white;
    margin-top: 20px;
}

.error-text {
    color: rgb(219, 81, 81);
}


.login-btn {
    width: 50%;
    padding: 10px 20px;
    border-radius: 10px;
}

/* Responsive Styles */
@media (max-width: 500px) {
    .container {
        max-width: 100%;
    }
}
</style>
