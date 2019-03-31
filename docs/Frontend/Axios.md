---
title: Axios Overview
---

## Overview

...


## Axios

[Github](https://github.com/axios/axios)

 - Promise based HTTP client for the browser and node.js

*Install*

```sh
$ npm install axios
```

*CDN*

```js
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```



# Examples


## Axios Vue Markdown

*Simple get with axios*

**input**

```
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

```

**output**

```
<libraries-axios-simpleAxios/>
```

<libraries-axios-simpleAxios/>



*push data with post*

**input**

```
<template>
  <input type="text" v-model="postBody" @change="postPost()"/>
  <ul v-if="errors && errors.length">
    <li v-for="error of errors">
      {{error.message}}
    </li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      postBody: '',
      errors: []
    }
  },

  // Pushes posts to the server when called.
  postPost() {
    axios.post(`http://jsonplaceholder.typicode.com/posts`, {
      body: this.postBody
    })
    .then(response => {})
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
</script>
```



**output**

```
<libraries-axios-simplePost/>
```



<libraries-axios-simplePost/>





### Links

 - [Repository](https://github.com/possibly1/)
