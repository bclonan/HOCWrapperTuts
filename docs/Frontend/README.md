---
title: Overview
---

# Overview
---
In this section you will find all of the tools, and guides you need to complete the decoupled frontend development process. 

## Table Of Contents

[[toc]]


## Whats Included
 ---

1. Termanology
2. Skeleton HOC Wrappers
3. component schemas
4. Workflow guide



## Frontend Role Overview
---


### Average Estimation Times

| Scenario | Completion |
|:-----|:----------:|
| Screen | |
| Page ||
| Higher order component |  | 


## Terms
---

Throughout the guide you will notice a few reoccuring terms used. Use this table as a reference.


| Term | Definition |
|:-----|:----------:|
| Screen | the parent object that holds the entire flow of x portlet. Screens generally contain several moving 'components' within.|
| Page | Pages are what make up the individual components within a 'Screen' i.e. on a page screen where there are tabs, generally you will have page(n) of pages within a screen.|
| Higher order component | Higher order components act as wrappers, granting any content within access to data, methods, actions etc. | 
| Live Version | Legacy version of existing application |
| JSP files | Files available within the 'live version' that can be used to model your json schema |
| JSON Controller file| For every screen you will have a single json file that will consist of all the dynamically rendered elements, cards, tabs etc for that specific screen |
| Page Actions | On some screens you will have elements that preform business logic or server side calls, such as conditionally rendering ui permissions, buttons that submit forms to the server, or even switch tab actions that call the server and return data | 
| Page Skeletons | For any given screen or page you will have a default page skeleton available **NOTE: you will always have to choose a page skeleton**|
| Form Elements | Elements that represent the renderless version of the input elements used for any given page | 
| Visual Elements | Elements that you will control from the vuejs side i.e. tables incase you have a page that will be entirely read only or has to display some data based on form input **NOTE: These will always be controlled from the vuejs version of your screen**| 
| Modeled Request Data | If you are creating a page that requires submitting data to the server such as forms, you will need to craft postman request model to supply to the service developer | 

## Steps Quick Guide

When assigned a new screen you will be tasked with one of two goals either **Create a screen with preexisting UI** or **create a screen by modeling the live version**. Both will generally follow the same guide, however consist of slightly different steps. 

### Prexisting UI Creation Quick guide

1. Create new vuejs file named x.vue
2. Paste in appropriate wrapper component into your vue file
3. create x.json file
4. paste in appropriate json schema skeleton
5. Paste in appropriate input elements
6. If you have a Form or any element that requires 'input' on your page/screen open the live version and bind your "id" values to your json schema


### Modeling Quick guide
 
1. Create new vuejs file named x.vue
2. Open current live version of the page and paste model your schema off of that
2. Paste in appropriate wrapper component into your vue file
3. create x.json file
4. paste in appropriate json schema skeleton
5. Paste in appropriate input elements
6. If you have a Form or any element that requires 'input' on your page/screen open the live version and bind your "id" values to your json schema


## Usefull Tools

### Visual Studio Code

Visual studio code is a open source ide and gives you access to many helpfull extensions and shortcuts so that you can increase your workflow

#### Suggested Extensions

| Extension | Purpose | Docs |
|:----------|:-------:|:----:|
| vetur | | |
| Vue Peek |  | |
| Vue VSCode Snippets | | |

#### Shortcuts

VScode ships with default keyboard shortcuts you can use this is a non exhaustive list of usefull ones.

**Windows**
| Extension | Purpose | Docs |
|:----------|:-------:|:----:|
| vetur | | |
| Vue Peek |  | |
| Vue VSCode Snippets | | |

**Windows**
| Extension | Purpose |
|:----------|:-------:|
| ctrl + p | quick search for files |

### Vue CLI 3

vue cli 3 is a tool you can use to build,update, edit and manage your vue js projects.

### JSON Formatter

Used to validate and format your json files

### Chrome Developer Tools


### vue devtools


### Postman


### VuePress





### Resources

 - [Vue JS](https://vuejs.org/)
 - [These Docs](https://github.com/possibly1/HOCWrapperTuts)

 