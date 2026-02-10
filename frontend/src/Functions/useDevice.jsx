import { useState, useEffect } from "react";

export function useDevice() {
  const [device, setDevice] = useState({
    mobile: false,
    orientation: "landscape"
  });

  useEffect(() => {
    function update() {
      const mobile = /android|iphone|ipad|iPod|mobile/i.test(navigator.userAgent);
      const orientation = window.matchMedia("(orientation: portrait)").matches
        ? "portrait"
        : "landscape";

      setDevice({ mobile, orientation });
    }

    window.addEventListener("resize", update);
    update(); // initial

    return () => window.removeEventListener("resize", update);
  }, []);

  return device;
}
