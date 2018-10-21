function getFirstSelector(selector){
  return document
          .getElementById('app')
          .querySelector(selector)
}

function nestedTarget(){
  return document
    .getElementById('app')
    .querySelector('#nested .target')
}

function increaseRankBy(n){
  const els = document
                .getElementById('app')
                .querySelectorAll('ul.ranked-list li')
  for (let i = 0;i < els.length;i++){
    els[i].innerHTML = parseInt(els[i]+n)
  }
}

