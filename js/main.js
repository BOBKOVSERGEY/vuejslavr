

const sample = new Vue({
    el: '.sample',
    data: {
        numbers: [
        
        ],
        info: {
            name: 'Dmitriy',
            email: 'admin@test.info'
        }
    },
    computed: {
    },
    methods: {
        addNumber() {
            this.numbers.push(Math.floor(Math.random() * 10));
            //this.sortNumbers();
        },
        sortNumbers() {
            this.numbers.sort((a, b) => {
                return a > b ? 1 : -1;
            })
        }
    }
   
});

console.log(sample);