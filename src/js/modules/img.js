/* eslint-disable */

const IMG = ($ => {

    const init = () => {
        _make_base();
    };

    let canvas = document.getElementById('viewport'),
        context = canvas.getContext('2d');

    function _make_base() {
        let base_image = new Image();
        base_image.src = './assets/images/1.jpeg';
        base_image.onload = function() {
            canvas.width = base_image.width;
            canvas.height = base_image.height;
            context.drawImage(base_image, 0, 0);
        }
    }

    return {
        init
    };

})(jQuery);

export default IMG;