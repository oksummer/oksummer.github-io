if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,s)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let b={};const d=e=>c(e,a),f={module:{uri:a},exports:b,require:d};i[a]=Promise.all(r.map((e=>f[e]||d(e)))).then((e=>(s(...e),b)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"026e4d26f37e65b6bb21e1d1c69048b2"},{url:"archives/2022/08/index.html",revision:"5abdecb09356409fbc2409a415a47fc9"},{url:"archives/2022/index.html",revision:"000fbcdddc75b3863d0c630109c278c9"},{url:"archives/index.html",revision:"1b2199e8273c3d31f9af5fab579f73b9"},{url:"categories/index.html",revision:"659b8a632851cf98d6ea1e0ba213c33f"},{url:"css/custom.css",revision:"ce9c4d85e8104f0e7afd71953ecb24bf"},{url:"css/index.css",revision:"7bb27801a080dc603fbe227c1d61bbba"},{url:"css/universe.css",revision:"64d924471ddf19905ea30ae8cbd664ec"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"Gallery/index.html",revision:"6d8908a29c3f5dbad66a9352587fd826"},{url:"Gallery/wallpaper.html",revision:"3ecb162e027ee1462c126a1dbae2b913"},{url:"img/alipay.jpg",revision:"2cb7f0012587fd1b9ae87a4632da9ba5"},{url:"img/home.jpg",revision:"8f4008c517453dd5d839d83aa6fc88ad"},{url:"img/pwa/144.png",revision:"4d65c16348b866fdcba84509fbfdc6f4"},{url:"img/pwa/16.png",revision:"1b6a0705f8bce5919d95ce66f8f23c38"},{url:"img/pwa/192.png",revision:"750bf0ee4f8bf5b6497f98c994ba097d"},{url:"img/pwa/32.png",revision:"359bae02cd5d6e1b06e2d17d821f8bcb"},{url:"img/pwa/36.png",revision:"30b0b5f444fa8f1fc82299738ff73426"},{url:"img/pwa/48.png",revision:"537748a6059b26d8bec1fb5c7268f9be"},{url:"img/pwa/512.png",revision:"fd212fe4cc3b463866d59cbd3c1c1f33"},{url:"img/pwa/72.png",revision:"7a9a49a0f1123c5e141baee65ef7a606"},{url:"img/pwa/96.png",revision:"a13feeb2c4ff002649dcda63341cd739"},{url:"img/pwa/apple-touch-icon.png",revision:"d635320dc729bbc9a8e9153d9b4bbaf7"},{url:"img/pwa/safari-pinned-tab.svg",revision:"827c64980d0b12035a99b507e0dcfaae"},{url:"img/wechat.jpg",revision:"9fed4ce9d1d59890b9f9ffb33ecb56eb"},{url:"index.html",revision:"55992b0cef0d4dc6494c8014c2484c6a"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"cbebf18071e8b76c5a65562caa272b26"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"2a2bc868b27a405f75229268e5ac44b3"},{url:"post/38c422a2.html",revision:"b2debe404ff04bc021c273b70244d06d"},{url:"tags/index.html",revision:"cb0aa0dcc6dfaa7b524f51a0d2bb1017"},{url:"tags/闲聊/index.html",revision:"bb6c553778694cfbd085539949f1031c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
