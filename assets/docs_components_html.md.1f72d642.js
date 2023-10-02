import{_ as t,o as e,c as p,k as s,a as o,t as n,Q as l}from"./chunks/framework.fd95ed2e.js";const K=JSON.parse('{"title":"HTML","description":"Wraps the email document with a root element","frontmatter":{"title":"HTML","description":"Wraps the email document with a root element","slug":"html","head":[["meta",{"name":"og:description","content":"Wraps the email document with a root element"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"HTML"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"Wraps the email document with a root element"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"HTML"}]]},"headers":[],"relativePath":"../../../docs/components/html.md","filePath":"../../../docs/components/html.md"}'),c={name:"../../../docs/components/html.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=s("h2",{id:"install",tabindex:"-1"},[o("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),y=s("p",null,"Install component from your command line.",-1),m={class:"vp-code-group vp-adaptive-theme"},h=l('<div class="tabs"><input type="radio" name="group-nDE73" id="tab--4L3Ih8" checked="checked"><label for="tab--4L3Ih8">pnpm</label><input type="radio" name="group-nDE73" id="tab-y2ojbOT"><label for="tab-y2ojbOT">npm</label><input type="radio" name="group-nDE73" id="tab-jMyCjID"><label for="tab-jMyCjID">yarn</label></div>',1),E={class:"blocks"},_={class:"language-console vp-adaptive-theme active"},u=s("button",{title:"Copy Code",class:"copy"},null,-1),D=s("span",{class:"lang"},"console",-1),C={class:"shiki slack-dark vp-code-dark"},g={class:"line"},k={style:{color:"#E6E6E6"}},f={class:"shiki slack-ochin vp-code-light"},b={class:"line"},v={style:{color:"#002339"}},B={class:"language-console vp-adaptive-theme"},F=s("button",{title:"Copy Code",class:"copy"},null,-1),j=s("span",{class:"lang"},"console",-1),x={class:"shiki slack-dark vp-code-dark"},T={class:"line"},q={style:{color:"#E6E6E6"}},P={class:"shiki slack-ochin vp-code-light"},A={class:"line"},I={style:{color:"#002339"}},$={class:"language-console vp-adaptive-theme"},w=s("button",{title:"Copy Code",class:"copy"},null,-1),H=s("span",{class:"lang"},"console",-1),S={class:"shiki slack-dark vp-code-dark"},V={class:"line"},L={style:{color:"#E6E6E6"}},M={class:"shiki slack-ochin vp-code-light"},N={class:"line"},W={style:{color:"#002339"}},O=l(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include styles where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Button</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/button&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Html</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/html&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Html</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;en&quot;</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">dir</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ltr&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Button</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">href</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;https://example.com&quot;</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">style</span><span style="color:#D4D4D4;">=</span><span style="color:#569CD6;">{</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">color:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#61dafb&#39;</span><span style="color:#D4D4D4;"> }</span><span style="color:#569CD6;">}</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">        Click me</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Html</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Button</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/button&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Html</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/html&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Html</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">lang</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;en&quot;</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">dir</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;ltr&quot;</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">href</span><span style="color:#7B30D0;">=</span><span style="color:#A44185;">&quot;https://example.com&quot;</span><span style="color:#002339;"> </span><span style="color:#DF8618;font-style:italic;">style</span><span style="color:#7B30D0;">=</span><span style="color:#002339;">{{ color: </span><span style="color:#A44185;">&#39;#61dafb&#39;</span><span style="color:#002339;"> }}&gt;</span></span>
<span class="line"><span style="color:#002339;">        Click me</span></span>
<span class="line"><span style="color:#002339;">      &lt;/</span><span style="color:#DC3EB7;">Button</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Html</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><p>This component has no custom props, but expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;html&#39;&gt;</code>. Additionally, the props listed below should be considered.</p><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">string</span><span style="color:#E6E6E6;">;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#2F86D2;">lang</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">string</span><span style="color:#002339;">;</span></span></code></pre></div><p>Identify the language of text content on the email</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#9CDCFE;">dir</span><span style="color:#D4D4D4;">?:</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">string</span><span style="color:#E6E6E6;">;</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#2F86D2;">dir</span><span style="color:#7B30D0;">?:</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">string</span><span style="color:#002339;">;</span></span></code></pre></div><p>Identify the direction of text content on the email</p>`,10);function J(a,R,U,Q,X,z){return e(),p("div",null,[s("h2",r,[o(n(a.$frontmatter.title)+" ",1),i]),s("p",null,n(a.$frontmatter.description),1),d,y,s("div",m,[h,s("div",E,[s("div",_,[u,D,s("pre",C,[s("code",null,[s("span",g,[s("span",k,"pnpm add @jsx-email/"+n(a.$frontmatter.slug),1)])])]),s("pre",f,[s("code",null,[s("span",b,[s("span",v,"pnpm add @jsx-email/"+n(a.$frontmatter.slug),1)])])])]),s("div",B,[F,j,s("pre",x,[s("code",null,[s("span",T,[s("span",q,"npm add @jsx-email/"+n(a.$frontmatter.slug),1)])])]),s("pre",P,[s("code",null,[s("span",A,[s("span",I,"npm add @jsx-email/"+n(a.$frontmatter.slug),1)])])])]),s("div",$,[w,H,s("pre",S,[s("code",null,[s("span",V,[s("span",L,"yarn add @jsx-email/"+n(a.$frontmatter.slug),1)])])]),s("pre",M,[s("code",null,[s("span",N,[s("span",W,"yarn add @jsx-email/"+n(a.$frontmatter.slug),1)])])])])])]),O])}const Y=t(c,[["render",J]]);export{K as __pageData,Y as default};