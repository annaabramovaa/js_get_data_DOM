var t=document.querySelectorAll(".population"),e=[],r=!0,o=!1,n=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var u=a.value.textContent;u=u.replace(/,/g,"");var c=parseInt(u);isNaN(c)||e.push(c);var i=e.reduce(function(t,e){return t+e},0),p=i/t.length,v=i.toLocaleString(),y=p.toLocaleString(),d=document.querySelector(".total-population"),S=document.querySelector(".average-population");d.textContent=v,S.textContent=y}}catch(t){o=!0,n=t}finally{try{r||null==l.return||l.return()}finally{if(o)throw n}}
//# sourceMappingURL=index.67828b3d.js.map
