const sample = new Vue({
    el: '.sample',
    data: {
        name: 'Sergey'
    },
    methods: {
        onChange(e) {
            console.log(this);
            console.log(e);
        }
    }
});

window.addEventListener('resize', () => {
    sample.name = ''
});