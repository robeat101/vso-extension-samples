VSS.init({
 		explicitNotifyLoaded: true,
 		usePlatformStyles: true 
 	});
 	
VSS.require([
 		"TFS/Dashboards/WidgetHelpers", 
	    "Charts/Services"
		],
		function (WidgetHelpers, Services) {
 		WidgetHelpers.IncludeWidgetStyles();
 		VSS.register("PieChart", function () { 
			 return {
			 load:function() {
				return Services.ChartsService.getService().then(function(chartService){
					var $container = $('#Chart-Container');
					var chartOptions = { 
						"hostOptions": { 
							"height": "290", 
							"width": "300"
						},
						"chartType": "pie",
						"series": [{
							"data": [11, 4, 3, 1]
						}],
						"xAxis": { 
							"labelValues": ["Design", "On Deck", "Completed", "Development"] 
						}, 
						"specializedOptions": {
							"showLabels": "true",
							"size": 200
						} 
					};

					chartService.createChart($container, chartOptions);
					return WidgetHelpers.WidgetStatusHelper.Success();
				});
			 	}
			 }
			});
	VSS.notifyLoadSucceeded();
});