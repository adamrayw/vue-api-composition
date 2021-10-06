<template>
  <div class="edit">
    <div class="container my-5 text-start">
      <div class="col-8">
          <button @click="back" class="btn btn-primary mb-3">Back</button>
        <div class="card">
          <div class="card-header">
            Transaction Detail
          </div>
          <div class="card-body">
            <form @submit.prevent="update()">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input type="text" class="form-control" v-model="transaction.title">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Amount</label>
                    <input type="text" class="form-control"  v-model="transaction.amount">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Type</label>
                    <input type="text" class="form-control" v-model="transaction.type">
                </div>
                <button type="submit" class="btn btn-primary">Edit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            transaction: {
                title: null,
                amount: null,
                type: null,
            }
        }
    },
    methods: {
        back() {
            this.$router.go(-1)
        },
        update() {
            axios.put(
                'http://127.0.0.1:8000/api/transaction/' + this.id, 
                this.transaction
            )
            .then(() => {
               router.replace({path: '/'})
            })
            .catch((err) => {
                console.log(err);
            })
        
        },

    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/transaction/' + this.id)
        .then((response) => {
            this.transaction.title = response.data.data.title,
            this.transaction.amount = response.data.data.amount,
            this.transaction.type = response.data.data.type
        })
        .catch((err) => {
            console.log(err);
        })
    },
}
</script>

<style>

</style>