<template>
    <PageLayout id="contact-page">
        <div class="flex">
            <Form ></Form>
        </div>
        
    </PageLayout>
</template>

<script>
import Button from '../components/global/Button.vue';
import PageLayout from '../components/global/PageLayout.vue';
import Form from '../components/global/contact/Form.vue';
export default {
    components: {
        PageLayout,
        Button,
        Form
    }
}
</script>

<style lang="scss" scoped>
.flex {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
}
</style>