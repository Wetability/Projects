function mainTitle(title) {
  const mainTitle = document.createElement("h1");
  mainTitle.id = "js-title";
  mainTitle.textContent = title;
  return mainTitle;
}

export default mainTitle;
