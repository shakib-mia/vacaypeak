import Lenis from "lenis";
function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    // console.log(currentScrollY);
    if (scrollDirection === "up") {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.transition = "all 0.5s ease";
      //   document
      //     .getElementById("navbar")
      //     .classList.add("shadow-[0_0_80px_0_#2B245D21]");
    } else {
      document.getElementById("navbar").style.top = "-7rem";
      document.getElementById("navbar").style.transition = "all 0.5s ease";
    }

    if (currentScrollY > 0) {
      document.getElementById("navbar").style.boxShadow =
        "0 0 80px 0 #2B245D21";
    } else {
      document.getElementById("navbar").style.boxShadow = "none";
    }
  }
  // console.log(scrollDirection);

  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  //   console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
