<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <HomeNew data="Deepesh Kumar Yogi" msg="Vue Js Practices"/>
  <!-- <HomeNew data="Test Again"/>
  <VueEvents />
  <ConditionRender />
  <ForLoop />
  <TemplateProperty />
  <Class_style_Binding />
  <dataBinding />
  <VueJsProps />
  <ParentComponent2 /> -->
  <!-- <lifeCycleMethods /> -->
  <!-- <SignUpForm /> -->
  <!-- <LoginForm /> -->
  <!-- <formWithValidations /> -->
  <VuejsFilter />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import HomeNew from './components/Home.vue';
// import VueEvents from './components/Events.vue';
// import ConditionRender from './components/ConditionalRender.vue';
// import ForLoop from './components/ForLoop.vue';
// import TemplateProperty from './components/TemplateProperty.vue'
// import Class_style_Binding from './components/Class&StyleBindind.vue'
// import dataBinding from './components/dataBinding.vue'
// import VueJsProps from './components/VuePropsParentComp.vue'
// import ParentComponent2 from './components/propsParentComp2.vue'
// import lifeCycleMethods from './components/vueLifeCycle.vue'
// import SignUpForm from './components/signup.vue'
// import LoginForm from './components/loginForm.vue'
// import formWithValidations from './components/formWithValidation.vue'

import VuejsFilter from './components/filters.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    HomeNew,
    // VueEvents,
    // ConditionRender,
    // ForLoop,
    // TemplateProperty,
    // Class_style_Binding,
    // dataBinding,
    // VueJsProps,
    // ParentComponent2,
    // lifeCycleMethods,
    // SignUpForm
    // LoginForm
    // formWithValidations
    VuejsFilter

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
