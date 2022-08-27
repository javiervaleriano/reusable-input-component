import { useEffect, useState } from "react";
import { helpRandomLink } from "../../helpers/helpRandomLink";
import "../styles/UI/Footer.css";

const Footer = () => {
  const [authorLink, setAuthorLink] = useState(null);

  useEffect(() => {
    if (!authorLink) setAuthorLink(helpRandomLink());

    let authorLinkInterval = setInterval(() => {
      setAuthorLink(helpRandomLink());
    }, 5000);

    return () => clearInterval(authorLinkInterval);
    // eslint-disable-next-line
  }, []);

  return (
    <footer>
      <p className="author-credits">creado por <a href={authorLink} target="_blank" rel="noreferrer" className="author-link">Javier Valeriano</a></p>
    </footer>
  );
}

export default Footer;