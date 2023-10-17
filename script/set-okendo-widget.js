document.addEventListener('quizKitResultsPageLoaded', function (e) {
  console.log("logging details from quizKitResultsPageLoaded event");
  console.log(e.detail);
  console.log(e.detail.recommendedProducts);
  // loop through the data (e.detail) and send it anywhere or use it for your needs
}, false);
