document.addEventListener('DOMContentLoaded', function(){
  // タブに対してクリックイベントを適用
  const tabs = document.getElementsByClassName('agendacontent');
  for(let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', tabSwitch);
  }
  // タブをクリックすると実行する関数
  function tabSwitch(){
    // タブのclassの値を変更
    document.getElementsByClassName('active')[0].classList.remove('active');
    this.classList.add('active');
    // コンテンツのclassの値を変更
    document.getElementsByClassName('shown')[0].classList.remove('shown');
    const arrayTabs = Array.prototype.slice.call(tabs);
    const index = arrayTabs.indexOf(this);
    document.getElementsByClassName('topic')[index].classList.add('shown');
  };
});

