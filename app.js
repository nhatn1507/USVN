$(document).ready(function () {

	$('.userinput1').first().mouseover(function() {
		$(this).first().awesomeCursor('money', {
			color: '#2ECC40', size: '25'
		});
	});
	
	<!-- // get the most recent usd exchange rates via the "live" endpoint: -->
	<!-- $.ajax({ -->
		<!-- url: 'http://apilayer.net/api/live?access_key=d387ebd43ab68109d098506ab20c7017', -->
		<!-- dataType: 'jsonp', -->
		<!-- success: function(json) { -->
			<!-- // exchange rata data is stored in json.quotes -->
			<!-- var vnd1 = json.quotes.USDVND; -->
			<!-- var xau1 = 1 / (json.quotes.USDXAU); -->
			<!-- console.log(vnd1, xau1); -->
		<!-- } -->
	<!-- }); -->
	
	<!-- goldQuandl = 'https://www.quandl.com/api/v3/datasets/WGC/GOLD_DAILY_USD.json?api_key=TQnzWDJNQFbfP3zW-VDh' -->
	<!-- $.getJSON(goldQuandl, function(data) { -->
		<!-- var time = (data.dataset.refreshed_at.substring(11,19)); -->
		<!-- var date = (data.dataset.data[0][0]); -->
		<!-- var xau2 =  (data.dataset.data[0][1]); -->
		<!-- console.log(time,date,xau2); -->
	<!-- }); -->
	
	<!-- OpenExchangeRate = 'https://openexchangerates.org/api/latest.json?app_id=96e59c5c7e2548d284d0c8aaf71f2c68' -->
	<!-- $.getJSON(OpenExchangeRate, function(data) { -->
		<!-- console.log(data); -->
		<!-- var vnd3 = data.rates.VND; -->
		<!-- var xau3 = 1 / (data.rates.XAU); -->
		<!-- console.log(vnd3,xau3); -->
	<!-- }); -->
	
});

