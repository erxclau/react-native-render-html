(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7937],{4975:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var r=n(7560),a=n(8283),o=(n(2784),n(9037)),i=n(6785),s=["components"],l={id:"faq",title:"FAQ",sidebar_position:7,description:"Frequently Asked Questions"},d=void 0,p={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"Frequently Asked Questions",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/react-native-render-html/docs/faq",version:"current",sidebarPosition:7,frontMatter:{id:"faq",title:"FAQ",sidebar_position:7,description:"Frequently Asked Questions"},sidebar:"docSidebar",previous:{title:"Rendering",permalink:"/react-native-render-html/docs/flow/rendering"},next:{title:"Migrating to v6",permalink:"/react-native-render-html/docs/migration-guide"}},c=[{value:"How To",id:"how-to",children:[{value:"How to intercept press events on links?",id:"how-to-intercept-press-events-on-links",children:[]},{value:"I want to use a custom component to render some tags, how to do that?",id:"i-want-to-use-a-custom-component-to-render-some-tags-how-to-do-that",children:[]},{value:"How to access the raw HTML from a custom renderer?",id:"how-to-access-the-raw-html-from-a-custom-renderer",children:[]},{value:"How to render iframes?",id:"how-to-render-iframes",children:[]},{value:"How to set the default font size and family?",id:"how-to-set-the-default-font-size-and-family",children:[]},{value:"How to render inline images?",id:"how-to-render-inline-images",children:[]},{value:"Aren&#39;t there better renderers for tables?",id:"arent-there-better-renderers-for-tables",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Custom font families don&#39;t work, what&#39;s happening?",id:"custom-font-families-dont-work-whats-happening",children:[]},{value:"Content after custom tags is not displayed or displayed inside instead of below?",id:"content-after-custom-tags-is-not-displayed-or-displayed-inside-instead-of-below",children:[]},{value:"Sub and sup tags are not vertically shifted",id:"sub-and-sup-tags-are-not-vertically-shifted",children:[]},{value:"The application crashes on Android with react-native-screens",id:"the-application-crashes-on-android-with-react-native-screens",children:[]},{value:"Unable to resolve XXX from node_modules/YYY",id:"unable-to-resolve-xxx-from-node_modulesyyy",children:[]},{value:"Long image cannot show in full screen on Android",id:"long-image-cannot-show-in-full-screen-on-android",children:[]}]}],m={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to"},"How To"),(0,o.kt)("h3",{id:"how-to-intercept-press-events-on-links"},"How to intercept press events on links?"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"renderersProps.a.onPress"),", see ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/q/63114501/2779871"},"Stack Overflow | How to open the browser when a link is pressed?")," and ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"RenderersProps",url:"/react-native-render-html/api/renderersprops#a",member:"a",full:!0,type:"api-def",plural:void 0,mdxType:"Reference"}),"."),(0,o.kt)("h3",{id:"i-want-to-use-a-custom-component-to-render-some-tags-how-to-do-that"},"I want to use a custom component to render some tags, how to do that?"),(0,o.kt)("p",null,"You can define custom renderers for that purpose. See ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"Custom Rendering",url:"/react-native-render-html/docs/guides/custom-renderers",type:"doc",full:!1,mdxType:"Reference"}),"."),(0,o.kt)("h3",{id:"how-to-access-the-raw-html-from-a-custom-renderer"},"How to access the raw HTML from a custom renderer?"),(0,o.kt)("p",null,"Use ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"domNodeToHTMLString",url:"/react-native-render-html/api/domnodetohtmlstring",member:void 0,full:!1,type:"api-def",plural:void 0,mdxType:"Reference"})," utility. See ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/q/63979897/2779871"},"Stack Overflow | Extract raw HTML in react-native-render-html custom renderers"),"."),(0,o.kt)("h3",{id:"how-to-render-iframes"},"How to render iframes?"),(0,o.kt)("p",null,"That","'","s really a piece of cake. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/native-html/plugins/tree/master/packages/iframe-plugin#readme"},"@native-html/iframe-plugin"),"."),(0,o.kt)("h3",{id:"how-to-set-the-default-font-size-and-family"},"How to set the default font size and family?"),(0,o.kt)("p",null,"You should use ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"baseStyle",url:"/react-native-render-html/api/renderhtmlprops#basestyle",member:"baseStyle",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"})," prop."),(0,o.kt)("h3",{id:"how-to-render-inline-images"},"How to render inline images?"),(0,o.kt)("p",null,"See this example from the docs: ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"Example: Displaying Inline Images",url:"/react-native-render-html/docs/guides/custom-renderers#example-displaying-inline-images",type:"doc",full:!1,mdxType:"Reference"}),"."),(0,o.kt)("h3",{id:"arent-there-better-renderers-for-tables"},"Aren","'","t there better renderers for tables?"),(0,o.kt)("p",null,"Sure! The default renderer is very limitted. Check-out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/native-html/plugins/tree/master/packages/table-plugin#readme"},"@native-html/table-plugin")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/native-html/plugins/tree/master/packages/heuristic-table-plugin#readme"},"@native-html/heuristic-table-plugin"),"."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"custom-font-families-dont-work-whats-happening"},"Custom font families don","'","t work, what","'","s happening?"),(0,o.kt)("p",null,"You must register fonts available in your app with ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"systemFonts",url:"/react-native-render-html/api/renderhtmlprops#systemfonts",member:"systemFonts",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"})," prop. This feature is called ",(0,o.kt)("strong",{parentName:"p"},"font selection")," and prevents native crashes caused by missing fonts! See ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"Font Selection",url:"/react-native-render-html/docs/content/textual#font-selection",type:"doc",full:!1,mdxType:"Reference"}),"."),(0,o.kt)("h3",{id:"content-after-custom-tags-is-not-displayed-or-displayed-inside-instead-of-below"},"Content after custom tags is not displayed or displayed inside instead of below?"),(0,o.kt)("p",null,"That would often happen in the HTML markup when your custom tags is self-closing such as in ",(0,o.kt)("inlineCode",{parentName:"p"},"<customtag />"),". The HTML5 standard strictly prohibits non-void elements to be self-closing, and the required behavior for a parser is to ignore the ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," character in that case. Abding by this standard, the HTML parser will end up considering ",(0,o.kt)("inlineCode",{parentName:"p"},"<customtag />")," as equivlent to ",(0,o.kt)("inlineCode",{parentName:"p"},"<customtag >"),". Therefore, any content below it will be considered as children of ",(0,o.kt)("inlineCode",{parentName:"p"},"<customtag>"),". Because it is forgiving, the parser will close this tag when it reaches the end of the stream. To overcome this issue, ",(0,o.kt)("strong",{parentName:"p"},"you have two options"),":"),(0,o.kt)("ol",{style:{listStyleType:"decimal"}},(0,o.kt)("li",null,(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<customtag />")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"<customtag></customtag>")," in your HTML markup.")),(0,o.kt)("li",null,(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"recognizeSelfClosing")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in ","\u200b",(0,o.kt)(i.Z,{library:"react-native-render-html",name:"htmlParserOptions",url:"/react-native-render-html/api/renderhtmlprops#htmlparseroptions",member:"htmlParserOptions",full:!1,type:"rnrh-prop",plural:void 0,mdxType:"Reference"})," prop."))),(0,o.kt)("h3",{id:"sub-and-sup-tags-are-not-vertically-shifted"},"Sub and sup tags are not vertically shifted"),(0,o.kt)("p",null,"This is caused by a known limitation in React Native. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/meliorence/react-native-render-html/issues/76#issuecomment-660702309"},"The issue is being tracked on Github.")),(0,o.kt)("h3",{id:"the-application-crashes-on-android-with-react-native-screens"},"The application crashes on Android with react-native-screens"),(0,o.kt)("p",null,"Likely a bug between ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-webview")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"react-native-screens"),". See ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/q/63171131/2779871"},"Stack Overflow | When rendering iframes, Android crashes while navigating back to stack screen"),"."),(0,o.kt)("h3",{id:"unable-to-resolve-xxx-from-node_modulesyyy"},"Unable to resolve XXX from node_modules/YYY"),(0,o.kt)("p",null,"Probably an issue with your package manager. See ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/q/63053425/2779871"},"Stack Overflow | Unable to resolve XXX from module YYY"),"."),(0,o.kt)("h3",{id:"long-image-cannot-show-in-full-screen-on-android"},"Long image cannot show in full screen on Android"),(0,o.kt)("p",null,"This is a limitation of FaceBook","'","s fresco library and React Native ","\u200b",(0,o.kt)(i.Z,{full:!1,name:"Image",url:"https://reactnative.dev/docs/Image",type:"rn-symbol",mdxType:"Reference"})," component. You need to downsize the image."))}h.isMDXComponent=!0}}]);