import{a as e,n as t}from"./chunk-DnJy8xQt.js";import{a as n}from"./iframe-BYcpeFTm.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";var i,a,o,s,c,l=t((()=>{i=e(n(),1),a=r(),o={primary:`bg-brand-main1 text-white hover:bg-brand-main1-dark`,secondary:`bg-white text-gray-700 hover:text-gray-600`,outline:`border border-gray-200 bg-white text-gray-700`,ghost:`bg-transparent`,danger:`bg-status-error text-white`,black:`bg-gray-800 text-white hover:bg-gray-700`},s={xs:`h-8 px-3`,sm:`h-[35px] px-2.5`,md:`h-9 px-4`,lg:`h-10 px-5`,xl:`h-14 px-8`,icon:`w-9 h-9 p-0`},c=(0,i.forwardRef)(({children:e,variant:t=`primary`,size:n=`md`,loading:r=!1,className:i,disabled:c,...l},u)=>(0,a.jsx)(`button`,{ref:u,disabled:r||c,className:`
          inline-flex items-center justify-center
          rounded-lg
          text-body-1
          transition-all duration-200 ease-in-out
          cursor-pointer
          disabled:opacity-50 disabled:pointer-events-none
          ${o[t]}
          ${s[n]}
          ${i??``}
        `,...l,children:r?`Loading...`:e})),c.displayName=`Button`,c.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'black'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'outline'`},{name:`literal`,value:`'ghost'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'black'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'icon'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`},{name:`literal`,value:`'icon'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`ButtonHTMLAttributes`]}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;t((()=>{l(),u=r(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Buttons/Button`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`outline`,`ghost`,`danger`,`black`]},size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`icon`]},loading:{control:`boolean`},disabled:{control:`boolean`}},args:{onClick:d(),children:`Button`,loading:!1,disabled:!1}},p={args:{variant:`primary`}},m={args:{variant:`secondary`}},h={args:{variant:`outline`}},g={args:{variant:`ghost`}},_={args:{variant:`danger`}},v={args:{variant:`black`}},y={args:{size:`xs`}},b={args:{size:`sm`}},x={args:{size:`lg`}},S={args:{size:`xl`}},C={args:{loading:!0}},w={args:{disabled:!0}},T={name:`Primary — 사이즈별`,parameters:{controls:{disable:!0}},render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,flexWrap:`wrap`},children:[`xs`,`sm`,`md`,`lg`,`xl`].map(e=>(0,u.jsx)(c,{variant:`primary`,size:e,children:e.toUpperCase()},e))})},E={name:`Primary — 상태별`,parameters:{controls:{disable:!0}},render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,flexWrap:`wrap`},children:[(0,u.jsx)(c,{variant:`primary`,children:`Default`}),(0,u.jsx)(c,{variant:`primary`,loading:!0,children:`Loading`}),(0,u.jsx)(c,{variant:`primary`,disabled:!0,children:`Disabled`})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'black'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Primary — 사이즈별',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
            {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <Button key={size} variant="primary" size={size}>
                    {size.toUpperCase()}
                </Button>)}
        </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Primary — 상태별',
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
            <Button variant="primary">Default</Button>
            <Button variant="primary" loading>
                Loading
            </Button>
            <Button variant="primary" disabled>
                Disabled
            </Button>
        </div>
}`,...E.parameters?.docs?.source}}},D=[`Primary`,`Secondary`,`Outline`,`Ghost`,`Danger`,`Black`,`XSmall`,`Small`,`Large`,`ExtraLarge`,`Loading`,`Disabled`,`PrimaryBySize`,`PrimaryByState`]}))();export{v as Black,_ as Danger,w as Disabled,S as ExtraLarge,g as Ghost,x as Large,C as Loading,h as Outline,p as Primary,T as PrimaryBySize,E as PrimaryByState,m as Secondary,b as Small,y as XSmall,D as __namedExportsOrder,f as default};