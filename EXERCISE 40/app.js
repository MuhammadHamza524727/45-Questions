"use strict";
//  define the make album function
function make_album(artist_name, Album_title, tracks) {
    let album = {
        artist: artist_name,
        title: Album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions and creating three variables with different values
let album1 = make_album("Artist no 1", "Album title 1");
let album2 = make_album("Artist no 2", "Album title 2");
// calling a make album function with 3rd parameter
let album3 = make_album("Artist no 3", "Album title 3", 20);
// printing values of our object created by function
console.log(album1);
console.log(album2);
console.log(album3);
