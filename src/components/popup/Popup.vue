<script>
export default {
  data() {
    return {
      open: false
    }
  }
}
</script>

<template>
  <button class="animated outlined" @click="open = true">Hey !</button>

    <Teleport to="body">
        <div v-if="open" class="modal">
            <p>Hello from the modal!</p>
            <button class="animated outlined" @click="open = false">Close</button>
        </div>
    </Teleport>
</template>


<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background-color: white;
  padding: 40px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,.13);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  button {
    margin-left: 0px !important;
  }
}
</style>
