import{_ as o,o as l,c as p,k as s,a as t,t as a,Q as n}from"./chunks/framework.fd95ed2e.js";const M=JSON.parse('{"title":"Text","description":"A JSX email component which renders a paragraph element","frontmatter":{"title":"Text","description":"A JSX email component which renders a paragraph element","slug":"text","head":[["meta",{"name":"og:description","content":"A JSX email component which renders a paragraph element"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Text"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"A JSX email component which renders a paragraph element"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Text"}]]},"headers":[],"relativePath":"../../../docs/components/text.md","filePath":"../../../docs/components/text.md"}'),c={name:"../../../docs/components/text.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=s("h2",{id:"install",tabindex:"-1"},[t("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),m=s("p",null,"Install component from your command line.",-1),h={class:"vp-code-group vp-adaptive-theme"},_=n('<div class="tabs"><input type="radio" name="group-Nbeyk" id="tab-GoQ3ArT" checked="checked"><label for="tab-GoQ3ArT">pnpm</label><input type="radio" name="group-Nbeyk" id="tab-5tBgZzT"><label for="tab-5tBgZzT">npm</label><input type="radio" name="group-Nbeyk" id="tab-Sd1nVO-"><label for="tab-Sd1nVO-">yarn</label></div>',1),y={class:"blocks"},g={class:"language-console vp-adaptive-theme active"},E=s("button",{title:"Copy Code",class:"copy"},null,-1),u=s("span",{class:"lang"},"console",-1),k={class:"shiki slack-dark vp-code-dark"},f={class:"line"},C={style:{color:"#E6E6E6"}},b={class:"shiki slack-ochin vp-code-light"},v={class:"line"},x={style:{color:"#002339"}},T={class:"language-console vp-adaptive-theme"},D=s("button",{title:"Copy Code",class:"copy"},null,-1),A=s("span",{class:"lang"},"console",-1),B={class:"shiki slack-dark vp-code-dark"},S={class:"line"},P={style:{color:"#E6E6E6"}},$={class:"shiki slack-ochin vp-code-light"},j={class:"line"},w={style:{color:"#002339"}},N={class:"language-console vp-adaptive-theme"},V=s("button",{title:"Copy Code",class:"copy"},null,-1),I=s("span",{class:"lang"},"console",-1),J={class:"shiki slack-dark vp-code-dark"},X={class:"line"},q={style:{color:"#E6E6E6"}},O={class:"shiki slack-ochin vp-code-light"},Q={class:"line"},z={style:{color:"#002339"}},F=n(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Text</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/text&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Text</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">Lorem ipsum</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Text</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Text</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/text&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> &lt;</span><span style="color:#DC3EB7;">Text</span><span style="color:#002339;">&gt;Lorem ipsum&lt;/</span><span style="color:#DC3EB7;">Text</span><span style="color:#002339;">&gt;;</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><p>This component has no custom props, but expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;p&#39;&gt;</code>.</p>`,5);function G(e,L,R,U,Z,H){return l(),p("div",null,[s("h2",r,[t(a(e.$frontmatter.title)+" ",1),i]),s("p",null,a(e.$frontmatter.description),1),d,m,s("div",h,[_,s("div",y,[s("div",g,[E,u,s("pre",k,[s("code",null,[s("span",f,[s("span",C,"pnpm add @jsx-email/"+a(e.$frontmatter.slug),1)])])]),s("pre",b,[s("code",null,[s("span",v,[s("span",x,"pnpm add @jsx-email/"+a(e.$frontmatter.slug),1)])])])]),s("div",T,[D,A,s("pre",B,[s("code",null,[s("span",S,[s("span",P,"npm add @jsx-email/"+a(e.$frontmatter.slug),1)])])]),s("pre",$,[s("code",null,[s("span",j,[s("span",w,"npm add @jsx-email/"+a(e.$frontmatter.slug),1)])])])]),s("div",N,[V,I,s("pre",J,[s("code",null,[s("span",X,[s("span",q,"yarn add @jsx-email/"+a(e.$frontmatter.slug),1)])])]),s("pre",O,[s("code",null,[s("span",Q,[s("span",z,"yarn add @jsx-email/"+a(e.$frontmatter.slug),1)])])])])])]),F])}const W=o(c,[["render",G]]);export{M as __pageData,W as default};