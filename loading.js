document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    console.log("Page has fully loaded via readystatechange event!");
    var element = document.getElementsByClassName("loading");

    let styling = document.createElement("link");
    styling.rel = "stylesheet";
    styling.href = "style.css";
    document.getElementsByTagName('HEAD')[0].appendChild(styling);


    element[0].parentNode.removeChild(element[0]);
  } else    {
    console.log(document.readyState);
  }
});