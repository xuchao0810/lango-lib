"use strict";(self.webpackChunklango_ui=self.webpackChunklango_ui||[]).push([[326],{14552:function(h,d,t){var i;t.r(d),t.d(d,{demos:function(){return g}});var s=t(15009),r=t.n(s),v=t(99289),_=t.n(v),u=t(67294),m=t(14391),f=t(83615),g={"langofilter-demo-0":{component:u.memo(u.lazy(_()(r()().mark(function I(){var o,n,l,c,p,e;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(t.t.bind(t,67294,19));case 2:return o=a.sent,n=o.default,a.next=6,Promise.resolve().then(t.bind(t,83615));case 6:return l=a.sent,c=l.LangoFilter,p=[{code:"category",title:"\u4EBA\u624D\u7C7B\u522B",multiple:!1,children:[{code:"category_1",title:"\u7BA1\u7406\u4EBA\u624D",isChild:!0,checked:!1,description:"\u5728\u96C6\u56E2\u5185\u627F\u62C5\u4E00\u5B9A\u7BA1\u7406\u804C\u8D23\u548C\u7BA1\u7406\u4EFB\u52A1\u7684\u76F8\u5173\u4EBA\u5458"},{code:"category_2",title:"\u6280\u672F\u4EBA\u624D",isChild:!0,checked:!1,description:"\u5728\u96C6\u56E2\u5185\u4ECE\u4E8B\u7814\u53D1\u3001\u6280\u672F\u7BA1\u7406\u5DE5\u4F5C\u7684\u76F8\u5173\u4EBA\u5458"},{code:"category_3",title:"\u6280\u80FD\u4EBA\u624D",isChild:!0,checked:!1,description:"\u5728\u96C6\u56E2\u5185\u4ECE\u4E8B\u751F\u4EA7\u64CD\u4F5C\u3001\u68C0\u7EF4\u4FEE\u3001\u5206\u6790\u68C0\u9A8C\u7B49\u5DE5\u4F5C\u7684\u76F8\u5173\u4EBA\u5458"},{code:"category_4",title:"\u4E1A\u52A1\u4EBA\u624D",isChild:!0,checked:!1,description:"\u5728\u96C6\u56E2\u5185\u4ECE\u4E8B\u8D22\u52A1\u3001\u8FD0\u8425\u3001\u4EBA\u529B\u3001\u515A\u7FA4\u3001\u7EAA\u68C0\u5BA1\u8BA1\u3001\u98CE\u63A7\u3001\u6218\u7565\u53D1\u5C55\u3001\u6295\u8D44\u8BC1\u5238\u3001\u884C\u653F\u7B49\u5DE5\u4F5C\u7684\u76F8\u5173\u4EBA\u5458"},{code:"category_5",title:"\u804C\u80FD\u4EBA\u624D",isChild:!0,checked:!1,description:"\u5728\u96C6\u56E2\u5185\u4ECE\u4E8B\u5E02\u573A\u8425\u9500\u3001\u91C7\u8D2D\u3001\u7269\u6D41\u7B49\u5DE5\u4F5C\u7684\u76F8\u5173\u4EBA\u5458"}]},{code:"age",title:"\u5E74\u9F84",multiple:!0,children:[{code:"age_1",title:"30\u5C81\u4EE5\u4E0B",isChild:!0,checked:!1},{code:"age_2",title:"31\u201435\u5C81",isChild:!0,checked:!1},{code:"age_3",title:"36\u201440\u5C81",isChild:!0,checked:!1},{code:"age_4",title:"41\u201445\u5C81",isChild:!0,checked:!1},{code:"age_5",title:"46\u201450\u5C81",isChild:!0,checked:!1},{code:"age_6",title:"51\u201455\u5C81",isChild:!0,checked:!1},{code:"age_7",title:"56\u5C81\u4EE5\u4E0A",isChild:!0,checked:!1}]}],e=function(){return n.createElement(n.Fragment,null,n.createElement(c,{filterList:p}))},a.abrupt("return",{default:e});case 11:case"end":return a.stop()}},I)})))),asset:{type:"BLOCK",id:"langofilter-demo-0",refAtomIds:["LangoFilter"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react'
import { LangoFilter } from 'lango-ui'

const list = [{
	code: 'category',
	title: '\u4EBA\u624D\u7C7B\u522B',
	multiple: false,
	children: [
		{
			code: 'category_1',
			title: '\u7BA1\u7406\u4EBA\u624D',
			isChild: true,
			checked: false,
			description: '\u5728\u96C6\u56E2\u5185\u627F\u62C5\u4E00\u5B9A\u7BA1\u7406\u804C\u8D23\u548C\u7BA1\u7406\u4EFB\u52A1\u7684\u76F8\u5173\u4EBA\u5458'
		},
		{
			code: 'category_2',
			title: '\u6280\u672F\u4EBA\u624D',
			isChild: true,
			checked: false,
			description: '\u5728\u96C6\u56E2\u5185\u4ECE\u4E8B\u7814\u53D1\u3001\u6280\u672F\u7BA1\u7406\u5DE5\u4F5C\u7684\u76F8\u5173\u4EBA\u5458'
		},
		{
			code: 'category_3',
			title: '\u6280\u80FD\u4EBA\u624D',
			isChild: true,
			checked: false,
			description: '\u5728\u96C6\u56E2\u5185\u4ECE\u4E8B\u751F\u4EA7\u64CD\u4F5C\u3001\u68C0\u7EF4\u4FEE\u3001\u5206\u6790\u68C0\u9A8C\u7B49\u5DE5\u4F5C\u7684\u76F8\u5173\u4EBA\u5458'
		},
		{
			code: 'category_4',
			title: '\u4E1A\u52A1\u4EBA\u624D',
			isChild: true,
			checked: false,
			description:
				'\u5728\u96C6\u56E2\u5185\u4ECE\u4E8B\u8D22\u52A1\u3001\u8FD0\u8425\u3001\u4EBA\u529B\u3001\u515A\u7FA4\u3001\u7EAA\u68C0\u5BA1\u8BA1\u3001\u98CE\u63A7\u3001\u6218\u7565\u53D1\u5C55\u3001\u6295\u8D44\u8BC1\u5238\u3001\u884C\u653F\u7B49\u5DE5\u4F5C\u7684\u76F8\u5173\u4EBA\u5458'
		},
		{
			code: 'category_5',
			title: '\u804C\u80FD\u4EBA\u624D',
			isChild: true,
			checked: false,
			description: '\u5728\u96C6\u56E2\u5185\u4ECE\u4E8B\u5E02\u573A\u8425\u9500\u3001\u91C7\u8D2D\u3001\u7269\u6D41\u7B49\u5DE5\u4F5C\u7684\u76F8\u5173\u4EBA\u5458'
		}
	]
},
{
	code: 'age',
	title: '\u5E74\u9F84',
	multiple: true,
	children: [
		{
			code: 'age_1',
			title: '30\u5C81\u4EE5\u4E0B',
			isChild: true,
			checked: false
		},
		{
			code: 'age_2',
			title: '31\u201435\u5C81',
			isChild: true,
			checked: false
		},
		{
			code: 'age_3',
			title: '36\u201440\u5C81',
			isChild: true,
			checked: false
		},
		{
			code: 'age_4',
			title: '41\u201445\u5C81',
			isChild: true,
			checked: false
		},
		{
			code: 'age_5',
			title: '46\u201450\u5C81',
			isChild: true,
			checked: false
		},
		{
			code: 'age_6',
			title: '51\u201455\u5C81',
			isChild: true,
			checked: false
		},
		{
			code: 'age_7',
			title: '56\u5C81\u4EE5\u4E0A',
			isChild: true,
			checked: false
		}
	]
}]

const App: React.FC = () => (
  <>
    <LangoFilter filterList={list} />
  </>
)

export default App`},react:{type:"NPM",value:"18.3.1"},"lango-ui":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:i||(i=t.t(u,2)),"lango-ui":f},renderOpts:{compile:function(){var I=_()(r()().mark(function n(){var l,c=arguments;return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.e(335).then(t.bind(t,37335));case 2:return e.abrupt("return",(l=e.sent).default.apply(l,c));case 3:case"end":return e.stop()}},n)}));function o(){return I.apply(this,arguments)}return o}()}}}},9925:function(h,d,t){t.r(d),t.d(d,{texts:function(){return s}});var i=t(14391);const s=[{value:"\u7B5B\u9009\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u6700\u57FA\u672C\u7528\u6CD5",paraId:1,tocIndex:1},{value:"\u53C2\u6570\u540D",paraId:2,tocIndex:3},{value:"\u53C2\u6570\u503C",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"filterList",paraId:2,tocIndex:3},{value:"CategoryFieldProps[]",paraId:2,tocIndex:3},{value:"\u4F20\u5165\u6E32\u67D3\u6570\u636E",paraId:2,tocIndex:3},{value:"[]",paraId:2,tocIndex:3},{value:"checkTags",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"\u4F20\u5165\u7684\u9009\u62E9\u9879\uFF0C\u591A\u4E2A\u6570\u636E\u4EE5','\u5206\u9694",paraId:2,tocIndex:3},{value:"''",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:"(value: CategoryFieldProps[]) => void",paraId:2,tocIndex:3},{value:"\u9009\u62E9\u6807\u7B7E\u65F6\u89E6\u53D1\u56DE\u8C03",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u53C2\u6570\u540D",paraId:3,tocIndex:4},{value:"\u53C2\u6570\u503C",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:4},{value:"code",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"\u552F\u4E00\u7F16\u7801",paraId:3,tocIndex:4},{value:"''",paraId:3,tocIndex:4},{value:"children",paraId:3,tocIndex:4},{value:"CategoryFieldProps[]",paraId:3,tocIndex:4},{value:"\u5B50\u8282\u70B9",paraId:3,tocIndex:4},{value:"[]",paraId:3,tocIndex:4},{value:"checked",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"\u662F\u5426\u9009\u4E2D",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"title",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"\u663E\u793A\u6587\u5B57",paraId:3,tocIndex:4},{value:"''",paraId:3,tocIndex:4},{value:"isChild",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"\u662F\u5426\u662F\u5B50\u8282\u70B9",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4},{value:"multiple",paraId:3,tocIndex:4},{value:"boolean",paraId:3,tocIndex:4},{value:"\u662F\u5426\u591A\u9009\uFF0CisChild\u4E3Afalse\u65F6\u751F\u6548\uFF0C\u5373\u53EA\u80FD\u4F5C\u7528\u4E8E\u7236\u8282\u70B9",paraId:3,tocIndex:4},{value:"false",paraId:3,tocIndex:4}]}}]);
