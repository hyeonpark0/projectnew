//preload
$(window).on('load', () => {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow': 'visible'});
});

$(() => {
    const nasaUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=300&page=1';
    const backgroundNasa = 'https://api.nasa.gov/planetary/apod';
    const apiKey = 'api_key=xyVcIKOHUQT4yUhCA2f3UDm0onilPJh21ky8mJun';
    // variables
  const apiKey = 'xyVcIKOHUQT4yUhCA2f3UDm0onilPJh21ky8mJun';
  const urlNasa = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  const urlMars = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=${apiKey}`;
  const hiddenGallery = $('.gallery-content').last();

    const addFirstBackground = () => {
        $.ajax({
            method: "GET",
            url: backgroundNasa + '?' + apiKey,
            dataType: "json",
        }).done(function (response) {
            backgroundPod(response);
        });

    };
    const backgroundPod = (podObject) => {
        $('.secondSection').css('backgroundImage', `url(${podObject.hdurl})`);
    };
    addFirstBackground();

});
