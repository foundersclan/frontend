import { useContext, useRef } from "react";
import { MyContext } from "../context/my-context";
import { ContactForm } from "../components/contact-form";
import { Faqs } from "./faqs";
import { Loader } from "../components/components/loading";
export const ContactPage = () => {
   
    const { loading } = useContext(MyContext);
    const contactFormRef = useRef(null);
    const scrollToContact = () => {
    contactFormRef.current?.scrollIntoView({ 
      behavior: "smooth", 
      block: "start" 
    });
  };

    return (
        <section
            className="w-full min-h-screen p-5 md:mt-5 md:p-5 bg-black"
            id="contact"
        >
            {loading && (
               <Loader/>
            )}
        <Faqs onButtonClick={scrollToContact}/>
        <div ref={contactFormRef} >
         <ContactForm/>
        </div>
        </section>
    )
}