// Attributing the JS to header and decorating "li" by JS properties //
var headSlideIndex = 1, maxHeadSlide = 2; // Two pictures optimised //
function setHeadSlide() {
    var head = document.getElementsByClassName("head");
    var headTextLi = head[0].getElementsByClassName("text")[0].getElementsByTagName('ul')[0].getElementsByTagName('li');
    console.log( headTextLi );
    // image attributing to headSlideIndex//
    var bg = 'img/head-slide-' + headSlideIndex + '.jpg?1';
    console.log( bg );
    head[0].style.backgroundImage = "url("+ bg +")";
    //headTextLi.for( function(v,i){ v.style.display = 'none'; } );
    for (let i of headTextLi) {
        i.style.display = 'none';
    }
    headTextLi[ headSlideIndex-1 ].style.display = 'inline';
    headSlideIndex += 1;
    if( headSlideIndex>maxHeadSlide ) headSlideIndex=1;
    setTimeout( setHeadSlide, 3000 );
}
setHeadSlide()
