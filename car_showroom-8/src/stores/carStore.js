// Options Store
import { defineStore } from "pinia";
import axios from "axios";
import router from "../router/router";

export const useCarStore = defineStore("api", {
  state: () => {
    return {
      showData: [],
      carDetail: [],
      getCarsData: [],
      deleteData: true,
      isAddModel: true,
      openEditModel: false,
    };
  },

  getters: {
    getShowData(state) {
      return state.showData;
    },

    getCarDetail(state) {
      return state.carDetail;
    },
  },

  actions: {
    //----------------Axios APIs - GET, Post, Put, Delete----------------//

    // GET Method - Axios API
    carsData() {
      axios
        .get("https://testapi.io/api/dartya/resource/cardata")
        .then((response) => {
          this.showData = response.data.data;
        })
        .catch((error) => alert("Couldn't Show The Data... Please try Again"));
    },

    // GET Method by ID - Axios API
    getCarbyID(carID) {
      axios
        .get(`https://testapi.io/api/dartya/resource/cardata/${carID}`)
        .then((response) => {
          this.carDetail = response.data;
        })
        .catch((error) => {
          alert(error);
        });
    },

    // Post Method - Axios API
    addCarFormData(carData) {
      axios
        .post("https://testapi.io/api/dartya/resource/cardata", carData)
        .then((response) => {
          alert(`"Created Data"\n
        "Car Name is-" ${carData.name}, 
        "Car Description is- " ${carData.details}, 
        "Car Price is- " ${carData.price}, 
        "Car URL is- " ${carData.image}`);
          this.carsData();
          this.isAddModel = false;
          this.openEditModel = false;
        })

        .catch((error) => {
          alert("Couldn't Add The Car... Please try Again");
        });
    },

    // Put Method - Axios API
    editCarFormData(carData) {
      axios
        .put(`https://testapi.io/api/dartya/resource/cardata/${carData.id}`, {
          name: carData.name,
          price: carData.price,
          image: carData.image,
          details: carData.details,
        })
        .then((response) => {
          alert(`"Edited Data"\n
                  "Car Name is-" ${carData.name}, 
                  "Car Description is- " ${carData.details}, 
                  "Car Price is- " ${carData.price}, 
                  "Car URL is- " ${carData.image}`);
          this.carsData();
          this.openEditModel = false;
        })
        .catch((error) => {
          alert("Couldn't Edit the Data... Please try Again");
        });
    },

    // DELETE Method - Axios API
    deleteData(itemId, itemName) {
      const deleteAlert = window.confirm(
        `Are You Sure Want to Delete ${itemName}`
      );

      if (deleteAlert == true) {
        axios
          .delete(`https://testapi.io/api/dartya/resource/cardata/${itemId}`)
          .then((response) => {
            this.carsData();
          })
          .catch((error) => {
            alert("Couldn't Delete The Data... Please try Again");
          });
      }
    },

    //---------- Axios API - Login User--------  ----//
    async loginUser(loginUserData) {
      await axios
        .post("https://testapi.io/api/dartya//login", loginUserData)
        .then((response) => {
          if (response.status === 200) {
            alert(`Login Successfully..!!\n
                User's Email Id is- ${loginUserData.email}, 
                User's Password is- ${loginUserData.password},"`);
          }
          router.push("/home");
        })
        .catch((error) => {
          alert("User is not Log in... Please try Again");
        });
    },

    async registerUser(userData) {
      await axios
        .post("https://testapi.io/api/dartya/resource/users", userData)
        .then((response) => {
          if (response.status === 201) {
            alert(`"User Registered Successfully "\n
                "User's Name is-" ${userData.name}, 
                "User's Email Id is- " ${userData.email}, 
                "User's Password is- " ${userData.password}, 
                "User's Role is- " ${userData.role}
                "User's Gender is- ${userData.gender}"
                "User's DOB is-${userData.dob} "`);
            router.push("/login");
          }
        })
        .catch((error) => {
          alert("User is not Register... Please try Again");
        });
    },

    // GET User method - Axios API
    checkUser() {
      const authToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;

      axios.defaults.headers.common["Authorization"] = "Bearer " + authToken;

      try {
        const response = axios.get(
          "https://testapi.io/api/dartya/resource/users"
        );
        const checkData = response.data.data;

        if (response.status == 200) {
          alert("User Logged In..!!");
          return false;
        }

        if (userData.password == password) {
          this.name = userData.name;
          this.email = userData.email;
          this.password = userData.password;
          this.role == userData.role;
          this.dob = userData.dob;
          this.gender = userData.gender;
          this.login = true;

          try {
            const response = axios.post("https://reqres.in/api/login", {
              email: "eve.holt@reqres.in",
              password: "cityslicka",
            });

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("loggedIn", true);
          } catch (error) {
            localStorage.setItem("token");
            localStorage.setItem("loggedIn", true);
          }
        }
      } catch (error) {
        localStorage.setItem("token", authToken);
        localStorage.setItem("loggedIn", true);
      }
      router.push("/home");
    },
  },
});
