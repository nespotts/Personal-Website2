$(document).ready(function () {
    updateCopyright();
});

function updateCopyright() {
    let year = new Date().getFullYear();
    $('.copyright').text(`© ${year} Nathan Spotts.`);
}