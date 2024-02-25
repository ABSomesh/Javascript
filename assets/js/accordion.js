$(function () {
    var title = $("#accordion .title");
    title.on("click", function () {
        var ThisIt = $(this);
        $("#accordion .title").not(ThisIt).removeClass("active");
        $(this).toggleClass("active");
        $("#accordion .text").not(ThisIt.next(".text")).slideUp(400);
        ThisIt.next(".text").slideToggle(400);
    })
    // .eq(0).click(); To open on load
});