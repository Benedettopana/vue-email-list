const { createApp } = Vue;

createApp({
  data() {
    return {
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
            console.log("----->>> ", risposta.data.response);
            this.emailArray.push(risposta.data.response);
          })
          .catch((errore) => {
            i--;
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
