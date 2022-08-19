const db = require('./db')
const Album = require('./Album');
const Artist = require('./Artist');
const Song = require('./Song')


// require each of your models here...

// ...and give them some nice associations here!
Artist.hasMany(Album);
Album.belongsTo(Artist);

Album.hasMany(Song);
Song.belongsTo(Album)


module.exports = {
  db, Album, Artist, Song
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
}
