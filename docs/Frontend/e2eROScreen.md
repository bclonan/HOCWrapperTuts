---
title: E2E RO Example
---

## Screen Required
---

The Below screen is an example of the ...vue file. 

**Screen Required**
- Read Only


## Table Of Contents

[[toc]]


## Finished Vue File
---

Bellow is the full code example of the finished vue file


```vue

<template>
   <hoc-service-call-wrapper  :endpoint="endpoint" :targBeanName="targBeanName"
      >
      <PageContainer :pageHeading="$attrs.title" slot-scope="{ data: data, ucmsResponse: ucmsResponse, error, load, loading, respBean : respBean }">
         <span v-if="loading">Loading...</span>
         <span v-else-if="error">Error while fetching doc!</span>
         <div v-else class="row mt-3">
            <hoc-form-call-wrapper :ucmsResponse="ucmsResponse" :formEndpoint="formEndpoint" :respBean="respBean[targBeanName]">
               <div class="col" slot-scope="{ layoutSchema: layoutSchema, schema: schema, serviceResponse: serviceResponse, formData: formData, error, load, loading, arcCreate, arcDestroy, arcFind, arcUpdate  }">
                  <span  v-if="loading">Loading...</span>
                  <span v-else-if="error">Error while fetching doc!</span>

                     <div  v-else>
                        <b-card v-for="(group , index) in layoutSchema" :key="group.cardGroup" :title="group.cardTitle" :title-tag="group.cardTag">
                           <div v-for="(formRow , index) in group.formRows" :key="formRow.id" >
                              <div class="row" v-if="formRow.hasRowTitle">
                                 <div class="col">
                                    <p v-text="formRow.rowTitle"></p>
                                 </div>
                              </div>
       <form-generator :schema="formRow.rowSchema"
                       :rowDimensions="formRow.rowDimensions"
                                 v-model="formData"  :serviceResponse="serviceResponse"  :editmode="editmode">
                              </form-generator>
                                <hr v-if="formRow.hasHRBeneath" />
                              <!--<form-generator v-for="rowContents in formRow.rowSchema" :key="rowContents.name"  :schema="rowContents"
                                 v-model="formData">
                                 </form-generator>
                                 -->
                           </div>
                        </b-card>
                     </div>
                     <!-- create -->
                     <div class="row" >
                        <div class="col">
                           <UCMSButton variant="link">Cancel</UCMSButton>
                           <UCMSButton variant="link">Back</UCMSButton>
                           <UCMSBtnGroup class="action-bar">
                              <UCMSButton variant="secondary">Clear</UCMSButton>
                              <UCMSButton variant="primary" @click="arcCreate(createEndpoint)">Submit</UCMSButton>
                           </UCMSBtnGroup>
                        </div>
                     </div>
                     <!-- update 
                     <h1>Update</h1>
                     <div class="row" >
                        <div class="col">
                           <UCMSButton variant="link">Cancel</UCMSButton>
                           <UCMSButton variant="link">Back</UCMSButton>
                           <UCMSBtnGroup class="action-bar">
                              <UCMSButton variant="secondary">Clear</UCMSButton>
                              <UCMSButton variant="primary" @click="arcUpdate('patch', 'id/object', 'endpointoftarget')">Submit</UCMSButton>
                           </UCMSBtnGroup>
                        </div>
                     </div>
                     <!-- remove
                     <h1>Remove</h1>
                     <div class="row" >
                        <div class="col">
                           <UCMSButton variant="link">Cancel</UCMSButton>
                           <UCMSButton variant="link">Back</UCMSButton>
                           <UCMSBtnGroup class="action-bar">
                              <UCMSButton variant="secondary">Clear</UCMSButton>
                              <UCMSButton variant="primary" @click="arcDestroy('destroy', 'id/object', 'endpointoftarget')">Submit</UCMSButton>
                           </UCMSBtnGroup>
                        </div>
                     </div>
                     <!-- find
                     <h1>Find</h1>
                     <div class="row" >
                        <div class="col">
                           <UCMSButton variant="link">Cancel</UCMSButton>
                           <UCMSButton variant="link">Back</UCMSButton>
                           <UCMSBtnGroup class="action-bar">
                              <UCMSButton variant="secondary">Clear</UCMSButton>
                              <UCMSButton variant="primary" @click="arcFind('get', 'id/object', 'endpointoftarget')">Submit</UCMSButton>
                           </UCMSBtnGroup>
                        </div>
                     </div>
                  </div>
               </div> -->
               </div>
            </hoc-form-call-wrapper>
         </div>
            <!--
               TODO : 
                   1. refactor form input types
                   2. Update Form data spec to accept additional values such as filter
                   5. Idealy we would be able to recieve expected bean info directly so that we can autoconvert and autogenerate the form schema
               
               
               -->
      
      </PageContainer>
   </hoc-service-call-wrapper>
</template>

<script>
//Global api wrapper
import HOCServiceCallWrapper from '@/components/newServices/wrapperComponents/HOCServiceCallWrapper'
import HOCFormCallWrapper from '@/components/newServices/wrapperComponents/HOCFormCallWrapper'
import formGenerator from '@/components/generators/forms/BaseFormGenerator';


export default {
    components: {
         "hoc-service-call-wrapper" : HOCServiceCallWrapper,
         'hoc-form-call-wrapper' : HOCFormCallWrapper,
         formGenerator
    },
    data() {
        return {
            formData: {
                ACTIONTYPE: 'add'
            },
            endpoint : '/establishmentsActions',
            testParams : '/establishments_response',
            targBeanName: 'establishmentViewBean',
            createEndpoint : '/thecreateendpoint',
            formEndpoint: '/types',
            editmode : 'read'
        };
    },
    beforeDestroy() {
       removeEventListener mote
    }
    
};
</script>



```



## Finished Json File
---

```json


```


## Finished Form Post
---

**Tab 1**




### Resources

 - [Vue JS](https://vuejs.org/)
 - [These Docs](https://github.com/possibly1/HOCWrapperTuts)

 