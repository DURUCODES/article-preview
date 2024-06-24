 const share= document.querySelector('#sharebtn')

 const shareBotom = document.querySelector('.shareicon2')
 shareBotom.addEventListener("click",()=>{
    document.querySelector('.mobileicon').style.display="flex"
    document.querySelector('.mobile').style.display="none"
 })

 
share.addEventListener('click',()=>{
    document.querySelector(".icons").style.display="flex"
   document.querySelector('.iconshare').style.display="none"
   setTimeout(()=>{
      document.querySelector(".icons").style.display="none"
      document.querySelector('.iconshare').style.display="flex"
   }, 10000);
})
