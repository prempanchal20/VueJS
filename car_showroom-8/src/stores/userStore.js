import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => {
    return { userValid: JSON.parse(localStorage.getItem("loggedIn")) };
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

    async logout() {
      try {
        const logoutAlert = window.confirm(`Are You Sure Want to Logout..?`);
        if (logoutAlert == true) {
          this.userValid = false;
          localStorage.setItem("loggedIn", false);
          return logoutAlert;
        }
      } catch (error) {
        alert("User Is Not Logout Successfully... Please try Again..!!");
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
            this.userValid = true;
            this.login = true;

            try {
              const response = await axios.post("https://reqres.in/api/login", {
                email: "eve.holt@reqres.in",
                password: "cityslicka",
              });

              this.userValid = true;
              localStorage.setItem("token", response.data.token);
              localStorage.setItem("loggedIn", true);

              return response.data;
            } catch (error) {
              alert("You are Not Login Successfully... Please try again..!!");
            }
            return true;
          }
        }
      } catch (error) {
        error;
      }
    },
  },
});
