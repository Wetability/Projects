function homeLink(text) {
  const homeLink = document.createElement("a");
  homeLink.id = "js-home";
  homeLink.href = "../../index.html";
  homeLink.textContent = text;
  return homeLink;
}

export default homeLink;
