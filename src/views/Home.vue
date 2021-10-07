<template>
  <div class="home">
    <div class="container my-5 text-start">
      <div class="col-8">
          <router-link :to="{ name: 'Create' }" class="btn btn-primary mb-3">Add</router-link>
        <div class="card">
          <div class="card-header">
            Transaction
          </div>
          <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                      <td>Title</td>
                      <td>Amount</td>
                      <td>Type</td>
                      <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="(transaction, index) in transactions.data" :key="index">
                    <td>{{ transaction.title }}</td>
                    <td>{{ transaction.amount }}</td>
                    <td>{{ transaction.type }}</td>
                    <td>
                      <div class="btn-group">
                        <router-link :to="{name: 'Edit', params: {id: transaction.id}}" class="btn btn-success shadow">
                          Edit
                        </router-link>
                        <button v-on:click="deletes(transaction.id, index)" class="btn btn-danger shadow">Delete</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
            </table>
            <div v-if="isLoading" class="my-5 text-center">
              <p>Loading data...</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// const axios = require('axios');

export default {
  name: "Home",
  data() {
    return {
      transactions: [],
      isLoading: true
    }
  },
  methods: {
    deletes(id, index) {
      axios.delete('http://127.0.0.1:8000/api/transaction/' + id)
      .then(() => {
        this.transactions.splice(index, 1)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/transaction')
    .then((result) => {
      this.transactions = result.data
      this.isLoading = false
    }).catch((err) => {
      console.log(err.message);
    });
  },
};
</script>
