(function(){

    const sliders = [...document.querySelectorAll('.personal__body')];
    const buttonNext = document.querySelector('#next')
    const buttonBefore = document.querySelector('#before')

    let value;

    buttonNext.addEventListener('click',()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentPersonal = document.querySelector('.personal__body--show').dataset.id;
        value = Number(currentPersonal);
        value+=add;

        sliders[Number(currentPersonal)-1].classList.remove('personal__body--show');

        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        
        sliders[value-1].classList.add('personal__body--show');
    }

})();