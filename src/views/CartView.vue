<template>
    <PageLayout id="cart-page">
        <PaiementForm />
        <Products :products="cart" />
    </PageLayout>
</template>

<script>
import PaiementForm from '../components/cart/PaiementForm.vue';
import Products from '../components/cart/Products.vue';
import PageLayout from '../components/global/PageLayout.vue';
import Request from '../helpers/Request';
import Storage from '../helpers/Storage';

export default {
    components: { 
        PageLayout,
        PaiementForm,
        Products
    },
    data() {
        return {
            cart: []
        }
    },
    async created() {
        const products = await Request.get('/products');
        const cartProducts = Storage.getItem('cart');
        this.cart = products.reduce((cart, product) => {
            if (!cartProducts.includes(product.id))
                return cart;

            return [
                ...cart, 
                {
                    ...product, 
                    amount: cartProducts.filter(
                        id => id === product.id
                    ).length || 0
                }
            ]
        }, []);
    }
}
</script>

<style lang="scss">
.main-content {
    display: flex;
    justify-content: space-between;

    .paiement-form {
        width: 42.5%;
    }

    .products {
        width: 55%;
    }
}
</style>