import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => {
    return { userValid: false };
  },
  actions: {
    //---------- Axios API - Register User-------------//
    async registerUser(userData) {
      try {
        const response = await axios.post(
          "https://testapi.io/api/dartya/resource/users",
          userData
        );
        if (response.status === 201) {
          alert(`User Registered Successfully 
                  User's Name is- ${userData.name}, 
                  User's Email Id is- ${userData.email}, 
                  User's Password is- ${userData.password}, 
                  User's Role is- ${userData.role},
                  User's Gender is- ${userData.gender},
                  User's DOB is- ${userData.dob}`);
        }
        return response;
      } catch (error) {
        alert("User is not Register... Please try Again");
      }
    },

    async postlogIn() {
      try {
        const response = await axios.post("https://reqres.in/api/login", {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        });
        this.userValid = true;
        return response.data;
      } catch (error) {
        alert(error);
      }
    },

    // GET User method - Axios API
    async checkUser(loginUserData) {
      const authToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;

      axios.defaults.headers.common["Authorization"] = "Bearer " + authToken;

      try {
        const response = await axios.get(
          "https://testapi.io/api/dartya/resource/users"
        );
        const data = await response.data.data;

        if (response.status == 200) {
          const checkUserData = data.find(
            (udata) =>
              udata.email == loginUserData.email &&
              udata.password == loginUserData.password
          );

          if (!checkUserData) {
            alert("Invalid Credentials..!!");
            return false;
          } else {
            alert(`Login Successfully..!!
                   User's Email Id is- ${loginUserData.email},
                   User's Password is- ${loginUserData.password}"`);

            localStorage.setItem("token", authToken);
            this.login = true;
            return true;
          }
        } else {
          try {
            const response = await axios.post("https://reqres.in/api/login", {
              email: "eve.holt@reqres.in",
              password: "cityslicka",
            });
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("loggedIn", true);
          } catch (error) {
            localStorage.setItem("token", "aToken");
            localStorage.setItem("loggedIn", true);
          }
        }
      } catch (error) {
        localStorage.setItem("token", authToken);
        localStorage.setItem("loggedIn", true);
      }
    },
  },
});
