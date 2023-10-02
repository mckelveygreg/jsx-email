import{_ as t,o as l,c as p,k as s,a as n,t as e,Q as o}from"./chunks/framework.fd95ed2e.js";const K=JSON.parse('{"title":"Head","description":"A JSX email component which creates an HTML head element\\n","frontmatter":{"title":"Head","description":"A JSX email component which creates an HTML head element\\n","slug":"head","head":[["meta",{"name":"og:description","content":"A JSX email component which creates an HTML head element\\n"}],["meta",{"name":"og:image","content":"https://jsx.email/og.png"}],["meta",{"name":"og:site_name","content":"JSX email"}],["meta",{"name":"og:title","content":"Head"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:description","content":"A JSX email component which creates an HTML head element\\n"}],["meta",{"name":"twitter:image","content":"https://jsx.email/og.png"}],["meta",{"name":"twitter:title","content":"Head"}]]},"headers":[],"relativePath":"../../../docs/components/head.md","filePath":"../../../docs/components/head.md"}'),c={name:"../../../docs/components/head.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[n("This component is required for adding elements such as "),s("code",null,"<style>"),n(" and "),s("code",null,"meta"),n(" directly to the document")])],-1),m=s("h2",{id:"install",tabindex:"-1"},[n("Install "),s("a",{class:"header-anchor",href:"#install","aria-label":'Permalink to "Install"'},"​")],-1),h=s("p",null,"Install component from your command line.",-1),_={class:"vp-code-group vp-adaptive-theme"},y=o('<div class="tabs"><input type="radio" name="group-dJo5Q" id="tab-zsaVqAc" checked="checked"><label for="tab-zsaVqAc">pnpm</label><input type="radio" name="group-dJo5Q" id="tab-_jNvWqG"><label for="tab-_jNvWqG">npm</label><input type="radio" name="group-dJo5Q" id="tab-ZA5zEFH"><label for="tab-ZA5zEFH">yarn</label></div>',1),E={class:"blocks"},u={class:"language-console vp-adaptive-theme active"},g=s("button",{title:"Copy Code",class:"copy"},null,-1),C=s("span",{class:"lang"},"console",-1),k={class:"shiki slack-dark vp-code-dark"},f={class:"line"},v={style:{color:"#E6E6E6"}},b={class:"shiki slack-ochin vp-code-light"},D={class:"line"},A={style:{color:"#002339"}},T={class:"language-console vp-adaptive-theme"},H=s("button",{title:"Copy Code",class:"copy"},null,-1),P=s("span",{class:"lang"},"console",-1),j={class:"shiki slack-dark vp-code-dark"},B={class:"line"},S={style:{color:"#E6E6E6"}},x={class:"shiki slack-ochin vp-code-light"},$={class:"line"},w={style:{color:"#002339"}},q={class:"language-console vp-adaptive-theme"},I=s("button",{title:"Copy Code",class:"copy"},null,-1),J=s("span",{class:"lang"},"console",-1),V={class:"shiki slack-dark vp-code-dark"},N={class:"line"},M={style:{color:"#E6E6E6"}},X={class:"shiki slack-ochin vp-code-light"},z={class:"line"},F={style:{color:"#002339"}},L=o(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Add the component to your email template. Include children tags where needed.</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki slack-dark vp-code-dark"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#E6E6E6;"> { </span><span style="color:#9CDCFE;">Head</span><span style="color:#E6E6E6;"> } </span><span style="color:#C586C0;">from</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;@jsx-email/head&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">Email</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> () </span><span style="color:#569CD6;">=&gt;</span><span style="color:#E6E6E6;"> {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#C586C0;">return</span><span style="color:#E6E6E6;"> (</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">      </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">title</span><span style="color:#808080;">&gt;</span><span style="color:#E6E6E6;">My email title</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">title</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">Head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#E6E6E6;">  );</span></span>
<span class="line"><span style="color:#E6E6E6;">};</span></span></code></pre><pre class="shiki slack-ochin vp-code-light"><code><span class="line"><span style="color:#7B30D0;">import</span><span style="color:#002339;"> { </span><span style="color:#2F86D2;">Head</span><span style="color:#002339;"> } </span><span style="color:#7B30D0;">from</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;@jsx-email/head&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#7EB233;">Email</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> () </span><span style="color:#0991B6;">=&gt;</span><span style="color:#002339;"> {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7B30D0;">return</span><span style="color:#002339;"> (</span></span>
<span class="line"><span style="color:#002339;">    &lt;</span><span style="color:#DC3EB7;">Head</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">      &lt;</span><span style="color:#0444AC;">title</span><span style="color:#002339;">&gt;My email title&lt;/</span><span style="color:#0444AC;">title</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">    &lt;/</span><span style="color:#DC3EB7;">Head</span><span style="color:#002339;">&gt;</span></span>
<span class="line"><span style="color:#002339;">  );</span></span>
<span class="line"><span style="color:#002339;">};</span></span></code></pre></div><h2 id="component-props" tabindex="-1">Component Props <a class="header-anchor" href="#component-props" aria-label="Permalink to &quot;Component Props&quot;">​</a></h2><p>This component has no custom props, but expresses all of the <a href="https://react.dev/reference/react-dom/components/common" target="_blank" rel="noreferrer">Common Component Props</a> for <code>ComponentProps&lt;&#39;head&#39;&gt;</code>.</p>`,5);function Q(a,G,R,U,W,Z){return l(),p("div",null,[s("h2",r,[n(e(a.$frontmatter.title)+" ",1),i]),s("p",null,e(a.$frontmatter.description),1),d,m,h,s("div",_,[y,s("div",E,[s("div",u,[g,C,s("pre",k,[s("code",null,[s("span",f,[s("span",v,"pnpm add @jsx-email/"+e(a.$frontmatter.slug),1)])])]),s("pre",b,[s("code",null,[s("span",D,[s("span",A,"pnpm add @jsx-email/"+e(a.$frontmatter.slug),1)])])])]),s("div",T,[H,P,s("pre",j,[s("code",null,[s("span",B,[s("span",S,"npm add @jsx-email/"+e(a.$frontmatter.slug),1)])])]),s("pre",x,[s("code",null,[s("span",$,[s("span",w,"npm add @jsx-email/"+e(a.$frontmatter.slug),1)])])])]),s("div",q,[I,J,s("pre",V,[s("code",null,[s("span",N,[s("span",M,"yarn add @jsx-email/"+e(a.$frontmatter.slug),1)])])]),s("pre",X,[s("code",null,[s("span",z,[s("span",F,"yarn add @jsx-email/"+e(a.$frontmatter.slug),1)])])])])])]),L])}const Y=t(c,[["render",Q]]);export{K as __pageData,Y as default};