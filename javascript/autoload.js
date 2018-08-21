$(document).ready(() => {
	var client = new XMLHttpRequest()
	client.open('GET', 'PRIVACY.md')
	client.onreadystatechange = function() {
		var response = client.responseText.split('\n')
		var summary = response.shift()
		var full = response.join('\n\n')
		$('#js-summary').html(summary)
		$('#js-full').html(full)
	}
	client.send()
})