import{_ as t,o as e,c as p,k as s,a as o,t as n,Q as l}from"./chunks/framework.fd95ed2e.js";const ts=JSON.parse('{"title":"Column","description":"A JSX email component which displays columns that separate content bounaries vertically","frontmatter":{"title":"Column","description":"A JSX email component which displays columns that separate content bounaries vertically","slug":"column","type":"component","head":[["meta",{"name":"og:description","content":"A JSX email component which displays columns that separate content bounaries vertically"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Column"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"A JSX email component which displays columns that separate content bounaries vertically"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Column"}]]},"headers":[],"relativePath":"../../../docs/components/column.md","filePath":"../../../docs/components/column.md"}'),c={name:"../../../docs/components/column.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=s("h2",{id:"install",tabindex:"-1"},[o("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),m={class:"vp-code-group vp-adaptive-theme"},y=l('<div class="tabs"><input type="radio" name="group-5LcBY" id="tab-rT_HrTi" checked="checked"><label for="tab-rT_HrTi">pnpm</label><input type="radio" name="group-5LcBY" id="tab-2kgU2pk"><label for="tab-2kgU2pk">bun</label><input type="radio" name="group-5LcBY" id="tab-7WCbzSe"><label for="tab-7WCbzSe">npm</label><input type="radio" name="group-5LcBY" id="tab-RmaDP4u"><label for="tab-RmaDP4u">yarn</label></div>',1),h={class:"blocks"},E={class:"language-console vp-adaptive-theme active"},_=s("button",{title:"Copy Code",class:"copy"},null,-1),u=s("span",{class:"lang"},"console",-1),C={class:"shiki slack-dark vp-code-dark"},g={class:"line"},f={style:{color:"#E6E6E6"}},k={class:"shiki slack-ochin vp-code-light"},b={class:"line"},v={style:{color:"#002339"}},B={class:"language-console vp-adaptive-theme"},D=s("button",{title:"Copy Code",class:"copy"},null,-1),$=s("span",{class:"lang"},"console",-1),w={class:"shiki slack-dark vp-code-dark"},T={class:"line"},A={style:{color:"#E6E6E6"}},j={class:"shiki slack-ochin vp-code-light"},P={class:"line"},S={style:{color:"#002339"}},R={class:"language-console vp-adaptive-theme"},I=s("button",{title:"Copy Code",class:"copy"},null,-1),V=s("span",{class:"lang"},"console",-1),x={class:"shiki slack-dark vp-code-dark"},J={class:"line"},N={style:{color:"#E6E6E6"}},X={class:"shiki slack-ochin vp-code-light"},q={class:"line"},F={style:{color:"#002339"}},L={class:"language-console vp-adaptive-theme"},U=s("button",{title:"Copy Code",class:"copy"},null,-1),Y=s("span",{class:"lang"},"console",-1),z={class:"shiki slack-dark vp-code-dark"},H={class:"line"},W={style:{color:"#E6E6E6"}},O={class:"shiki slack-ochin vp-code-light"},Q={class:"line"},G={style:{color:"#002339"}},K=l(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Row</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/row&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Column</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/column&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">A</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">B</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">C</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Column</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Row</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Row</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/row&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Column</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/column&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;A&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;B&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;C&lt;/</span><span style="color:#DC3EB7;">Column</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Row</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><p>This component has no custom props, but expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;td&#39;&gt;</code>.</p>`,5);function M(a,Z,ss,as,ns,os){return e(),p("div",null,[s("h2",r,[o(n(a.$frontmatter.title)+" ",1),i]),s("p",null,n(a.$frontmatter.description),1),d,s("p",null,"Install the "+n(a.$frontmatter.type)+" from your command line",1),s("div",m,[y,s("div",h,[s("div",E,[_,u,s("pre",C,[s("code",null,[s("span",g,[s("span",f,"pnpm add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])]),s("pre",k,[s("code",null,[s("span",b,[s("span",v,"pnpm add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])])]),s("div",B,[D,$,s("pre",w,[s("code",null,[s("span",T,[s("span",A,"bun add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])]),s("pre",j,[s("code",null,[s("span",P,[s("span",S,"bun add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])])]),s("div",R,[I,V,s("pre",x,[s("code",null,[s("span",J,[s("span",N,"npm add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])]),s("pre",X,[s("code",null,[s("span",q,[s("span",F,"npm add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])])]),s("div",L,[U,Y,s("pre",z,[s("code",null,[s("span",H,[s("span",W,"yarn add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])]),s("pre",O,[s("code",null,[s("span",Q,[s("span",G,"yarn add @jsx-email/"+n(a.$frontmatter.slug)+" "+n(a.$frontmatter.params),1)])])])])])]),K])}const es=t(c,[["render",M]]);export{ts as __pageData,es as default};