const { createApp } = Vue;

createApp({
  data() {
    return {
      // title: '',
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      // ? Mio array di email
      emailArray: [],
    };
  },
  methods: {
    getApi() {
      for (i = 0; i < 10; i++) {
        axios
          .get(this.apiUrl)
          .then((risposta) => {
            console.log("DATI ARRIVATI");
            console.log(risposta.data);
            // data è il contenuto della risposta che DOBBIAMO SEMPRE studiare perché non sappiamo prima come è fatto
            console.log("----->>> ", risposta.data.response);

            // this.title diventa 'OK' se risposta.data.response === true
            this.title = risposta.data.response ? "OK" : "NOOOO!!!";
            this.emailArray.push(risposta.data.response);
          })
          .catch((errore) => {
            console.log("MESSAGGIO DI ERRORE");
            console.log(errore.message);
          });
      }
      console.log(this.emailArray);
    },
  },
  mounted() {
    this.getApi();
  },
}).mount("#app");
