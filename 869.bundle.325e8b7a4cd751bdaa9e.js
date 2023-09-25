"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[869],{87869:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(3827),a=n.n(s),i=n(43001),r=n(69190),o=n(20599),l=n(77284);const c=function(e,t,n){const{tools:s}=t.get("cornerstone.overlayViewportTools")??{};return e.createToolGroupAndAddTools(n,s,{})};const u=async function(e){let{segDisplaySet:t,viewportIndex:n,servicesManager:s}=e;const{segmentationService:a,hangingProtocolService:i,viewportGridService:r}=s.services,o=t.referencedDisplaySetInstanceUID;let l=null;l=await a.createSegmentationForSEGDisplaySet(t,l,!1),a.hydrateSegmentation(t.displaySetInstanceUID);const{viewports:c}=r.getState(),u=i.getViewportsRequireUpdate(n,o);return c.forEach(((e,s)=>{if(s===n)return;a.shouldRenderSegmentation(e.displaySetInstanceUIDs,t.displaySetInstanceUID)&&u.push({viewportIndex:s,displaySetInstanceUIDs:e.displaySetInstanceUIDs,viewportOptions:{initialImageOptions:{preset:"middle"}}})})),r.setDisplaySetsForViewports(u),!0},p={NO_NEVER:-1,CANCEL:0,HYDRATE_SEG:5};const d=function(e){let{servicesManager:t,segDisplaySet:n,viewportIndex:s}=e;const{uiViewportDialogService:a}=t.services;return new Promise((async function(e,i){const r=await function(e,t){return new Promise((function(n,s){const a="Do you want to open this Segmentation?",i=[{type:l.LZ.U.secondary,text:"No",value:p.CANCEL},{type:l.LZ.U.primary,text:"Yes",value:p.HYDRATE_SEG}],r=t=>{e.hide(),n(t)};e.show({viewportIndex:t,type:"info",message:a,actions:i,onSubmit:r,onOutsideClick:()=>{e.hide(),n(p.CANCEL)}})}))}(a,s);if(r===p.HYDRATE_SEG){e(await u({segDisplaySet:n,viewportIndex:s,servicesManager:t}))}}))};function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},S.apply(this,arguments)}const{formatDate:m}=o.utils;function g(e){const{children:t,displaySets:n,viewportOptions:s,viewportIndex:a,viewportLabel:p,servicesManager:g,extensionManager:y}=e,{t:v}=(0,r.$G)("SEGViewport"),{displaySetService:E,toolGroupService:f,segmentationService:w,uiNotificationService:I,customizationService:D}=g.services,h=`SEGToolGroup-${a}`;if(n.length>1)throw new Error("SEG viewport should only have a single display set");const b=n[0],[x,N]=(0,l.O_)(),[T,C]=(0,i.useState)(!1),[G,O]=(0,i.useState)(1),[P,k]=(0,i.useState)(b.isHydrated),[M,A]=(0,i.useState)(!b.isLoaded),[U,L]=(0,i.useState)(null),[R,V]=(0,i.useState)({percentComplete:null,totalSegments:null}),F=(0,i.useRef)(null),{viewports:_,activeViewportIndex:j}=x,H=b.getReferenceDisplaySet(),Y=function(e,t){const{SharedFunctionalGroupsSequence:[n]}=t.instance,{PixelMeasuresSequence:[s]}=n,{SpacingBetweenSlices:a,SliceThickness:i}=s,r=e.images[0],o={PatientID:r.PatientID,PatientName:r.PatientName,PatientSex:r.PatientSex,PatientAge:r.PatientAge,SliceThickness:r.SliceThickness||i,StudyDate:r.StudyDate,SeriesDescription:r.SeriesDescription,SeriesInstanceUID:r.SeriesInstanceUID,SeriesNumber:r.SeriesNumber,ManufacturerModelName:r.ManufacturerModelName,SpacingBetweenSlices:r.SpacingBetweenSlices||a};return o}(H,b);F.current={displaySet:H,metadata:Y};const $=e=>{L(e.detail.element)},q=()=>{L(null)},B=(0,i.useCallback)((()=>{const{component:t}=y.getModuleEntry("@ohif/extension-cornerstone.viewportModule.cornerstone"),{displaySet:n}=F.current;return i.createElement(t,S({},e,{displaySets:[n,b],viewportOptions:{viewportType:"volume",toolGroupId:h,orientation:s.orientation,viewportId:s.viewportId},onElementEnabled:$,onElementDisabled:q}))}),[a,b,h]),J=(0,i.useCallback)((e=>{e="left"===e?-1:1;const t=b.displaySetInstanceUID,n=w.getSegmentation(t),{segments:s}=n,a=Object.keys(s).length;let i=G+e;i>a-1?i=1:0===i&&(i=a-1),w.jumpToSegmentCenter(t,i,h),O(i)}),[G]);(0,i.useEffect)((()=>{M||d({servicesManager:g,viewportIndex:a,segDisplaySet:b}).then((e=>{e&&k(!0)}))}),[g,a,b,M]),(0,i.useEffect)((()=>{const{unsubscribe:e}=w.subscribe(w.EVENTS.SEGMENTATION_LOADING_COMPLETE,(e=>{e.segDisplaySet.displaySetInstanceUID===b.displaySetInstanceUID&&A(!1),e.overlappingSegments&&I.show({title:"Overlapping Segments",message:"Overlapping segments detected which is not currently supported",type:"warning"})}));return()=>{e()}}),[b]),(0,i.useEffect)((()=>{const{unsubscribe:e}=w.subscribe(w.EVENTS.SEGMENT_LOADING_COMPLETE,(e=>{let{percentComplete:t,numSegments:n}=e;V({percentComplete:t,totalSegments:n})}));return()=>{e()}}),[b]),(0,i.useEffect)((()=>{const e=E.subscribe(E.EVENTS.DISPLAY_SETS_REMOVED,(e=>{let{displaySetInstanceUIDs:t}=e;const n=_[j];t.includes(n.displaySetInstanceUID)&&N.setDisplaySetsForViewport({viewportIndex:j,displaySetInstanceUIDs:[]})}));return()=>{e.unsubscribe()}}),[]),(0,i.useEffect)((()=>{let e=f.getToolGroup(h);if(!e)return e=c(f,D,h),C(!0),()=>{w.removeSegmentationRepresentationFromToolGroup(h),f.destroyToolGroup(h)}}),[]),(0,i.useEffect)((()=>(k(b.isHydrated),()=>{w.removeSegmentationRepresentationFromToolGroup(h),F.current=null})),[b]);let Z=null;if(!F.current||H.displaySetInstanceUID!==F.current.displaySet.displaySetInstanceUID)return null;t&&t.length&&(Z=t.map(((e,t)=>e&&i.cloneElement(e,{viewportIndex:a,key:t}))));const{PatientID:z,PatientName:K,PatientSex:Q,PatientAge:W,SliceThickness:X,ManufacturerModelName:ee,StudyDate:te,SeriesDescription:ne,SpacingBetweenSlices:se}=F.current.metadata,ae=async()=>{const e=await u({segDisplaySet:b,viewportIndex:a,servicesManager:g});k(e)};return i.createElement(i.Fragment,null,i.createElement(l.uY,{onDoubleClick:e=>{e.stopPropagation(),e.preventDefault()},onArrowsClick:J,getStatusComponent:()=>function(e){let{isHydrated:t,onStatusClick:n}=e,s=null,a=null;const{t:o}=(0,r.$G)("Common"),c=o("LOAD");switch(t){case!0:a=()=>i.createElement(l.JO,{name:"status-alert"}),s=()=>i.createElement("div",null,"This Segmentation is loaded in the segmentation panel");break;case!1:a=()=>i.createElement(l.JO,{name:"status-untracked"}),s=()=>i.createElement("div",null,"Click LOAD to load segmentation.")}const u=()=>i.createElement("div",{className:"flex h-6 leading-6 cursor-default text-sm text-white"},i.createElement("div",{className:"min-w-[45px] flex items-center p-1 rounded-l-xl rounded-r bg-customgray-100"},i.createElement(a,null),i.createElement("span",{className:"ml-1"},"SEG")),!t&&i.createElement("div",{className:"ml-1 px-1.5 rounded cursor-pointer hover:text-black bg-primary-main hover:bg-primary-light",onMouseUp:n},c));return i.createElement(i.Fragment,null,s&&i.createElement(l.u,{content:i.createElement(s,null),position:"bottom-left"},i.createElement(u,null)),!s&&i.createElement(u,null))}({isHydrated:P,onStatusClick:ae}),studyData:{label:p,useAltStyling:!0,studyDate:m(te),seriesDescription:`SEG Viewport ${ne}`,patientInformation:{patientName:K?o.default.utils.formatPN(K.Alphabetic):"",patientSex:Q||"",patientAge:W||"",MRN:z||"",thickness:X?`${parseFloat(X).toFixed(2)}mm`:"",spacing:void 0!==se?`${parseFloat(se).toFixed(2)}mm`:"",scanner:ee||""}}}),i.createElement("div",{className:"relative flex flex-row w-full h-full overflow-hidden"},M&&i.createElement(l.bk,{className:"w-full h-full",totalNumbers:R.totalSegments,percentComplete:R.percentComplete,loadingText:"Loading SEG..."}),B(),Z))}g.propTypes={displaySets:a().arrayOf(a().object),viewportIndex:a().number.isRequired,dataSource:a().object,children:a().node,customProps:a().object},g.defaultProps={customProps:{}};const y=g}}]);
//# sourceMappingURL=869.bundle.325e8b7a4cd751bdaa9e.js.map