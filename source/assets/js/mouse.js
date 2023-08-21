// @ts-nocheck
const div = document.createElement('div')
div.classList.add('mouse-div');

document.body.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const currentDom = e.target

  const nodes = find(currentDom, [])
  // 存在 A 标签
  const hasATag = nodes.some(item => item.tagName === 'A')

  const classList = [
    'right-bottom-tools', // 右下角按钮
    'image-container', // 瀑布流图片
    'aplayer-pic', // 音乐播放器
    'aplayer-icon',
    'aplayer-list'
  ]
  const other = classList.some(className => nodes.some(item => item?.classList?.contains(className)))

  if (hasATag || other) {
    div.classList.add('hover')
  } else {
    div.classList.remove('hover')
  }
  
  div.style.transform = `translate(calc(${clientX}px - 50%),calc(${clientY}px - 50%))`;
});

document.body.addEventListener('click', () => {
  const clickDiv = document.createElement('div')
  clickDiv.classList.add('mouse-div-active')
  div.appendChild(clickDiv)
  setTimeout(() => {
    clickDiv.remove();
  }, 1000);
})


document.body.appendChild(div);

function find(dom, arr){
  const new_arr = [...arr];
  if (dom) {
    new_arr.push(dom);
    return find(dom.parentNode, new_arr);//dom.parentNode作为子元素向上查找它的父元素
  }else{
    return new_arr
  }
}