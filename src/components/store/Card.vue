<template>
    <div class="card">
        <div class="image">
            <img :src="image" :alt="title">
        </div>
        <div class="link">
            <a>{{ title }}</a>
        </div>
        <p class="desc">{{ description }}</p>
        <div class="card-footer">
            <Button @click="() => addToCart(id)" :variant="filled">
                Add to cart
            </Button>
            <p>{{ price }}€</p>
        </div>
    </div>
</template>

<script>
import Button from '../global/Button.vue';
import Storage from '../../helpers/Storage';

export default {
    data() {
        return {
            productId: {
                type: Number,
            }
        }
    },
    props: {
        id: {
            type: Number,
            required: true,
            default: false
        },
        title: {
            type: String,
            required: true,
            default: false
        },
        price: {
            type: String,
            required: true,
            default: false
        },
        category: {
            type: String,
            required: true,
            default: false
        },
        description: {
            type: String,
            required: true,
            default: false
        },
        image: {
            type: String,
            required: true,
            default: false
        }
    },
    components: { Button },
    methods: {
        addToCart: (id) => {
            console.log(this)
            Storage.pushItem('cart', id)
        }
    }
}
</script>

<style lang="scss">
.card {
    width: 20%;
    min-width: 225px;
    height: 380px;
    padding: 16px;
    flex-grow: 1;

    background-color: white;
    border-radius: 4px;
    box-shadow: var(--main-shadow);

    overflow: hidden;
    text-overflow: hidden;

    .image {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 200px;

        img {
            width: 70%;
            height: 100%;
            object-fit: contain;
            object-position: center center;
        }
    }

    .link {
        width: 100%;
        padding: 10px 0;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

        a {
            cursor: pointer;
            font-size: large;
            font-weight: 600;
        }
    }

    p.desc {
        display: -webkit-box;
        max-width: 200px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;

        margin-bottom: 10px;
    }

    .card-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
            font-weight: 600;
        }
    }
}
</style>