
const menu=document.getElementById('menu-toggle');
if(menu) menu.addEventListener('click',()=>{const side=document.getElementById('sidebar');const expanded=side.classList.toggle('open');menu.setAttribute('aria-expanded',String(expanded));});
document.getElementById('print-button')?.addEventListener('click',()=>window.print());
const budget=document.getElementById('budget'),seconds=document.getElementById('seconds');
if(budget&&seconds){const update=()=>{document.getElementById('budget-out').textContent=budget.value+'분';document.getElementById('seconds-out').textContent=seconds.value+'초';document.getElementById('segments-out').textContent=Math.floor(Number(budget.value)*60/Number(seconds.value)).toLocaleString('ko-KR');};budget.addEventListener('input',update);seconds.addEventListener('input',update);update();}
