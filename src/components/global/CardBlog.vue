<template>
    <article class="article">
        <a :href="'/blog/' + encodeURIComponent(post.id)">
            <img src="https://www.monsitevert.fr/assets/5ff426b3856b5a5e5c472825/2023/02/22/13/11/35/MEA%20-%20MSV%20h%C3%83%C2%A9bergement-01.min80.jpg" >
            <div class="infos">
                <h4>{{ post.title }}</h4>
                <p>{{ post.content }}</p>
                <p>{{ post.date }}</p>
            </div>
        </a>
    </article>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>

<style lang="scss">
.article {
    width: 30%;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.13);

    > a {
        width: 100%;

        > img {
            width: 100%;
        }

        h4, p {
            width: 100%;
        }

        .infos {
            padding: 15px;
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }
}
</style>