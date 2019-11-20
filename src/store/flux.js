const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {

      startDate : new Date(),
      modal: false,

      userfile: {
          username:'',
          password:'',
          firstname:'',
          lastname:'',
          e_mail:'',
          gender:'',

          deporte: 'Fútbol y baloncesto',
          carrera: 'Pro Trainer Fitnes',
          phone_number: '+56 12345678',

          twitter: 'http://www.twitter.com/user',
          instagram: 'http://www.instagram.com/user',
          facebook: 'https://www.facebook.com/user',
      },
      admin_field_card: [
          {
              id: 0,
              opsOfServicesSelected: ["Cafeteria", "Quincho"],
              title:"Padre Hurtado",
              price:"10.000",
              playersCapacity:"10",
              schedule: "8:30",
              address:"Recoleta, Dominicos",
              typeOfSoil:"Cesped sintetico",
              typeOfSport:"Tennis",
              description: " Bonita cancha espectacular para jugar al fútbol y al aire libre con una buena cancha cubierta de césped. Tiene el escenario perfecto para muchas personas."
          },
          {
              id: 1,
              opsOfServicesSelected: ["Baño", "Cafeteria", "Quincho"],
              title:"7 Canchas",
              price:"15.000",
              playersCapacity:"15",
              schedule: "8:30 a 18:30",
              address:"Huechuraba, av.Recoleta",
              typeOfSoil:"Cesped sintetico",
              typeOfSport:"Futbol",
              description: ""
          },
          {
              id: 2,
              opsOfServicesSelected: ["Cafeteria", "Quincho"],
              title:"Parque, O'Higgins",
              price:"20.000",
              playersCapacity:"14",
              schedule: "8:30 a 20:30",
              address:"Recoleta, Dominicos",
              typeOfSoil:"Cesped Humedo",
              typeOfSport:"Futbol",
              description: ""
          },
          {
              id: 3,
              opsOfServicesSelected: ["Baño", "Cafeteria", "Quincho"],
              title:"Gimnasio U. Chile",
              price:"25.000",
              playersCapacity:"12",
              schedule: "8:30 a 18:30",
              address:"Maipu, Reyes Bravo",
              typeOfSoil:"Cesped Humedo",
              typeOfSport:"Futbol, Basketball",
              description: ""
          },
      ],

      sport_field_data:{
        opsOfServicesSelected: [],
        title:"",
        price:"",
        playersCapacity:"",
        schedule: "",
        address:"",
        typeOfSoil:"",
        typeOfSport:"",
        description: ""
      }
    },
    actions: {
      toggleModal: () => {
      const store = getStore();
      let { modal } = store;
      setStore({modal: !modal})
      },
      saveNewUser: () => {
        const store = getStore();
        fetch("new_user", {
          method: "POST",
          body: JSON.stringify(store.userfile),
          'Content-Type': 'application/json'
        }).then(resp => console.log(resp))
          .then(data => console.log(data))
          .catch(err => console.log(err));
      },
      saveNewSportField: () => {
        const store = getStore();
        fetch("new_user", {
          method: "POST",
          body: JSON.stringify(store.sport_field_data),
          'Content-Type': 'application/json'
        }).then(resp => console.log(resp))
          .then(data => console.log(data))
          .catch(err => console.log(err));
      },



      handleChangeObject(e) {
        setStore({ [e.target.name]: e.target.value });
        e.preventDefault();
      },
      handleChange(e) {
        const store = getStore();
        const { userfile } = store;
        userfile[e.target.name] = e.target.value;
        setStore({ userfile });
        e.preventDefault();
      },
      handleChangeFieldData(e) {
        const store = getStore();
        let { sport_field_data } = store;
        sport_field_data[e.target.name] = e.target.value;
        setStore({ sport_field_data });
        e.preventDefault();
      },
      handleSubmit(e){
        const store = getStore();
        e.preventDefault();
        console.log(store.userfile);
        getActions().saveNewUser();
      },
      handleSubmitForFieldData(e){
        e.preventDefault();
        const store = getStore();
        console.log(store.sport_field_data)
        setStore({
          admin_field_card: store.admin_field_card.concat(store.sport_field_data),
          sport_field_data: {
            opsOfServicesSelected: [],
            title:"",
            price:"",
            playersCapacity:"",
            schedule: "",
            address:"",
            typeOfSoil:"",
            typeOfSport:"",
            description: ""
          }
        });
      },
      editAdminCard(e,index){
        const store = getStore();
        let { admin_field_card } = store;
        console.log(admin_field_card[index])
        setStore({sport_field_data: admin_field_card[index]})
        e.preventDefault();
       },
      deleteAdminCard(e,index){
       const store = getStore();
       let { admin_field_card } = store;
       store.admin_field_card.splice(index, 1);
       setStore({admin_field_card : admin_field_card})
       e.preventDefault();
      },
      handleChangeSelect(e){
        const store = getStore();
        const { sport_field_data } = store;
        let {options} = e.target;
        let value = [];
        for (var i = 0; i < options.length; i++) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        sport_field_data.opsOfServicesSelected = value;
        setStore({sport_field_data})
      },
      handleUniqueSelect(e){
        const store = getStore();
        const {sport_field_data} = store;
        let {options} = e.target;
        for (var i = 0; i < options.length; i++) {
          if (options[i].selected) {
            sport_field_data[e.target.name] = options[i].value ;
          }
        }
        setStore({sport_field_data});
        },
      handleChangeDate(e){
      const store = getStore();
      let {startDate} = store;
      startDate = e
      console.log(startDate)
      setStore({ startDate })
       },
       handleReservation(e){

       }
    }
  };
};

export default getState;
