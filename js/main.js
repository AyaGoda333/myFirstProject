/*arrow with appear and disappear paragraph */

var icons = document.querySelectorAll(".section521 .i i");
var colors = document.querySelectorAll(".section521");
var divs = document.querySelectorAll(".section522");

icons.forEach(icon => {
    icon.onclick = function () {
        if (icon.classList.contains("fa-chevron-right")) {
            icon.classList.remove("fa-chevron-right");
            icon.classList.add("fa-chevron-down");
            divs.forEach(div => {
                colors.forEach(color => {


                    if (div.classList.contains("1") && icon.classList.contains("1") && color.classList.contains("1")) {
                        div.classList.remove("section522");
                        div.classList.add("sec522");
                        color.style.color = "#FFA500";
                    } else if (div.classList.contains("2") && icon.classList.contains("2") && color.classList.contains("2")) {
                        div.classList.remove("section522");
                        div.classList.add("sec522");
                        color.style.color = "#FFA500";
                    } else if (div.classList.contains("3") && icon.classList.contains("3") && color.classList.contains("3")) {
                        div.classList.remove("section522");
                        div.classList.add("sec522");
                        color.style.color = "#FFA500";
                    } else if (div.classList.contains("4") && icon.classList.contains("4") && color.classList.contains("4")) {
                        div.classList.remove("section522");
                        div.classList.add("sec522");
                        color.style.color = "#FFA500";
                    }
                });

            });
        } else {
            icon.classList.add("fa-chevron-right");
            icon.classList.remove("fa-chevron-down");
            divs.forEach(div => {
                colors.forEach(color => {
                    if (div.classList.contains("1") && icon.classList.contains("1") && color.classList.contains("1")) {
                        div.classList.add("section522");
                        div.classList.remove("sec522");
                        color.style.color = "#000000";
                    } else if (div.classList.contains("2") && icon.classList.contains("2") && color.classList.contains("2")) {
                        div.classList.add("section522");
                        div.classList.remove("sec522");
                        color.style.color = "#000000";
                    } else if (div.classList.contains("3") && icon.classList.contains("3") && color.classList.contains("3")) {
                        div.classList.add("section522");
                        div.classList.remove("sec522");
                        color.style.color = "#000000";
                    } else if (div.classList.contains("4") && icon.classList.contains("4") && color.classList.contains("4")) {
                        div.classList.add("section522");
                        div.classList.remove("sec522");
                        color.style.color = "#000000";
                    }
                });
            });
        }
    }
});



/*...........scroll............*/

var arrows = document.querySelectorAll(".arrow");
var scroll = document.querySelector(".scroll");
arrows.forEach(arrow => {
    arrow.onclick = function () {
        if (arrow.classList.contains("arrow1")) {
            scroll.scrollLeft -= 25;
        } else {
            scroll.scrollLeft += 25;
        }
    }
});

/***.......counter.............***/
let couns = document.querySelectorAll(".coun")
let speed = 200;

couns.forEach((coun) => {
    let updateCount = () => {
        let target = +coun.getAttribute("data-target");
        let count = +coun.innerText;

        let inc = target / speed;
        if (count < target) {
            coun.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 200);
        } else {
            count.innerText = target
        }
    }
    updateCount();
});