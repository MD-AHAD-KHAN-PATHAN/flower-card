
document.getElementById('submit').addEventListener('click', function(){
    
    const inputValue = document.getElementById('coupon');
    
    
    if(inputValue.value == 'ahad10')
    {
        const priceValue = document.getElementById('price');
        priceValue.innerText = 40;
    }
    else
    {
        alert('did not match coupon code');
    }

    inputValue.value = '';
    
})

document.getElementById('submit1').addEventListener('click', function(){
    
    const inputValue = document.getElementById('coupon1');
    
    
    if(inputValue.value == 'ahad10')
    {
        const priceValue = document.getElementById('price1');
        priceValue.innerText = 30;
    }
    else
    {
        alert('did not match coupon code');
    }

    inputValue.value = '';
    
})

document.getElementById('submit2').addEventListener('click', function(){
    
    const inputValue = document.getElementById('coupon2');
    
    
    if(inputValue.value == 'ahad10')
    {
        const priceValue = document.getElementById('price2');
        priceValue.innerText = 35;
    }
    else
    {
        alert('did not match coupon code');
    }

    inputValue.value = '';
    
})