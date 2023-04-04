<template>
  <PageLayout id="login-page">
    <div class="login-content">

    </div>
  </PageLayout>
</template>

<script>
import Button from "../components/global/Button.vue";
import PageLayout from "../components/global/PageLayout.vue";
export default {
    components: {
        PageLayout,
        Button
    }
}
</script>


<style lang="scss">

.login-content{
    width: 75vw;
    height: 75vh;
    background-color: rgb(218, 218, 218);
    border-radius: 20px;
}

</style>