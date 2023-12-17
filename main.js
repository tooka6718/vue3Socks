const app = Vue.createApp({
  data: function () {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      //   image: "./assets/images/socks_green.jpg",
      //   inStock: false,
      //   inventory: 11,
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 11,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 2,
        },
      ],
    };
  },

  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    
    },
    image(){
        return this.variants[this.selectedVariant].image;
    },
    inStock(){
        
        return this.variants[this.selectedVariant].quantity;
    }
  },
  // watch: {
  //   inStock(newValue, oldValue) {
  //     console.log('inStock changed from', oldValue, 'to', newValue);
  //   }
  // }
});
