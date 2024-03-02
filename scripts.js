document.addEventListener("DOMContentLoaded", function() {
    const scrollbar = document.getElementById("scrollbar");
    const handle = document.getElementById("handle");

    let isDragging = false;
    let startOffset = 0;

    handle.addEventListener("mousedown", function(e) {
        isDragging = true;
        startOffset = e.clientY - handle.offsetTop;
    });

    document.addEventListener("mouseup", function() {
        isDragging = false;
    });

    document.addEventListener("mousemove", function(e) {
        if (isDragging) {
            let newOffset = e.clientY - startOffset;
            if (newOffset >= 0 && newOffset <= scrollbar.clientHeight - handle.clientHeight) {
                handle.style.top = newOffset + "px";
                let contentScroll = (newOffset / (scrollbar.clientHeight - handle.clientHeight)) * (document.documentElement.scrollHeight - window.innerHeight);
                window.scrollTo(0, contentScroll);
            }
        }
    });
});
