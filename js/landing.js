import swal from "sweetalert";
function alertComingSoon(){
    swal({
        title: "COMING SOON!",
        text: "We are currently working on this module.",
        icon: "error",
        button: "Got it",
    });
};
function alert1() {
    alert("WORKS!");
}
function loaded(){
    swal({
        title: "ONLY IN MASSACHUSETTS.",
        text: "NOTE, THIS SERVICE IS ONLY AVAILABLE IN MASSACHUSETTS AT THE MOMENT..",
        icon: "warning",
        button: "GOT IT.",
    });
}
