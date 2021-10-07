<template>
  <div class="create">
    <div class="container my-5 text-start">
      <div class="col-8">
          <button @click="back" class="btn btn-primary mb-3">Back</button>
        <div class="card">
          <div class="card-header">
            Create Transaction
          </div>
          <div class="card-body">
            <form @submit.prevent="create">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input type="text" class="form-control" v-model="transaction.title">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Amount</label>
                    <input type="text" class="form-control" v-model="transaction.amount">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Type</label>
                    <input type="text" class="form-control" v-model="transaction.type">
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            transaction: {
                title: '',
                amount: '',
                type: ''
            }
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        create() {
            axios.post('http://127.0.0.1:8000/api/transaction', this.transaction)
            .then(() => {
               this.$router.push({ name: 'Home' })
            })
            .catch((err) => {
                console.log(err);
            })
        }
    },
}
</script>

<style>

</style>