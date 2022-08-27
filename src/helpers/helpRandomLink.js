const contactLinks = [
  "https://javiervaleriano.github.io/javiervaleriano-portfolio",
  "https://codepen.io/javiervaleriano",
  "https://devchallenges.io/portfolio/javiervaleriano",
  "https://github.com/javiervaleriano",
  "https://twitter.com/javaleriano2",
  "https://www.linkedin.com/in/javier-valeriano1508/"
];

export const helpRandomLink = () => {
  let randomIndex = Math.floor(Math.random() * contactLinks.length);

  return contactLinks[randomIndex];
};