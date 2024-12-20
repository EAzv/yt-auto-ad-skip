
//
function ytautoadskip_function ()
{
    var skip_bt1 = document.querySelectorAll('.ytp-skip-ad-button');
    var preview_ad = document.querySelectorAll('.ytp-preview-ad');
    var ad_attributed = document.querySelectorAll('.ad-simple-attributed-string');

    if (skip_bt1.length <= 0 && preview_ad.length <= 0 && ad_attributed.length <= 0)
        return 0;

    _vslices = document.querySelectorAll('.video-stream.html5-main-video');

    for (const ad_v of _vslices) {
        ad_v.muted = true;
        ad_v.playbackRate = 3;
        
        if (ad_v.currentTime < (ad_v.duration - 1.5)) {
            if (ad_v.currentTime > 1)
                ad_v.currentTime = (ad_v.duration - 1.5);
        }
    }
        
    console.log('An ad was just skipped');
}
console.log("--------- YT Auto AD Skip ---------");

//
if (typeof window.ytautoadskip_time == 'undefined')
    window.ytautoadskip_time = setInterval(ytautoadskip_function, 1250);
setTimeout(ytautoadskip_function, 500);
setTimeout(ytautoadskip_function, 400);
setTimeout(ytautoadskip_function, 300);

// 
setTimeout(function () {
    for (const bttn in document.querySelectorAll('button[aria-label="No thanks"]'))
        bttn.click();
}, 1500);