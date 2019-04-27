//------> function create event in html

function createEvent (data) {
  let $map = $('#map');
  let $event = $("<div>").addClass("content");
  let $latitude = $("<address>").addClass("latitude").text(data.latitude).appendTo($event);
  let $longitude = $("<address>").addClass("longitude").val(data.longitude).appendTo($event);
  let $name = $("<h1>").addClass("event_name").text(data.name).appendTo($event);
  let $url = $("<a>").addClass("event_url").attr("href", data.url).text(data.url).appendTo($event);
  let $start_date = $("<p>").addClass("start_date").text(data.start_date).appendTo($event);
  let $end_date = $("<p>").addClass("end_date").text(data.end_date).appendTo($event);
  let $picture = $("<img>").addClass("event_img").attr("src",data.picture).appendTo($event);
  let $description = $("<p>").addClass("description").text(data.description).appendTo($event);
  let $edit = $(`<input type="button" value="Edit" class="info-button"/>`).appendTo($event);
  $event.appendTo($map);
  return $event.prop('outerHTML');
};

function editEvent (data){
  let $map = $('#map');
  let $form = $("<div>").addClass("content");
  let $edit_title = $("<h3>").addClass("edit_title").text("Edit your event data:").appendTo($form);
  let $form_latitude = $("<input>").addClass("form_latitude").appendTo($form);
  let $form_longitude = $("<input type: 'value', id: 'flong', placeholder: 'Longitude'/>").appendTo($form);
  let $form_name = $("<input type: 'text', id: 'fname', Event name: 'name', placeholder: 'Event Name'/>").appendTo($form);
  let $form_start = $("<input>").addClass("form_start").appendTo($form);
  let $form_end = $("<input>").addClass("form_end").appendTo($form);
  let $form_url = $("<input>").addClass("form_url").appendTo($form);
  let $form_picture = $("<input>").addClass("form_picture").appendTo($form);
  let $f_description = $("<textarea rows: 'px', cols: '27px',type: 'text',id: 'description', name: 'desc', placeholder: 'Event description' />").appendTo($form);
  let $submit_bttn = $("<input type: 'button', id: 'submit', placeholder: 'Submit' />").appendTo($form);
  $form.appendTo($map);
  return $form.prop('outerHTML');
}
//------> hardcoded database
// const data = [

//     {
//       "latitude": 49.273365,
//       "longitude": -123.119979,
//       "name": "Lunch & Learn",
//       "url": 'www.lighthouselabs.com',
//       "start_date": '12/12/2019',
//       "end_date":'12/02/2019',
//       "picture": "data:image/png;base64,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",
//       "description": "The coolest lunch you'll ever have",
//       "map_id": 'map1'
//     },
//      {
//       "latitude": 49.260515,
//       "longitude": -123.127028,
//       "name": "Marketing stuff",
//       "url": 'www.lighthouselabs.com',
//       "start_date": '12/12/2019',
//       "end_date":'12/02/2019',
//       "picture": "data:image/png;base64,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",
//       "description": "The coolest lunch you'll ever have",
//       "map_id": 'map1'
//     },
//      {
//       "latitude": 49.267422,
//       "longitude": -123.108145,
//       "name": "Marketing event",
//       "url": 'www.lighthouselabs.com',
//       "start_date": '12/12/2019',
//       "end_date":'12/02/2019',
//       "picture": "https://digiboost.com/wp-content/uploads/2018/08/ppc_icon.png",
//       "description": "The coolest lunch you'll ever have",
//       "map_id": 'map'
//     },


//      {
//       "latitude": 49.277794,
//       "longitude": -123.121305,
//       "name": "Tech cool event",
//       "url": 'www.lighthouselabs.com',
//       "start_date": '12/12/2019',
//       "end_date":'12/02/2019',
//       "picture": "data:image/png;base64,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",
//       "description": "The coolest lunch you'll ever have",
//       "map_id": 'map'
//   }];


//------> function add event to the map and diusplay infowind
function addEvents(events, google){

  console.log(google)
  events.forEach(event =>{
    console.log(event.latitude)
    let marker = new google.maps.Marker({
      position: {lat: Number(event.latitude), lng: Number(event.longitude)},
      map: map,
      title: event.name
    });
    marker.setMap(map);
    let eventContent = createEvent(event);
    var infowindow = new google.maps.InfoWindow({
      content: eventContent,
    });

    marker.addListener('click', function(e) {
      infowindow.open(map, marker);
      $(document).on('click', '.info-button', function(){
        var htmlString = editEvent();
        console.log(htmlString)
        $(this).parent().html(htmlString)
      })
    });


    // $('form').on('submit', function(event) {
    // event.preventDefault();
    // let data = $(this).serialize();
    // $.ajax({
    //   url: '/tweets',
    //   method: 'POST',
    //   data: data
    // }).then(
    //   (res) => {
    //     loadTweets();
    //     let form = document.getElementById('form');
    //     let counter = document.getElementById('counter');
    //     form.reset();
    //     counter.textContent = '140';
    //   },
    //   (err) => { console.log('Error') }
    // )
  });

}
