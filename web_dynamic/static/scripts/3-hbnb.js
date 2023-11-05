$(document).ready(function () {
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
