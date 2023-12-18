const dataList = [
  {
    title: '框架',
    hasDetails: false,
    data: [
      {
        href: 'https://cn.vuejs.org/',
        svg: '<svg viewBox="0 0 128 128" width="32" height="32" data-v-c0161dce=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-c0161dce=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-c0161dce=""></path></svg>',
        text: 'Vue',
      },
      {
        href: 'https://react.docschina.org/',
        svg: '<svg width="32" height="32" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="0" cy="0" r="2" fill="#85d8f3"></circle> <g stroke="#85d8f3" stroke-width="1" fill="none"> <ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse> <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse> </g> </svg>',
        text: 'React'
      },
      {
        href: 'https://angular.cn/',
        url: 'https://angular.cn/assets/images/logos/angular/angular.svg',
        urlStyle: { marginRight: '-8px' },
        text: 'ngular',
      },
      {
        href: 'https://www.nextjs.cn/',
        url: 'https://www.nextjs.cn/static/images/nextjs-logo.png',
        urlStyle: { width: 'auto', height: '60%', aspectRatio: '90 / 58' },
      },
      {
        href: 'https://umijs.org/',
        url: 'https://gw.alipayobjects.com/zos/bmw-prod/598d14af-4f1c-497d-b579-5ac42cd4dd1f/k7bjua9c_w132_h130.png',
        text: 'UmiJS'
      },
      {
        href: 'https://docs.nestjs.cn/',
        url: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        text: 'Nestjs',
      },
      {
        href: 'https://taro.jd.com/',
        url: '/blog/assets/images/slit-collection/taro-logo.png',
        text: 'Taro',
      },
      {
        href: 'https://www.dcloud.io/',
        url: 'https://web-assets.dcloud.net.cn/unidoc/zh/logo.png',
        urlStyle: { width: 'auto', height: '60%', aspectRatio: '160 / 56' },
      },
      {
        href: 'https://www.electronjs.org/zh/',
        url: 'https://www.electronjs.org/zh/assets/img/logo.svg',
        text: 'Electron'
      },
      {
        href: 'https://beta.tauri.app/zh-cn/',
        url: 'https://beta.tauri.app/_astro/logo.1cdda0ad.svg',
        urlStyle: { width: 'auto', height: '50%', aspectRatio: '126 / 40' },
      },
      {
        href: 'https://d.umijs.org/',
        url: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        text: 'dumi'
      }
    ]
  },
  {
    title: '组件库',
    hasDetails: true,
    data: [
      {
        href: 'https://ant.design/index-cn/',
        url: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
        text: 'Ant Design',
        desc: 'react web 端组件库'
      },
      {
        href: 'https://element-plus.gitee.io/zh-CN/',
        url: 'https://element-plus.gitee.io/images/element-plus-logo.svg',
        urlStyle: { width: 'auto', height: '54%', aspectRatio: '113 / 28' },
        desc: 'Vue3 web 端组件库'
      },
      {
        href: 'https://vant-contrib.gitee.io/vant/#/zh-CN',
        url: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        text: 'Vant 4',
        desc: 'Vue H5 组件库'
      },
      {
        href: 'https://www.varletjs.com/#/zh-CN/index',
        url: 'https://varlet.gitee.io/varlet-ui/varlet_icon.png',
        text: 'VARLET',
        desc: 'Vue3 H5 组件库'
      },
      {
        href: 'https://tdesign.tencent.com/',
        svg: '<svg width="122" height="32" viewBox="0 0 122 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_16025_26913)"> <path d="M42.1876 8.78706H37.2302L34.1354 26.2045H30.52L33.5916 8.78706H28.6111L29.1491 5.79641H42.7256L42.1876 8.78706Z" fill="currentColor"></path> <path d="M58.4307 10.9505C58.4187 12.1155 58.3026 13.277 58.0837 14.4213L57.5052 17.8458C56.2789 24.8278 54.3815 26.2045 48.9787 26.2045H40.6777L44.2642 5.80798H51.3504C56.4929 5.80798 58.4307 7.09795 58.4307 10.9505ZM54.8211 11.4943C54.8211 9.18041 53.7163 8.79863 50.8066 8.79863H47.3358L44.8253 23.2139H48.2498C52.299 23.2139 53.1262 22.4041 53.9072 17.8516L54.4856 14.4271C54.6807 13.4608 54.793 12.4796 54.8211 11.4943Z" fill="currentColor"></path> <path d="M72.2269 13.756C72.2256 14.1538 72.1889 14.5507 72.117 14.9419L71.7352 17.0706C71.3071 19.4655 70.4163 20.3042 68.1777 20.3042H62.26L62.1212 21.1372C62.047 21.5188 62.0025 21.9056 61.9881 22.2941C61.9881 23.237 62.474 23.4511 64.0359 23.4511H69.4503L68.3454 26.1756H63.388C59.9172 26.1756 58.6504 25.2848 58.6504 23.104C58.664 22.4716 58.7259 21.8412 58.8355 21.2182L59.8883 15.1791C60.5362 11.4653 62.098 10.7076 66.0547 10.7076H67.8884C70.7171 10.7365 72.2269 11.4943 72.2269 13.756ZM68.8602 14.242C68.8602 13.5941 68.4553 13.4321 67.2174 13.4321H65.3027C64.0648 13.4321 63.469 13.5941 63.174 15.208L62.7459 17.6896H67.3215C67.4654 17.7123 67.6125 17.7034 67.7526 17.6634C67.8927 17.6234 68.0223 17.5533 68.1325 17.458C68.2427 17.3627 68.3307 17.2445 68.3905 17.1116C68.4502 16.9788 68.4803 16.8345 68.4785 16.6888L68.7735 14.9535C68.8153 14.7185 68.8386 14.4806 68.8429 14.242H68.8602Z" fill="currentColor"></path> <path d="M72.4121 23.48H78.7752C79.828 23.48 80.0189 23.318 80.204 22.271L80.4469 20.8422C80.4911 20.6385 80.5182 20.4315 80.5279 20.2233C80.5279 19.8704 80.337 19.8183 79.7181 19.8183H76.6233C74.2516 19.8183 73.4707 19.3613 73.4707 17.8226C73.496 17.0722 73.585 16.3252 73.7368 15.5898L73.9566 14.375C74.4946 11.2744 75.2986 10.9042 78.3471 10.9042H85.1614L84.0045 13.623H78.324C77.2712 13.623 77.0803 13.785 76.8952 14.8378L76.6812 16.0468C76.6341 16.25 76.607 16.4573 76.6002 16.6657C76.6002 17.0186 76.7853 17.0706 77.4042 17.0706H80.6378C83.0095 17.0706 83.7905 17.5276 83.7905 19.0663C83.7648 19.8187 83.6758 20.5676 83.5244 21.305L83.2236 22.9999C82.7434 25.7996 81.9336 26.1814 78.7521 26.1814H72.8922L72.4121 23.48Z" fill="currentColor"></path> <path d="M87.9843 10.9274H91.3278L88.6611 26.2045H85.3176L87.9843 10.9274ZM88.9851 4.97499H92.4559L91.8369 8.44576H88.3661L88.9851 4.97499Z" fill="currentColor"></path> <path d="M105.986 14.2651C105.946 15.2371 105.828 16.2043 105.633 17.1574L103.961 26.6037C103.313 30.2711 101.729 31 98.6279 31H92.8086L92.3227 28.2465H97.8759C99.9758 28.2465 100.381 28.0903 100.768 25.7186L100.953 24.6658H97.0777C93.6532 24.6658 92.2244 23.7229 92.2244 21.1372C92.2638 20.1652 92.3818 19.1979 92.5772 18.2449L92.9821 16.0063C93.7631 11.6967 94.758 10.7249 99.2585 10.7249H101.115C104.557 10.7365 105.986 11.6794 105.986 14.2651ZM101.457 21.9471L102.29 17.1227C102.462 16.3618 102.571 15.5878 102.614 14.8088C102.614 13.6519 102.035 13.4379 100.3 13.4379H99.0907C97.043 13.4379 96.719 14.0568 96.3662 16.0236L95.9612 18.2623C95.7993 19.025 95.691 19.7982 95.6373 20.5761C95.6373 21.733 96.2158 21.9529 97.9859 21.9529L101.457 21.9471Z" fill="currentColor"></path> <path d="M121.367 13.6751C121.306 14.7796 121.161 15.878 120.934 16.9607L119.32 26.2161H115.976L117.619 16.9607C117.766 16.2594 117.857 15.5476 117.891 14.832C117.891 13.8891 117.486 13.6751 116.219 13.6751H112.286L110.105 26.1814H106.767L109.434 10.9042H116.855C120.286 10.9274 121.367 11.7314 121.367 13.6751Z" fill="currentColor"></path> <path d="M7.97158 26.1814H3.28026C3.20254 26.1813 3.12575 26.1646 3.05505 26.1323C2.98435 26.1001 2.92139 26.053 2.87041 25.9944C2.81943 25.9357 2.78162 25.8668 2.75952 25.7923C2.73741 25.7178 2.73154 25.6394 2.74229 25.5625L3.65626 20.4026H9.44088L8.49798 25.7476C8.47291 25.8691 8.40703 25.9784 8.31127 26.0573C8.21552 26.1362 8.09566 26.18 7.97158 26.1814V26.1814Z" fill="#009BFF"></path> <path d="M21.1779 8.78706H5.69824L6.71634 3.00244H21.9877C22.0714 2.99445 22.1557 3.00616 22.234 3.03663C22.3123 3.06709 22.3823 3.11547 22.4386 3.17789C22.4948 3.2403 22.5356 3.31502 22.5578 3.39605C22.58 3.47709 22.5828 3.56219 22.5662 3.64453L21.7101 8.35321C21.6869 8.47672 21.6207 8.58803 21.5233 8.66744C21.4259 8.74684 21.3035 8.78922 21.1779 8.78706Z" fill="url(#paint0_linear_16025_26913)"></path> <path d="M5.69814 8.78706H0.549824C0.471061 8.78794 0.393048 8.77169 0.321181 8.73945C0.249315 8.70721 0.185311 8.65974 0.133598 8.60033C0.081885 8.54091 0.0436979 8.47097 0.0216786 8.39534C-0.000340748 8.31972 -0.00566652 8.24021 0.00606973 8.16232L0.84484 3.44785C0.867754 3.32323 0.933469 3.21053 1.03064 3.12921C1.1278 3.04788 1.25032 3.00304 1.37702 3.00244H6.71623L5.69814 8.78706Z" fill="#0064FF"></path> <path d="M9.44658 20.3852H3.65039L5.69815 8.79863H11.4943L9.44658 20.3852Z" fill="url(#paint1_linear_16025_26913)"></path> </g> <defs> <linearGradient id="paint0_linear_16025_26913" x1="6.19468" y1="5.90053" x2="21.6312" y2="8.6791" gradientUnits="userSpaceOnUse"> <stop offset="0.03" stop-color="#E9FFFF"></stop> <stop offset="0.17" stop-color="#C4FAC9"></stop> <stop offset="0.33" stop-color="#A0F694"></stop> <stop offset="0.48" stop-color="#82F269"></stop> <stop offset="0.63" stop-color="#6AEF47"></stop> <stop offset="0.76" stop-color="#5AED2F"></stop> <stop offset="0.89" stop-color="#4FEB20"></stop> <stop offset="1" stop-color="#4CEB1B"></stop> </linearGradient> <linearGradient id="paint1_linear_16025_26913" x1="8.58918" y1="8.37635" x2="8.69869" y2="19.278" gradientUnits="userSpaceOnUse"> <stop stop-color="#009BFF"></stop> <stop offset="0.35" stop-color="#0081FE"></stop> <stop offset="0.75" stop-color="#006AFD"></stop> <stop offset="1" stop-color="#0062FD"></stop> </linearGradient> <clipPath id="clip0_16025_26913"> <rect width="121.367" height="32" fill="white"></rect> </clipPath> </defs> </svg>',
        desc: '腾讯开发的适用多种框架的组件库',
      }
    ]
  },
  {
    title: 'CSS',
    hasDetails: true,
    data: [
      {
        href: 'https://www.tailwindcss.cn/',
        svg: '<svg height="18" viewBox="0 0 248 31"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="currentColor"></path></svg>',
        desc: '只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。',
      },
      {
        href: 'https://windicss.org/',
        url: 'https://windicss.org/assets/logo.svg',
        text: 'Windi CSS',
        desc: '可以将 Windi CSS 视为Tailwind 的按需替代品，它提供更快的加载时间、与 Tailwind v2.0 完全兼容以及一系列额外的酷功能。'
      },
      {
        href: 'https://animate.style/',
        text: 'Animate',
        desc: 'CSS 动画库'
      }
    ]
  },
  {
    title: '打包工具',
    hasDetails: false,
    data: [
      {
        href: 'https://cn.vitejs.dev/',
        url: 'https://cn.vitejs.dev/logo-with-shadow.png',
        text: 'Vite'
      },
      {
        href: 'https://webpack.docschina.org/',
        url: 'https://webpack.docschina.org/site-logo.1fcab817090e78435061.svg',
        urlStyle: { width: 'auto', height: '70%', aspectRatio: '121 / 35' },
      },
      {
        href: 'https://cn.rollupjs.org/',
        url: 'https://cn.rollupjs.org/rollup-logo.svg',
        text: 'Rollup'
      }
    ]
  },
  {
    title: '代码工具',
    hasDetails: true,
    data: [
      {
        href: 'https://picsum.photos/',
        text: 'Picsum',
        desc: '可以根据指定的尺寸返回随机图片，适用于 mock'
      },
      {
        href: 'https://cdnjs.com/',
        url: 'https://cdnjs.com/_/f7a2ebfb819c118086546e481876aef6.svg',
        urlStyle: { width: 'auto', height: '48%', aspectRatio: '131 / 36' },
        desc: '各种 npm 包的 cdn 形式',
      },
      {
        href: 'https://www.bootcdn.cn/',
        url: 'https://www.bootcdn.cn/assets/img/logo.png',
        urlStyle: { width: 'auto', height: '48%', aspectRatio: '120 / 20' },
        desc: '各种 npm 包的 cdn 形式',
      },
      {
        href: 'https://www.json.cn/',
        text: 'Json.cn',
        desc: 'json 解析和格式化'
      },
      {
        href: 'https://codepen.io',
        text: 'CodePen',
        desc: '一个方便自己写前端小 demo 的网站'
      },
      {
        href: 'https://matthewlein.com/tools/ceaser',
        text: '贝塞尔曲线',
        desc: '图形化生成贝塞尔曲线'
      },
      {
        href: 'https://wangwl.net/static/projects/visualRegex',
        text: 'visualRegex',
        desc: '正则可视化'
      },
      {
        href: 'https://unbug.github.io/codelf/',
        text: 'CODELF',
        desc: '变量命名'
      },
    ]
  },
  {
    title: '其他工具',
    hasDetails: true,
    data: [
      {
        href: 'https://squoosh.app/',
        text: 'Squoosh',
        desc: '在线图片压缩'
      },
      {
        href: 'https://www.remove.bg/zh',
        text: 'RemoveBG',
        desc: '在线抠背景图'
      },
      {
        href: 'https://picular.co/',
        text: 'Picular',
        desc: '根据你搜索的物品返回物品对应的颜色'
      },
      {
        href: 'https://colorhunt.co/',
        text: 'ColorHunt',
        desc: '相近色搭配'
      },
      {
        href: 'https://colordrop.io/',
        text: 'ColorDrop',
        desc: '相近色搭配'
      },
      {
        href: 'https://color.oulu.me/',
        text: '渐变颜色',
        desc: '背景渐变色集合',
      },
      {
        href: 'https://www.toptal.com/developers/css/sprite-generator',
        url: 'https://www.toptal.com/developers/css/sprite-generator/static/images/logo_header.svg',
        urlStyle: { width: 'auto', height: '54%', aspectRatio: '160 / 56' },
        desc: '序列帧转精灵图'
      },
      {
        href: 'https://pagespeed.web.dev/',
        text: 'pagespeed',
        desc: '在线 Web 网站性能评测'
      }
    ]
  },
]

export default dataList;