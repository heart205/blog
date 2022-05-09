import{r as t,o as p,c as l,a as n,d as e,F as c,i as s,g as o}from"./app.4f2594b6.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=n("h1",{id:"ci",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ci","aria-hidden":"true"},"#"),s(" ci")],-1),k={href:"https://juejin.cn/post/7087061029812699173#heading-0",target:"_blank",rel:"noopener noreferrer"},b=s("github ts-jest \u5B9E\u73B0 ci"),m={href:"https://juejin.cn/post/6924552945069457421",target:"_blank",rel:"noopener noreferrer"},d=s("ci cd \u81EA\u52A8\u5316\u90E8\u7F72"),h={href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"},_=s("\u962E\u4E00\u5CF0\u8001\u5E08 github action \u5165\u95E8\u6559\u7A0B"),y=o(`<p>\u5F85\u5B8C\u6210\u7684ci\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> heart blog
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">blog-deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> blog deploy job
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span><span class="token number">18.04</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> checkout
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build and Deploy
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4.3.3
      <span class="token key atrule">env</span><span class="token punctuation">:</span>
        <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
        <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> build
        <span class="token key atrule">BUILD_SCRIPT</span><span class="token punctuation">:</span> npm install <span class="token important">&amp;&amp;</span> npm run build


</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,2);function g(f,v){const a=t("ExternalLinkIcon");return p(),l(c,null,[i,n("blockquote",null,[n("p",null,[n("a",k,[b,e(a)])])]),n("blockquote",null,[n("p",null,[n("a",m,[d,e(a)])])]),n("blockquote",null,[n("p",null,[n("a",h,[_,e(a)])])]),y],64)}var j=u(r,[["render",g]]);export{j as default};
