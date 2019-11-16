let nameArray = [];
let pageTitle = document.title.toString().toLowerCase();
nameArray.push(pageTitle);
const metas = document.getElementsByTagName('meta');
for (let i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('name') === "description") {
        let pageContent = metas[i].getAttribute('content').toLocaleLowerCase();
        nameArray.push(pageContent);
    }
}
console.log(nameArray);
function checkVideoSite(nameArray) {
    let isVideoSite = false;
    for (let i = 0; i < nameArray.length; i++) {
        if (nameArray[i].indexOf("videos")>-1) {
            isVideoSite = true;
        }
    }
    return isVideoSite;
}

checkVideoSite(nameArray) && window.location.replace("https://www.google.com");