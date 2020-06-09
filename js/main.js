const getSale = (code) => {
    let codes = {
        newYear: 10,
        some: 20
    };
    let sale = (codes[code] !== undefined) ? codes[code] : 0;
    return sale;
};

const sample = new Vue({
    el: '.sample',
    data: {
        firstName: '',
        lastName: '',
        fullName: '',
        promo: '',
        showText: true
    },
    computed: {
        fullName()
        {
            console.log('render full name');
            return this.firstName + ' ' + this.lastName;
        },
        sale() {
            return getSale(this.promo);
        }
    },
    watch: {
    
    }
});

console.log(sample);