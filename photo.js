/**
 * AngularJS Filters
 *
 * @author João Oliveira <@Joao_Oliveira>
 *
 */
"use strict";

//
// Returns url of photo
// johndoe_avatar -> /photos/johndoe_avatar.png
//
app.filter("jsPhotourl", function($filter) {
    return function(photoId) {
    	return photoId ? "/photos/" + photoId + ".png" : "";
    };
});
