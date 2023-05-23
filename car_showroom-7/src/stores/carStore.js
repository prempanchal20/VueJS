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
      editModel: false,
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
        .catch((error) => alert("Coudn't Show The Data... Please try Again"));
    },

    // GET Method by ID - Axios API
    fetchData(carID) {
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
    getFormData(carData) {
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
          this.editModel = false;
        })

        .catch((error) => {
          alert("Coudn't Add The Car... Please try Again");
        });
    },

    // Put Method - Axios API
    alertUpdateData(carData) {
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
          this.editModel = false;
        })
        .catch((error) => {
          alert("Coudn't Edit the Data... Please try Again");
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
            // this.apiResponses.push(response.data);
          })
          .catch((error) => {
            alert("Coudn't Delete The Data... Please try Again");
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
            // this.apiResponses.push(response.data);
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
            // this.apiResponses.push(response.data);
            router.push("/login");
          }
        })
        .catch((error) => {
          alert("User is not Register... Please try Again");
        });
    },
  },
});
