<template>
    <section>
        <div class="login-form">
            <div class="login-form-title">
                <h2>Login Form</h2>
            </div>

            <vee-form id="login-form-details" :validation-schema="loginSchema" @submit="user">
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
    </section>
</template>

<script>
import { useUserStore } from "../stores/userStore";
import { ErrorMessage } from "vee-validate";
import { mapActions, mapWritableState } from 'pinia'

export default {
    name: "LoginForm",

    data: () => {
        return {
            loginSchema: {
                email: "required|email",
                password: "required|min:8|max:12|regex:^(?=.*\\d)(?=.*[^\\w\\d\\s]).+$",
            },
            loginUserData: {},
        };
    },
    computed: {
        ...mapWritableState(useUserStore, ['userValid'])
    },
    methods: {
        ...mapActions(useUserStore, ['checkUser']),

        async user() {
            const response = await this.checkUser(this.loginUserData)
            if (response) {
                this.$router.push({
                    name: "Home",
                });
            }
        }
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
    border-radius: 4px;
    cursor: pointer;
    float: right;
    width: 50%;
    padding: 10px 20px;
    border-radius: 10px;
}

.cancel-btn {
    border: none;
    background-color: red;
    color: white;
    padding: 10px 20px;
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

/* Responsive Styles */

@media (max-width: 500px) {
    .container {
        max-width: 100%;
    }

    .login-form {
        margin-top: 20%;
    }
}
</style>
