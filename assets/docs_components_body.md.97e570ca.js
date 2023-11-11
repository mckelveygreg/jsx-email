import{_ as t,o as p,c as e,k as s,a as o,t as a,Q as l}from"./chunks/framework.fd95ed2e.js";const ts=JSON.parse('{"title":"Body","description":"A JSX email component for using a React `Body` component to wrap email content","frontmatter":{"title":"Body","description":"A JSX email component for using a React `Body` component to wrap email content","slug":"body","type":"component","head":[["meta",{"name":"og:description","content":"A JSX email component for using a React `Body` component to wrap email content"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Body"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"A JSX email component for using a React `Body` component to wrap email content"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Body"}]]},"headers":[],"relativePath":"../../../docs/components/body.md","filePath":"../../../docs/components/body.md"}'),c={name:"../../../docs/components/body.md"},r={id:"frontmatter-title",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),i=s("h2",{id:"install",tabindex:"-1"},[o("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),d={class:"vp-code-group vp-adaptive-theme"},m=l('<div class="tabs"><input type="radio" name="group-U451E" id="tab-LKCTgBy" checked="checked"><label for="tab-LKCTgBy">pnpm</label><input type="radio" name="group-U451E" id="tab-Fj5PcyL"><label for="tab-Fj5PcyL">bun</label><input type="radio" name="group-U451E" id="tab-6uftHlW"><label for="tab-6uftHlW">npm</label><input type="radio" name="group-U451E" id="tab-YkQyghK"><label for="tab-YkQyghK">yarn</label></div>',1),E={class:"blocks"},C={class:"language-console vp-adaptive-theme active"},h=s("button",{title:"Copy Code",class:"copy"},null,-1),_=s("span",{class:"lang"},"console",-1),D={class:"shiki slack-dark vp-code-dark"},u={class:"line"},g={style:{color:"#E6E6E6"}},f={class:"shiki slack-ochin vp-code-light"},B={class:"line"},b={style:{color:"#002339"}},k={class:"language-console vp-adaptive-theme"},v=s("button",{title:"Copy Code",class:"copy"},null,-1),$=s("span",{class:"lang"},"console",-1),A={class:"shiki slack-dark vp-code-dark"},F={class:"line"},j={style:{color:"#E6E6E6"}},S={class:"shiki slack-ochin vp-code-light"},P={class:"line"},T={style:{color:"#002339"}},w={class:"language-console vp-adaptive-theme"},x=s("button",{title:"Copy Code",class:"copy"},null,-1),q=s("span",{class:"lang"},"console",-1),H={class:"shiki slack-dark vp-code-dark"},I={class:"line"},V={style:{color:"#E6E6E6"}},J={class:"shiki slack-ochin vp-code-light"},N={class:"line"},R={style:{color:"#002339"}},U={class:"language-console vp-adaptive-theme"},X=s("button",{title:"Copy Code",class:"copy"},null,-1),K=s("span",{class:"lang"},"console",-1),L={class:"shiki slack-dark vp-code-dark"},Q={class:"line"},W={style:{color:"#E6E6E6"}},Y={class:"shiki slack-ochin vp-code-light"},O={class:"line"},z={style:{color:"#002339"}},G=l(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Html</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/html&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Body</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/body&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Column</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/column&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Section</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/section&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Html</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;en&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Body</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">backgroundColor:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#61dafb&#39;</span><span style="color:#D4D4D4;"> }</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Section</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">          </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">width:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;50%&#39;</span><span style="color:#D4D4D4;"> }</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span><span style="color:#569CD6;">{</span><span style="color:#6A9955;">/* First column */</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">          </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">width:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;50%&#39;</span><span style="color:#D4D4D4;"> }</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span><span style="color:#569CD6;">{</span><span style="color:#6A9955;">/* Second column */</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Section</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Body</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Html</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Html</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/html&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Body</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/body&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Column</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/column&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Section</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/section&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Html</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">lang</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;en&quot;</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Body</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{ backgroundColor: </span><span style="color:#A44185;">&#39;#61dafb&#39;</span><span style="color:#002339;"> }}&gt;</span></span>
<span class="line"><span style="color:#002339;">        &lt;</span><span style="color:#DC3EB7;">Section</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">          &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{ width: </span><span style="color:#A44185;">&#39;50%&#39;</span><span style="color:#002339;"> }}&gt;{</span><span style="color:#357B42;font-style:italic;">/* First column */</span><span style="color:#002339;">}&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">          &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{ width: </span><span style="color:#A44185;">&#39;50%&#39;</span><span style="color:#002339;"> }}&gt;{</span><span style="color:#357B42;font-style:italic;">/* Second column */</span><span style="color:#002339;">}&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">        &lt;/</span><span style="color:#DC3EB7;">Section</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Body</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Html</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><p>This component has no custom props, but expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;body&#39;&gt;</code>.</p>`,5);function M(n,Z,ss,ns,as,os){return p(),e("div",null,[s("h2",r,[o(a(n.$frontmatter.title)+" ",1),y]),s("p",null,a(n.$frontmatter.description),1),i,s("p",null,"Install the "+a(n.$frontmatter.type)+" from your command line",1),s("div",d,[m,s("div",E,[s("div",C,[h,_,s("pre",D,[s("code",null,[s("span",u,[s("span",g,"pnpm add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])]),s("pre",f,[s("code",null,[s("span",B,[s("span",b,"pnpm add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])])]),s("div",k,[v,$,s("pre",A,[s("code",null,[s("span",F,[s("span",j,"bun add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])]),s("pre",S,[s("code",null,[s("span",P,[s("span",T,"bun add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])])]),s("div",w,[x,q,s("pre",H,[s("code",null,[s("span",I,[s("span",V,"npm add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])]),s("pre",J,[s("code",null,[s("span",N,[s("span",R,"npm add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])])]),s("div",U,[X,K,s("pre",L,[s("code",null,[s("span",Q,[s("span",W,"yarn add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])]),s("pre",Y,[s("code",null,[s("span",O,[s("span",z,"yarn add @jsx-email/"+a(n.$frontmatter.slug)+" "+a(n.$frontmatter.params),1)])])])])])]),G])}const ps=t(c,[["render",M]]);export{ts as __pageData,ps as default};