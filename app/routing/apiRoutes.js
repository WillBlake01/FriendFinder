var friends = ('../app/data/friends');

module.exports = function (app) {

  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function (req, res) {

    });

  console.log(friends);
};
