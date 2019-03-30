---
title: Project Structure
---

## Overview

For the most part vuejs allows us to structure projects in any way we want. However, 
to avoid errors and a spagetti code nightmare it is important to define the structure before digging in to deep.



...

## Table Of Contents

[[toc]]


 
## Conceptual Structures
 
| Example Number        | Use Case      | Project size  |  Features  | 
| -------------- |:------------:| :-----------:| -----------:|
|  1   |  | Large |          |
|                |              |             |
|                |              |             |
|                |              |             |


## Structure #1

### Features


### Directory Details

| Directory        | Purpose      | Contains  |  Parent  |   Flow  | 
| -------------- |:------------:| :-----------:| -----------:|-----------:|
| dist   | hold the compiled project | compiled source |          |
|   public             |              |             |
|   src             |              |             |
|   assets  | hold assets |             | src |
|   services  | third party api connections  |             | src |
|   components  |  |             | src |
|   store  |  |             | src |
|   styles  |  |             | src |
|   views  |  |             | src |

### File Details

| File Name        | Purpose      | Within  |  Parent  |   Flow  | 
| -------------- |:------------:| :-----------:| -----------:|-----------:|
| App.vue   |  |  |          |
|   main.js             |              |             |


### Resources

 - [Official Vue Styleguide](https://vuejs.org/v2/style-guide/#Priority-A-Essential)
  - [Vuex Styleguide](https://vuex.vuejs.org/guide/)