// const button = document.querySelector('button');
// const listContainer = document.querySelector('ul');
// const input = document.querySelector('input');

// function addGoal() {
//   const value = input.value;
//   const listElement = document.createElement('li');

//   listElement.textContent = value;
//   listContainer.appendChild(listElement);

//   input.value = '';
// }

// button.addEventListener('click', addGoal);

Vue.createApp({
  data() {
    return {
      goals: [],
      input: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.input)
    }
  }
}).mount('#app');