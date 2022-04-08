import { usePageData } from '@vuepress/client';

interface PageRef {
  stringLength: number
}

export default function () {
  const page = usePageData<Record<string, PageRef>>();
  setTimeout(() => {
    const footer = document.querySelector('.page-meta');
    console.log(footer);
    const span = document.createElement('span')
    span.innerHTML = '页面字数统计: ' + page.value.stringLength
    span.setAttribute('style', 'position:fixed;font-weight: 500;color: var(--c-text-lighter);bottom:12px')

    footer?.appendChild(span)
  }, 1000)
}