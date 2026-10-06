function showMessage() {

    alert(
        "🚀 استمر في التعلم والاستكشاف... فالمستقبل يبدأ بفكرة!"
    );

}


function toggleMenu() {

    const links = document.querySelector(".nav-links");

    if (links.style.display === "flex") {

        links.style.display = "none";

    } else {

        links.style.display = "flex";

        links.style.flexDirection = "column";

        links.style.position = "absolute";

        links.style.top = "70px";

        links.style.right = "20px";

        links.style.background = "#0f172a";

        links.style.padding = "20px";

        links.style.borderRadius = "15px";

    }

}
