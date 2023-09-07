// import React, { useState, useEffect } from "react";
// // import ReactMarkdown from "react-markdown";
// // import rehypeRaw from "rehype-raw";
// // import gfmMD from "remark-gfm";
// import markdown from "../../docs/home.md";

// const FreeGpt = () => {
//     return (
//       <div>
//         <pre>{markdown}</pre>
//         <small><i>Import and render markdown using Next.js</i></small>
//       </div>
//     );
//   };
//   export default FreeGpt;

import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReactDOMServer from 'react-dom/server';
import { FaBurn } from 'react-icons/fa';

interface Props {
  markdownContent: string;
}

const FreeGpt: React.FC<Props> = ({ markdownContent }) => {
  React.useEffect(() => {
    const foxElement = document.getElementById('fox');
    if (foxElement) {
      const h2Elements = foxElement.getElementsByTagName('h2');
      for (let i = 0; i < h2Elements.length; i++) {
        const h2Element = h2Elements[i];
        const isExist = h2Element.getElementsByClassName('red-bull');
        const iconElement = document.createElement('span');
        const iconHtml = ReactDOMServer.renderToString(<FaBurn className='text-cus-pink inline-block pb-[13px] mr-2 grow-0 red-bull'/>);
        const parser = new DOMParser();
        const iconNode = parser.parseFromString(iconHtml, 'text/html').body.firstChild;
        !(isExist.length) && iconNode && iconElement.appendChild(iconNode);
        h2Element.insertBefore(iconElement, h2Element.childNodes[0]);
      }
    }
  }, []);
  return (
    <div className={`lg:pt-[144px] px-4 md:px-16 lg:px-40 py-20 shadow-card-upload-black relative flex flex-col max-w-[calc(100vw-600px)] min-w-[calc(100vw-600px)] prose lg:prose-xl text-white bg-[#140e28] fox font-header`} id='fox'>
      <ReactMarkdown className='z-20'>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default FreeGpt;


