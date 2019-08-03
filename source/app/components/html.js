function renderHtml (){
  return `
  <div id="readme" class="Box Box--condensed instapaper_body md js-code-block-container">
  <div class="Box-header d-flex flex-items-center flex-justify-between px-2">
    <h3 class="Box-title pr-3">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"></path></svg>
      README.md
    </h3>
  </div>
      <div class="Popover anim-scale-in js-tagsearch-popover" hidden="" data-tagsearch-url="/oayres/react-ssr/find-symbols" data-tagsearch-ref="master" data-tagsearch-path="README.md" data-tagsearch-lang="Markdown" data-hydro-click="{&quot;event_type&quot;:&quot;code_navigation.click_on_symbol&quot;,&quot;payload&quot;:{&quot;action&quot;:&quot;click_on_symbol&quot;,&quot;repository_id&quot;:115758448,&quot;ref&quot;:&quot;master&quot;,&quot;client_id&quot;:&quot;487565453.1557851567&quot;,&quot;originating_request_id&quot;:&quot;F008:0906:38F2E3:643A65:5D460B24&quot;,&quot;originating_url&quot;:&quot;https://github.com/oayres/react-ssr&quot;,&quot;referrer&quot;:null,&quot;user_id&quot;:46112188}}" data-hydro-click-hmac="6bc67f32115e4927a4a5aa732fb5801bddf1558293155f8066766de6d9299506">
<div class="Popover-message Popover-message--large Popover-message--top-left TagsearchPopover mt-1 mx-auto Box box-shadow-large">
  <div class="TagsearchPopover-content js-tagsearch-popover-content overflow-auto">
  </div>
</div>
</div>

    <div class="Box-body">
      <article class="markdown-body entry-content p-5" itemprop="text">


<br>
<h2><a id="user-content--overview" class="anchor" aria-hidden="true" href="#-overview"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> Overview</h2>
<p><code>react-ssr</code> is a simple and lightweight React server-side rendering solution that abstracts the complexities of server-side rendering React applications away from the codebase. <code>react-ssr</code> adds another optional 'lifecycle' method to your components for fetching data.</p>
<h2><a id="user-content--installation" class="anchor" aria-hidden="true" href="#-installation"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> Installation</h2>
<div class="highlight highlight-source-shell"><pre>$ npm install react-ssr --save</pre></div>
<p>We recommend you use <a href="https://github.com/oayres/babel-plugin-react-ssr#readme">the babel plugin</a> too. Add the babel plugin to your <code>.babelrc</code>.</p>
<div class="highlight highlight-source-shell"><pre>$ npm install babel-plugin-react-ssr --save-dev</pre></div>
<div class="highlight highlight-source-json"><pre>{
<span class="pl-s"><span class="pl-pds">"</span>plugins<span class="pl-pds">"</span></span>: [
  <span class="pl-s"><span class="pl-pds">"</span>react-ssr<span class="pl-pds">"</span></span>
]
}</pre></div>
<p>You'll also need React 16.3 or higher and React Router 4. They're peerDependencies, obvs.</p>
<h2><a id="user-content--getting-started" class="anchor" aria-hidden="true" href="#-getting-started"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> Getting started</h2>
<p>Hopefully you can get a simple page server-rendering in minutes. Efficiently. Here's everything you need to know.</p>
<p><strong>Learn quicker by example?</strong> <a href="https://github.com/oayres/react-ssr-sample">Check the sample app out</a>.</p>
<h3><a id="user-content-1-setting-up-the-server" class="anchor" aria-hidden="true" href="#1-setting-up-the-server"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Setting up the server</h3>
<p>Assuming you have a simple express server setup, you'll just need to hand off your routes to react-ssr. Note that you can also pass a custom template that will be responsible for the 'HTML document' that wraps your React app. Copy the example from <a href="https://github.com/oayres/react-ssr/blob/master/src/components/DefaultTemplate/DefaultTemplate.js">src/components/DefaultTemplate</a> as a starting point.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">express</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>express<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-smi">ssr</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react-ssr<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-smi">routes</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./routes<span class="pl-pds">'</span></span>

<span class="pl-k">const</span> <span class="pl-c1">app</span> <span class="pl-k">=</span> <span class="pl-en">express</span>()
<span class="pl-k">const</span> <span class="pl-c1">renderer</span> <span class="pl-k">=</span> <span class="pl-en">ssr</span>({
routes<span class="pl-k">:</span> routes
})

<span class="pl-smi">app</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/*<span class="pl-pds">'</span></span>, renderer)
<span class="pl-smi">app</span>.<span class="pl-en">listen</span>(<span class="pl-c1">8000</span>)</pre></div>
<h3><a id="user-content-2-setting-up-the-routes" class="anchor" aria-hidden="true" href="#2-setting-up-the-routes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Setting up the routes</h3>
<p>You will need an array of static routes, which means each route will be an object (as per React Router v4's docs) and not a <code>&lt;Route /&gt;</code>. This is because a <code>&lt;Route /&gt;</code> can only be read once rendering begins. A static route can be matched against before rendering begins.</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">HomePage</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./pages/HomePage<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-smi">NotFoundPage</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./pages/NotFoundPage<span class="pl-pds">'</span></span>

<span class="pl-k">const</span> <span class="pl-c1">routes</span> <span class="pl-k">=</span> [
{
  path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span>,
  exact<span class="pl-k">:</span> <span class="pl-c1">true</span>,
  component<span class="pl-k">:</span> HomePage
},
{
  path<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>**<span class="pl-pds">'</span></span>,
  component<span class="pl-k">:</span> NotFoundPage
}
]</pre></div>
<p>Check out <a href="https://reacttraining.com/react-router/web/guides/server-rendering" rel="nofollow">data loading with server side rendering in React Router v4</a> to see other comments or examples.</p>
<p>Additionally, your React app entry point will need to <em>hydrate</em> those routes out, for example: -</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">React</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-smi">ReactDOM</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react-dom<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-smi">BrowserRouter</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-dom/BrowserRouter<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> { <span class="pl-smi">renderRoutes</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react-router-config<span class="pl-pds">'</span></span>
<span class="pl-k">import</span> <span class="pl-smi">routes</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./routes<span class="pl-pds">'</span></span>

<span class="pl-k">const</span> <span class="pl-c1">App</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> (
<span class="pl-k">&lt;</span>BrowserRouter<span class="pl-k">&gt;</span>
  {<span class="pl-en">renderRoutes</span>(routes)}
<span class="pl-k">&lt;</span><span class="pl-k">/</span>BrowserRouter<span class="pl-k">&gt;</span>
)

<span class="pl-smi">ReactDOM</span>.<span class="pl-en">hydrate</span>(<span class="pl-k">&lt;</span>App <span class="pl-k">/</span><span class="pl-k">&gt;</span>, <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>root<span class="pl-pds">'</span></span>))</pre></div>
<h3><a id="user-content-3-fetching-data" class="anchor" aria-hidden="true" href="#3-fetching-data"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3. Fetching data</h3>
<p>There's one important rule: If you want to make a data call, and you'd like it to be server side rendered correctly, you'll need a static <code>fetchData</code> method. <code>react-ssr</code> will execute this before it begins rendering your app on the server and inject the result of it into the components props.</p>
<p><em>Heads up! We're using the static keyword below. You'll need to add <a href="https://babeljs.io/docs/plugins/transform-class-properties/" rel="nofollow">the transform class properties babel plugin</a> or another alternative to use this at the time of writing.</em></p>
<p>Here's an example:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">class</span> <span class="pl-en">Navigation</span> <span class="pl-k">extends</span> <span class="pl-e">React</span>.<span class="pl-smi">Component</span> {
<span class="pl-k">static</span> <span class="pl-en">fetchData</span> ({req, res, match}) {
  <span class="pl-k">if</span> (req <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">req</span>.<span class="pl-smi">thing</span>) {
    <span class="pl-smi">res</span>.<span class="pl-en">redirect</span>() <span class="pl-c"><span class="pl-c">//</span> you can redirect the request</span>
  }

  <span class="pl-k">return</span> {
    content<span class="pl-k">:</span> <span class="pl-smi">axios</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/api/navigation<span class="pl-pds">'</span></span>) <span class="pl-c"><span class="pl-c">//</span> becomes available as this.props.content</span>
  }
}

<span class="pl-en">render</span> () {
  <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-smi">loading</span>) {
    <span class="pl-c"><span class="pl-c">//</span> react-ssr is calling fetchData client-side</span>
    <span class="pl-k">return</span> <span class="pl-k">&lt;</span>p<span class="pl-k">&gt;</span>loading<span class="pl-k">...</span><span class="pl-k">&lt;</span><span class="pl-k">/</span>p<span class="pl-k">&gt;</span>
  }

  <span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-smi">error</span>) {
    <span class="pl-c"><span class="pl-c">//</span> react-ssr encountered an error calling your fetchData</span>
    <span class="pl-k">return</span> <span class="pl-k">&lt;</span>p<span class="pl-k">&gt;</span>Fancy retry fetch <span class="pl-c1">UI</span><span class="pl-k">...</span><span class="pl-k">&lt;</span><span class="pl-k">/</span>p<span class="pl-k">&gt;</span>
  }

  <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-c1">this</span>.<span class="pl-smi">props</span>.<span class="pl-c1">content</span>)
  <span class="pl-k">return</span> <span class="pl-k">&lt;</span>span <span class="pl-k">/</span><span class="pl-k">&gt;</span>
}
}

<span class="pl-c"><span class="pl-c">//</span> alternative syntax...</span>
<span class="pl-smi">Navigation</span>.<span class="pl-en">fetchData</span> <span class="pl-k">=</span> ({req, res, match}) <span class="pl-k">=&gt;</span> {
<span class="pl-k">return</span> {
  content<span class="pl-k">:</span> <span class="pl-smi">axios</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/api/navigation<span class="pl-pds">'</span></span>) <span class="pl-c"><span class="pl-c">//</span> becomes available as this.props.content</span>
}
}

<span class="pl-c"><span class="pl-c">//</span> only one data call? you can spread out the result into props...</span>
<span class="pl-smi">Navigation</span>.<span class="pl-en">fetchData</span> <span class="pl-k">=</span> ({req, res, match}) <span class="pl-k">=&gt;</span> {
<span class="pl-k">return</span> <span class="pl-smi">axios</span>.<span class="pl-c1">get</span>(<span class="pl-s"><span class="pl-pds">'</span>/api/navigation<span class="pl-pds">'</span></span>) <span class="pl-c"><span class="pl-c">//</span> becomes available as this.props[x], where x is every key returned in top of json tree response from this api call</span>
}</pre></div>
<p><g-emoji class="g-emoji" alias="trophy" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png">🏆</g-emoji> You should now have server-side rendering setup with asynchronous data calls.</p>
<h2><a id="user-content-️-options" class="anchor" aria-hidden="true" href="#️-options"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> Options</h2>
<p>There's two things to know in this section: arguments to <code>fetchData</code> and options for <code>react-ssr</code>.</p>
<h3><a id="user-content-arguments-to-fetchdata" class="anchor" aria-hidden="true" href="#arguments-to-fetchdata"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Arguments to fetchData</h3>
<div class="highlight highlight-source-js"><pre><span class="pl-k">static</span> <span class="pl-en">fetchData</span> ({req, res, match, isServerRender}) {}</pre></div>
<table>
<thead>
<tr>
<th>Argument</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>req</td>
<td>Node JS request object, server side only</td>
</tr>
<tr>
<td>res</td>
<td>Node JS response object, server side only</td>
</tr>
<tr>
<td>match</td>
<td>React route that was matched, contains params</td>
</tr>
<tr>
<td>isServerRender</td>
<td>Shorthand boolean to know if executed from client or server</td>
</tr>
</tbody>
</table>
<h3><a id="user-content-configuration-for-react-ssr" class="anchor" aria-hidden="true" href="#configuration-for-react-ssr"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuration for react-ssr</h3>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> <span class="pl-smi">ssr</span> <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>react-ssr<span class="pl-pds">'</span></span>
<span class="pl-k">const</span> <span class="pl-c1">renderer</span> <span class="pl-k">=</span> <span class="pl-en">ssr</span>({
routes<span class="pl-k">:</span> [],
disable<span class="pl-k">:</span> <span class="pl-c1">false</span>,
ignore<span class="pl-k">:</span> [
  <span class="pl-s"><span class="pl-pds">'</span>/example/route<span class="pl-pds">'</span></span> <span class="pl-c"><span class="pl-c">//</span> sends route without ssr if matched</span>
],
cache<span class="pl-k">:</span> { <span class="pl-c"><span class="pl-c">//</span> currently experimental - only accepts redis as a store</span>
  mode<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>full|none<span class="pl-pds">'</span></span>, <span class="pl-c"><span class="pl-c">//</span> full means entire page is cached</span>
  duration<span class="pl-k">:</span> <span class="pl-c1">1800</span>, <span class="pl-c"><span class="pl-c">//</span> cache duration in seconds, will rerender and set it again after this time for a given route</span>
  redisClient<span class="pl-k">:</span> <span class="pl-c1">null</span> <span class="pl-c"><span class="pl-c">//</span> optional redisClient - ioredis or node_redis - to use redis as store</span>
}
})</pre></div>
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
<th>Required</th>
<th>Default</th>
</tr>
</thead>
<tbody>
<tr>
<td>routes</td>
<td>static routes array of your react app</td>
<td>yes</td>
<td>[]</td>
</tr>
<tr>
<td>disable</td>
<td>disables server-side rendering</td>
<td>no</td>
<td>false</td>
</tr>
<tr>
<td>ignore</td>
<td>array of route paths to skip SSR, just send document</td>
<td>no</td>
<td>false</td>
</tr>
<tr>
<td>Html</td>
<td>override core html document template</td>
<td>no</td>
<td>see src/components/DefaultTemplate in repo</td>
</tr>
<tr>
<td>Providers</td>
<td>wraps your routes, useful for context providers, etc</td>
<td>no</td>
<td></td>
</tr>
<tr>
<td>cache</td>
<td>allows caching of components or pages</td>
<td>no</td>
<td>{ mode: 'none', duration: 1800 }</td>
</tr>
</tbody>
</table>
<h2><a id="user-content--notes" class="anchor" aria-hidden="true" href="#-notes"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> Notes</h2>
<p>As data fetching occurs before rendering begins, you should consider:</p>
<ul>
<li>Components that are dynamically rendered with static <code>fetchData</code> will not be server-side rendered. So, if you're programatically doing something like the below, it will render with <code>this.props.loading</code> as true on the client, then fetch the data and rerender:</li>
</ul>
<div class="highlight highlight-source-js-jsx"><pre><span class="pl-k">const</span> <span class="pl-smi">DynamicComponent</span> <span class="pl-k">=</span> <span class="pl-smi"><span class="pl-smi">components</span></span>[<span class="pl-s"><span class="pl-pds">'</span>MyComponent<span class="pl-pds">'</span></span>]
<span class="pl-k">return</span> &lt;<span class="pl-ent">DynamicComponent</span> /&gt;</pre></div>
<h3><a id="user-content-no-babel-plugin" class="anchor" aria-hidden="true" href="#no-babel-plugin"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>No babel plugin?</h3>
<p>Two simple steps should be taken if you're giving that a skip, but we recommend you use it to abstract this nonsense away from your codebase. If you'd like an alternative, raise an issue or a PR :-)</p>
<p><a href="#">Find out the steps you need to take without the babel plugin here</a>.</p>
<h2><a id="user-content--contributing" class="anchor" aria-hidden="true" href="#-contributing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> Contributing</h2>
<p>This package is still early doors. Please do get involved, feel free to critique it, offer solutions that can change its approach slightly, or request examples on how you want to use it. Spotted a bug, need something adding? Raise an issue. Pull requests welcome. <g-emoji class="g-emoji" alias="ok_hand" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44c.png">👌</g-emoji></p>
<h2><a id="user-content--license" class="anchor" aria-hidden="true" href="#-license"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a> License</h2>
<p><a href="https://github.com/oayres/react-ssr/blob/master/LICENSE.md">PRIVATE</a></p>
</article>
    </div>
</div>
  `
}

export default renderHtml;
