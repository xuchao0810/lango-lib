"use strict";(self.webpackChunklango_ui=self.webpackChunklango_ui||[]).push([[547],{37281:function(P,l,a){var v;a.r(l),a.d(l,{demos:function(){return M}});var x=a(15009),p=a.n(x),w=a(5574),C=a.n(w),T=a(99289),f=a.n(T),i=a(67294),R=a(43170),E=a(83615),M={"langomap-demo-0":{component:i.memo(i.lazy(f()(p()().mark(function s(){var n,e,c,u,m,d,h,g,y;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(a.t.bind(a,67294,19));case 2:return n=t.sent,e=n.default,c=n.useState,u=n.useRef,t.next=8,Promise.resolve().then(a.bind(a,83615));case 8:return m=t.sent,d=m.LangoMap,t.next=12,a.e(312).then(a.t.bind(a,42312,17));case 12:return h=t.sent,g=h.default,y=function(){var D=c(1),b=C()(D,2),r=b[0],L=b[1],I=u(null),O=function(){r==1?I.current.drawMarkerTool({}):r==2?I.current.drawPolylineTool({color:"#8843dc",width:2,fillColor:"#00912c"}):r==3?I.current.drawPolygonTool({color:"#8843dc",width:2,fillColor:"#00912c"}):r==4?I.current.drawCircleTool({color:"#8843dc",width:2,fillColor:"#00912c"}):r==5&&I.current.drawRectangleTool({color:"#8843dc",width:2,fillColor:"#00912c"})};return e.createElement("div",{style:{width:"600px",height:"500px"}},e.createElement("select",{onChange:function(o){return L(o.target.value)}},e.createElement("option",{value:1},"\u70B9"),e.createElement("option",{value:2},"\u7EBF"),e.createElement("option",{value:3},"\u9762"),e.createElement("option",{value:4},"\u5706"),e.createElement("option",{value:5},"\u77E9\u5F62")),e.createElement("button",{onClick:O,style:{height:"26px",lineHeight:"22px"}},"\u70B9\u51FB\u7ED8\u5236"),e.createElement(d,{center:[121.48,31.22],token:"e52a0ca9e09c0e74900443254c0d8ed8",zoom:14,onLoad:function(o){I.current=o},onMapDraw:function(o){o.target.close(),o.target.clear(),r==1&&I.current.drawPoint(o.currentLnglat,{overlayName:"cs_marker",icon:g,size:60,showPopup:!0,tip:"\u6D4B\u8BD5\u70B9\u4F4D",dataset:{name:"\u6D4B\u8BD5\u70B9",type:"cs_marker",content:"\u6D4B\u8BD5\u70B9",icon:g,lnglat:o.currentLnglat},zIndex:99,opacity:1,showTitle:!0,title:"\u6D4B\u8BD5\u70B9\u4F4D"})}}))},t.abrupt("return",{default:y});case 16:case"end":return t.stop()}},s)})))),asset:{type:"BLOCK",id:"langomap-demo-0",refAtomIds:["LangoMap"],dependencies:{"index.tsx":{type:"FILE",value:`import React, {useState, useRef, ChangeEvent} from 'react'
import {LangoMap} from 'lango-ui'
import type {MapDrawCallbackParams} from 'lango-ui'
import hazardIcon from '../../../src/assets/hazard_icon.svg'

const App: React.FC = () => {
	const [drawType, setDrawType] = useState<number>(1);
	const mapCtrl = useRef<any>(null);
	const startDraw = () => {
		if (drawType == 1) {
			mapCtrl.current.drawMarkerTool<MarkerToolProps>({});
		} else if (drawType == 2) {
			mapCtrl.current.drawPolylineTool<PolylineToolProps>({
				color: '#8843dc',
				width: 2,
				fillColor: '#00912c',
			});
		} else if (drawType == 3) {
			mapCtrl.current.drawPolygonTool<PolygonToolProps>({
				color: '#8843dc',
				width: 2,
				fillColor: '#00912c',
			});
		} else if (drawType == 4) {
			mapCtrl.current.drawCircleTool<CircleToolProps>({
				color: '#8843dc',
				width: 2,
				fillColor: '#00912c',
			});
		} else if (drawType == 5) {
			mapCtrl.current.drawRectangleTool<RectangleToolProps>({
				color: '#8843dc',
				width: 2,
				fillColor: '#00912c',
			});
		}
	};

	return (
		<div style={{width: '600px', height: '500px'}}>
			<select onChange={(e: ChangeEvent<T>) => setDrawType(e.target.value)}>
				<option value={1}>\u70B9</option>
				<option value={2}>\u7EBF</option>
				<option value={3}>\u9762</option>
				<option value={4}>\u5706</option>
				<option value={5}>\u77E9\u5F62</option>
			</select>
			<button onClick={startDraw} style={{height: '26px', lineHeight: '22px'}}>\u70B9\u51FB\u7ED8\u5236</button>
			<LangoMap
				center={[121.48, 31.22]}
				token={'e52a0ca9e09c0e74900443254c0d8ed8'}
				zoom={14}
				onLoad={(map: any) => {
					mapCtrl.current = map;
				}}
				onMapDraw={(info: MapDrawCallbackParams) => {
					info.target.close();
					info.target.clear();
					if (drawType == 1) {
						mapCtrl.current.drawPoint<MarkerProps>(info.currentLnglat, {
							overlayName: 'cs_marker',
							icon: hazardIcon,
							size: 60,
							showPopup: true,
							tip: '\u6D4B\u8BD5\u70B9\u4F4D',
							dataset: {
								name: '\u6D4B\u8BD5\u70B9',
								type: 'cs_marker',
								content: '\u6D4B\u8BD5\u70B9',
								icon: hazardIcon,
								lnglat: info.currentLnglat,
							},
							zIndex: 99,
							opacity: 1,
							showTitle: true,
							title: '\u6D4B\u8BD5\u70B9\u4F4D',
						});
					}
				}}
			/>
		</div>
	)
}

export default App`},react:{type:"NPM",value:"18.3.1"},"lango-ui":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:v||(v=a.t(i,2)),"lango-ui":E},renderOpts:{compile:function(){var s=f()(p()().mark(function e(){var c,u=arguments;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,a.e(335).then(a.bind(a,37335));case 2:return d.abrupt("return",(c=d.sent).default.apply(c,u));case 3:case"end":return d.stop()}},e)}));function n(){return s.apply(this,arguments)}return n}()}}}},10832:function(P,l,a){a.r(l),a.d(l,{texts:function(){return x}});var v=a(43170);const x=[{value:"\u57FA\u4E8E\u5929\u5730\u56FE\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u6700\u57FA\u672C\u7528\u6CD5",paraId:1,tocIndex:1},{value:"\u53C2\u6570\u540D",paraId:2,tocIndex:4},{value:"\u53C2\u6570\u503C",paraId:2,tocIndex:4},{value:"\u8BF4\u660E",paraId:2,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:4},{value:"center",paraId:2,tocIndex:4},{value:"[number, number]",paraId:2,tocIndex:4},{value:"\u4E2D\u5FC3\u70B9",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"zoom",paraId:2,tocIndex:4},{value:"number",paraId:2,tocIndex:4},{value:"\u7F29\u653E\u5C3A\u5BF8",paraId:2,tocIndex:4},{value:"14",paraId:2,tocIndex:4},{value:"token",paraId:2,tocIndex:4},{value:"string",paraId:2,tocIndex:4},{value:"\u5929\u5730\u56FE\u7533\u8BF7\u7684key",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"onLoad",paraId:2,tocIndex:4},{value:"(map) => void",paraId:2,tocIndex:4},{value:"\u5730\u56FE\u52A0\u8F7D\u5B8C\u6BD5\u56DE\u8C03",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"onLoadError",paraId:2,tocIndex:4},{value:"(info) => void",paraId:2,tocIndex:4},{value:"\u5730\u56FE\u52A0\u8F7D\u5931\u8D25\u56DE\u8C03",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"onMapClick",paraId:2,tocIndex:4},{value:"(info) => void",paraId:2,tocIndex:4},{value:"\u5730\u56FE\u4E0A\u8986\u76D6\u7269\u70B9\u51FB\u89E6\u53D1\u56DE\u8C03",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"onMapDraw",paraId:2,tocIndex:4},{value:"(info) => void",paraId:2,tocIndex:4},{value:"\u5728\u5730\u56FE\u4E0A\u7ED8\u5236\u5B8C\u6210\u89E6\u53D1\u56DE\u8C03",paraId:2,tocIndex:4},{value:"-",paraId:2,tocIndex:4},{value:"\u65B9\u6CD5\u540D",paraId:3,tocIndex:5},{value:"\u53C2\u6570\u503C",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"drawPoint",paraId:3,tocIndex:5},{value:"(point: [number, number], props: MarkerProps, callback?: (info) => void) => void",paraId:3,tocIndex:5},{value:"\u753B\u70B9",paraId:3,tocIndex:5},{value:"drawLabel",paraId:3,tocIndex:5},{value:"(point: [number, number], props: LabelProps, callback?: (info) => void) => void",paraId:3,tocIndex:5},{value:"\u753Blabel",paraId:3,tocIndex:5},{value:"drawPolygon",paraId:3,tocIndex:5},{value:"(coordinates: [Array",paraId:3,tocIndex:5},{value:"], props: PolygonProps, callback?: (info) => void) => void",paraId:3,tocIndex:5},{value:"\u753B\u591A\u8FB9\u5F62",paraId:3,tocIndex:5},{value:"drawPolyline",paraId:3,tocIndex:5},{value:"(coordinates: [], props: PolylineProps, callback?: (info) => void) => void",paraId:3,tocIndex:5},{value:"\u753B\u7EBF",paraId:3,tocIndex:5},{value:"drawCircle",paraId:3,tocIndex:5},{value:"(point: [number, number], radius: number, props: CircleProps, callback?: (info) => void) => void",paraId:3,tocIndex:5},{value:"\u753B\u5706",paraId:3,tocIndex:5},{value:"drawRectangle",paraId:3,tocIndex:5},{value:"(bounds: { sw: [number, number], ne: [number, number] }, props: RectangleProps, callback?: (info) => void) => void",paraId:3,tocIndex:5},{value:"\u753B\u77E9\u5F62",paraId:3,tocIndex:5},{value:"drawMarkerTool",paraId:3,tocIndex:5},{value:"(props: MarkerToolProps, callback?: (info) => void) => void",paraId:3,tocIndex:5},{value:"\u70B9\u4F4D\u6807\u7ED8",paraId:3,tocIndex:5},{value:"drawPolygonTool",paraId:3,tocIndex:5},{value:"(props: PolygonToolProps, callback?: (info) => void) => void",paraId:3,tocIndex:5},{value:"\u591A\u8FB9\u5F62\u6807\u7ED8",paraId:3,tocIndex:5},{value:"drawPolylineTool",paraId:3,tocIndex:5},{value:"(props: PolylineToolProps, callback?: (info) => void) => void",paraId:3,tocIndex:5},{value:"\u7EBF\u6761\u6807\u7ED8",paraId:3,tocIndex:5},{value:"drawCircleTool",paraId:3,tocIndex:5},{value:"(props: CircleToolProps, callback?: (info) => void) => void",paraId:3,tocIndex:5},{value:"\u5706\u6807\u7ED8",paraId:3,tocIndex:5},{value:"drawRectangleTool",paraId:3,tocIndex:5},{value:"(props: RectangleToolProps, callback?: (info) => void) => void",paraId:3,tocIndex:5},{value:"\u77E9\u5F62\u6807\u7ED8",paraId:3,tocIndex:5},{value:"clearLayer",paraId:3,tocIndex:5},{value:"(clearName?: string) => void",paraId:3,tocIndex:5},{value:"\u6E05\u9664\u8986\u76D6\u7269",paraId:3,tocIndex:5},{value:"getMapController",paraId:3,tocIndex:5},{value:"() => {T, map}",paraId:3,tocIndex:5},{value:"\u83B7\u53D6\u5730\u56FE\u5B9E\u4F8B",paraId:3,tocIndex:5},{value:"setCenter",paraId:3,tocIndex:5},{value:"(point: [number, number]) => void",paraId:3,tocIndex:5},{value:"\u8BBE\u7F6E\u4E2D\u5FC3\u70B9",paraId:3,tocIndex:5},{value:"setZoom",paraId:3,tocIndex:5},{value:"(zoom: number) => void",paraId:3,tocIndex:5},{value:"\u8BBE\u7F6E\u7F29\u653E",paraId:3,tocIndex:5},{value:"flyTo",paraId:3,tocIndex:5},{value:"(point: [number, number], zoom?: number) => void",paraId:3,tocIndex:5},{value:"\u79FB\u52A8",paraId:3,tocIndex:5},{value:"destroy",paraId:3,tocIndex:5},{value:"() => void",paraId:3,tocIndex:5},{value:"\u6E05\u9664\u5730\u56FE",paraId:3,tocIndex:5},{value:"\u53C2\u6570\u540D",paraId:4,tocIndex:6},{value:"\u53C2\u6570\u503C",paraId:4,tocIndex:6},{value:"\u8BF4\u660E",paraId:4,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:6},{value:"icon",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u56FE\u6807",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"size",paraId:4,tocIndex:6},{value:"number",paraId:4,tocIndex:6},{value:"\u56FE\u6807\u5C3A\u5BF8",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"tip",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"\u63D0\u793A\u5185\u5BB9",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"overlayName",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"\u751F\u6210\u8282\u70B9\u6807\u8BC6",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"showPopup",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"\u662F\u5426\u5F00\u542F\u63D0\u793A",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"dataset",paraId:4,tocIndex:6},{value:"any",paraId:4,tocIndex:6},{value:"\u81EA\u5B9A\u4E49\u6570\u636E",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"showTitle",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"\u662F\u5426\u663E\u793A\u6807\u9898",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"title",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"\u6807\u9898",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"zIndex",paraId:4,tocIndex:6},{value:"number",paraId:4,tocIndex:6},{value:"\u56FE\u6807\u70B9\u7684z-index",paraId:4,tocIndex:6},{value:"1",paraId:4,tocIndex:6},{value:"opacity",paraId:4,tocIndex:6},{value:"number",paraId:4,tocIndex:6},{value:"\u56FE\u6807\u70B9\u7684\u900F\u660E",paraId:4,tocIndex:6},{value:"1",paraId:4,tocIndex:6},{value:"hover",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"\u662F\u5426\u89E6\u53D1\u56FE\u6807\u70B9\u7684hover",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"\u53C2\u6570\u540D",paraId:5,tocIndex:7},{value:"\u53C2\u6570\u503C",paraId:5,tocIndex:7},{value:"\u8BF4\u660E",paraId:5,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:7},{value:"icon",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"\u81EA\u5B9A\u4E49\u56FE\u6807",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"size",paraId:5,tocIndex:7},{value:"number",paraId:5,tocIndex:7},{value:"\u56FE\u6807\u5C3A\u5BF8",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"\u53C2\u6570\u540D",paraId:6,tocIndex:8},{value:"\u53C2\u6570\u503C",paraId:6,tocIndex:8},{value:"\u8BF4\u660E",paraId:6,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:8},{value:"text",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"\u6587\u672C\u5185\u5BB9",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"font",paraId:6,tocIndex:8},{value:"number",paraId:6,tocIndex:8},{value:"\u6587\u672C\u5B57\u4F53\u5927\u5C0F",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"fillColor",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"\u6587\u672C\u989C\u8272",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"backgroundColor",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"\u80CC\u666F\u8272",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"overlayName",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"\u751F\u6210\u8282\u70B9\u6807\u8BC6",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"showPopup",paraId:6,tocIndex:8},{value:"boolean",paraId:6,tocIndex:8},{value:"\u662F\u5426\u5F00\u542F\u63D0\u793A",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"tip",paraId:6,tocIndex:8},{value:"string / HTMLElement",paraId:6,tocIndex:8},{value:"\u63D0\u793A\u5185\u5BB9",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"dataset",paraId:6,tocIndex:8},{value:"any",paraId:6,tocIndex:8},{value:"\u81EA\u5B9A\u4E49\u6570\u636E",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"offset",paraId:6,tocIndex:8},{value:"number[]",paraId:6,tocIndex:8},{value:"\u504F\u79FB",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"hover",paraId:6,tocIndex:8},{value:"boolean",paraId:6,tocIndex:8},{value:"\u662F\u5426\u89E6\u53D1hover",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"\u53C2\u6570\u540D",paraId:7,tocIndex:9},{value:"\u53C2\u6570\u503C",paraId:7,tocIndex:9},{value:"\u8BF4\u660E",paraId:7,tocIndex:9},{value:"\u9ED8\u8BA4\u503C",paraId:7,tocIndex:9},{value:"color",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"\u591A\u8FB9\u5F62\u7EBF\u6846\u989C\u8272",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"opacity",paraId:7,tocIndex:9},{value:"number",paraId:7,tocIndex:9},{value:"\u591A\u8FB9\u5F62\u7EBF\u6846\u7684\u900F\u660E\u5EA6",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"weight",paraId:7,tocIndex:9},{value:"numer",paraId:7,tocIndex:9},{value:"\u591A\u8FB9\u5F62\u7EBF\u6846\u5BBD\u5EA6",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"fillColor",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"\u591A\u8FB9\u5F62\u586B\u5145\u989C\u8272",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"overlayName",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"\u751F\u6210\u8282\u70B9\u6807\u8BC6",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"fillOpacity",paraId:7,tocIndex:9},{value:"number",paraId:7,tocIndex:9},{value:"\u591A\u8FB9\u5F62\u586B\u5145\u7684\u900F\u660E\u5EA6",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"lineStyle",paraId:7,tocIndex:9},{value:"'solid' / 'dashed'",paraId:7,tocIndex:9},{value:"\u591A\u8FB9\u5F62\u7EBF\u6761\u6837\u5F0F",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"dataset",paraId:7,tocIndex:9},{value:"any",paraId:7,tocIndex:9},{value:"\u81EA\u5B9A\u4E49\u6570\u636E",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"tip",paraId:7,tocIndex:9},{value:"string",paraId:7,tocIndex:9},{value:"\u63D0\u793A\u4FE1\u606F",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"hover",paraId:7,tocIndex:9},{value:"boolean",paraId:7,tocIndex:9},{value:"\u662F\u5426\u89E6\u53D1hover",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"\u53C2\u6570\u540D",paraId:8,tocIndex:10},{value:"\u53C2\u6570\u503C",paraId:8,tocIndex:10},{value:"\u8BF4\u660E",paraId:8,tocIndex:10},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:10},{value:"color",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"\u591A\u8FB9\u5F62\u7EBF\u6846\u989C\u8272",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"opacity",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"\u591A\u8FB9\u5F62\u7EBF\u6846\u7684\u900F\u660E\u5EA6",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"weight",paraId:8,tocIndex:10},{value:"numer",paraId:8,tocIndex:10},{value:"\u591A\u8FB9\u5F62\u7EBF\u6846\u5BBD\u5EA6",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"fillColor",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"\u591A\u8FB9\u5F62\u586B\u5145\u989C\u8272",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"showLabel",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"\u662F\u5426\u663E\u793A\u9762\u79EF",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"fillOpacity",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"\u591A\u8FB9\u5F62\u586B\u5145\u7684\u900F\u660E\u5EA6",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"lineStyle",paraId:8,tocIndex:10},{value:"'solid' / 'dashed'",paraId:8,tocIndex:10},{value:"\u591A\u8FB9\u5F62\u7EBF\u6761\u6837\u5F0F",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"\u53C2\u6570\u540D",paraId:9,tocIndex:11},{value:"\u53C2\u6570\u503C",paraId:9,tocIndex:11},{value:"\u8BF4\u660E",paraId:9,tocIndex:11},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:11},{value:"color",paraId:9,tocIndex:11},{value:"string",paraId:9,tocIndex:11},{value:"\u7EBF\u6761\u989C\u8272",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"opacity",paraId:9,tocIndex:11},{value:"number",paraId:9,tocIndex:11},{value:"\u7EBF\u7684\u900F\u660E\u5EA6",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"weight",paraId:9,tocIndex:11},{value:"numer",paraId:9,tocIndex:11},{value:"\u7EBF\u6761\u5BBD\u5EA6",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"lineStyle",paraId:9,tocIndex:11},{value:"'solid' / 'dashed'",paraId:9,tocIndex:11},{value:"\u7EBF\u6761\u6837\u5F0F",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"overlayName",paraId:9,tocIndex:11},{value:"string",paraId:9,tocIndex:11},{value:"\u751F\u6210\u8282\u70B9\u6807\u8BC6",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"dataset",paraId:9,tocIndex:11},{value:"any",paraId:9,tocIndex:11},{value:"\u81EA\u5B9A\u4E49\u6570\u636E",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"tip",paraId:9,tocIndex:11},{value:"string",paraId:9,tocIndex:11},{value:"\u63D0\u793A\u4FE1\u606F",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"hover",paraId:9,tocIndex:11},{value:"boolean",paraId:9,tocIndex:11},{value:"\u662F\u5426\u89E6\u53D1hover",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"\u53C2\u6570\u540D",paraId:10,tocIndex:12},{value:"\u53C2\u6570\u503C",paraId:10,tocIndex:12},{value:"\u8BF4\u660E",paraId:10,tocIndex:12},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:12},{value:"color",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"\u7EBF\u6761\u989C\u8272",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"opacity",paraId:10,tocIndex:12},{value:"number",paraId:10,tocIndex:12},{value:"\u7EBF\u7684\u900F\u660E\u5EA6",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"weight",paraId:10,tocIndex:12},{value:"numer",paraId:10,tocIndex:12},{value:"\u7EBF\u6761\u5BBD\u5EA6",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"lineStyle",paraId:10,tocIndex:12},{value:"'solid' / 'dashed'",paraId:10,tocIndex:12},{value:"\u7EBF\u6761\u6837\u5F0F",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"showLabel",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"\u662F\u5426\u663E\u793A\u8DDD\u79BB",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"\u53C2\u6570\u540D",paraId:11,tocIndex:13},{value:"\u53C2\u6570\u503C",paraId:11,tocIndex:13},{value:"\u8BF4\u660E",paraId:11,tocIndex:13},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:13},{value:"color",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"\u7EBF\u6761\u989C\u8272",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"opacity",paraId:11,tocIndex:13},{value:"number",paraId:11,tocIndex:13},{value:"\u7EBF\u7684\u900F\u660E\u5EA6",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"weight",paraId:11,tocIndex:13},{value:"numer",paraId:11,tocIndex:13},{value:"\u7EBF\u6761\u5BBD\u5EA6",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"lineStyle",paraId:11,tocIndex:13},{value:"'solid' / 'dashed'",paraId:11,tocIndex:13},{value:"\u7EBF\u6761\u6837\u5F0F",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"fillOpacity",paraId:11,tocIndex:13},{value:"number",paraId:11,tocIndex:13},{value:"\u5706\u7684\u586B\u5145\u900F\u660E\u5EA6",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"fillColor",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"\u5706\u586B\u5145\u989C\u8272",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"overlayName",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"\u751F\u6210\u8282\u70B9\u6807\u8BC6",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"dataset",paraId:11,tocIndex:13},{value:"any",paraId:11,tocIndex:13},{value:"\u81EA\u5B9A\u4E49\u6570\u636E",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"hover",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"\u662F\u5426\u89E6\u53D1hover",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"tip",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"\u63D0\u793A\u4FE1\u606F",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"\u53C2\u6570\u540D",paraId:12,tocIndex:14},{value:"\u53C2\u6570\u503C",paraId:12,tocIndex:14},{value:"\u8BF4\u660E",paraId:12,tocIndex:14},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:14},{value:"color",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"\u7EBF\u6761\u989C\u8272",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"opacity",paraId:12,tocIndex:14},{value:"number",paraId:12,tocIndex:14},{value:"\u7EBF\u7684\u900F\u660E\u5EA6",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"weight",paraId:12,tocIndex:14},{value:"numer",paraId:12,tocIndex:14},{value:"\u7EBF\u6761\u5BBD\u5EA6",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"lineStyle",paraId:12,tocIndex:14},{value:"'solid' / 'dashed'",paraId:12,tocIndex:14},{value:"\u7EBF\u6761\u6837\u5F0F",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"fillOpacity",paraId:12,tocIndex:14},{value:"number",paraId:12,tocIndex:14},{value:"\u5706\u7684\u586B\u5145\u900F\u660E\u5EA6",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"fillColor",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"\u5706\u586B\u5145\u989C\u8272",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"\u53C2\u6570\u540D",paraId:13,tocIndex:15},{value:"\u53C2\u6570\u503C",paraId:13,tocIndex:15},{value:"\u8BF4\u660E",paraId:13,tocIndex:15},{value:"\u9ED8\u8BA4\u503C",paraId:13,tocIndex:15},{value:"color",paraId:13,tocIndex:15},{value:"string",paraId:13,tocIndex:15},{value:"\u957F\u65B9\u5F62\u7684\u8FB9\u6846\u989C\u8272",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"opacity",paraId:13,tocIndex:15},{value:"number",paraId:13,tocIndex:15},{value:"\u957F\u65B9\u5F62\u7684\u8FB9\u6846\u900F\u660E\u5EA6",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"weight",paraId:13,tocIndex:15},{value:"numer",paraId:13,tocIndex:15},{value:"\u957F\u65B9\u5F62\u7684\u8FB9\u6846\u5BBD\u5EA6",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"lineStyle",paraId:13,tocIndex:15},{value:"'solid' / 'dashed'",paraId:13,tocIndex:15},{value:"\u957F\u65B9\u5F62\u7684\u8FB9\u6846\u6837\u5F0F",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"fillOpacity",paraId:13,tocIndex:15},{value:"number",paraId:13,tocIndex:15},{value:"\u957F\u65B9\u5F62\u7684\u586B\u5145\u900F\u660E\u5EA6",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"fillColor",paraId:13,tocIndex:15},{value:"string",paraId:13,tocIndex:15},{value:"\u957F\u65B9\u5F62\u7684\u586B\u5145\u989C\u8272",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"overlayName",paraId:13,tocIndex:15},{value:"string",paraId:13,tocIndex:15},{value:"\u751F\u6210\u8282\u70B9\u6807\u8BC6",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"dataset",paraId:13,tocIndex:15},{value:"any",paraId:13,tocIndex:15},{value:"\u81EA\u5B9A\u4E49\u6570\u636E",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"hover",paraId:13,tocIndex:15},{value:"boolean",paraId:13,tocIndex:15},{value:"\u662F\u5426\u89E6\u53D1hover",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"tip",paraId:13,tocIndex:15},{value:"string",paraId:13,tocIndex:15},{value:"\u63D0\u793A\u4FE1\u606F",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"\u53C2\u6570\u540D",paraId:14,tocIndex:16},{value:"\u53C2\u6570\u503C",paraId:14,tocIndex:16},{value:"\u8BF4\u660E",paraId:14,tocIndex:16},{value:"\u9ED8\u8BA4\u503C",paraId:14,tocIndex:16},{value:"color",paraId:14,tocIndex:16},{value:"string",paraId:14,tocIndex:16},{value:"\u957F\u65B9\u5F62\u7684\u8FB9\u6846\u989C\u8272",paraId:14,tocIndex:16},{value:"-",paraId:14,tocIndex:16},{value:"opacity",paraId:14,tocIndex:16},{value:"number",paraId:14,tocIndex:16},{value:"\u957F\u65B9\u5F62\u7684\u8FB9\u6846\u900F\u660E\u5EA6",paraId:14,tocIndex:16},{value:"-",paraId:14,tocIndex:16},{value:"weight",paraId:14,tocIndex:16},{value:"numer",paraId:14,tocIndex:16},{value:"\u957F\u65B9\u5F62\u7684\u8FB9\u6846\u5BBD\u5EA6",paraId:14,tocIndex:16},{value:"-",paraId:14,tocIndex:16},{value:"lineStyle",paraId:14,tocIndex:16},{value:"'solid' / 'dashed'",paraId:14,tocIndex:16},{value:"\u957F\u65B9\u5F62\u7684\u8FB9\u6846\u6837\u5F0F",paraId:14,tocIndex:16},{value:"-",paraId:14,tocIndex:16},{value:"fillOpacity",paraId:14,tocIndex:16},{value:"number",paraId:14,tocIndex:16},{value:"\u957F\u65B9\u5F62\u7684\u586B\u5145\u900F\u660E\u5EA6",paraId:14,tocIndex:16},{value:"-",paraId:14,tocIndex:16},{value:"fillColor",paraId:14,tocIndex:16},{value:"string",paraId:14,tocIndex:16},{value:"\u957F\u65B9\u5F62\u7684\u586B\u5145\u989C\u8272",paraId:14,tocIndex:16},{value:"-",paraId:14,tocIndex:16}]}}]);
