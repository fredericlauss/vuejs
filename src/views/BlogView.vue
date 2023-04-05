<template>
    <PageLayout id="store-page">
        <h2>Blog</h2>
        <div class="list-flex">
            <CardBlog  v-for="post in posts" :key="post.id" :post="post"></CardBlog>
        </div>

    </PageLayout>
</template>

<script>
import Button from '../components/global/Button.vue';
import PageLayout from '../components/global/PageLayout.vue';
import CardBlog from '../components/global/CardBlog.vue';
import blogPost from '@/data/data.json';


export default {
    data() {
    return {
      posts: blogPost
    }
  },
    components: {
        PageLayout,
        Button,
        CardBlog
    }
}
</script>

<style lang="scss">
.list-flex {
    margin-top: 75px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    align-items: start;
}
</style>