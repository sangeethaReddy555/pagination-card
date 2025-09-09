let c=1;
        let hone=document.getElementById('hone')
        let htwo=document.getElementById('htwo')
        let hthree=document.getElementById('hthree')
        let btwo=document.getElementById('btwo')
        let bthree=document.getElementById('bthree')
        let pre=document.getElementById('pre')
        let nxt=document.getElementById('nxt')
        if(c==1){
                hone.style.display='block'
                htwo.style.display='none'
                hthree.style.display='none'
        }
        nxt.addEventListener('click',function(){
            c++
            if(c==2){
                btwo.classList.add('bg-darkk')
                hone.style.display='none'
                htwo.style.display='block'
                hthree.style.display='none'
                
            }else{
                btwo.classList.add('bg-darkk')
                bthree.classList.add('bg-darkk')
                hone.style.display='none'
                htwo.style.display='none'
                hthree.style.display='block'
            }
        })

        pre.addEventListener('click',function(){
            c--
            if(c==2){
                bthree.classList.remove('bg-darkk')
                hone.style.display='none'
                htwo.style.display='block'
                hthree.style.display='none'
                
            }else{
                btwo.classList.remove('bg-darkk')
                hone.style.display='block'
                htwo.style.display='none'
                hthree.style.display='none'
            }
        })

