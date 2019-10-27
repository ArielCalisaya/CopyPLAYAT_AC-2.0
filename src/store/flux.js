const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      admin_field_card: [],
      userfile: {
        username: "",
        password: "",
        e_mail: "",
        firstname: "",
        lastname: "",
        gender: ""
      },
      sport_field_data:{
        opsOfServicesSelected: [],
        title:"",
        price:"",
        playersCapacity:"",
        schedule: "",
        address:"",
        typeOfSoil:"",
        typeOfSport:""
      }
    },
    actions: {
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
            typeOfSport:""
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
        let value = ""
        for (var i = 0; i < options.length; i++) {
          if (options[i].selected) {
            sport_field_data[e.target.name] = options[i].value ;
          }
        }
        setStore({sport_field_data});
        }
    }
  };
};

export default getState;