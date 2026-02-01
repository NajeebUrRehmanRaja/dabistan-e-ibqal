"use client";

import { useEffect } from "react";

// 1. Declare the FB property on the global window interface
declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

const FacebookSDK = () => {
  useEffect(() => {
    // 2. Initialize the SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "Dabistan-e-Iqbal",
        cookie: true,
        xfbml: true,
        version: "v18.0",
      });
    };

    // 3. Load the SDK script if it hasn't been loaded yet
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      if (fjs && fjs.parentNode) {
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, "script", "facebook-jssdk");
  }, []);

  return null;
};

export default FacebookSDK;