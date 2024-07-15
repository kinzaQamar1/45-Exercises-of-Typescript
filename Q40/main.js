//creating function make-album.
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//creating three function and creating 3 variables with different values
var album1 = make_album("kinza", "album no 1");
var album2 = make_album("ayesha", "album no 2");
//calling a make_album function with third parameter
var album3 = make_album("ali", "album no 3", 10);
console.log(album1);
console.log(album2);
console.log(album3);
