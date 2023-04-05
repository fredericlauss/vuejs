<template>
    <div class="products">
        <div class="product"
            v-for="product in products"
            :key="product.id"
        >
            <div class="image">
                <img :src="product.image" :alt="product.title">
            </div>
            <div class="infos">
                <a>{{ product.title }}</a>
                <p>Quantité : {{ product.amount }}</p>
            </div>
            <p class="price">{{ product.price * product.amount }}€</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.products {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;

    box-shadow: var(--main-shadow);

    .product {
        display: flex;
        width: 100%;
        height: 100px;
        
        .image {
            display: flex;
            width: 15%;
            height: 80%;
            margin-right: 24px;

            img {
                object-fit: contain;
                object-position: center center;
            }
        }

        .infos {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            width: 50%;
            padding: 10px 0;

            a {
                cursor: pointer;

                &:hover {
                    color: var(--main-color);
                }
            }
        }

        p.price {
            padding: 10px 0;
            flex-grow: 1;

            text-align: right;
            font-weight: 600;
        }
    }
}
</style>