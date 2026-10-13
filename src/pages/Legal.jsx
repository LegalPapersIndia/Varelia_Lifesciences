import { useEffect } from "react";
import LegalPage from "../components/LegalPage";
import { legalDocs } from "../data/legalContent";

const Legal = ({ type }) => {
  const doc = legalDocs[type];

  useEffect(() => {
    if (doc) document.title = `${doc.title} | Varelia Lifesciences`;
  }, [doc]);

  if (!doc) return null;
  return <LegalPage doc={doc} />;
};

export default Legal;