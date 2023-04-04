<template>
  <PageLayout id="login-page">
    <div class="login-content">
        <div class="image-content">
            <img class="image-login-design" src="../assets/login-design.svg" alt="" srcset="">
        </div>
        <div class="formulaire-content">
            <div class="title-form">
                <div class="border-bottom-login">
                    <h1>Contact</h1>
                </div>
            </div>
            <form v-on:submit.prevent="handleSubmitLogin()" class="input-form-content">
                <div class="email-form">
                    <label for="">E-mail</label>
                    <input class="input-mail-login" v-model="email" type="text">
                    <div></div>
                </div>
                <div class="Password-form">
                    <label for="">Password</label>
                    <input class="input-password-login" v-model="password" type="password">
                </div>
                <div class="submit-form-login">
                    <input class="animated-button" type="submit">
                </div>
            </form>
        </div>
    </div>
  </PageLayout>
</template>

<script>
import Request from "../helpers/Request";
import Button from "../components/global/Button.vue";
import PageLayout from "../components/global/PageLayout.vue";

export default {
    data() {
        return {
            users : [],
            email : "",
            password : "",
            errors : ""
        }
    },
    methods: {
        handleSubmitLogin() {
                console.log(this.email);
                console.log(this.password);

                this.users.map(user => this.email === user.email && this.password === user.password ? console.log('ok'): "")
                console.log(this.users);
            }


    }
    ,
    async created() {
        this.users = await Request.get('/users')
    }
    ,
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
    background-color: var(--grey-300);
    border-radius: 20px;
    display: flex;

    .image-content{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 2px solid black;
        
        .image-login-design{
            width: 90%;
            height: 90%;
        }
    }

    .formulaire-content{
        width: 50%;
        height: 100%;
        background-color: var(--grey-100);
        border-radius: 0px 20px 20px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title-form{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 20%;

            .border-bottom-login{
                width: 90%;
                height: 100%;
                border-bottom: 2px solid black;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }

        .input-form-content{
            width: 100% ;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .email-form , .Password-form{
                width: 80%;
                height: 10%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-bottom:20px ;

                .input-mail-login, .input-password-login{
                    padding-left: 10px;
                    width: 80%;
                    height: 30px;
                    border-radius: 4px;
                    border: 2px solid var(--main-color);
                }
            }

            .submit-form-login{
                margin-top:150px ;
            }
        }
    }
}

</style>