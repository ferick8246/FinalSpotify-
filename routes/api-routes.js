// Requiring Modules
const db = require("../models");

// Routes
module.exports = function (app) {
  // Read Playlist
  app.get("/api/playlists", async function (req, res) {
    try {
      // Add sequelize code to find all posts, and return them to the user with res.json
      res.json(await db.Playlist.findAll());
    } catch (err) {
      res.status(500).end();
    }
  });

  // Create Track
  app.post("/api/db/playlists", async function (req, res) {
    try {
      await db.Playlist.create(req.body);
      res.json({ msg: "Success!" });
    } catch (err) {
      res.status(500).end();
    }
  });

  //   Update Score
  app.put("/api/playlists", async function (req, res) {
    try {
      await db.Playlist.update(req.body, { where: { id: req.body.id } });
      res.json({ msg: "Score Updated!" });
    } catch (err) {
      res.status(500).end();
    }
  });


  //     // Route for Create Songs
  //     app.get("/api/models/songs", function (req, res) {
  //         db.Post.create(req.body).then(function (dbPost) {
  //             res.json(dbPost);
  //         })
  //     })

  //     // POST Route for Saving
  //     app.post("/api/posts", function (req, res) {
  //         db.Post.create(req.body).then(function (dbPost) {
  //             res.json(dbPost);
  //         });
  //     });


  //     // PUT Routes for Updating
  //     app.put("/api/posts", function (req, res) {
  //         db.Post.update(req.body, {
  //             where: {
  //                 id: req.body.id,
  //             },
  //         }).then(function (dbPost) {
  //             res.json(dbPost);
  //         });
  //     });


  //     // Route for Inc
  //     const songs = await User.create({ name: "songs", age: 100 });
  //     const incrementResult = await songs.increment('age', { by: 2 });

  //     // Route for Dec
  //     const songs = await User.create({ name: "songs", age: 100, cash: 5000 });
  //     await songs.increment({
  //         'age': 2,
  //         'cash': 100
  //     });

  //     // If the values are incremented by the same amount, you can use this other syntax as well:
  //     await jane.increment(['age', 'cash'], { by: 2 });

}