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

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}), // Send an empty JSON object
    success: function (data) {
      $.each(data, function (index, place) {
        const template = `<article>
                <div class="title_box">
                    <h2>${place.name}</h2>
                    <div class="price_by_night">${place.price_by_night}</div>
                </div>
                <div class="information">
                    <div class="max_guest">${place.max_guest} Guest</div>
                    <div class="number_rooms">${place.number_rooms} Bedroom</div>
                    <div class="number_bathrooms">${place.number_bathrooms} Bathroom</div>
                </div>
                <div class="user">
                    <b>Owner:</b>
                </div>
                <div class="description">
                    ${place.description}
                </div>
                </article>`;

        $('.places').append(template);
      });
    }
  });
});
