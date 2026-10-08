
const menu=document.getElementById('menu-toggle');
if(menu) menu.addEventListener('click',()=>{const side=document.getElementById('sidebar');const expanded=side.classList.toggle('open');menu.setAttribute('aria-expanded',String(expanded));});
document.getElementById('print-button')?.addEventListener('click',()=>window.print());
const budget=document.getElementById('budget'),seconds=document.getElementById('seconds');
if(budget&&seconds){const update=()=>{document.getElementById('budget-out').textContent=budget.value+'분';document.getElementById('seconds-out').textContent=seconds.value+'초';document.getElementById('segments-out').textContent=Math.floor(Number(budget.value)*60/Number(seconds.value)).toLocaleString('ko-KR');};budget.addEventListener('input',update);seconds.addEventListener('input',update);update();}

const arch=document.querySelector('.architecture-svg'),archData=document.getElementById('architecture-data');
if(arch&&archData){
 const descriptions=JSON.parse(archData.textContent);
 document.querySelectorAll('[data-focus]').forEach(button=>button.addEventListener('click',()=>{
  const selected=button.dataset.focus;
  document.querySelectorAll('[data-focus]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  arch.querySelectorAll('.arch-part').forEach(part=>part.classList.toggle('dimmed',selected!=='all'&&part.dataset.loop!==selected&&part.dataset.loop!=='bridge'));
 }));
 const explain=node=>{const detail=descriptions[node.dataset.node];document.getElementById('arch-detail-title').textContent=detail.title;document.getElementById('arch-detail-body').textContent=detail.body;arch.querySelectorAll('.arch-node').forEach(n=>n.classList.toggle('selected',n===node));};
 arch.querySelectorAll('[data-node]').forEach(node=>{node.addEventListener('click',()=>explain(node));node.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();explain(node);}});});
}
