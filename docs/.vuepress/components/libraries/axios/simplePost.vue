<template>
 <div>

  <input type="text" v-model="postBody"  @keyup.enter="sendPost()"/>
  <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>
  <div v-if="!resp">Type in the input and press enter</div>
    <div v-if="resp">
    <div><i>Post sent</i></div>
    <div>Response Data :   {{ resp }} </div>

    
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'simplePost',
    data() {
        return {
            postBody: '',
            resp: null,
            errors: []
        }
    },
    methods: {
 // Pushes posts to the server when called.
        sendPost () {
        axios.post(`http://jsonplaceholder.typicode.com/posts`, {
                    body: this.postBody
                })
                .then(response => {
             this.resp = response.data
        })
                .catch(e => {
                    this.errors.push(e)
                })

            // async / await version (postPost() becomes async postPost())
            //
            // try {
            //   await axios.post(`http://jsonplaceholder.typicode.com/posts`, {
            //     body: this.postBody
            //   })
            // } catch (e) {
            //   this.errors.push(e)
            // }
        }
    }
}
</script>