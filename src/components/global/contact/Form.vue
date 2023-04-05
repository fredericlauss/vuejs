<template>
    <form @submit.prevent="handleSubmit">
        <div class="small">
            <p>Last name:</p>
            <input v-model="lastName" placeholder="Dupond" />
            <div v-if="errors.lastName" class="error">{{ errors.lastName }}</div>
        </div>
        <div class="small">
            <p>Name:</p>
            <input v-model="firstName" placeholder="Bernard" />
            <div v-if="errors.firstName" class="error">{{ errors.firstName }}</div>
        </div>
        <div class="large">
            <p>Message:</p>
            <textarea v-model="message" placeholder="votre message"></textarea>
            <div v-if="errors.message" class="error">{{ errors.message }}</div>
        </div>
        <div class="large checkbox">
            <input type="checkbox" id="checkbox" v-model="checked" />
            <label for="checkbox">En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la relation commerciale qui peut en découler.</label>

        </div>
        
        <button class="animated outlined" type="submit">Submit</button>
        <div v-if="succes.message" class="succes">{{ succes.message }}</div>
    </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      message: '',
      errors: {},
      succes: {},
    };
  },
  methods: {
    handleSubmit() {
      this.errors = {};
      if (!this.firstName) {
        this.errors.firstName = 'First name is required';
      }
      if (!this.lastName) {
        this.errors.lastName = 'Last name is required';
      }
      if (!this.message) {
        this.errors.message = 'Message is required';
      }

      if (Object.keys(this.errors).length === 0) {
        this.succes.message = 'Bien envoyé !';
      }
    }
  },
};
</script>

<style lang="scss" scoped>
form {
    width: 600px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    align-items: start;
    > .small {
        flex-basis: 50%;
        padding: 10px;
    }
    > .large {
        flex-basis: 100%;
        padding: 10px;
    }
    input, textarea {
        width: 100%;
        margin-top: 7px;
        padding: 10px 12px 10px 16px;
        border: 2px solid #d0d0d0;
        border-radius: 16px;
        font-family: var(--main-font);
    }
    > .checkbox {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-self: flex-start;
        
        input {
            width: auto;
            margin-right: 10px;
        }
    }
    button {
        margin-top: 15px;
    }
    .error {
        color: red;
        padding-top: 10px;
    }

    .succes {
        color: green;
        padding-top: 10px;
        flex-basis: 100%;
    }
    
}
</style>