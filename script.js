
	init()


	function init(){

		var url ="https://api.covid19api.com/summary"
		var data=''
		$.get(url,function(data){
			console.log(data.Global)
			data =`
			<td>${'->'}</td>
			<td>${data.Global.TotalConfirmed}</td>
			<td>${data.Global.TotalDeaths}</td>
			<td>${data.Global.TotalRecovered}</td>
			`
			$('#data').html(data)

		})
	}






			function refreshData(){
				clearData()
				init()
			}
			function clearData(){
				$('#data').empty()
			
			}