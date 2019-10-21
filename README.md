# HTML 

## Tags
- 문서 기본 태그 : html, head, title, body, h1~h6, p, hr, br
- 텍스트 꾸미기 태그(CSS 사용권장) : b, strong, em, i, small, del, ins, sup, sub, mark 
- 블록과 링크 태그 : pre, div, span, a, iframe
- 메타 태그 : base, link, script, style, meta, title
- 이미지와 리스트 : img, ol, ul, li, dt, dd
- 표 : table, caption, thead, tbody, tfoot, tr, th, td
- 미디어 : audio, video, embed, object

- 폼 태그 : form
- 텍스트 입력 태그 : input type="text|password", textarea
- 버튼 태그 : input type="button|submit|reset|image" / button type="button|submit|reset"
- 선택형 입력 태그 : input type="checkbox|radio" / select / datalist
- 시간 입력 태그 : input type="month|week|date|time|date-local"
- 테이터 유형 태그 : input type="number|range|color|email|url|tel|search"
- 폼 관련 태그 : label, fieldset

## Semantic
- 시맨틱 구조화 태그 : header, nav, section, article, aside, footer
- 시맨틱 블록 태그 : figure, details, summary
- 시맨틱 인라인 태그 : mark, time, meter, progress

# CSS

## Property
- 색 : color, background-color, border-color
- 텍스트 : test-indent, text-align, text-decoration
- 폰트 : font-family, font-size, font-style, font-weight, font(short)
- 박스 모델 : width, height, padding, margin, border(short)
- 테두리 : border-radius, border-image
- 태그의 배경 : background-color, background-image, background-position, background-size, background-repeat, background(short)
- 시각적 효과 : text-shadow, box-shadow, cursor

# JS

## Function

### 1. 인수의 수 
 - 디폴트 매개변수
 - 가변길이의 매개변수

### 2. 익명함수 - 람다식
 - lambda a : a*a
 - let f1 = (x) => {return x*x;}
 - f1(4) // 16

### 3. 함수 hoisting
{
   a = mult(3,4);
   console.log(a);
   b = 12;
   function mult(a,b) {return a+b}
}

### 4. closure 

function makemult(m){
    return (x) => {return m * x}
}
var bar = makemult(5)
bar(9) // 45

고차함수 (high order function)
map(f, [a,b,c])
-> [f(a), f(b), f(c)]

reduce(f, [a,b,c], v0)
-> f(f(f(a, v0), b), c) 

Math.floor(4.5) // 4

${   }
for (let i = 0; i < 10; i++)
     document.write('<td> ${i} </td>)
