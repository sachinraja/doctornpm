(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2FH3":function(e,t,n){"use strict";var a=n("UutA"),o=n("Khsi"),i=n("D/Zo"),l=n("mXGw"),r=n.n(l),c=n("/FXl"),m=n("x61h"),s=n("lmz1"),u=n("eive"),p=n("vyxW"),d=n("TfOH");var h=function(e){var t=e.children;return r.a.createElement(o.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},r.a.createElement(o.s,{fontFamily:"mono",fontSize:1},t))};var b=function(e){var t=e.children;return r.a.createElement("strong",null,t)},f=n("yTQu"),y=n("YnR1"),g=n("ay+O"),v=n("9xUs"),E=Object(a.f)(o.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function w(e){var t=e.items,n=e.depth;return r.a.createElement(E,{key:t,as:"ul",m:0,p:0},t.map((function(e){return r.a.createElement(o.e,{as:"li",key:e.url,pl:n>0?3:0},r.a.createElement(o.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?r.a.createElement(w,{items:e.items,depth:n+1}):null)})))}w.defaultProps={depth:0};var O=w,x=n("yyAh");function j(e){var t=x.a.getPath(e.location.pathname),n=x.a.getVariantAndPage(e.root,t);if(!n)return null;var a=x.a.getVariantsForPage(e.root,n.page),i=[],l=a[0];return 0===a.length?null:(a.forEach((function(e){e.page.url===t&&(l=e),i.push(r.a.createElement(o.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),r.a.createElement(o.i,{overlay:e.overlay},r.a.createElement(o.i.Button,null,l.variant.title),r.a.createElement(j.Menu,{direction:e.direction,width:e.menuWidth},i)))}j.Menu=Object(a.f)(o.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var k=j,_=Object(a.f)(o.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),N=Object(a.f)(o.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),C=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),I=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),H=Object(a.f)(o.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),G=Object(a.f)(o.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,n=e.pageContext,a=e.location,l=n.frontmatter,E=l.title,w=l.description,j=l.status,S=l.source,T=l.additionalContributors,z=void 0===T?[]:T,A=x.a.getVariantRoot(a.pathname);return r.a.createElement(c.a,{components:{Index:u.a,Note:p.a,Prompt:h,PromptReply:b,Screenshot:f.a}},r.a.createElement(o.k,{flexDirection:"column",minHeight:"100vh"},r.a.createElement(m.a,{title:E,description:w}),r.a.createElement(s.b,{location:a,isSearchEnabled:n.isSearchEnabled}),r.a.createElement(_,{flex:"1 1 auto",flexDirection:"row"},r.a.createElement(o.e,{display:["none",null,null,"block"]},r.a.createElement(y.a,{editOnGitHub:n.themeOptions.editOnGitHub,location:a})),r.a.createElement(N,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},r.a.createElement(C,null,r.a.createElement(o.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},r.a.createElement(o.e,null,r.a.createElement(o.e,null,r.a.createElement(o.m,{as:"h1"},E),w))),null!=A?r.a.createElement(I,null,r.a.createElement(k,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:A,location:a})):null),n.tableOfContents.items?r.a.createElement(H,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},r.a.createElement(o.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),r.a.createElement(O,{items:n.tableOfContents.items})):null,r.a.createElement(G,null,j||S?r.a.createElement(o.k,{mb:3,alignItems:"center"},j?r.a.createElement(v.a,{status:j}):null,r.a.createElement(o.e,{mx:"auto"}),S?r.a.createElement(g.a,{href:S}):null):null,n.tableOfContents.items?r.a.createElement(o.e,{display:["block",null,"none"],mb:3},r.a.createElement(o.h,null,(function(e){var t=e.open;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.s,{as:"summary",fontWeight:"bold"},t?r.a.createElement(o.r,{icon:i.b,mr:2}):r.a.createElement(o.r,{icon:i.c,mr:2}),"Table of contents"),r.a.createElement(o.e,{pt:1},r.a.createElement(O,{items:n.tableOfContents.items})))}))):null,t,r.a.createElement(d.a,{editOnGitHub:n.themeOptions.editOnGitHub,editUrl:n.editUrl,contributors:n.contributors.concat(z.map((function(e){return{login:e}})))}))))))}},q1YK:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return m}));var a=n("oedh"),o=(n("mXGw"),n("/FXl")),i=n("2FH3"),l={},r={_frontmatter:l},c=i.a;function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(c,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"doctornpm is a gatsby theme based on the very fine\n",Object(o.b)("a",{parentName:"p",href:"https://primer.style/doctocat"},"doctocat")," theme, which is part\nof ",Object(o.b)("a",{parentName:"p",href:"https://primer.style/"},"Primer"),", GitHub's design system."),Object(o.b)("p",null,"It's been modified to add some of the look and feel of\n",Object(o.b)("a",{parentName:"p",href:"https://npmjs.com/"},"npm"),", and includes a number of pieces of\nfunctionality to support the npm documentation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Expanding navigation sidebar\nThere's a lot of pages on the npm documentation site!  The navigation\nsidebar will only expand to the section that you're in, and will only\nshow the top-level navigation elements for everything else.  This\nshould try to keep from overwhelming you.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'"Variants" in navigation\nIn order to support multiple versions of the CLI documentation\n(since npm v6 and npm v7 are both in frequent use) we\'ve added\nwhat we call "variants" in the navigation hierarchy, so that you\ncan view the npm v6 docs ',Object(o.b)("em",{parentName:"p"},"or")," the npm v7 docs.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'"slug" is configurable\nThe slug (the resulting page name or URL) is configurable in a\ndocument\'s frontmatter.  This may be helpful for sites that have\na "legacy" URL layout.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'GitHub repository, branch and file path are configurable\nFor "Edit this page on GitHub" links, the repository, branch and\nfile path are all configurable.  This may be helpful for sites\nthat spread their documentation across multiple repositories.\n(In particular, the npm registry documentation lives in one\nrepository and the npm CLI documentation lives with the CLI\nitself.')),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},'Make GitHub integration optional\nAlthough we definitely want to display the contributors list and\nan "Edit on GitHub link", we needed to publish the new\n',Object(o.b)("a",{parentName:"p",href:"https://docs.npmjs.com/"},"docs.npmjs.com")," before we had finalized\nupdating the documentation in the CLI.  As a result, we didn't want\nto link people to the wrong places, so we added an opt-out."))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-about-mdx-391e5cc6d491e92d243a.js.map