import{j as r}from"./jsx-runtime-QvZ8i92b.js";import{u as t}from"./styled-components.browser.esm-CYNsBsqS.js";const s=e=>{switch(e){case"primary":return"#007bff";case"secondary":return"#6c757d";case"success":return"#28a745";default:return"#007bff"}},l=t.span`
  color: ${e=>e.textColor!==null?e.textColor:"white"}
`,u=t.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  font-size: 1rem;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #fff;
  border-radius: 6px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  background-color: ${e=>s(e.variant)}
`,c=({variant:e="primary",textColor:n,label:a,onClick:o,...i})=>r.jsx(u,{onClick:o,variant:e,...i,"data-testid":"button",children:r.jsx(l,{textColor:n,children:a})});c.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};export{c as B};
