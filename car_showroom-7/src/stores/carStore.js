// Options Store
import { defineStore } from "pinia";
import axios from "axios";

export const useCarStore = defineStore("api", {
  state: () => {
    return {
      showData: [],
      carDetail: [],
      editData: [],
      loginUserData: [],
      loginUser: [],
      userData: [],
      onCancel: true,
      editModel: true,
      isAddModel: true,
      deleteData: true,
    };
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
    async getFormData(carData) {
      await axios
        .post("https://testapi.io/api/dartya/resource/cardata", carData)
        .then((response) => this.carsData())

        .catch((error) => {
          alert("Coudn't Add The Car... Please try Again");
        });

      alert(`"Created Data"\n
                     "Car Name is-" ${carData.name}, 
                     "Car Description is- " ${carData.details}, 
                     "Car Price is- " ${carData.price}, 
                     "Car URL is- " ${carData.image}`);
      this.onCancel();
    },

    // Put Method - Axios API
    async alertUpdateData(carData) {
      await axios
        .put(`https://testapi.io/api/dartya/resource/cardata/${carData.id}`, {
          name: carData.name,
          price: carData.price,
          image: carData.image,
          details: carData.details,
        })
        .then((response) => this.carsData())

        .catch((error) => {
          alert("Coudn't Edit the Data... Please try Again");
        });

      // Edit Data Alert
      alert(`"Edited Data"\n
                    "Car Name is-" ${carData.name}, 
                    "Car Description is- " ${carData.details}, 
                    "Car Price is- " ${carData.price}, 
                    "Car URL is- " ${carData.image}`);
      this.carsData();
      this.onCancel();
    },

    // DELETE Method - Axios API
    async deleteData(itemId, itemName) {
      // Delete Data Alert
      const deleteAlert = window.confirm(
        `Are You Sure Want to Delete ${itemName}`
      );

      if (deleteAlert == true) {
        await axios
          .delete(`https://testapi.io/api/dartya/resource/cardata/${itemId}`)
          .then((response) => this.carsData())
          .catch((error) => {
            alert("Coudn't Delete The Data... Please try Again");
          });
      }
    },

    //---------- Axios API - Login User--------  ----//
    loginUser() {
      console.log(this.loginUserData);
      axios
        .post("https://testapi.io/api/dartya//login", this.loginUserData)
        .then((response) => {
          if (response.status === 200) {
            alert(`Login Successfully..!!\n
                User's Email Id is- ${this.loginUserData.email}, 
                User's Password is- ${this.loginUserData.password},"`);
          }
          this.$router.push("/home");
        })
        .catch((error) => {
          alert("User is not Log in... Please try Again");
        });
    },

    async registerUser() {
      await axios
        .post("https://testapi.io/api/dartya/resource/users", this.userData)
        .then((response) => {
          if (response.status == 200) {
            alert("Register Successfully..!!");
            this.$router.push("/login");
          }
        })

        .catch((error) => {
          alert("User is not Register... Please try Again");
        });
      alert(`"User Registered Successfully "\n
                "User's Name is-" ${this.userData.name}, 
                "User's Email Id is- " ${this.userData.email}, 
                "User's Password is- " ${this.userData.password}, 
                "User's Role is- " ${this.userData.role}
                "User's Gender is- ${this.userData.gender}"
                "User's DOB is-${this.userData.dob} "`);
      this.$router.push("/login");
    },
  },
});
