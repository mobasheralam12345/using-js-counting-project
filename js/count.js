    // // const btn = document.getElementById("plus-btn");
    // // console.log(btn);

    let count = 0 ;
    document.getElementById('plus-btn').addEventListener('click',function(){

        const counting = document.getElementById('count');
        count += 1;
        counting.innerText = count;
    })

    document.getElementById('minus-btn').addEventListener('click',function(){

        const counting = document.getElementById('count');
        count -= 1;
        counting.innerText = count;

    })