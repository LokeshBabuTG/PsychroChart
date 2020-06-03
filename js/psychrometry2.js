

function airState(Rslt,t,Rh)
{
	//var t;
	//var Rh;
	var Ps = Math.exp((-5800.2206/(t))+(1.3914993)+(-0.048640239*(t))+(0.000041764768*(t)*(t))+(-0.000000014452093*(t)*(t)*(t))+6.5459673*Math.log(((t))));
	var Pa = Ps * Rh/100;
	var t_dp =6.54 + 14.526 * (Math.log(Pa/1000)) + 0.7389* (Math.log(Pa/1000))*( Math.log(Pa/1000))+  0.09486* (Math.log(Pa/1000)* Math.log(Pa/1000)* Math.log(Pa/1000)) + 0.4569* (Math.pow(Pa/1000,0.1984));
	var W = 0.62198 * (Pa/(101325-Pa));
	var D = 1/(287.1*(t)*(1+1.6078*W)/101325)  * (1+W);
	var H = 1.006*(t-273.15)+W*(2501+1.805*(t-273.15));
	
	var state =
	{
		"t":t-273.15,
		"Rh":Rh,
		"Ps" : Ps,
		"Pa":Pa,
		"t_dp":t_dp,
		"W":W,
		"D":D,
		"H":H,
	}
	
	return state[Rslt];

}

function airState1(t,W)
{
	//var t;
	//var Rh;
	var Ps = Math.exp((-5800.2206/(t))+(1.3914993)+(-0.048640239*(t))+(0.000041764768*(t)*(t))+(-0.000000014452093*(t)*(t)*(t))+6.5459673*Math.log(((t))));
	var Pa = ( W /( W + 0.62198) ) * 101325;
	var Rh = (Pa / Ps) ;
	var t_dp =6.54 + 14.526 * (Math.log(Pa/1000)) + 0.7389* (Math.log(Pa/1000))*( Math.log(Pa/1000))+  0.09486* (Math.log(Pa/1000)* Math.log(Pa/1000)* Math.log(Pa/1000)) + 0.4569* (Math.pow(Pa/1000,0.1984));
	var D = 1/(287.1*(t)*(1+1.6078*W)/101325)  * (1+W);
	var H = 1.006*(t-273.15)+W*(2501+1.805*(t-273.15));
	
	var state =
	{
		"t":(t-273.15).toFixed(1),
		"Rh":Rh.toFixed(3),
		"Ps" : Ps.toFixed(2),
		"Pa":Pa.toFixed(2),
		"t_dp":t_dp.toFixed(1),
		"W":W.toFixed(5),
		"D":D.toFixed(2),
		"H":H.toFixed(2),
	}
	
	return state;

}

function airState2(t,Rh)
{
	//var t;
	//var Rh;
	var Ps = Math.exp((-5800.2206/(t))+(1.3914993)+(-0.048640239*(t))+(0.000041764768*(t)*(t))+(-0.000000014452093*(t)*(t)*(t))+6.5459673*Math.log(((t))));
	var Pa = Ps * Rh/100;
	var t_dp =6.54 + 14.526 * (Math.log(Pa/1000)) + 0.7389* (Math.log(Pa/1000))*( Math.log(Pa/1000))+  0.09486* (Math.log(Pa/1000)* Math.log(Pa/1000)* Math.log(Pa/1000)) + 0.4569* (Math.pow(Pa/1000,0.1984));
	var W = 0.62198 * (Pa/(101325-Pa));
	var D = 1/(287.1*(t)*(1+1.6078*W)/101325)  * (1+W);
	var H = 1.006*(t-273.15)+W*(2501+1.805*(t-273.15));
	
	var state =
	{
		"t":(t-273.15),
		"Rh":(Rh/100).toFixed(3),
		"Ps" : Ps.toFixed(3),
		"Pa":Pa.toFixed(3),
		"t_dp":t_dp.toFixed(1),
		"W":W.toFixed(6),
		"D":D.toFixed(4),
		"H":H.toFixed(3),
	}
	
	return state;

}

function humidityRatioDifference(a,b)
{
	
}

function humidityRatioDifference(a,b)
{
	
}