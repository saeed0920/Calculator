let vm = Vue.createApp({
  data() {
    return {
      numbers: "0",
      rest: true,
      checkDot: false,
    };
  },
  methods: {
    calculator() {},
    match(event) {
      if (this.rest) {
        this.numbers = "";
        this.rest = false;
      }
      this.numbers += event.target.value;
    },
    clear() {
      this.numbers = "0";
      this.rest = true;
      this.checkDot = false;
    },
    del() {
      if (!this.rest && this.numbers.length > 1) {
        this.numbers = this.numbers.substr(0, this.numbers.length - 1);
      }
    },
    dot() {
      if (this.numbers.search(/[.]/g) === -1) {
        this.checkDot = false;
      }
      if (!this.checkDot) {
        this.numbers += ".";
        this.checkDot = true;
        this.rest = false;
      }
    },
  },
  computed: {},
});
vm.mount("#app");
