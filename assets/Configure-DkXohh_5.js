import{n as e}from"./chunk-DnJy8xQt.js";import{r as t,t as n}from"./react-CUeLtXIC.js";import{t as r}from"./jsx-runtime-DxP0NviS.js";import{a as i,o as a}from"./blocks-B_ddWJKl.js";var o=e((()=>{n()}));function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,p:`p`,pre:`pre`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i,{title:`ppopgipang Design System`}),`
`,(0,l.jsxs)(`div`,{className:`intro-container`,children:[(0,l.jsx)(n.h1,{id:`ppopgipang-design-system`,children:`ppopgipang Design System`}),(0,l.jsx)(n.p,{children:`뽑기팡 서비스를 위한 디자인 시스템입니다.
컴포넌트, 아이콘, 토큰을 일관되게 사용할 수 있도록 정의합니다.`}),(0,l.jsx)(n.h2,{id:`components`,children:`Components`}),(0,l.jsx)(n.h3,{id:`button`,children:`Button`}),(0,l.jsx)(n.p,{children:`텍스트 기반 버튼 컴포넌트입니다.`}),(0,l.jsxs)(n.p,{children:[`| Prop              | Type                             | Default    | Description                |
| ----------------- | -------------------------------- | ---------- | -------------------------- |
| `,(0,l.jsx)(n.code,{children:`label`}),`           | `,(0,l.jsx)(n.code,{children:`string`}),`                         | —          | 버튼 텍스트 (필수)         |
| `,(0,l.jsx)(n.code,{children:`primary`}),`         | `,(0,l.jsx)(n.code,{children:`boolean`}),`                        | `,(0,l.jsx)(n.code,{children:`false`}),`    | primary / secondary 스타일 |
| `,(0,l.jsx)(n.code,{children:`size`}),`            | `,(0,l.jsx)(n.code,{children:`'small' \\| 'medium' \\| 'large'`}),` | `,(0,l.jsx)(n.code,{children:`'medium'`}),` | 버튼 크기                  |
| `,(0,l.jsx)(n.code,{children:`backgroundColor`}),` | `,(0,l.jsx)(n.code,{children:`string`}),`                         | —          | 배경색 오버라이드          |
| `,(0,l.jsx)(n.code,{children:`onClick`}),`         | `,(0,l.jsx)(n.code,{children:`() => void`}),`                     | —          | 클릭 핸들러                |`]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import { Button } from '../components/button/Button';

<Button label="검색" primary size="medium" />;
`})}),(0,l.jsx)(n.hr,{}),(0,l.jsx)(n.h3,{id:`iconbutton`,children:`IconButton`}),(0,l.jsx)(n.p,{children:`아이콘만 표시하는 버튼 컴포넌트입니다. Tailwind 기반 크기 토큰을 사용합니다.`}),(0,l.jsxs)(n.p,{children:[`| Prop   | Type                                   | Default | Description            |
| ------ | -------------------------------------- | ------- | ---------------------- |
| `,(0,l.jsx)(n.code,{children:`icon`}),` | `,(0,l.jsx)(n.code,{children:`ReactNode`}),`                            | —       | 렌더링할 아이콘 (필수) |
| `,(0,l.jsx)(n.code,{children:`size`}),` | `,(0,l.jsx)(n.code,{children:`'xs' \\| 'sm' \\| 'md' \\| 'lg' \\| 'xl'`}),` | `,(0,l.jsx)(n.code,{children:`'xl'`}),`  | 버튼 크기              |`]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-tsx`,children:`import IconButton from '../components/button/IconButton';
import { ReactComponent as SearchIcon } from '../assets/icons/ic-search.svg';

<IconButton icon={<SearchIcon />} size="lg" />;
`})}),(0,l.jsx)(n.hr,{}),(0,l.jsx)(n.h2,{id:`icons`,children:`Icons`}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`src/assets/icons/`}),` 에 위치한 SVG 아이콘 목록입니다.`]}),(0,l.jsxs)(n.p,{children:[`| 아이콘 이름   | 파일                     |
| ------------- | ------------------------ |
| 검색          | `,(0,l.jsx)(n.code,{children:`ic-search.svg`}),`          |
| 편집          | `,(0,l.jsx)(n.code,{children:`ic-edit.svg`}),`            |
| 메뉴          | `,(0,l.jsx)(n.code,{children:`ic-menu.svg`}),`            |
| 위치          | `,(0,l.jsx)(n.code,{children:`ic-location.svg`}),`        |
| 카카오        | `,(0,l.jsx)(n.code,{children:`ic-kakao.svg`}),`           |
| 시계          | `,(0,l.jsx)(n.code,{children:`ic-clock.svg`}),`           |
| 왼쪽 화살표   | `,(0,l.jsx)(n.code,{children:`ic-left-arrow.svg`}),`      |
| 닫기          | `,(0,l.jsx)(n.code,{children:`ic-x.svg`}),`               |
| 필터          | `,(0,l.jsx)(n.code,{children:`ic-filter.svg`}),`          |
| 새로고침      | `,(0,l.jsx)(n.code,{children:`ic-reload.svg`}),`          |
| 북마크        | `,(0,l.jsx)(n.code,{children:`ic-bookmark.svg`}),`        |
| 기본 마커     | `,(0,l.jsx)(n.code,{children:`ic-default-marker.svg`}),`  |
| 활성 마커     | `,(0,l.jsx)(n.code,{children:`ic-active-marker.svg`}),`   |
| 즐겨찾기 마커 | `,(0,l.jsx)(n.code,{children:`ic-favorite-marker.svg`}),` |
| 사용자 마커   | `,(0,l.jsx)(n.code,{children:`ic-user-marker.svg`}),`     |`]}),(0,l.jsx)(n.hr,{}),(0,l.jsx)(n.h2,{id:`tokens`,children:`Tokens`}),(0,l.jsx)(n.h3,{id:`iconsize`,children:`iconSize`}),(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:`src/tokens/iconSize.ts`}),` 에 정의된 아이콘 크기 토큰입니다.`]}),(0,l.jsxs)(n.p,{children:[`| Token | Tailwind Class      | Size |
| ----- | ------------------- | ---- |
| `,(0,l.jsx)(n.code,{children:`xs`}),`  | `,(0,l.jsx)(n.code,{children:`w-3 h-3`}),`           | 12px |
| `,(0,l.jsx)(n.code,{children:`sm`}),`  | `,(0,l.jsx)(n.code,{children:`w-4 h-4`}),`           | 16px |
| `,(0,l.jsx)(n.code,{children:`md`}),`  | `,(0,l.jsx)(n.code,{children:`w-[18px] h-[18px]`}),` | 18px |
| `,(0,l.jsx)(n.code,{children:`lg`}),`  | `,(0,l.jsx)(n.code,{children:`w-5 h-5`}),`           | 20px |
| `,(0,l.jsx)(n.code,{children:`xl`}),`  | `,(0,l.jsx)(n.code,{children:`w-6 h-6`}),`           | 24px |`]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:`language-ts`,children:`import { iconSize, type IconSize } from '../tokens/iconSize';

// 사용 예시
const className = iconSize['lg']; // 'w-5 h-5'
`})})]}),`
`,(0,l.jsx)(`style`,{children:`
  .intro-container {
    max-width: 800px;
    padding: 32px;
    font-family: sans-serif;
    line-height: 1.7;
  }

  .intro-container h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  .intro-container h2 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 48px;
    margin-bottom: 16px;
    border-bottom: 2px solid #eee;
    padding-bottom: 8px;
  }

  .intro-container h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 32px;
    margin-bottom: 12px;
  }

  .intro-container table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    font-size: 14px;
  }

  .intro-container th {
    background: #f5f5f5;
    text-align: left;
    padding: 8px 12px;
    border: 1px solid #ddd;
  }

  .intro-container td {
    padding: 8px 12px;
    border: 1px solid #ddd;
  }

  .intro-container pre {
    background: #f8f8f8;
    border-radius: 6px;
    padding: 16px;
    overflow-x: auto;
    font-size: 13px;
  }

  .intro-container hr {
    border: none;
    border-top: 1px solid #eee;
    margin: 40px 0;
  }
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=r(),o(),a()}))();export{c as default};