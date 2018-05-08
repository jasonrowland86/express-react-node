const ufcController = {};
require('isomorphic-fetch');

// ufcController.events = (req, res) => {
//   fetch('http://ufc-data-api.ufc.com/api/v3/us/events')
//   .then(response => response.json())
//   .then(response => {
//     console.log(response);
//     res.json({events: response});
//   })
// }

ufcController.futureEvents = (req, res) => {
  fetch('http://ufc-data-api.ufc.com/api/v3/us/events')
  .then(response => response.json())
  .then(response => {
    //Get current date
    let newDate = new Date();
    currentDate = newDate.toISOString();
    //Filter all events greater than the current date
    let upComingEvents = response.filter(r =>
      `${r.event_date}`  > currentDate )
      // console.log('upComingEvents:', JSON.parse(JSON.stringify(upComingEvents)));
      // upComingEvents = JSON.parse(JSON.stringify(upComingEvents));
      res.json({events: upComingEvents});
  })
}

ufcController.eventCard = (req, res) => {
  fetch(`http://ufc-data-api.ufc.com/api/v3/us/events/${req.params.id}/fights`)
  .then(response => response.json())
  .then(response => {
    console.log(req.params.id);
    res.json({card: response});
  })
}

// ufcController.getFighter = () => {
//
// }

module.exports = ufcController;
