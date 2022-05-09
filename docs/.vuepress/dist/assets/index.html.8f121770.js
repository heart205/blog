import{r as e,o,c,a as n,d as t,F as l,g as p,i as s}from"./app.4f2594b6.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=p(`<h1 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> react</h1><h2 id="reactdom-api" tabindex="-1"><a class="header-anchor" href="#reactdom-api" aria-hidden="true">#</a> ReactDOM API:</h2><h3 id="unmountcomponentatnode" tabindex="-1"><a class="header-anchor" href="#unmountcomponentatnode" aria-hidden="true">#</a> unmountComponentAtNode</h3><blockquote><p>\u4ECE DOM \u4E2D\u5378\u8F7D react \u7EC4\u4EF6 \u5E76\u4E14\u4F1A\u5C06\u7EC4\u4EF6\u7684\u4E8B\u4EF6\u76D1\u542C\u548C state \u4E00\u8D77\u5378\u8F7D \u5982\u679C\u4F20\u5165\u7684 dom \u4E2D\u6709 react \u7EC4\u4EF6 \u5219\u4F1A\u88AB\u5378\u8F7D \u539F\u58F0\u7684 dom \u7EC4\u4EF6\u4E0D\u53D7\u5F71\u54CD</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span>divTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,5),k={href:"https://zh-hans.reactjs.org/docs/react-dom.html#unmountcomponentatnode",target:"_blank",rel:"noopener noreferrer"},b=s("unmountComponentAtNode"),d=p(`<h3 id="render-element-container-callback" tabindex="-1"><a class="header-anchor" href="#render-element-container-callback" aria-hidden="true">#</a> render(element, container[, callback])</h3><blockquote><p>\u5982\u679C React \u5143\u7D20\u4E4B\u524D\u5DF2\u7ECF\u5728 container \u91CC\u6E32\u67D3\u8FC7\uFF0C\u8FD9\u5C06\u4F1A\u5BF9\u5176\u6267\u884C\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5E76\u4EC5\u4F1A\u5728\u5FC5\u8981\u65F6\u6539\u53D8 DOM \u4EE5\u6620\u5C04\u6700\u65B0\u7684 React \u5143\u7D20\u3002<br> \u9996\u6B21\u8C03\u7528\u65F6\uFF0C\u5BB9\u5668\u8282\u70B9\u91CC\u7684\u6240\u6709 DOM \u5143\u7D20(\u5B50\u8282\u70B9)\u90FD\u4F1A\u88AB\u66FF\u6362 callback callback \u5C06\u5728\u7EC4\u4EF6\u88AB\u6E32\u67D3\u6216\u66F4\u65B0\u4E4B\u540E\u88AB\u6267\u884C</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>MessageFunction
    message<span class="token operator">=</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span>
    type<span class="token operator">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span>
    onclose<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>divTag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span>divTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
        root <span class="token operator">?</span> root<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>divTag<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root<span class="token operator">?.</span><span class="token function">hasChildNodes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  divTag
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,3),m={href:"https://zh-hans.reactjs.org/docs/react-dom.html#render",target:"_blank",rel:"noopener noreferrer"},h=s("render"),g=p(`<h3 id="dangerouslysetinnerhtml" tabindex="-1"><a class="header-anchor" href="#dangerouslysetinnerhtml" aria-hidden="true">#</a> dangerouslySetInnerHTML</h3><p>\u76F4\u63A5\u5728 react \u4E2D\u6DFB\u52A0 DOM \u5143\u7D20\u4F1A\u88AB\u5F53\u4F5C\u5B57\u7B26\u4E32\u89E3\u6790 dangerouslySetInnerHTML \u662F React \u4E3A\u6D4F\u89C8\u5668 DOM \u63D0\u4F9B innerHTML \u7684\u66FF\u6362\u65B9\u6848 <code>key \u4E3A __html</code></p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span>
    <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
      __html<span class="token operator">:</span> prismjs<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>
        <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
        prismjs<span class="token punctuation">.</span>languages<span class="token punctuation">[</span>language<span class="token punctuation">]</span><span class="token punctuation">,</span>
        language
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
  <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,3),_={href:"https://zh-hans.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml",target:"_blank",rel:"noopener noreferrer"},f=s("dangerouslySetInnerHTML"),x=n("blockquote",null,[n("p",null,"[mui]](https://github.com/mui/material-ui)")],-1),v=n("h2",{id:"\u95ED\u5305\u9677\u9631",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u95ED\u5305\u9677\u9631","aria-hidden":"true"},"#"),s(" \u95ED\u5305\u9677\u9631")],-1),y={href:"https://juejin.cn/post/6844904193044512782",target:"_blank",rel:"noopener noreferrer"},M=s("\u95ED\u5305\u9677\u9631\u7684\u5207\u5165"),j=p(`<h2 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks" aria-hidden="true">#</a> hooks</h2><h3 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo" aria-hidden="true">#</a> useMemo</h3><blockquote><p><code>useMemo(callback,[deps])</code> \u4E3B\u8981\u7528\u4E8E\u9AD8\u6027\u80FD\u5F00\u9500\u8BA1\u7B97</p></blockquote><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useMemo<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">/**
 * useMemo \u4F18\u5316\u9488\u5BF9\u4E8E\u5F53\u524D\u7EC4\u4EF6\u9AD8\u5F00\u9500\u7684\u8BA1\u7B97
 * @returns deps\u5982\u679C\u503C\u4E0D\u53D8\u5316 \u5219\u4E0D\u4F1A\u8FDB\u884C\u91CD\u65B0\u8BA1\u7B97\u503C
 */</span>
<span class="token keyword">const</span> TestUseMemo<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>detail<span class="token punctuation">,</span> setDetail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> total <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      num <span class="token operator">+=</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> num<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>detail<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>total<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>detail<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>count<span class="token punctuation">}</span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">setDetail</span><span class="token punctuation">(</span>detail <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        \u70B9\u51FB\u65B0\u589Edetail
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">&gt;</span></span><span class="token plain-text">
        \u70B9\u51FB\u65B0\u589Etotal
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> TestUseMemo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><h2 id="usecallback" tabindex="-1"><a class="header-anchor" href="#usecallback" aria-hidden="true">#</a> useCallback</h2><blockquote><p>\u8FD4\u56DE\u4E00\u4E2A memoized \u56DE\u8C03\u51FD\u6570\u3002\u5728\u4F9D\u8D56\u53C2\u6570\u4E0D\u53D8\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD4\u56DE\u7684\u56DE\u8C03\u51FD\u6570\u662F\u540C\u4E00\u4E2A\u5F15\u7528\u5730\u5740 <br> \u6BCF\u5F53\u4F9D\u8D56\u53C2\u6570\u53D1\u751F\u6539\u53D8 useCallback \u5C31\u4F1A\u81EA\u52A8\u91CD\u65B0\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 memoized \u51FD\u6570\uFF08\u5730\u5740\u53D1\u751F\u6539\u53D8\uFF09</p></blockquote>`,6),w=s("\u4F7F\u7528\u573A\u666F\uFF1A \u4F18\u5316\u7236\u5B50\u7EC4\u4EF6\u4F20\u9012 callback \u5237\u65B0\u95EE\u9898 "),C={href:"https://juejin.cn/post/6844904032113278990#heading-5",target:"_blank",rel:"noopener noreferrer"},T=s("useCallback \u4F7F\u7528\u573A\u666F"),q=p(`<div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="memo" tabindex="-1"><a class="header-anchor" href="#memo" aria-hidden="true">#</a> memo</h2><p>hooks \u4E2D\u7684 memo \u548C PureComponent \u7684\u4F5C\u7528\u76F8\u540C \u90FD\u662F\u5B8C\u6210 shouldComponentUpdate \u7684\u5BF9 props \u6D45\u5C42\u7684\u5224\u65AD</p>`,3);function D(N,O){const a=e("ExternalLinkIcon");return o(),c(l,null,[i,n("blockquote",null,[n("p",null,[n("a",k,[b,t(a)])])]),d,n("blockquote",null,[n("p",null,[n("a",m,[h,t(a)])])]),g,n("blockquote",null,[n("p",null,[n("a",_,[f,t(a)])])]),x,v,n("p",null,[n("a",y,[M,t(a)])]),j,n("p",null,[w,n("a",C,[T,t(a)])]),q],64)}var I=u(r,[["render",D]]);export{I as default};
