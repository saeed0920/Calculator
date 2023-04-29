let vm = Vue.createApp({
  data() {
    return {
      mainNumber: ``,
      preNumber: ``,
      preShow: ``,
      operation: ``,
      rest: true,
      checkDot: false,
    };
  },
  methods: {
    match(event) {
      if (this.rest) {
        this.mainNumber = ``;
        this.preNumber = ``;
        this.preShow = ``;
        this.rest = false;
      }
      this.mainNumber += event.target.textContent;
    },
    operationF(event) {
      this.operation = event.target.value;
      if (this.mainNumber === "") {
        return;
      } else if (this.preNumber !== "") {
        this.calculator();
      }
      this.preNumber = this.mainNumber;
      this.mainNumber += event.target.textContent;
      this.preShow = this.mainNumber;
      this.mainNumber = ``;
    },
    clear() {
      this.mainNumber = ``;
      this.preNumber = ``;
      this.preShow = ``;
      this.rest = true;
      this.checkDot = false;
    },
    del() {
      this.mainNumber = this.mainNumber.substr(0, this.mainNumber.length - 1);
    },
    dot() {
      if (this.mainNumber.search(/[.]/g) === -1) {
        this.checkDot = false;
      }
      if (!this.checkDot) {
        this.mainNumber += ".";
        this.checkDot = true;
        this.rest = false;
      }
    },
    calculator() {
      const mainN = Number(this.mainNumber);
      const preN = Number(this.preNumber);
      let result;
      if (isNaN(mainN) || isNaN(preN)) return;
      switch (this.operation) {
        case "x":
          result = preN * mainN;
          break;
        case "/":
          result = preN / mainN;
          break;
        case "-":
          result = preN - mainN;
          break;
        case "+":
          result = preN + mainN;
          break;
        default:
          return;
      }

      this.preNumber += this.mainNumber;
      this.mainNumber = result;
      this.preShow = ``;
    },
    formatNumber(numbers) {
      const number = parseFloat(numbers);
      if (isNaN(number)) return "";
      return number.toLocaleString("en");
    },
  },
  computed: {},
});
vm.mount("#app");
