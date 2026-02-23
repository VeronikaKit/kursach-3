(function() { 'use strict'; retryWhileError(function() {
    let a=sluchch(2,9).pm();
    let g=sluchch(1,9).pm();
    let d=sluchch(2,2*a*g-1).pm();
    let b=(2*a*g+d);
    let f=sluchch(1,a*g*g-1).pm();
    let c=(a*g*g+f);
    let h=2*(a*(c-f)).sqrt();
    let m1=[d-h,d+h];
    let t1=['меньше','больше'];
    let v1=sluchch(1);
    NAtask.setTask({
    	text: ('Прямая $y='+d+'x+'+f+'$ является касательной к графику функции $y='+a+'x^{2}+bx+'+c+'$. Найдите $b$, зная, что оно '+t1[v1]+' $'+sluchch(m1[0]+1,m1[1]-1)+'$.').plusminus(),
    	answers: m1[v1],
    });
    NAtask.modifiers.allDecimalsToStandard(/*true*/);
}, 20000);})();
