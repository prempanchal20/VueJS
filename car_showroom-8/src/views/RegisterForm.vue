<template>
    <section class="register-form">
        <div class="register-form-title">
            <h2>Registration Form</h2>
        </div>

        <vee-form id="register-form-details" :validation-schema="registerSchema" @submit="registerUserData">

            <label for="text">Name:</label>
            <vee-field type="name" id="name" name="name" placeholder="Enter your name" v-model="userData.name" />
            <ErrorMessage class="error-text" name="name" />

            <label for="email">Email:</label>
            <vee-field type="email" id="email" name="email" placeholder="Enter your mail id" v-model="userData.email" />
            <ErrorMessage class="error-text" name="email" />

            <label for="password">Password:</label>
            <vee-field type="password" id="password" name="password" placeholder="Enter your password"
                v-model="userData.password" />
            <ErrorMessage class="error-text" name="password" />

            <label for="password">Confirm Password:</label>
            <vee-field type="password" name="confirmation" placeholder="Confirm your password" />
            <ErrorMessage class="error-text" name="confirmation" />

            <label for="role">Role:</label>
            <vee-field as="select" id="role" name="role" v-model="userData.role">
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
                <option value="customer">Customer</option>
            </vee-field>
            <ErrorMessage class="error-text" name="role" />

            <div class="gender">
                <label class="gender">Gender:</label>
                <div class="male-female">
                    <label for="male">
                        <vee-field type="radio" id="male" name="gender" value="male" v-model="userData.gender" />Male
                    </label>
                    <label for="female">
                        <vee-field type="radio" id="female" name="gender" value="female" />Female
                    </label>
                </div>
            </div>
            <ErrorMessage class="error-text" name="gender" />

            <label for="age">Age:</label>
            <vee-field type="number" id="age" name="age" placeholder="Enter your Age" v-model="userData.age" />
            <ErrorMessage class="error-text" name="age" />

            <label for="dob">Date of Birth:</label>
            <vee-field type="date" id="dob" name="dob" v-model="userData.dob" :max="getCurrentDate()" />

            <ErrorMessage class="error-text" name="dob" />

            <div class="buttons">
                <button type="submit" class="register-btn">Register</button>
            </div>
        </vee-form>
    </section>
</template>

<script>
import { ErrorMessage } from "vee-validate";
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/userStore'

export default {
    name: "RegisterForm",

    data() {
        return {
            registerSchema: {
                name: "required",
                email: "required|email",
                password: "required|min:8|max:12|regex:^(?=.*\\d)(?=.*[^\\w\\d\\s]).+$",
                confirmation: "required|confirmed:@password",
                role: "required",
                gender: "required",
                age: "required|min_value:1|age",
                dob: "required"
            },

            userData: {
                name: "",
                email: "",
                password: "",
                role: "",
                gender: "",
                age: "",
                dob: "",
            },
        };
    },

    methods: {
        getCurrentDate() {
            const today = new Date();
            return today.toISOString().split('T')[0];
        },

        validateDOB(value) {
            if (!value) {
                return "Please provide a date of birth";
            } else {
                const inputDOB = new Date(value);
                const today = new Date();
                const lastDOB = new Date("1947-08-15");
                const dateInFutureError = "Future Date is Invalid";
                const dateInPastError = "Date cannot be earlier than 15-08-1947";
                if (inputDOB >= today) {
                    return dateInFutureError;
                } else if (inputDOB <= lastDOB) {
                    return dateInPastError;
                } else {
                    return true;
                }
            }
        },

        ...mapActions(useUserStore, ["registerUser"]),

        async registerUserData() {
            const response = await this.registerUser(this.userData);
            if (response.status == 201) {
                this.$router.push({
                    name: "Login",
                });
            }
        },
    },
}
</script>

<style scoped>
.register-form {
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
    margin-bottom: 5%;
}

label {
    display: block;
    margin-bottom: 10px;
}

input[type="name"],
input[type="email"],
input[type="password"],
select,
input[type="number"],
input[type="date"] {
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

.register-btn {
    border: none;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    float: right;
    width: 50%;
}


.gender {
    display: flex;
    flex-direction: row;
}

.male-female {
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin-left: 10px;
}

.buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

#register-form-details {
    color: white;
}

.error-text {
    color: rgb(219, 81, 81);
}

/* Responsive Styles */
@media (max-width: 500px) {
    .container {
        max-width: 100%;
    }
}
</style>