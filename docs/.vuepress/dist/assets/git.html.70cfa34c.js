import{g as a}from"./app.4f2594b6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},n=a(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1><h2 id="\u67E5\u770B\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> \u67E5\u770B\u5168\u5C40\u914D\u7F6E</h2><div class="language-shel ext-shel line-numbers-mode"><pre class="language-shel"><code>git config --global --list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u67E5\u770B\u672C\u5730\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u672C\u5730\u914D\u7F6E" aria-hidden="true">#</a> \u67E5\u770B\u672C\u5730\u914D\u7F6E</h2><div class="language-shel ext-shel line-numbers-mode"><pre class="language-shel"><code>git config --local --list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4FEE\u6539\u5F53\u524D\u9879\u76EE\u7684\u7528\u6237\u540D\u548C\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5F53\u524D\u9879\u76EE\u7684\u7528\u6237\u540D\u548C\u90AE\u7BB1" aria-hidden="true">#</a> \u4FEE\u6539\u5F53\u524D\u9879\u76EE\u7684\u7528\u6237\u540D\u548C\u90AE\u7BB1</h2><p>\u4FEE\u6539\u7528\u6237\u540D:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config  user.name <span class="token operator">&lt;</span>heart<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539\u90AE\u7BB1:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config  --global user.email <span class="token operator">&lt;</span>heart@163.com<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4FEE\u6539\u5168\u5C40\u7528\u6237\u540D\u548C\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u5168\u5C40\u7528\u6237\u540D\u548C\u90AE\u7BB1" aria-hidden="true">#</a> \u4FEE\u6539\u5168\u5C40\u7528\u6237\u540D\u548C\u90AE\u7BB1</h2><p>\u5168\u5C40\u4FEE\u6539\u7528\u6237\u540D:</p><blockquote><p>heart \u4E3A\u7528\u6237\u540D \u53EF\u4EE5\u4EFB\u610F\u586B\u5199</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config  --global user.name <span class="token operator">&lt;</span>heart<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5168\u5C40\u4FEE\u6539\u90AE\u7BB1:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config  --global user.email <span class="token operator">&lt;</span>heart@163.com<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="gitconfig" tabindex="-1"><a class="header-anchor" href="#gitconfig" aria-hidden="true">#</a> .gitconfig</h2><p>\u4FEE\u6539.gitconfig \u6587\u4EF6\u4E2D\u7684\u5185\u5BB9\u4E5F\u53EF\u4EE5\u4FEE\u6539\u7528\u6237\u540D\u548C\u90AE\u7BB1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vi</span> ~/.gitconfig

// \u4E4B\u540E\u76F4\u63A5\u4FEE\u6539\u5373\u53EF
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u67E5\u770B\u672C\u5730\u4ED3\u5E93\u7684\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u672C\u5730\u4ED3\u5E93\u7684\u5C5E\u6027" aria-hidden="true">#</a> \u67E5\u770B\u672C\u5730\u4ED3\u5E93\u7684\u5C5E\u6027</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --local --list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5206\u652F\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5206\u652F\u64CD\u4F5C" aria-hidden="true">#</a> \u5206\u652F\u64CD\u4F5C</h2><p>\u65B0\u5EFA\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token operator">&lt;</span>\u5206\u652F\u540D<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B\u672C\u5730\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B\u6240\u6709\u7684\u5206\u652F \u7EA2\u8272\u7684\u4E3A\u8FDC\u7A0B\u5206\u652F \u7EFF\u8272\u7684\u4E3A\u672C\u5730\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -a
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B\u672C\u5730\u8FDC\u7A0B\u7684\u5BF9\u5E94\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -vv
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5220\u9664\u672C\u5730\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch - d <span class="token operator">&lt;</span>\u5206\u652F\u540D<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u521B\u5EFA\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u5173\u8054</p><blockquote><p>\u8FDC\u7A0B\u5206\u652F\u4E00\u5B9A\u8981\u5B58\u5728 \u5426\u5219\u4F1A\u5931\u8D25</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>\u672C\u5730\u5206\u652F\u540D<span class="token operator">&gt;</span> origin/<span class="token operator">&lt;</span>\u8FDC\u7A0B\u5206\u652F\u540D<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5C06\u5DF2\u6709\u7684\u672C\u5730\u5206\u652F\u4E0E\u8FDC\u7A0B\u5206\u652F\u521B\u5EFA\u5173\u8054</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch --set-upstream-to origin/<span class="token operator">&lt;</span>\u8FDC\u7A0B\u5206\u652F\u540D<span class="token operator">&gt;</span>  <span class="token operator">&lt;</span>\u672C\u5730\u5206\u652F\u540D<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u8FDC\u7A0B\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u5206\u652F" aria-hidden="true">#</a> \u8FDC\u7A0B\u5206\u652F</h3><p>\u65B0\u5EFA\u8FDC\u7A0B\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b dev //\u65B0\u5EFAdev\u672C\u5730\u5206\u652F
<span class="token function">git</span> push origin dev //\u5C06dev\u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B
<span class="token function">git</span> branch --set-upstream-to<span class="token operator">=</span>origin/dev //\u5206\u652F\u5173\u8054
<span class="token function">git</span> branch -a // \u67E5\u770B\u5206\u652F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u67E5\u770B\u8FDC\u7A0B\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -r
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u67E5\u770B\u8FDC\u7A0B\u5206\u652F\u5730\u5740</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote -v
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8BBE\u7F6E\u65B0\u7684\u8FDC\u7A0B\u8DEF\u5F84</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote set-url origin git@xxx.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u62C9\u53D6\u8FDC\u7A0B\u4ED3\u5E93\u4EE3\u7801</p><blockquote><p>main \u4E3A\u8FDC\u7A0B\u4ED3\u5E93\u540D\u5B57</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> fetch origin <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6DFB\u52A0\u8FDC\u7A0B\u4ED3\u5E93</p><blockquote><p>master \u4E3A\u5206\u652F\u540D url \u4E3A\u8FDC\u7A0B\u5206\u652F\u5730\u5740</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> <span class="token operator">&lt;</span>master<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5220\u9664\u8FDC\u7A0B\u4ED3\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">rm</span> <span class="token operator">&lt;</span>master<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5220\u9664\u8FDC\u7A0B\u5206\u652F</p><blockquote><p>\u63A8\u9001\u4E00\u4E2A\u7A7A\u5206\u652F\u5230\u8FDC\u7A0B\u5206\u652F\uFF0C\u5176\u5B9E\u5C31\u76F8\u5F53\u4E8E\u5220\u9664\u8FDC\u7A0B\u5206\u652F</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin :dev_tmp
// \u4E5F\u53EF\u4EE5\u4F7F\u7528
<span class="token function">git</span> push origin --delete dev_tmp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5207\u6362\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362\u5206\u652F" aria-hidden="true">#</a> \u5207\u6362\u5206\u652F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token operator">&lt;</span>\u5206\u652F\u540D<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u5408\u5E76\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u5206\u652F" aria-hidden="true">#</a> \u5408\u5E76\u5206\u652F</h3><p>\u5C06\u5206\u652F\u5185\u5BB9\u5408\u5E76\u5230 main \u5206\u652F\u4E2D</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> merge main
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u6E05\u9664\u672C\u5730\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u6E05\u9664\u672C\u5730\u4FEE\u6539" aria-hidden="true">#</a> \u6E05\u9664\u672C\u5730\u4FEE\u6539</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token builtin class-name">.</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> clean -xdf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="git-stash" tabindex="-1"><a class="header-anchor" href="#git-stash" aria-hidden="true">#</a> git stash</h3><p>\u5C06\u5DE5\u4F5C\u73B0\u573A\u5B58\u50A8\u8D77\u6765 \u7B49\u4EE5\u540E\u6062\u590D\u73B0\u573A\u7EE7\u7EED\u5DE5\u4F5C</p><blockquote><p>\u5F53\u524D\u5206\u652F\u5DF2\u4FEE\u6539\u4E86\u4EE3\u7801 \u4F46\u662F\u9700\u8981\u5207\u6362\u5230\u5176\u4ED6\u5206\u652F \u5219\u53EF\u4EE5\u4F7F\u7528 git stash \u5B58\u50A8\u5DE5\u4F5C\u5185\u5BB9 \uFF08\u5B58\u50A8\u4E4B\u540E\u4EE3\u7801\u4F1A\u88AB\u4FDD\u5B58\u8D77\u6765 \u672C\u5730\u4EE3\u7801\u5C06\u4F1A\u6682\u65F6\u6D88\u5931\uFF09</p><p>\u4E4B\u540E\u4FBF\u53EF\u4EE5\u5207\u6362\u5206\u652F</p></blockquote><p>\u591A\u6B21<code>git stash</code> \u53EF\u4EE5\u7528<code>git stash list</code>\u67E5\u770B \u7136\u540E\u6062\u590D\u5236\u5B9A\u7684 stash</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash apply stash@<span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash list // \u67E5\u770B\u5B58\u50A8\u7684\u5DE5\u4F5C\u5185\u5BB9\u5217\u8868
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6062\u590D\u5B58\u50A8\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash apply // \u6062\u590D\u5B58\u50A8\u7684\u5DE5\u4F5C\u5185\u5BB9 \u4F46\u662Fstach\u7684\u5B58\u50A8\u4E0D\u4F1A\u88AB\u5220\u9664 \u9700\u8981\u7528git stach drop \u5220\u9664
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> stash pop // \u6062\u590D\u7684\u540C\u65F6\u628Astash\u5185\u5BB9\u4E5F\u5220\u4E86
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>git stash pop \u51FA\u7684 stash \u662F\u53EF\u4EE5\u627E\u56DE\u7684\uFF0C\u56E0\u4E3A\u6BCF\u6B21 git stash \u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684 commit\uFF0C\u53EA\u8981\u77E5\u9053 commitID, \u901A\u8FC7 git stash apply commitID \u5C31\u53EF\u4EE5\u5E94\u7528\u4E4B\u524D\u7684 stash</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">fsck</span> --lost-found //\u4F1A\u6253\u5370\u51FA\u6240\u6709dangling commitID
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5927\u6982\u6709\u4E09\u79CD\u7C7B\u578B\u7684\u5185\u5BB9\uFF0Cblob\u3001tree \u548C commit \u663E\u793A\u6BCF\u6B21 commit \u7684\u8BE6\u7EC6\u5185\u5BB9:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> show commitId
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u627E\u5230 commitID \u4E4B\u540E\u5C31\u53BB\u6267\u884C git stash apply commitID \u53EF\u4EE5\u6062\u590D\u5DE5\u4F5C\u533A</p><h3 id="cherry-pick" tabindex="-1"><a class="header-anchor" href="#cherry-pick" aria-hidden="true">#</a> cherry-pick</h3><p>\u80FD\u590D\u5236\u4E00\u4E2A\u7279\u5B9A\u7684\u63D0\u4EA4\u5230\u5F53\u524D\u5206\u652F</p><blockquote><p>\u901A\u5E38\u7528\u4E8E bug \u4FEE\u590D \u4F8B\u5982:\u5728 master \u5206\u652F\u4E0A\u4FEE\u590D\u7684 bug\uFF0C\u60F3\u8981\u5408\u5E76\u5230\u5F53\u524D dev \u5206\u652F\uFF0C\u53EF\u4EE5\u7528<code>git cherry-pick &lt;commit&gt;</code>\u547D\u4EE4\uFF0C\u628A bug \u63D0\u4EA4\u7684\u4FEE\u6539\u201C\u590D\u5236\u201D\u5230\u5F53\u524D\u5206\u652F\uFF0C\u907F\u514D\u91CD\u590D\u52B3\u52A8\u3002</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> cherry-pick 593f63c60472ed5a5ab00d31f94fbadcdcd5f97d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="git-\u8BBE\u7F6E\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#git-\u8BBE\u7F6E\u522B\u540D" aria-hidden="true">#</a> git \u8BBE\u7F6E\u522B\u540D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global alias.ck checkout // \u8FD9\u6837git ck \u5C31\u6709git checkout\u7684\u529F\u80FD\u4E86
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global alias.brc <span class="token string">&quot;branch -a --contains&quot;</span> //\u67E5\u770B\u67D0\u4E00\u4E2Acommit \u5B58\u5728\u4E8E\u54EA\u4E9B\u5206\u652F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global alias.tagc <span class="token string">&quot;tag --contains&quot;</span>  // \u67E5\u770B\u67D0\u4E00\u4E2Acommit \u5B58\u5728\u4E8E\u54EA\u4E9Btag
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u89E3\u51B3-git-\u4E2D-fatal-refusing-to-merge-unrelated-histories" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3-git-\u4E2D-fatal-refusing-to-merge-unrelated-histories" aria-hidden="true">#</a> \u89E3\u51B3 Git \u4E2D fatal: refusing to merge unrelated histories</h2><p>\u4E24\u4E2A\u5206\u652F\u6CA1\u6709\u4EFB\u4F55\u7684\u5173\u7CFB \u5219\u5408\u5E76\u5931\u8D25 \u53EF\u4EE5\u6DFB\u52A0 <code>--allow-unrelated-histories</code>\u89E3\u51B3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> merge master --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u662F<code>git pull</code>\u6216\u8005<code>git push</code>\u62A5<code>fatal: refusing to merge unrelated histories</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull origin master --allow-unrelated-histories
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,91);function i(r,l){return n}var p=s(e,[["render",i]]);export{p as default};
