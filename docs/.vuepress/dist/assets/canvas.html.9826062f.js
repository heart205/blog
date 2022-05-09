import{g as n}from"./app.4f2594b6.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const s={},p=n(`<h1 id="canvas" tabindex="-1"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> canvas</h1><h2 id="canvas-\u80CC\u666F\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#canvas-\u80CC\u666F\u989C\u8272" aria-hidden="true">#</a> canvas \u80CC\u666F\u989C\u8272</h2><p>canvas \u7684\u80CC\u666F\u989C\u8272\u672C\u8EAB\u5C31\u662F\u900F\u660E\u989C\u8272</p><p>\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539 canvas \u7684 style \u7684<code>backgroundColor</code>\u5C5E\u6027\u4FEE\u6539 canvas \u7684\u80CC\u666F\u989C\u8272</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
c<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">&#39;transparent&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u5982\u679C\u662F webGL \u5219\u8BBE\u7F6E\u4E00\u4E2A\u900F\u660E\u7684\u989C\u8272\u5C31\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>gl<span class="token punctuation">.</span><span class="token function">clearColor</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></blockquote><h2 id="canvas-\u6E05\u9664\u753B\u5E03" tabindex="-1"><a class="header-anchor" href="#canvas-\u6E05\u9664\u753B\u5E03" aria-hidden="true">#</a> canvas \u6E05\u9664\u753B\u5E03</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;canvas&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> c<span class="token punctuation">.</span>width<span class="token punctuation">,</span> c<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="canvas-\u8F6C-dataurl" tabindex="-1"><a class="header-anchor" href="#canvas-\u8F6C-dataurl" aria-hidden="true">#</a> canvas \u8F6C DataURL</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&#39;image/png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="canvas-\u8F6C-blob-\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#canvas-\u8F6C-blob-\u5BF9\u8C61" aria-hidden="true">#</a> canvas \u8F6C Blob \u5BF9\u8C61</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>canvas<span class="token punctuation">.</span><span class="token function">toBlob</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">blob</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>blob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> file <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>File</span><span class="token punctuation">(</span><span class="token punctuation">[</span>blob<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">sign_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.png</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;image/png&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u52A0\u5165Form\u8868\u5355</span>
    <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;file&#39;</span><span class="token punctuation">,</span> file<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8BF7\u6C42\u63A5\u53E3 \u4E0A\u4F20\u56FE\u7247</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,12);function t(e,c){return p}var u=a(s,[["render",t]]);export{u as default};