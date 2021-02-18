function init(){
  $('[data-iframe-player="plyr"]').each((k, el)=>{
    const player = new Plyr(`#${el.id}`);
  });
}

(function(){
  init();
})();