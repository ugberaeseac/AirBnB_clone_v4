$(document).ready(function () {
	amenityList = [];
	$("input[type='checked']").change(function () {
		const amenityName = ("this").attr('data-name');
		if (this.checked) {
			amenityList.push(amenityName);
		} else {
			newList = []
			for (let i = 0; i < amenityList.length; i++) {
				if (amenityList[i] !== amenityName) {
					newList.push(amenityList[i])
				}
			}
		
		}
		$(".amenities h4").text(newList.join(', '));
	});
})
