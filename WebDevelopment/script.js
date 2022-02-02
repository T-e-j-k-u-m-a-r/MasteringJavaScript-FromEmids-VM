//console.log("Welcome to JavaScript Programming...");

var myWindow;
function openOrangeHRM() {
    myWindow = window.open('https://opensource-demo.orangehrmlive.com/', '_blank', "width=800px,height=400px,top=100px,left=400px")
}

function closeOrangeHRM() {
    myWindow.close()
}

function back() {

    window.history.back()

}

function forward() {

    window.history.forward()

}

function go() {

    window.open('https://www.emids.com', "", "_parent")

}


function simpleAlert() {
    window.alert('Im simple alert')
}

function confirmAlert() {
    window.confirm('Im confirm based alert')
}

function promptAlert() {
    window.prompt('Im prompt based alert')
}
