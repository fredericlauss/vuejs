<template>
    <header class="app-header">
        <div class="header-content">
            <div class="brand">
                <h1>Ready UI</h1>
            </div>

            <Navigation />

            <div class="buttons">
                <Button variant="outlined">Login</Button>
                <Button>Register</Button>
                <Popup />
            </div>
        </div>
    </header>
</template>

<script>
import Button from './Button.vue';
import Navigation from './Navigation.vue';
import Popup from '../popup/Popup.vue';
export default {
    components: {
        Navigation,
        Button,
        Popup
    }
}
</script>

<style lang="scss">
header.app-header {
    box-shadow: var(--main-shadow);
    background-color: var(--grey-0);

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 75vw;
        padding: 1.5vw 0;
        margin: 0 auto;

        .buttons {
            button {
                margin-left: 1vw;
            }
        }
    }
}
</style>