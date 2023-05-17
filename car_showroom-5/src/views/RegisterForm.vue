
<template>
    <section class="register-form">
        <div class="register-form-title">
            <h2>Registration Form</h2>
        </div>

        <vee-form id="register-form-details" :validation-schema="registerSchema">
            <label for="email">Email:</label>
            <vee-field type="email" id="email" name="email" placeholder="Enter your mail id" />
            <ErrorMessage class="error-text" name="email" />

            <label for="password">Password:</label>
            <vee-field type="password" id="password" name="password" placeholder="Enter your password" />
            <ErrorMessage class="error-text" name="password" />

            <label for="password">Confirm Password:</label>
            <vee-field type="password" name="confirmation" placeholder="Confirm your password" />
            <ErrorMessage class="error-text" name="confirmation" />

            <label for="role">Role:</label>
            <vee-field as="select" id="role" name="role">
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
                        <vee-field type="radio" id="male" name="gender" value="male" />Male
                    </label>
                    <label for="female">
                        <vee-field type="radio" id="female" name="gender" value="female" />Female
                    </label>
                </div>
            </div>
            <ErrorMessage class="error-text" name="gender" />

            <label for="age">Age:</label>
            <vee-field type="number" id="age" name="age" placeholder="Enter your Age" />
            <ErrorMessage class="error-text" name="age" />

            <label for="dob">Date of Birth:</label>
            <vee-field type="date" id="dob" name="dob" />
            <ErrorMessage class="error-text" name="dob" />

            <div class="buttons">
                <button type="reset" class="cancel-btn" @click="onCancel">Cancel
                </button>

                <button type="submit" class="register-btn" @register="register">Register</button>
            </div>
        </vee-form>
    </section>
</template>

<script>
import { ErrorMessage } from "vee-validate";
export default {
    name: "RegisterForm",

    data() {
        return {
            registerSchema: {
                email: "required|email",
                password: "required|min:8|max:12|regex:^(?=.*\\d)(?=.*[^\\w\\d\\s]).+$",
                confirmation: "required|confirmed:@password",
                role: "required",
                gender: "required",
                age: "required|min_value:1|age",
                dob: "required",
            },
        };
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
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;
}

.cancel-btn {
    border: none;
    background-color: rgb(204, 33, 33);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    float: left;
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
    justify-content: space-between;
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