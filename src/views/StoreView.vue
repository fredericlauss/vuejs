<template>
    <PageLayout id="store-page">
        <div class="cards">
            <Card v-for="product in products"
                :key="product.id"
                :title="product.title"
                :description="product.description"
                :price="product.price"
                :image="product.image"
            />
        </div>
    </PageLayout>
</template>

<script>
import Button from '../components/global/Button.vue';
import PageLayout from '../components/global/PageLayout.vue';
import Request from '../helpers/Request';
import Card from '../components/store/Card.vue';
export default {
    components: {
        PageLayout,
        Button,
        Card
    },
    data() {
        return {
            products: []
        }
    },
    async created() {
        this.products = await Request.get('/products');
    }
}
</script>

<style lang="scss">
.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
}
</style>