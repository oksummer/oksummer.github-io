if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let f={};const l=e=>s(e,d),n={module:{uri:d},exports:f,require:l};i[d]=Promise.all(r.map((e=>n[e]||l(e)))).then((e=>(c(...e),f)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"cc921f400884a69a9f2c186ce211525b"},{url:"archives/2022/08/index.html",revision:"44e091ba041ab0834d410eff76cd4ba0"},{url:"archives/2022/index.html",revision:"542fc8ceae6580329c5d42bc3ee124d9"},{url:"archives/index.html",revision:"c0fbbe32d8847f155ed91c4d6363e6ac"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/index.html",revision:"505bd7b22f23f7933c195eb364f08df2"},{url:"css/index.css",revision:"30ed3cc3687cab26653f4d47106a2647"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"be39cf233f899179297180c026812335"},{url:"Gallery/wallpaper.html",revision:"3999efda84339d31c6cf380952957bd5"},{url:"img/alipay.jpg",revision:"2cb7f0012587fd1b9ae87a4632da9ba5"},{url:"img/home.jpg",revision:"effe77fee9e93a30e09c9f1e07468233"},{url:"img/wechat.jpg",revision:"9fed4ce9d1d59890b9f9ffb33ecb56eb"},{url:"index.html",revision:"007e2c13f2b9fc19dfbba7012c0f2106"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"791b74f9725d4635528ad92bb2b36535"},{url:"post/38c422a2.html",revision:"84c83e8158eeba53d202a195ca065e2f"},{url:"tags/index.html",revision:"25b91073a74a3dbc885930c53de908c2"},{url:"tags/闲聊/index.html",revision:"9ed609fb5294187585ee608179609ded"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
