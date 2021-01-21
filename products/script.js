let app = new Vue({
    el: "#app",
    data: {
        name: null,
        count: null,
        price: null,
        id: 0,
        products: []
    },
    methods: {
        sendData: function (event) {
            event.preventDefault();
            let name = document.getElementById("name");
            let count = document.getElementById("count");
            let price = document.getElementById("price");

            this.name = name.value;
            this.count = Number(count.value);
            this.price = Number(price.value);
            this.sum = this.count * this.price;

            let product = {id: this.id++,name: this.name, count: this.count, price: this.price, sum: this.sum}
            this.products.push(product);
        },

        sortTable: function () {
            this.products.sort((prev, next) => {
                if ( prev.name < next.name ) return -1;
                if ( prev.name < next.name ) return 1;
            });
        },

        deleteObject: function(id) {
            const index = this.products.findIndex(n => n.id === id);
            if (index !== -1) {
                this.products.splice(index, 1);
            }
        }
    }
})