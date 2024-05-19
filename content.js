
//
function ytautoadskip_function ()
{
    var skip = document.querySelectorAll('.ytp-skip-ad-button');
    var preview_ad = document.querySelectorAll('.ytp-preview-ad');

    if (skip.length <= 0 && preview_ad.length <= 0)
        return 0;

    ad_v = document.querySelectorAll('.video-stream.html5-main-video')[0];
    ad_v.currentTime = ad_v.duration-0.1;

    skip[0].click();

    console.log('An ad was just skipped');
}

//
if (typeof window.ytautoadskip_time == 'undefined')
    window.ytautoadskip_time = setInterval(ytautoadskip_function, 1530);
setTimeout(ytautoadskip_function, 500);