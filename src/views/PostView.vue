<template>
    <PageLayout id="store-page">
        <div>
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        </div>
    </PageLayout>
</template>

<script>
import posts from "@/data/data.json";
import PageLayout from '../components/global/PageLayout.vue';

export default {
  data() {
    return {
      post: {}
    }
    },
components: {
    PageLayout,
},
methods: {
    getPostById(id) {
        return posts.find(post => post.id === parseInt(id));
    }
},
mounted() {
    const postId = this.$route.params.id;
    this.post = this.getPostById(postId);
  }
}
</script>


<style lang="scss">

</style>