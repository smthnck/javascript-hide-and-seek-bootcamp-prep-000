function getFirstSelector(selector){
  return document.querySelector('selector')
}

function nestedTarget(){
  return document
    .getElementById('app')
    .querySelector('#nested .target')
}

function increaseRankBy(n){
  const els = document
                .getElementById('app')
                .querySelectorAll('.ranked-list li')
  for (let i = 0;i < els.length;i++){
    els[i] = parseInt(els[i]+n)
  }
}

function deepestChild(){
  const grand = document
                  .getElementById('app')
                  .querySelectorAll('#grand')
}