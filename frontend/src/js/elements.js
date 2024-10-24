import $ from 'jquery';


const createElement = (tag, css) => $(document.createElement(tag)).addClass(css);

const Icon = (css, href) => {
    const spriteUrl = `./sprite.svg#${href}`;
    
    const svgElement = $(document.createElementNS('http://www.w3.org/2000/svg', 'svg')).addClass(css);
    const useElement = $(document.createElementNS('http://www.w3.org/2000/svg', 'use')).attr('href', spriteUrl);
    svgElement.append(useElement);

    return svgElement;
};

const Div = (css) => createElement('div', css);
const Span = (css) => createElement('span', css);
const Button = (css) => createElement('button', css);
const Input = (css) => createElement('input', css);
const Label = (css) => createElement('label', css);
const Img = (css) => createElement('img', css);
const Link = (css) => createElement('a', css);

export { Div, Span, Button, Input, Label, Img, Link, Icon };
