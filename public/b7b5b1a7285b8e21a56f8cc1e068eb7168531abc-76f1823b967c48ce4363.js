(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0/Pd":function(e,t,a){"use strict";var i,r=a("q1tI"),n=a.n(r),s=a("Wbzz"),d=a("L+ta"),o=a("MUpH"),l=a("vOnD"),c=a("ibEc"),u=a("9eSz"),f=a.n(u),p=a("pejg"),g=Object(l.c)(p.a).withConfig({displayName:"styled__PostItemLink",componentId:"sc-6rovf9-0"})(["text-decoration:none;display:block;margin-bottom:var(--space);",""],c.a.greaterThan("small")(i||(i=Object(o.a)(["\n    margin-bottom: 0;\n  "])))),m=l.c.section.withConfig({displayName:"styled__PostItemWrapper",componentId:"sc-6rovf9-1"})(["align-items:center;display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-light);"]),h=Object(l.c)(f.a).withConfig({displayName:"styled__PostItemImg",componentId:"sc-6rovf9-2"})(["width:100%;"]),b=l.c.div.withConfig({displayName:"styled__PostItemInfo",componentId:"sc-6rovf9-3"})(["display:flex;flex-direction:column;padding:calc(var(--space) * 1.5) var(--space);position:relative;"]),y=l.c.span.withConfig({displayName:"styled__PostItemTag",componentId:"sc-6rovf9-4"})(["display:inline-block;align-items:center;background:",";color:#fff;font-size:1.4rem;font-weight:700;text-transform:uppercase;padding:calc(var(--space-sm) / 1.5) var(--space-sm);position:absolute;top:0;left:50%;transform:translate(-50%,-50%);z-index:1;"],(function(e){return e.background?e.background:"red"})),v=l.c.time.withConfig({displayName:"styled__PostItemDate",componentId:"sc-6rovf9-5"})(["font-size:1.4rem;margin-bottom:var(--space-sm);"]),S=l.c.h1.withConfig({displayName:"styled__PostItemTitle",componentId:"sc-6rovf9-6"})(["font-size:2rem;font-weight:700;line-height:140%;"]),w=l.c.p.withConfig({displayName:"styled__PostItemDescription",componentId:"sc-6rovf9-7"})(["margin-top:var(--space-sm);"]);t.a=function(e){var t=e.slug,a=e.background,i=e.category,r=e.date,o=e.timeToRead,l=e.title,c=e.description,u=e.image,f=Object(d.a)().toRead,p=Object(s.useStaticQuery)("3862938538").listImages,I=p.edges.find((function(e){return e.node.childImageSharp.fluid.src.includes("cover")})),E=!!u&&u.split("/")[3],x=!!E&&p.edges.find((function(e){return e.node.childImageSharp.fluid.src.includes(E)}));return n.a.createElement(g,{to:t},n.a.createElement(m,null,x&&n.a.createElement(h,{fluid:x.node.childImageSharp.fluid,alt:l}),!x&&n.a.createElement(h,{fluid:I.node.childImageSharp.fluid,alt:l}),n.a.createElement(b,null,n.a.createElement(y,{background:a},i),n.a.createElement(v,null,r," • ",o," min ",f),n.a.createElement(S,null,l),n.a.createElement(w,null,c))))}},"54fn":function(e,t,a){"use strict";var i,r,n=a("q1tI"),s=a.n(n),d=a("MUpH"),o=a("vOnD"),l=a("ibEc"),c=o.c.h1.withConfig({displayName:"styled__TitleElement",componentId:"sc-12bgz5p-0"})(["line-height:140%;font-size:3rem;font-weight:bold;margin-bottom:var(--space-lg);"," ",""],l.a.greaterThan("medium")(i||(i=Object(d.a)(["\n    line-height: 1.1;\n    font-size: 3.5rem;\n  "]))),l.a.greaterThan("large")(r||(r=Object(d.a)(["\n    line-height: 1.1;\n    font-size: 4rem;\n  "]))));t.a=function(e){var t=e.text;return s.a.createElement(c,null,t)}},"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),d=i(a("8OQS")),o=i(a("pVnL")),l=i(a("q1tI")),c=i(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=I([].concat(t.fluid))),t.fixed&&(t.fixed=I([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,i=g(t||a||[]);return i&&i.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function I(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+d+a+i+t+n+r+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(C,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),d):d})),C=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var T=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,I=e.loading,L=e.draggable,O=m||h;if(!O)return null;var T=!1===this.state.fadeIn||this.state.imgLoaded,_=!0===this.state.fadeIn&&!this.state.imgCached,k=(0,o.default)({opacity:T?1:0,transition:_?"opacity "+y+"ms":"none"},d),V="boolean"==typeof b?"lightgray":b,P={transitionDelay:y+"ms"},H=(0,o.default)({opacity:this.state.imgLoaded?0:1},_&&P,d,f),N={title:t,alt:this.state.isVisible?"":a,style:H,className:p,itemProp:S},j=this.state.isHydrated?g(O):O[0];if(m)return l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:j.maxWidth?j.maxWidth+"px":null,maxHeight:j.maxHeight?j.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),V&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},_&&P)}),j.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:N,imageVariants:O,generateSources:x}),j.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:N,imageVariants:O,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(O),l.default.createElement(C,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:I,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:I},j,{imageVariants:O}))}}));if(h){var W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},V&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:V,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},_&&P)}),j.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.base64,spreadProps:N,imageVariants:O,generateSources:x}),j.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:j.tracedSVG,spreadProps:N,imageVariants:O,generateSources:E}),this.state.isVisible&&l.default.createElement("picture",null,w(O),l.default.createElement(C,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:k,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:I,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:I},j,{imageVariants:O}))}}))}return null},t}(l.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),k=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function V(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}T.propTypes={resolutions:_,sizes:k,fixed:V(c.default.oneOfType([_,c.default.arrayOf(_)])),fluid:V(c.default.oneOfType([k,c.default.arrayOf(k)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=T;t.default=P},MGku:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i,r,n=a("MUpH"),s=a("vOnD"),d=a("ibEc"),o=s.c.section.withConfig({displayName:"styled__ListWrapper",componentId:"sc-1p0txwl-0"})(["margin-bottom:20px;"," ",""],d.a.greaterThan("small")(i||(i=Object(n.a)(["\n        display: grid;\n        grid-gap: 20px;\n        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    "]))),d.a.greaterThan("large")(r||(r=Object(n.a)(["\n        grid-template-columns: repeat(auto-fit, minmax(250px, calc(50% - 10px)));\n    "]))))}}]);
//# sourceMappingURL=b7b5b1a7285b8e21a56f8cc1e068eb7168531abc-76f1823b967c48ce4363.js.map