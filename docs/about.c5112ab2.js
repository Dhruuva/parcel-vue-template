!function(){function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequire1caa;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire1caa=n),n.register("hD2rK",(function(t,o){var r;e(t.exports,"default",(function(){return i}));(r=n("3QlPC")).__esModule&&(r=r.default),r.render=n("4kpyW").render,r.__cssModules={},n("2w4dg").default(r),r.__scopeId="data-v-7c5264",r.__file="Entry.vue";var i=r})),n.register("3QlPC",(function(t,o){var r;r=t.exports,Object.defineProperty(r,"__esModule",{value:!0,configurable:!0}),e(t.exports,"default",(function(){return l}));var i=n("3faLT"),l={props:{isize:{default:14,type:[Number,String]},title:{default:"This demo component",type:String},icos:{default:"package",type:String},fs:{default:"1em",type:String},color:{default:"#FF0000",type:String}},components:{Icon:i.Icon},data:function(){return{msg:"Hello second"}},mounted:function(){this.$refs.v_logo.style.setProperty("--color",this.color),this.$refs.v_logo.style.setProperty("--fs",this.fs)},computed:{iconame:function(){return"tabler:"+this.icos}}}})),n.register("4kpyW",(function(t,o){e(t.exports,"render",(function(){return s}));var r=n("glMNt"),i={id:"v-logo",ref:"v_logo"},l={class:"v-grid-contaner"},c={class:"v-textCell"},a={class:"v-icoCell"};function s(e,t,o,n,s,u){var d=(0,r.resolveComponent)("Icon");return(0,r.openBlock)(),(0,r.createElementBlock)("div",i,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("h1",null,(0,r.toDisplayString)(o.title),1)]),(0,r.createElementVNode)("div",a,[(0,r.createVNode)(d,{icon:u.iconame,color:o.color,height:o.isize},null,8,["icon","color","height"])])])],512)}})),n.register("2w4dg",(function(t,o){e(t.exports,"default",(function(){return r}));var r=function(e){}}))}();