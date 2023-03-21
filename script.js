
// update og:title
document.querySelector('[property="og:title"]').setAttribute('content', "Boss Pods")

// update twitter:title

// update the "regular" title 
document.title = "Boss Pods";

let title = "Boss Pods";
let description = "Catálogo Boss Pods"
let image = "images/logo.png"

function setTitle(title) {
    document.title = yourTitle;
    document.querySelector('[property="og:title"]').setAttribute('content', title);
    document.querySelector('[name="twitter:title"]').setAttribute('content', title);
  }
  
  function setDescription(description) {
    document.querySelector('[name="description"]').setAttribute('content', description);
    document.querySelector('[property="og:description"]').setAttribute('content', description);
    document.querySelector('[name="twitter:description"]').setAttribute('content', description);
  }
  
  function setImage(image) {
    document.querySelector('[property="og:image"]').setAttribute('content', image);
    document.querySelector('[name="twitter:image"]').setAttribute('content', image);
  }

  setTitle(title);
  setDescription(description);
  setImage(image);