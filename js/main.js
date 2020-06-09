const sample = new Vue({
    el: '.sample',
    data: {
        name: 'Sergey',
        showName: true
    },
    methods: {
        onChange(e) {
            console.log(this);
            console.log(e);
        },
        toggleName() {
            this.showName =! this.showName
        }
    }
});

window.addEventListener('resize', () => {
    sample.name = ''
});
console.log(sample);