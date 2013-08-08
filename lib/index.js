/**
 * dubdrop compatible task for reading an image file and creating a thumbnail.
 *
 * @package thumbdrop
 * @author drk <drk@diy.org>
 */

// readAsDataURL

/**
 * Constructor
 */
function createThumbdrop (callback) {
    return function thumbdrop (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var $img = document.createElement('img');
            $img.setAttribute('src', e.target.result);

            callback(null, $img)
        };

        reader.readAsDataURL(file);
    };
};

/**
 * Export
 */
module.exports = createThumbdrop;
