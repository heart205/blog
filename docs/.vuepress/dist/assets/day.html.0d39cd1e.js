import{g as n}from"./app.4f2594b6.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="date" tabindex="-1"><a class="header-anchor" href="#date" aria-hidden="true">#</a> Date</h1><p>Date \u7C7B\u578B\u5C06\u65E5\u671F \u4FDD\u5B58\u4E3A\u81EA\u534F\u8C03\u4E16\u754C\u65F6(UTC\uFF0CUniversal Time Coordinated)\u65F6\u95F4 1970 \u5E74 1 \u6708 1 \u65E5\u5348\u591C(\u96F6\u65F6)\u81F3\u4ECA\u6240 \u7ECF\u8FC7\u7684\u6BEB\u79D2\u6570\u3002\u4F7F\u7528\u8FD9\u79CD\u5B58\u50A8\u683C\u5F0F\uFF0CDate \u7C7B\u578B\u53EF\u4EE5\u7CBE\u786E\u8868\u793A 1970 \u5E74 1 \u6708 1 \u65E5\u4E4B\u524D\u53CA\u4E4B\u540E 285 616 \u5E74\u7684 \u65E5\u671F\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLocaleString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//5/2/2022, 8:42:38 PM</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Mon May 02 2022 20:42:38 GMT+0800 (China Standard Time)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toDateString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u661F\u671F\u4E00 \u4E94\u6708 2\u53F7 2022</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>toDateString()\u663E\u793A\u65E5\u671F\u4E2D\u7684\u5468\u51E0\u3001\u6708\u3001\u65E5\u3001\u5E74(\u683C\u5F0F\u7279\u5B9A\u4E8E\u5B9E\u73B0); toTimeString()\u663E\u793A\u65E5\u671F\u4E2D\u7684\u65F6\u3001\u5206\u3001\u79D2\u548C\u65F6\u533A(\u683C\u5F0F\u7279\u5B9A\u4E8E\u5B9E\u73B0); toLocaleDateString()\u663E\u793A\u65E5\u671F\u4E2D\u7684\u5468\u51E0\u3001\u6708\u3001\u65E5\u3001\u5E74(\u683C\u5F0F\u7279\u5B9A\u4E8E\u5B9E\u73B0\u548C\u5730\u533A); toLocaleTimeString()\u663E\u793A\u65E5\u671F\u4E2D\u7684\u65F6\u3001\u5206\u3001\u79D2(\u683C\u5F0F\u7279\u5B9A\u4E8E\u5B9E\u73B0\u548C\u5730\u533A); toUTCString()\u663E\u793A\u5B8C\u6574\u7684 UTC \u65E5\u671F(\u683C\u5F0F\u7279\u5B9A\u4E8E\u5B9E\u73B0)\u3002 \u8FD9\u4E9B\u65B9\u6CD5\u7684\u8F93\u51FA\u4E0E toLocaleString()\u548C toString()\u4E00\u6837\uFF0C\u4F1A\u56E0\u6D4F\u89C8\u5668\u800C\u5F02\u3002\u56E0\u6B64\u4E0D\u80FD\u7528\u4E8E\u5728\u7528\u6237\u754C\u9762\u4E0A\u4E00\u81F4\u5730\u663E\u793A\u65E5\u671F\u3002</p><p>getTime() \u8FD4\u56DE\u65E5\u671F\u7684\u6BEB\u79D2\u8868\u793A\uFF1B\u4E0E valueof()\u76F8\u540C</p><p>setTime (milliseconds) \u8BBE\u7F6E\u65E5\u671F\u7684\u6BEB\u79D2\u8868\u793A\uFF0C\u4ECE\u800C\u4FEE\u6539\u6574\u4E2A\u65E5\u671F</p><p>getFullYear (\uFF09 \u8FD4\u56DE 4 \u4F4D\u6570\u5E74\uFF08\u5373 2019 \u800C\u4E0D\u662F 19\uFF09</p><p>getUTCFullYear (\uFF09 \u8FD4\u56DE UTC \u65E5\u671F\u7684 4 \u4F4D\u6570\u5E74</p><p>setFullYear (year) \u8BBE\u7F6E\u65E5\u671F\u7684\u5E74\uFF08year \u5FC5\u987B\u662F 4 \u4F4D\u6570\uFF09</p><p>setUTCFullYear (year) \u8BBE\u7F6E UTC \u65E5\u671F\u7684\u5E74\uFF08year \u5FC5\u987B\u662F 4 \u4F4D\u6570\uFF09</p><p>getMonth(\uFF09 \u8FD4\u56DE\u65E5\u671F\u7684\u6708\uFF080 \u8868\u793A 1 \u6708\uFF0C11 \u8868\u793A 12 \u6708\uFF09</p><p>getUTCMonth(\uFF09 \u8FD4\u56DE UTC \u65E5\u671F\u7684\u6708\uFF080 \u8868\u793A 1 \u6708\uFF0C11 \u8868\u793A 12 \u6708\uFF09</p><p>setMonth (month) \u8BBE\u7F6E\u65E5\u671F\u7684\u6708\uFF08month \u4E3A\u5927\u4E8E 0 \u7684\u6570\u503C\uFF0C\u5927\u4E8E 11 \u52A0\u5E74\uFF09</p><p>setUTCMonth (month) \u8BBE\u7F6E UTC \u65E5\u671F\u7684\u6708\uFF08month \u4E3A\u5927\u4E8E 0 \u7684\u6570\u503C\uFF0C\u5927\u4E8E 11 \u52A0\u5E74\uFF09</p><p>getDate() \u8FD4\u56DE\u65E5\u671F\u4E2D\u7684\u65E5\uFF081~31\uFF09</p><p>getUrCDate() \u8FD4\u56DE UTC \u65E5\u671F\u4E2D\u7684\u65E5\uFF081~31\uFF09</p><p>setDate (date) \u8BBE\u7F6E\u65E5\u671F\u4E2D\u7684\u65E5\uFF08\u5982\u679C date \u5927\u4E8E\u8BE5\u6708\u5929\u6570\uFF0C\u5219\u52A0\u6708\uFF09</p><p>setUTCDate (date) \u8BBE\u7F6E UTC \u65E5\u671F\u4E2D\u7684\u65E5\uFF08\u5982\u679C date \u5927\u4E8E\u8BE5\u6708\u5929\u6570\uFF0C\u5219\u52A0\u6708\uFF09</p><p>getDay(\uFF09 \u8FD4\u56DE\u65E5\u671F\u4E2D\u8868\u793A\u5468\u51E0\u7684\u6570\u503C\uFF080 \u8868\u793A\u5468\u65E5\uFF0C6 \u8868\u793A\u5468\u516D\uFF09</p><p>getUrCDay() \u8FD4\u56DE UTC \u65E5\u671F\u4E2D\u8868\u793A\u5468\u51E0\u7684\u6570\u503C\uFF080 \u8868\u793A\u5468\u65E5\uFF0C6 \u8868\u793A\u5468\u516D\uFF09</p><p>getHours() \u8FD4\u56DE\u65E5\u671F\u4E2D\u7684\u65F6\uFF080~23\uFF09</p><p>getUTCHours(\uFF09 \u8FD4\u56DE UTC \u65E5\u671F\u4E2D\u7684\u65F6\uFF080~23\uFF09</p><p>setHours (hours) \u8BBE\u7F6E\u65E5\u671F\u4E2D\u7684\u65F6\uFF08\u5982\u679C hours \u5927\u4E8E 23\uFF0C\u5219\u52A0\u65E5\uFF09</p><p>setUrCHours (hours) \u8BBE\u7F6E UTC \u65E5\u671F\u4E2D\u7684\u65F6\uFF08\u5982\u679C hours \u5927\u4E8E 23\uFF0C\u5219\u52A0\u65E5\uFF09</p><p>getMinutes () \u8FD4\u56DE\u65E5\u671F\u4E2D\u7684\u5206(0~59\uFF09</p><p>getUTCMinutes(\uFF09 \u8FD4\u56DE UTC \u65E5\u671F\u4E2D\u7684\u5206(0~59\uFF09</p><p>setMinutes (minutes) \u8BBE\u7F6E\u65E5\u671F\u4E2D\u7684\u5206\uFF08\u5982\u679C minutes \u5927\u4E8E 59\uFF0C\u5219\u52A0\u65F6\uFF09</p><p>setUTCMinutes (minutes) \u8BBE\u7F6E UTC \u65E5\u671F\u4E2D\u7684\u5206\uFF08\u5982\u679C minutes \u5927\u4E8E 59\uFF0C\u5219\u52A0\u65F6\uFF09</p><p>get Seconds(\uFF09 \u8FD4\u56DE\u65E5\u671F\u4E2D\u7684\u79D2( 0~59\uFF09</p><p>getUTCSeconds() \u8FD4\u56DE UTC \u65E5\u671F\u4E2D\u7684\u79D2(0~59\uFF09</p><p>set Seconds (seconds) \u8BBE\u7F6E\u65E5\u671F\u4E2D\u7684\u79D2\uFF08\u5982\u679C seconds \u5927\u4E8E 59\uFF0C\u5219\u52A0\u5206\uFF09</p><p>setUTCSeconds (seconds) \u8BBE\u7F6E UTC \u65E5\u671F\u4E2D\u7684\u79D2\uFF08\u5982\u679C seconds \u5927\u4E8E 59\uFF0C\u5219\u52A0\u5206\uFF09</p><p>getMilliseconds(\uFF09 \u8FD4\u56DE\u65E5\u671F\u4E2D\u7684\u6BEB\u79D2</p><p>getUTCMilliseconds (\uFF09 \u8FD4\u56DE UTC \u65E5\u671F\u4E2D\u7684\u6BEB\u79D2</p><p>setMilliseconds (milliseconds) \u8BBE\u7F6E\u65E5\u671F\u4E2D\u7684\u6BEB\u79D2</p><p>setUTCMilliseconds (milliseconds) \u8BBE\u7F6E UTC \u65E5\u671F\u4E2D\u7684\u6BEB\u79D2</p><p>getTimezoneoffset () \u8FD4\u56DE\u4EE5\u5206\u949F\u8BA1\u7684 UTC \u4E0E\u672C\u5730\u65F6\u533A\u7684\u504F\u79FB\u91CF\uFF08\u5982\u7F8E\u56FD EST \u5373\u201C\u4E1C\u90E8\u6807\u51C6\u65F6\u95F4\u201D</p><p>\u8FD4\u56DE 300\uFF0C\u8FDB\u4EBA\u590F\u4EE4\u65F6\u7684\u5730\u533A\u53EF\u80FD\u6709\u6240\u5DEE\u5F02\uFF09</p>`,38);function p(e,o){return t}var l=s(a,[["render",p]]);export{l as default};
