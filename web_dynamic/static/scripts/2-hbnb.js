$(document).ready(function () {
  const amenityList = [];
  $("input[type='checked']").change(function () {
    const amenityName = ('this').attr('data-name');
    if (this.checked) {
      amenityList.push(amenityName);
    } else {
      const newList = [];
      for (let i = 0; i < amenityList.length; i++) {
        if (amenityList[i] !== amenityName) {
          newList.push(amenityList[i]);
        }
      }
    }
    $('.amenities h4').text(newList.join(', '));
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', (data) => {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
