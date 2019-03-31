<template>
 <div>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts">
      <p><strong>{{post.title}}</strong></p>
      <p>{{post.body}}</p>
    </li>
  </ul>
   <button class="button" @click="GetPosts">Click to Get Posts</button>
  <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'simpleAxios',
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  methods : {
      GetPosts () {
            // Fetches posts when the component is created.
  
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
      }
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl';
.button
  background-color $backgroundcolor
  color white
  border 1px solid #eee
  border-radius 0.5rem
  box-shadow 0 5px 15px -5px rgba(0,0,0,.1)
  padding 0.5rem
  margin-top 1em
</style>