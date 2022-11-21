"use strict";(self.webpackChunkretroweb=self.webpackChunkretroweb||[]).push([["apps_retroweb_src_app_features_settings_settings-feature_module_ts"],{52814:(vt,R,l)=>{l.r(R),l.d(R,{COMPONENTS:()=>ft,CONTAINERS:()=>_t,ROUTES:()=>ie,SettingsFeatureModule:()=>Mt});var d=l(15183),h=l(94666),P=l(97364),le=l(63227),ce=l(39878),e=l(22560),Z=l(30995),L=l(11755);l(89107),l(48971),l(28069);var v=l(76317),Me=l(36646),j=l(59295),b=l(50635);class Se{constructor(n,t,o,a){this.transformFunction=n,this.getLevel=t,this.isExpandable=o,this.getChildren=a}_flattenNode(n,t,o,a){const r=this.transformFunction(n,t);if(o.push(r),this.isExpandable(r)){const s=this.getChildren(n);s&&(Array.isArray(s)?this._flattenChildren(s,t,o,a):s.pipe((0,j.q)(1)).subscribe(c=>{this._flattenChildren(c,t,o,a)}))}return o}_flattenChildren(n,t,o,a){n.forEach((r,s)=>{let c=a.slice();c.push(s!=n.length-1),this._flattenNode(r,t+1,o,c)})}flattenNodes(n){let t=[];return n.forEach(o=>this._flattenNode(o,0,t,[])),t}expandFlattenedNodes(n,t){let o=[],a=[];return a[0]=!0,n.forEach(r=>{let s=!0;for(let c=0;c<=this.getLevel(r);c++)s=s&&a[c];s&&o.push(r),this.isExpandable(r)&&(a[this.getLevel(r)+1]=t.isExpanded(r))}),o}}class Ae extends L.o2{constructor(n,t,o){super(),this._treeControl=n,this._treeFlattener=t,this._flattenedData=new v.X([]),this._expandedData=new v.X([]),this._data=new v.X([]),o&&(this.data=o)}get data(){return this._data.value}set data(n){this._data.next(n),this._flattenedData.next(this._treeFlattener.flattenNodes(this.data)),this._treeControl.dataNodes=this._flattenedData.value}connect(n){return(0,Me.T)(n.viewChange,this._treeControl.expansionModel.changed,this._flattenedData).pipe((0,b.U)(()=>(this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value,this._treeControl)),this._expandedData.value)))}disconnect(){}}var we=l(77266),x=l(50253),m=l(68951),Y=l(28069);class J{constructor(n,t=!1){this.item=n,this.hasChildren=t,this.children=[],this.items=[],this.itemsLoaded=!1,this.itemsLoading=!1}}class _ extends J{constructor(n,t){super(n,t)}}let z=(()=>{class i extends _{constructor(){super(new.target.metaItem)}}return i.metaItem={},i})(),w=(()=>{class i extends _{constructor(t){super(new.target.metaItem),this.error=t}}return i.metaItem={},i})(),k=(()=>{class i extends _{constructor(){super(new.target.metaItem)}}return i.metaItem={},i})(),N=(()=>{class i extends _{constructor(t=null){super(new.target.metaItem),this.parentItem=t}}return i.metaItem={},i})();class ke{constructor(n,t=1,o=!1,a=null){this.item=n,this.level=t,this.expandable=o,this.parentItem=a}}function H(i){return i.level}function O(i){return i.expandable}function C(i,n){return i.item===n.metaItem}class Oe extends L.o2{constructor(n,t,o,a=0,r=100){super(),this.getRootChildren=n,this.getChildren=t,this.hasChildren=o,this.batchNumber=a,this.flatNodeCacheMax=r,this.treeControl=new d.C2(H,O),this.whenHasChild=(s,c)=>O(c),this.whenIsEmpty=(s,c)=>C(c,z),this.whenIsErrored=(s,c)=>C(c,w),this.whenIsLoading=(s,c)=>C(c,k),this.whenIsShowMore=(s,c)=>C(c,N),this.treeFlattener=new Se((s,c)=>{let p;return this.flatNodes.has(s.item)?p=this.flatNodes.get(s.item):(p=function Ne(i,n){return new ke(i.item,n,i.hasChildren,i instanceof N?i.parentItem:null)}(s,c),s instanceof _||this.flatNodes.set(s.item,p)),p},H,O,s=>s.children),this.treeFlatDataSource=new Ae(this.treeControl,this.treeFlattener),this.data$=new v.X([]),this.nodes=new Map,this.flatNodes=new we({max:this.flatNodeCacheMax}),this.initialized=!1,this.initializing=!1,this.treeControlExpansionModelSubscription=null,this.destroyed$=new x.x}connect(n){return this.observeTreeControlExpansionModel(),this.initialize(),this.treeFlatDataSource.connect(n)}disconnect(){this.treeFlatDataSource.disconnect()}destroy(){this.unobserveTreeControlExpansionModel(),this.destroyed$.next(),this.destroyed$.complete(),this.data$.next([]),this.initialized=!1,this.initializing=!1,this.refreshFlatDataSource(),this.nodes.clear(),this.flatNodes.reset()}initialize(n){this.handleInitialize(n)}loadChildren(n){const t=this.nodes.get(n.item);if(!t)throw new Error("Dynamic flat node unknown");this.handleLoadChildren(t)}showMore(n){const t=this.nodes.get(n.parentItem);if(!t)throw new Error("Dynamic flat node unknown");this.handleShowMore(t)}generateNode(n){if(this.nodes.has(n))return this.nodes.get(n);const t=new J(n,this.hasChildren(n));return this.nodes.set(n,t),t}handleInitialize(n){n&&this.initialized&&!this.initializing&&(this.initialized=!1),!this.initialized&&!this.initializing&&(this.initialized=!1,this.initializing=!0,this.data$.next([new k]),this.refreshFlatDataSource(),this.getRootChildren().pipe((0,m.R)(this.destroyed$),(0,b.U)(t=>t.map(o=>this.generateNode(o)))).subscribe(t=>{this.initialized=!0,this.initializing=!1,this.data$.next(t),this.refreshFlatDataSource()},t=>{Y.error("error while initialize dynamic data source:",t),this.initialized=!1,this.initializing=!1,this.data$.next([new w(t)]),this.refreshFlatDataSource()}))}handleLoadChildren(n){n.itemsLoaded||n.itemsLoading||n.itemsLoaded||(n.itemsLoading=!0,n.children=[new k],this.refreshFlatDataSource(),this.getChildren(n.item).pipe((0,m.R)(this.destroyed$)).subscribe(t=>{n.items=t,n.itemsLoaded=!0,n.itemsLoading=!1,t.length?this.handleShowMore(n):(n.children=[new z],this.refreshFlatDataSource())},t=>{Y.error(`error while load item ${n.item} children :`,t),n.itemsLoaded=!1,n.itemsLoading=!1,n.children=[new w(t)],this.refreshFlatDataSource()}))}handleShowMore(n){const t=n.items,a=t.slice(0,this.batchNumber?n.children.length+this.batchNumber:t.length).map(r=>this.generateNode(r));a.length<t.length&&a.push(new N(n.item)),n.children=a,this.refreshFlatDataSource()}refreshFlatDataSource(){this.treeFlatDataSource.data=this.data$.value}observeTreeControlExpansionModel(){this.treeControlExpansionModelSubscription||(this.treeControlExpansionModelSubscription=this.treeControl.expansionModel.changed.subscribe(n=>{n?.added.forEach(t=>this.loadChildren(t))}))}unobserveTreeControlExpansionModel(){this.treeControlExpansionModelSubscription?.unsubscribe(),this.treeControlExpansionModelSubscription=null}}var Ee=l(60180);function Fe(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"cdk-tree-node",6)(1,"button",0),e.NdJ("click",function(){const r=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.nodeClicked.emit(r))}),e.qZA(),e._uU(2),e.qZA()}if(2&i){const t=n.$implicit,o=e.oxw(2);e.Udp("display","flex"),e.xp6(2),e.hij(" ",o.getFilename(t.item[0])," ")}}function Ie(i,n){if(1&i&&(e.TgZ(0,"cdk-tree-node",6)(1,"button",7)(2,"span"),e._uU(3),e.qZA()(),e._uU(4),e.qZA()),2&i){const t=n.$implicit,o=e.oxw(2);e.Udp("display","flex"),e.xp6(1),e.uIk("aria-label","toggle "+t.item[0]),e.xp6(2),e.hij(" ",o.dataSource.treeControl.isExpanded(t)?"expand_more":"chevron_right"," "),e.xp6(1),e.hij(" ",o.getFilename(t.item[0])," ")}}function Re(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"cdk-tree-node",6)(1,"button",0),e.NdJ("click",function(){const r=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.dataSource.showMore(r))}),e._uU(2,"Show more..."),e.qZA()()}}function Pe(i,n){1&i&&(e.TgZ(0,"cdk-tree-node",6),e._uU(1," Loading... "),e.qZA())}function Ze(i,n){1&i&&(e.TgZ(0,"cdk-tree-node",6),e._uU(1," VIDE "),e.qZA())}function Le(i,n){1&i&&(e.TgZ(0,"cdk-tree-node",6),e._uU(1," ERRORED! "),e.qZA())}function Ue(i,n){if(1&i&&(e.TgZ(0,"cdk-tree",2),e.YNc(1,Fe,3,3,"cdk-tree-node",3),e.YNc(2,Ie,5,5,"cdk-tree-node",4),e.YNc(3,Re,3,0,"cdk-tree-node",5),e.YNc(4,Pe,2,0,"cdk-tree-node",5),e.YNc(5,Ze,2,0,"cdk-tree-node",5),e.YNc(6,Le,2,0,"cdk-tree-node",5),e.qZA()),2&i){const t=e.oxw();e.Q6J("dataSource",t.dataSource)("treeControl",t.dataSource.treeControl),e.xp6(2),e.Q6J("cdkTreeNodeDefWhen",t.dataSource.whenHasChild),e.xp6(1),e.Q6J("cdkTreeNodeDefWhen",t.dataSource.whenIsShowMore),e.xp6(1),e.Q6J("cdkTreeNodeDefWhen",t.dataSource.whenIsLoading),e.xp6(1),e.Q6J("cdkTreeNodeDefWhen",t.dataSource.whenIsEmpty),e.xp6(1),e.Q6J("cdkTreeNodeDefWhen",t.dataSource.whenIsErrored)}}class Ge extends Oe{constructor(n){super(()=>(0,Z.oD)(n,"/"),t=>(0,Z.oD)(n,t[0]),t=>t[1].isDirectory()),this.fs=n}refresh(){this.initialize(!0)}}let V=(()=>{class i{constructor(){this.nodeClicked=new e.vpe}get fs(){return this._fs}set fs(t){this.setFs(t)}ngOnDestroy(){this.dataSource.destroy()}getFilename(t){return Ee.EZ(t)}refreshDataSource(){this.dataSource?.refresh()}setFs(t){t&&t!==this._fs&&(this._fs=t,this.dataSource=new Ge(t))}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["ui-fs-tree"]],inputs:{fs:"fs"},outputs:{nodeClicked:"nodeClicked"},decls:4,vars:1,consts:[[3,"click"],[3,"dataSource","treeControl",4,"ngIf"],[3,"dataSource","treeControl"],["cdkTreeNodePadding","",3,"display",4,"cdkTreeNodeDef"],["cdkTreeNodePadding","",3,"display",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding","",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding",""],["cdkTreeNodeToggle",""]],template:function(t,o){1&t&&(e.TgZ(0,"div")(1,"button",0),e.NdJ("click",function(){return o.refreshDataSource()}),e._uU(2,"Refresh"),e.qZA()(),e.YNc(3,Ue,7,7,"cdk-tree",1)),2&t&&(e.xp6(3),e.Q6J("ngIf",o.dataSource))},dependencies:[h.O5,d.rO,d.XJ,d.Ud,d._0,d.Hs],encapsulation:2}),i})();var Be=l(77203),q=l(3670);let $e=(()=>{class i{constructor(t,o){this.win=t,this.gamepadService=o,this.fakeGamepads=[]}connectFakeGamepad(t){const o=this.findOrCreateFakeGamepadByIndex(t);o.connected=!0,o.timestamp=this.win.performance.now();const a=Object.defineProperty(new CustomEvent("gamepadconnected"),"gamepad",{value:o});this.win.dispatchEvent(a)}disconnectFakeGamepad(t){const o=this.findOrCreateFakeGamepadByIndex(t);o.connected=!1,o.timestamp=this.win.performance.now();const a=Object.defineProperty(new CustomEvent("gamepaddisconnected"),"gamepad",{value:o});this.win.dispatchEvent(a)}touchFakeGamepad(t){this.findOrCreateFakeGamepadByIndex(t).timestamp=this.win.performance.now()}findFakeGamepadByIndex(t){return this.fakeGamepads.find(o=>o.index===t)}findOrCreateFakeGamepadByIndex(t){let o=this.findFakeGamepadByIndex(t);if(!o){const a="Xbox 360 Wireless Receiver (Vendor: 045e Product: 0719)";let r=!1,s=NaN;o={get id(){return a},get index(){return t},get connected(){return r},set connected(c){r=c},get timestamp(){return s},set timestamp(c){s=c}},this.fakeGamepads.push(o)}return o}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(Be.m),e.LFG(q.S))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function je(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"li")(1,"span"),e._uU(2),e.qZA(),e._uU(3),e.TgZ(4,"button",1),e.NdJ("click",function(){const r=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.gamepadFakeService.connectFakeGamepad(r))}),e._uU(5,"connect"),e.qZA(),e.TgZ(6,"button",1),e.NdJ("click",function(){const r=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.gamepadFakeService.disconnectFakeGamepad(r))}),e._uU(7,"disconnect"),e.qZA(),e.TgZ(8,"button",1),e.NdJ("click",function(){const r=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.gamepadFakeService.touchFakeGamepad(r))}),e._uU(9,"touch"),e.qZA()()}if(2&i){const t=n.$implicit,o=e.oxw();e.xp6(2),e.lnq("Gamepad #",t+1,": ",o.gamepadService.isGamepadConnected(t)?"connected":"disconnected"," (",o.gamepadTimestamps[t],")"),e.xp6(1),e.hij(" "," "," ")}}let K=(()=>{class i{constructor(t,o){this.gamepadFakeService=t,this.gamepadService=o,this.fakeGamepadCountMax=8,this.gamepadTimestamps=this.fakeGamepadIndexes.map(()=>-1),this.destroyed$=new x.x}get fakeGamepadIndexes(){return Array.from(Array(this.fakeGamepadCountMax).keys())}ngOnInit(){for(const t of this.fakeGamepadIndexes)this.gamepadService.observeGamepadChanges(t).pipe((0,m.R)(this.destroyed$)).subscribe(o=>this.gamepadTimestamps[t]=o.timestamp)}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36($e),e.Y36(q.S))},i.\u0275cmp=e.Xpm({type:i,selectors:[["gamepads-fake"]],decls:4,vars:2,consts:[[4,"ngFor","ngForOf"],["type","button",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"ul")(1,"li"),e._uU(2),e.qZA(),e.YNc(3,je,10,4,"li",0),e.qZA()),2&t&&(e.xp6(2),e.hij("Gamepad Count: ",o.gamepadService.getGamepadsCount(),""),e.xp6(1),e.Q6J("ngForOf",o.fakeGamepadIndexes))},dependencies:[h.sg],encapsulation:2,changeDetection:0}),i})();var Ye=l(19028);let Q=(()=>{class i{resolve(t){return`Settings - ${(0,Ye.lS)(t.params.settingsSection)}`}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})();var X=l(10745),Je=l(32673),ze=l(88395),He=l(2854),Ve=l(86573),qe=l(3651),W=l(43271),Ke=l(61272),Qe=l(34579),Xe=l(2900),We=l(79783),ee=l(15765),et=l(78675),tt=l(64194),nt=l(52756),te=l(39239),it=l(75584),ot=l(28069);function at(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"button",3),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.handleNavigateSettingsSection("dev"))}),e._uU(1," Dev "),e.qZA()}if(2&i){const t=e.oxw();e.ekj("activated",t.isSettingsSectionActivated("dev"))}}function rt(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"section",10)(1,"h3",1,11),e._uU(3,"Data Management"),e.qZA(),e.TgZ(4,"div")(5,"button",12),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.handleArchiveSoftwares())}),e._uU(6," Quick Archive Softwares "),e.qZA(),e.TgZ(7,"button",12),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.handleDeleteSaveData())}),e._uU(8,"Delete Save Data"),e.qZA(),e.TgZ(9,"button",12),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.handleDeleteStoresData())}),e._uU(10," Delete Stores Data "),e.qZA(),e.TgZ(11,"button",12),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.handleResetGamepadsSettings())}),e._uU(12," Reset Gamepads Settings "),e.qZA()()()}if(2&i){const t=e.MAs(2);e.Q6J("uiAriaLabelledby",t)}}function st(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"section",13)(1,"h3",1,14),e._uU(3,"Themes"),e.qZA(),e.TgZ(4,"div",15)(5,"button",16),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.handleChangeTheme("auto-night"))}),e.ALo(6,"async"),e._uU(7," Auto Night "),e.qZA(),e.TgZ(8,"button",16),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.handleChangeTheme("black"))}),e._uU(9," Basic Black "),e.qZA(),e.TgZ(10,"button",16),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.handleChangeTheme("white"))}),e._uU(11," Basic White "),e.qZA()()()}if(2&i){const t=e.MAs(2),o=e.oxw();e.Q6J("uiAriaLabelledby",t),e.xp6(5),e.Q6J("uiListboxOptionSelected",o.isSettingsTheme("auto-night")),e.uIk("data-optionvalue",e.lcZ(6,7,o.settingsFacade.themeForHour$)),e.xp6(3),e.Q6J("uiListboxOptionSelected",o.isSettingsTheme("black")),e.uIk("data-optionvalue","black"),e.xp6(2),e.Q6J("uiListboxOptionSelected",o.isSettingsTheme("white")),e.uIk("data-optionvalue","white")}}function lt(i,n){if(1&i&&(e.TgZ(0,"section",17)(1,"h3",1,18),e._uU(3,"About"),e.qZA(),e.TgZ(4,"p")(5,"strong"),e._uU(6,"Retroweb"),e.qZA(),e._uU(7," is a web frontend for emulators and games engines powered by "),e.TgZ(8,"a",19),e._uU(9,"libretro"),e.qZA(),e._uU(10,". "),e.qZA(),e.TgZ(11,"p"),e._uU(12," As the "),e.TgZ(13,"a",20),e._uU(14,"RetroArch Web Player"),e.qZA(),e._uU(15,", it works on the modern internet browsers. "),e.qZA(),e.TgZ(16,"p"),e._uU(17,"The user interface is shamefully inspired by a famous game console."),e.qZA(),e.TgZ(18,"p"),e._uU(19," It's currently a proof of concept (slowly developed) to illustrate how we can simplify the user experience with the libretro "),e.TgZ(20,"a",21),e._uU(21,"emscripten compilation"),e.qZA(),e._uU(22,". "),e.qZA(),e.TgZ(23,"p"),e._uU(24," Feedbacks on "),e.TgZ(25,"a",22),e._uU(26,"https://github.com/enten/retroweb/issues/1"),e.qZA()()()),2&i){const t=e.MAs(2);e.Q6J("uiAriaLabelledby",t)}}function ct(i,n){if(1&i&&(e.TgZ(0,"pre")(1,"code"),e._uU(2),e.qZA()()),2&i){const t=e.oxw(2);e.xp6(2),e.Oqu(t.fileOpened)}}function dt(i,n){if(1&i&&(e.TgZ(0,"code"),e._uU(1),e.qZA()),2&i){const t=n.$implicit;e.xp6(1),e.AsE("",t.action.type,"","\n","")}}function ut(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"section",23)(1,"h3",null,24),e._uU(3,"Dev"),e.qZA(),e.TgZ(4,"div")(5,"h4"),e._uU(6,"Webplayer"),e.qZA(),e.TgZ(7,"div")(8,"button",25),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.webplayerFacade.exit())}),e._uU(9,"exit"),e.qZA(),e.TgZ(10,"button",25),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.webplayerFacade.pause())}),e._uU(11,"pause"),e.qZA(),e.TgZ(12,"button",25),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.webplayerFacade.resume())}),e._uU(13,"resume"),e.qZA()()(),e.TgZ(14,"div")(15,"h4"),e._uU(16,"Fake Gamepads"),e.qZA(),e._UZ(17,"gamepads-fake"),e.qZA(),e.TgZ(18,"div")(19,"h4"),e._uU(20,"RootFs"),e.qZA(),e.TgZ(21,"ui-fs-tree",26),e.NdJ("nodeClicked",function(a){e.CHM(t);const r=e.oxw();return e.KtG(r.handleNodeClicked(a))}),e.ALo(22,"async"),e.qZA(),e.YNc(23,ct,3,1,"pre",9),e.qZA(),e.TgZ(24,"div")(25,"h4"),e._uU(26,"State"),e.qZA(),e.TgZ(27,"pre",27)(28,"code"),e._uU(29),e.ALo(30,"json"),e.ALo(31,"async"),e.qZA()()(),e.TgZ(32,"div")(33,"h4"),e._uU(34,"StoreLogger"),e.qZA(),e.TgZ(35,"div")(36,"button",25),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.storeLogger.clear())}),e._uU(37,"clear"),e.qZA()(),e.TgZ(38,"pre",27),e.YNc(39,dt,2,2,"code",28),e.ALo(40,"async"),e.qZA()()()}if(2&i){const t=e.MAs(2),o=e.oxw();e.Q6J("uiAriaLabelledby",t),e.xp6(21),e.Q6J("fs",e.lcZ(22,5,o.filesystems.rootFs$)),e.xp6(2),e.Q6J("ngIf",o.fileOpened),e.xp6(6),e.Oqu(e.lcZ(30,7,e.lcZ(31,9,o.coreFacade.state$))),e.xp6(10),e.Q6J("ngForOf",e.lcZ(40,11,o.storeLoggerEntries$))}}function pt(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"aside",30)(1,"h2",31,32),e._uU(3),e.qZA(),e.TgZ(4,"p",33,34),e._uU(6,"Close the software you are currently using?"),e.qZA(),e.TgZ(7,"div",35)(8,"button",36),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.handleCloseSoftwareBeforeActionCancel())}),e._uU(9," Cancel "),e.qZA(),e.TgZ(10,"button",37),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.handleCloseSoftwareBeforeActionConfirm())}),e._uU(11," Close "),e.qZA()()()}if(2&i){const t=e.MAs(2),o=e.MAs(5),a=e.oxw(2);e.ekj("progress",a.closeSoftwareConfirmed),e.Q6J("uiAriaLabelledby",t)("uiAriaDescribedby",o),e.xp6(3),e.hij(" ",null==a.softwarePlaying?null:a.softwarePlaying.name," "),e.xp6(5),e.Q6J("disabled",a.closeSoftwareConfirmed),e.uIk("tabindex",a.closeSoftwareConfirmed?-1:0),e.xp6(2),e.Q6J("disabled",a.closeSoftwareConfirmed),e.uIk("tabindex",a.closeSoftwareConfirmed?-1:0)}}function ht(i,n){if(1&i){const t=e.EpF();e.YNc(0,pt,12,9,"ng-template",29),e.NdJ("overlayKeydownEscape",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.handleCloseSoftwareBeforeActionCancel())})}}function mt(i,n){if(1&i){const t=e.EpF();e.TgZ(0,"aside",30)(1,"h2",31,38),e._uU(3),e.qZA(),e.TgZ(4,"p",33,39),e._uU(6),e.qZA(),e.TgZ(7,"div",35)(8,"button",36),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.handleOpenActionConfirmationCancel())}),e._uU(9," Cancel "),e.qZA(),e.TgZ(10,"button",36),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.handleOpenActionConfirmationOk())}),e._uU(11),e.qZA()()()}if(2&i){const t=e.MAs(2),o=e.MAs(5),a=e.oxw().ngIf;e.ekj("processing",a.confirmed),e.Q6J("uiAriaLabelledby",t)("uiAriaDescribedby",o),e.xp6(3),e.hij(" ",a.title," "),e.xp6(3),e.hij(" ",a.message," "),e.xp6(2),e.Q6J("disabled",a.confirmed),e.uIk("tabindex",a.confirmed?-1:0),e.xp6(2),e.Q6J("disabled",a.confirmed),e.uIk("tabindex",a.confirmed?-1:0),e.xp6(1),e.hij(" ",a.confirmLabel," ")}}function gt(i,n){if(1&i){const t=e.EpF();e.YNc(0,mt,12,11,"ng-template",29),e.NdJ("overlayKeydownEscape",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.handleOpenActionConfirmationCancel())})}}let ne=(()=>{class i{constructor(t,o,a,r,s,c,p,M,u,y,F){this.coreFacade=t,this.routerFacade=o,this.settingsFacade=a,this.softwaresFacade=r,this.webplayerFacade=s,this.retropadsService=c,this.filesystems=p,this.storeLogger=M,this.softwaresDefault=u,this.changeDetectorRef=y,this.ngZone=F,this.cssClassSettingsPage=!0,this.settingsSection="",this.fileOpened="",this.storeLoggerEntries$=this.storeLogger.entries$,this.destroyed$=new x.x,this.openFile$=new x.x,this.settingsState=Ke._,this.closeSoftwareBeforeActionFn=null,this.closeSoftwareBeforeActionConfirmed=!1}get settingsDev(){return this.settingsState.dev}get settingsTheme(){return this.settingsState.theme}get closeSoftwareShown(){return!!this.closeSoftwareBeforeActionFn}get closeSoftwareConfirmed(){return this.closeSoftwareBeforeActionConfirmed}get processing(){return!!this.openActionConfirmationDialog?.confirmed}ngOnInit(){this.routerFacade.routeParams$.pipe((0,m.R)(this.destroyed$),(0,b.U)(({settingsSection:t})=>t)).subscribe(t=>{"dev"===t&&!this.settingsState.dev&&this.settingsFacade.setDev(!0),this.settingsSection=t,this.changeDetectorRef.markForCheck()}),this.settingsFacade.state$.pipe((0,m.R)(this.destroyed$)).subscribe(t=>{this.settingsState=t,this.changeDetectorRef.markForCheck()}),this.softwaresFacade.playing$.pipe((0,m.R)(this.destroyed$)).subscribe(t=>{this.softwarePlaying=t;const o=this.closeSoftwareBeforeActionFn,a=this.closeSoftwareBeforeActionConfirmed;this.closeSoftwareBeforeActionFn=null,this.closeSoftwareBeforeActionConfirmed=!1,this.changeDetectorRef.markForCheck(),a&&o&&o()}),this.openFile$.pipe((0,m.R)(this.destroyed$),(0,Je.w)(t=>/\.(json|js|cfg)$/.test(t)?this.filesystems.root.readFileUtf8(t):(0,X.of)(`File extension not support: ${t}`)),(0,ee.W)(this.ngZone)).subscribe(t=>{t!==this.fileOpened&&(this.fileOpened=t,this.changeDetectorRef.markForCheck())})}ngOnDestroy(){this.destroyed$.next(),this.destroyed$.complete()}handleArchiveSoftwares(){this.suggestCloseSoftwareBeforeAction(()=>{this.triggerOpenActionConfirmation("Archive Softwares","Free up space by archiving all softwares.","Archive",()=>this.filesystems.removeAllSoftwares())})}handleDeleteSaveData(){this.suggestCloseSoftwareBeforeAction(()=>{this.triggerOpenActionConfirmation("Delete Save Data","Free up space by deleting all softwares save data.","Delete",()=>this.filesystems.removeAllUserdata())})}handleDeleteStoresData(){this.triggerOpenActionConfirmation("Delete Stores Data","Free up space by deleting all stores data.","Delete",()=>this.filesystems.removeAllStoresData())}handleResetGamepadsSettings(){this.suggestCloseSoftwareBeforeAction(()=>{this.triggerOpenActionConfirmation("Reset Gamepads Settings","Remove all gamepads data.","Reset",()=>this.retropadsService.removeAllData())})}handleRestoreSoftwaresDefault(){this.triggerOpenActionConfirmation("Restore Softwares Default","Restore all softwares default.","Restore",()=>(this.softwaresFacade.addSoftwares(this.softwaresDefault),(0,X.of)(void 0)))}handleOpenActionConfirmationCancel(){const t=this.openActionConfirmationDialog;!t||(this.openActionConfirmationDialog=null,this.changeDetectorRef.markForCheck(),t?.onCancel&&t.onCancel())}handleOpenActionConfirmationOk(){const t=this.openActionConfirmationDialog;if(!t)return;this.openActionConfirmationDialog={...t,confirmed:!0},this.changeDetectorRef.markForCheck();const o=()=>{this.openActionConfirmationDialog=null,this.changeDetectorRef.markForCheck()};this.openActionConfirmationDialog.onConfirm().pipe((0,ee.W)(this.ngZone)).subscribe(()=>{o()},a=>{ot.error(a),o()})}handleCloseSoftwareBeforeActionCancel(){this.closeSoftwareBeforeActionFn=null,this.changeDetectorRef.markForCheck()}handleCloseSoftwareBeforeActionConfirm(){this.closeSoftwareBeforeActionConfirmed=!0,this.changeDetectorRef.markForCheck(),this.webplayerFacade.exit()}handleChangeTheme(t){this.settingsFacade.changeTheme(t)}handleNavigateSettingsSection(t){this.routerFacade.navigateToSettingsSection(t)}handleNodeClicked(t){this.openFile$.next(t.item[0])}isSettingsTheme(t){return t===this.settingsTheme}isSettingsSectionActivated(t){return t===this.settingsSection}suggestCloseSoftwareBeforeAction(t){this.softwarePlaying?(this.closeSoftwareBeforeActionFn=t,this.closeSoftwareBeforeActionConfirmed=!1,this.changeDetectorRef.markForCheck()):t()}triggerOpenActionConfirmation(t,o,a,r,s){this.openActionConfirmationDialog={title:t,message:o,confirmLabel:a,onConfirm:r,onCancel:s,confirmed:!1},this.changeDetectorRef.markForCheck()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(ze.C),e.Y36(qe.f),e.Y36(W.C),e.Y36(Qe.b),e.Y36(We.w),e.Y36(Ve.U),e.Y36(He.w),e.Y36(Xe.L),e.Y36(et.be),e.Y36(e.sBO),e.Y36(e.R0b))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-settings-page"]],hostVars:2,hostBindings:function(t,o){2&t&&e.ekj("settings-page",o.cssClassSettingsPage)},decls:17,vars:14,consts:[["role","menubar",1,"page-menu",3,"uiAriaLabelledby"],[1,"sr-only"],["settingsMenuTitle",""],["type","button","role","menuitem","tabindex","0",1,"page-menu-item",3,"click"],["type","button","role","menuitem","class","page-menu-item","tabindex","0",3,"activated","click",4,"ngIf"],["class","settings-data",3,"uiAriaLabelledby",4,"ngIf"],["class","settings-themes",3,"uiAriaLabelledby",4,"ngIf"],["class","settings-about",3,"uiAriaLabelledby",4,"ngIf"],[3,"uiAriaLabelledby",4,"ngIf"],[4,"ngIf"],[1,"settings-data",3,"uiAriaLabelledby"],["settingsDataTitle",""],["type","button","tabindex","0",1,"listbox-button",3,"click"],[1,"settings-themes",3,"uiAriaLabelledby"],["settingsThemesTitle",""],["uiListbox",""],["type","button","tabindex","0","uiListboxOption","",1,"listbox-button",3,"uiListboxOptionSelected","click"],[1,"settings-about",3,"uiAriaLabelledby"],["settingsAboutTitle",""],["href","https://www.libretro.com/","target","_blank"],["href","https://docs.libretro.com/guides/web-player/","target","_blank"],["href","https://github.com/libretro/RetroArch/tree/master/pkg/emscripten","target","_blank"],["href","https://github.com/enten/retroweb/issues/1","target","_blank"],[3,"uiAriaLabelledby"],["settingsDevTitle",""],["type","button",3,"click"],[3,"fs","nodeClicked"],[2,"max-height","350px","overflow","auto"],[4,"ngFor","ngForOf"],["uiModal","",3,"overlayKeydownEscape"],["role","alertdialog",1,"main-dialog","settings-dialog",3,"uiAriaLabelledby","uiAriaDescribedby"],[1,"main-dialog-title"],["closeSoftwareDialogTitle",""],[1,"main-dialog-content"],["closeSoftwareDialogMessage",""],["role","menubar",1,"main-dialog-actions"],["type","button","role","menuitem",1,"main-dialog-action",3,"disabled","click"],["type","button","role","menuitem","tabindex","0",1,"main-dialog-action",3,"disabled","click"],["openActionConfirmationDialogTitle",""],["openActionConfirmationDialogMessage",""]],template:function(t,o){if(1&t&&(e.TgZ(0,"nav",0)(1,"h3",1,2),e._uU(3,"Settings Menu"),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return o.handleNavigateSettingsSection("data")}),e._uU(5," Data "),e.qZA(),e.TgZ(6,"button",3),e.NdJ("click",function(){return o.handleNavigateSettingsSection("themes")}),e._uU(7," Themes "),e.qZA(),e.TgZ(8,"button",3),e.NdJ("click",function(){return o.handleNavigateSettingsSection("about")}),e._uU(9," About "),e.qZA(),e.YNc(10,at,2,2,"button",4),e.qZA(),e.YNc(11,rt,13,1,"section",5),e.YNc(12,st,12,9,"section",6),e.YNc(13,lt,27,1,"section",7),e.YNc(14,ut,41,13,"section",8),e.YNc(15,ht,1,0,null,9),e.YNc(16,gt,1,0,null,9)),2&t){const a=e.MAs(2);e.Q6J("uiAriaLabelledby",a),e.xp6(4),e.ekj("activated",o.isSettingsSectionActivated("data")),e.xp6(2),e.ekj("activated",o.isSettingsSectionActivated("themes")),e.xp6(2),e.ekj("activated",o.isSettingsSectionActivated("about")),e.xp6(2),e.Q6J("ngIf",o.settingsDev),e.xp6(1),e.Q6J("ngIf",o.isSettingsSectionActivated("data")),e.xp6(1),e.Q6J("ngIf",o.isSettingsSectionActivated("themes")),e.xp6(1),e.Q6J("ngIf",o.isSettingsSectionActivated("about")),e.xp6(1),e.Q6J("ngIf",o.isSettingsSectionActivated("dev")),e.xp6(1),e.Q6J("ngIf",o.closeSoftwareShown),e.xp6(1),e.Q6J("ngIf",o.openActionConfirmationDialog)}},dependencies:[h.sg,h.O5,tt.P,nt.N,te.X,te.B,it.V,V,K,h.Ov,h.Ts],encapsulation:2,changeDetection:0}),i})(),E=(()=>{class i{constructor(t,o){this.router=t,this.settingsFacade=o}canActivate(){return this.settingsFacade.currentSection$.pipe((0,j.q)(1),(0,b.U)(t=>this.router.createUrlTree(["/settings",t])))}canDeactivate(t){return!t?.processing}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(P.F0),e.LFG(W.C))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})();const ft=[V],_t=[K,ne],ie=[{path:"",pathMatch:"full",canActivate:[E],children:[]},{path:":settingsSection",component:ne,canDeactivate:[E],title:Q,data:{mainTitle:"Settings"}}];let Mt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[E,Q],imports:[h.ez,P.Bz.forChild(ie),d.nZ,le.N,ce.v]}),i})()}}]);
//# sourceMappingURL=apps_retroweb_src_app_features_settings_settings-feature_module_ts.6cf1a02c3b517fa8.js.map