(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{301:function(t,e,r){"use strict";r.r(e);r(196),r(37),r(60),r(9),r(75);var o={props:{articles:{type:Array,required:!0},perPage:{type:Number,default:6},baseDelay:{type:Number,default:70},initialDelay:{type:Number,default:100}},methods:{animationDelay:function(t){return"".concat(this.initialDelay+t%this.perPage*this.baseDelay,"ms")},formatDate:function(t){var e=new Date(t).toString().split(" ");return e[2]+" "+e[1]+" "+e[3]}}},n=r(26),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid justify-around max-w-screen-xl grid-cols-1 mx-auto mt-2 duration-200 md:grid-cols-2 lg:grid-cols-3"},t._l(t.articles,(function(article){return r("div",{key:article.id,staticClass:"flex flex-col max-w-sm p-4 m-2 mx-auto transition-all duration-200 animate-fadeInFromBottom bg-card group hover:shadow-md active:shadow-xs"},[r("div",{staticClass:"pl-1 text-xl text-gray-500 font-novaround"},[r("nuxt-link",{staticClass:"inline-block transition duration-200 border-above hover:text-primary-500/100 focus:text-primary-500/100",attrs:{to:"/categories/"+article.category.toLowerCase()}},[t._v("\n        "+t._s(article.category.split("-").map((function(s){return s.charAt(0).toUpperCase()+s.substring(1)})).join(" "))+"\n      ")])],1),t._v(" "),r("nuxt-link",{staticClass:"block transition-all duration-200 shadow-xs group-hover:shadow-xl focus:shadow-xl",attrs:{to:article.path}},[r("nuxt-img",{staticClass:"object-cover w-full h-full mt-2 rounded-t-md",attrs:{preset:"post",src:article.image}})],1),t._v(" "),r("nuxt-link",{staticClass:"block mt-4 text-2xl leading-7 text-default font-novaflat hover:text-primary-500/100 focus:text-primary-500/100",attrs:{to:article.path}},[t._v("\n      "+t._s(article.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"text-xs font-roboto text-secondary"},[t._v("\n      on\n      "),r("span",{staticClass:"font-semibold"},[t._v(t._s(t.formatDate(article.createdAt))+" ")]),t._v("\n      by\n      "),r("span",{staticClass:"font-semibold"},[t._v(t._s(article.author))])]),t._v(" "),r("div",{staticClass:"flex-1 my-4 text-sm leading-relaxed font-roboto text-excerpt"},[t._v("\n      "+t._s(article.description)+"\n    ")]),t._v(" "),r("div",{staticClass:"mt-4 space-x-2 text-sm select-none font-roboto text-secondary"},t._l(article.tags,(function(e){return r("span",{key:e},[r("nuxt-link",{staticClass:"inline-block px-2 hover:text-primary-500 active:text-primary-500 focus:text-primary-500",attrs:{to:"/tags/"+e}},[t._v("\n          # "+t._s(e.replace(/-/g," "))+"\n        ")])],1)})),0)],1)})),0)}),[],!1,null,null,null);e.default=component.exports}}]);