import Vue from "vue";
import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);

// Vue.prototype.$editorMounted = false;
// Vue.prototype.$editorReady = false;
// Vue.prototype.$isMounted = false;

Vue.mixin({
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    // this.$editorMounted = true;
    this.isMounted = true;
  }
});
