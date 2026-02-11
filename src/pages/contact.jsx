import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { toast } from "react-toastify";
import { firedb } from "../firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { MyContext } from "../context/my-context";
import { ContactForm } from "../components/contact-form";
import { Faqs } from "./faqs";
import { Loader } from "../components/components/loading";
export const ContactPage = () => {
   
    const { loading, setLoading } = useContext(MyContext);
 

    return (
        <section
            className="w-full min-h-screen p-5 md:mt-5 md:p-5 bg-black"
            id="contact"
        >
            {loading && (
               <Loader/>
            )}
        <Faqs/>
         <ContactForm/>
        </section>
    )
}