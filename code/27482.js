(function() { 'use strict'; retryWhileError(function() {
	let s=slKrome(10, 300, 1);
	let a=sl(1, 20);
	let b=sl(1, 7);
	let v=Math.sqrt(b**2*a**2+4*b*s*a);
    let x=(-b*a+v)/(2*b);
	genAssert(x>0,'Скорость не может быть отрицательной'); 
	genAssertZ1000(x,'Скорость не может быть слишком дробной');
    let the_berthForFloatingVehicle = sklonlxkand(decor.berthForFloatingVehicle.iz());
	let the_waterbodyWithoutCurrent = sklonlxkand(decor.waterbodyWithoutCurrent.iz());
	let the_activeFloatingVehicle = sklonlxkand(decor.activeFloatingVehicleF.iz());
	let the_afterAWhile = decor.afterAWhile.iz();
	let the_orderToFind = decor.orderToFind.iz();
    NAtask.setTask({
		text:
		    '' + the_berthForFloatingVehicle.im.toZagl() +' A и B расположены на ' + the_waterbodyWithoutCurrent.pe +', '+
			'расстояние между ними равно ' + s + ' км. ' + the_activeFloatingVehicle.ie.toZagl() +' отправилась с постоянной скоростью из A в B. ' + 
			the_afterAWhile.toZagl() +' после прибытия она отправилась тем же путём обратно со скоростью на ' + a + ' км/ч больше прежней, '+
			'сделав по пути остановку на ' + chislitlx(b, 'час') + '. В результате она затратила на обратный путь столько же времени, '+
			'сколько на путь из A в B. ' + the_orderToFind.toZagl() +' скорость ' + the_activeFloatingVehicle.re +' на пути из A в B. Ответ дайте в км/ч.',
		answers: x,
	});
	NAtask.modifiers.allDecimalsToStandard(/*true*/);
	NAtask.modifiers.variativeABC();
}, 2000);})();
