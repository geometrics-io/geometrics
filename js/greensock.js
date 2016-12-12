document.addEventListener("DOMContentLoaded", function() {
    tl= new TimelineLite();
    tl
        .from( '.home-image', 12,{scale:.01, opacity:1})
        .from( '.home-image', 50,{rotation: 360, repeat: -1, ease:Linear.easeNone, paused: false});
});
