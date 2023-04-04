<template>
    <PageLayout id="home-page">
        <div class="hero">
            <div class="action">
                <h1>
                    Best website ever created by anyone on earth !
                </h1>
                <p>
                    Lorem dolor Lorem dolor Lorem dolor Lorem dolor
                    Lorem dolorLorem dolor Lorem dolor Lorem dolor Lorem dolorLorem dolor
                    Lorem dolorLorem dolor Lorem dolor Lorem dolor Lorem dolorLorem dolor
                </p>

                <div class="buttons">
                    <Button>
                        Discover products
                    </Button>
                    <Button variant="outlined">
                        Latest articles
                    </Button>
                </div>
            </div>
            <img src="../assets/heroimg.svg" alt="Hero image">
        </div>
    </PageLayout>
</template>

<script>
import Button from '../components/global/Button.vue';
import PageLayout from '../components/global/PageLayout.vue';
export default {
    components: {
        PageLayout,
        Button
    }
}
</script>

<style lang="scss">
.main-content {
    .hero {
        display: flex;
        justify-content: space-between;

        padding: 64px 0;

        .action {
            width: 45%;

            margin-top: 16px;

            h1 {
                font-size: 40px;
                margin-bottom: 32px;
            }

            p {
                margin-bottom: 32px;
            }

            .buttons {
                display: flex;
                gap: 16px;
            }
        }

        img {
            width: 50%;
        }
    }
}
</style>