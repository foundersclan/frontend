import { useContext, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MyContext } from "../context/my-context";
import { ContactForm } from "../components/contact-form";
import { Loader } from "../components/components/loading";
import { Faqs } from "./Faqs";
export const ContactPage = () => {

  const { loading } = useContext(MyContext);
  const contactFormRef = useRef(null);
  const location = useLocation();

  const scrollToContact = () => {
    contactFormRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const timer = setTimeout(() => {
        scrollToContact();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <section
      className="w-full min-h-screen p-5 md:mt-5 md:p-5 bg-black"
      id="contact"
    >
      {loading && (
        <Loader />
      )}
      <Faqs onButtonClick={scrollToContact} />
      <div ref={contactFormRef} >
        <ContactForm />
      </div>
    </section>
  )
}