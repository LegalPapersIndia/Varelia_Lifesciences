import { createContext, useContext, useState, useCallback } from "react";
import EnquiryModal from "../components/EnquiryModal";

// Poori site mein "Request a Quote" ka ek hi popup — kisi bhi button se openQuote() call karo
const QuoteModalContext = createContext({ openQuote: () => {} });

// eslint-disable-next-line react-refresh/only-export-components
export const useQuoteModal = () => useContext(QuoteModalContext);

export const QuoteModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("domestic");

  // openQuote() ya openQuote("export") — onClick={openQuote} se event aaye to bhi domestic hi rahega
  const openQuote = useCallback((r) => {
    setRoute(r === "export" ? "export" : "domestic");
    setOpen(true);
  }, []);
  const closeQuote = useCallback(() => setOpen(false), []);

  return (
    <QuoteModalContext.Provider value={{ openQuote }}>
      {children}
      <EnquiryModal
        open={open}
        onClose={closeQuote}
        defaultRoute={route}
        heading="Request a Quote"
      />
    </QuoteModalContext.Provider>
  );
};