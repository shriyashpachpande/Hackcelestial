// "use client";
// import React, { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
// import emailjs from "@emailjs/browser";
// import { useTranslation } from "react-i18next";

// export default function Contact() {
//     const form = useRef();
//     const [sending, setSending] = useState(false);
//     const [openFAQ, setOpenFAQ] = useState(null);
//     const { t, i18n } = useTranslation();

//     const sendEmail = async (e) => {
//         e.preventDefault();
//         setSending(true);
//         try {
//             await emailjs.sendForm(
//                 "service_r1qcsm7",
//                 "template_d2il9zg",
//                 form.current,
//                 "aJXtZw4PMqHN078NI"
//             );
//             alert(t("contact.success"));
//             form.current.reset();
//         } catch (error) {
//             console.error("EmailJS error:", error);
//             // error.text might be undefined in some cases; show generic fallback
//             alert(t("contact.failure") + (error?.text ? `: ${error.text}` : ""));
//         } finally {
//             setSending(false);
//         }
//     };

//     // FAQs come from translations as array of objects
//     const faqs = t("contact.faqs", { returnObjects: true });

//     const handleLanguageChange = (e) => {
//         i18n.changeLanguage(e.target.value);
//     };

//     return (
//         <div className="p-6 max-w-3xl mx-auto bg-[#f5f5f5] shadow-lg rounded-xl space-y-8 w-full">
//             {/* Language selector (small) */}


//             <h2 className="text-3xl font-bold text-center">{t("contact.title")}</h2>

//             {/* Contact Info */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//                 <div className="p-4 bg- rounded-xl shadow">
//                     <Mail className="mx-auto text-green-600 mb-2" />
//                     <p className="font-semibold">{t("contact.email.label")}</p>
//                     <p className="text-gray-600">{t("contact.email.value")}</p>
//                 </div>
//                 <div className="p-4 bg-[#f5f5f5] rounded-xl shadow">
//                     <Phone className="mx-auto text-green-600 mb-2" />
//                     <p className="font-semibold">{t("contact.phone.label")}</p>
//                     <p className="text-gray-600">{t("contact.phone.value")}</p>
//                 </div>
//                 <div className="p-4 bg-gray-50 rounded-xl shadow">
//                     <MapPin className="mx-auto text-green-600 mb-2" />
//                     <p className="font-semibold">{t("contact.location.label")}</p>
//                     <p className="text-gray-600">{t("contact.location.value")}</p>
//                 </div>
//             </div>

//             {/* Contact Form */}
//             <form ref={form} onSubmit={sendEmail} className="space-y-4">
//                 <input
//                     type="text"
//                     name="user_name"
//                     placeholder={t("contact.form.namePlaceholder")}
//                     required
//                     className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//                 />
//                 <input
//                     type="email"
//                     name="user_email"
//                     placeholder={t("contact.form.emailPlaceholder")}
//                     required
//                     className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//                 />
//                 <select name="subject" required className="w-full p-3 border rounded-lg">
//                     <option value="">{t("contact.form.selectPlaceholder")}</option>
//                     <option value="support">{t("contact.subjects.support")}</option>
//                     <option value="feedback">{t("contact.subjects.feedback")}</option>
//                     <option value="business">{t("contact.subjects.business")}</option>
//                 </select>
//                 <textarea
//                     name="message"
//                     placeholder={t("contact.form.messagePlaceholder")}
//                     rows="5"
//                     required
//                     className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
//                 ></textarea>
//                 <button
//                     type="submit"
//                     disabled={sending}
//                     className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition flex justify-center"
//                 >
//                     {sending ? t("contact.button.sending") : t("contact.button.send")}
//                 </button>
//             </form>

//             {/* Social Links */}
//             <div className="flex justify-center space-x-4">
//                 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                     <Linkedin className="text-green-600 hover:text-green-700" size={28} />
//                 </a>
//                 <a href="https://github.com" target="_blank" rel="noopener noreferrer">
//                     <Github className="text-green-600 hover:text-green-700" size={28} />
//                 </a>
//             </div>

//             {/* FAQ Section */}
//             <div className="bg-gray-50 p-4 rounded-xl shadow-md">
//                 <h3 className="text-xl font-semibold mb-3">{t("contact.faqTitle")}</h3>
//                 {faqs.map((faq, index) => (
//                     <div key={index} className="border-b py-2">
//                         <button
//                             onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
//                             className="flex justify-between w-full text-left text-lg font-medium"
//                         >
//                             {faq.question}
//                             <span>{openFAQ === index ? "−" : "+"}</span>
//                         </button>
//                         <AnimatePresence>
//                             {openFAQ === index && (
//                                 <motion.p
//                                     className="text-gray-700 mt-2"
//                                     initial={{ opacity: 0, height: 0 }}
//                                     animate={{ opacity: 1, height: "auto" }}
//                                     exit={{ opacity: 0, height: 0 }}
//                                     transition={{ duration: 0.3 }}
//                                 >
//                                     {faq.answer}
//                                 </motion.p>
//                             )}
//                         </AnimatePresence>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }







// "use client";
// import React, { useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
// import emailjs from "@emailjs/browser";
// import { useTranslation } from "react-i18next";

// export default function Contact() {
//     const form = useRef();
//     const [sending, setSending] = useState(false);
//     const [openFAQ, setOpenFAQ] = useState(null);
//     const { t, i18n } = useTranslation();

//     const sendEmail = async (e) => {
//         e.preventDefault();
//         setSending(true);
//         try {
//             await emailjs.sendForm(
//                 "service_r1qcsm7",
//                 "template_d2il9zg",
//                 form.current,
//                 "aJXtZw4PMqHN078NI"
//             );
//             alert(t("contact.success"));
//             form.current.reset();
//         } catch (error) {
//             console.error("EmailJS error:", error);
//             alert(t("contact.failure") + (error?.text ? `: ${error.text}` : ""));
//         } finally {
//             setSending(false);
//         }
//     };

//     const faqs = t("contact.faqs", { returnObjects: true });

//     const handleLanguageChange = (e) => {
//         i18n.changeLanguage(e.target.value);
//     };

//     return (
//         <div className="min-h-screen w-full bg-[#f5f5f5]">
//             <div
//                 className="p-6 max-w-4xl mx-auto rounded-xl space-y-8 w-full bg-[#f5f5f5]"
//                 style={{
//                     boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px'
//                 }}
            
//             >
//                 <h2 className="text-3xl font-bold text-center text-blue-900">{t("contact.title")}</h2>

//                 {/* Contact Info */}
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//                     <div className="p-4 bg-[#f5f5f5] rounded-xl"
//                         style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }}
//                     >
//                         <Mail className="mx-auto text-green-600 mb-2" />
//                         <p className="font-semibold">{t("contact.email.label")}</p>
//                         <p className="text-gray-600">{t("contact.email.value")}</p>
//                     </div>
//                     <div className="p-4 bg-[#f5f5f5] rounded-xl "
//                         style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }}
//                     >
//                         <Phone className="mx-auto text-green-600 mb-2" />
//                         <p className="font-semibold">{t("contact.phone.label")}</p>
//                         <p className="text-gray-600">{t("contact.phone.value")}</p>
//                     </div>
//                     <div className="p-4 bg-[#f5f5f5] rounded-xl"
//                         style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }}
//                     >
//                         <MapPin className="mx-auto text-green-600 mb-2" />
//                         <p className="font-semibold">{t("contact.location.label")}</p>
//                         <p className="text-gray-600">{t("contact.location.value")}</p>
//                     </div>
//                 </div>

//                 {/* Contact Form */}
//                 <form ref={form} onSubmit={sendEmail} className="space-y-4">
//                     <input
//                         type="text"
//                         name="user_name"
//                         placeholder={t("contact.form.namePlaceholder")}
//                         required
//                         className="flex-1 min-w-0 rounded-xl px-3 py-2 border text-justify border-gray-300 focus:outline-none sm:px-4 sm:py-2 w-full"
//                         style={{
//                             boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
//                         }}
//                     />
//                     <input
//                         type="email"
//                         name="user_email"
//                         placeholder={t("contact.form.emailPlaceholder")}
//                         required
//                         className="flex-1 min-w-0 rounded-xl px-3 py-2 border text-justify border-gray-300 focus:outline-none sm:px-4 sm:py-2 w-full"
//                         style={{
//                             boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
//                         }}
//                     />
//                     <select name="subject" required className="flex-1 min-w-0 rounded-xl px-3 py-2 border text-justify border-gray-300 focus:outline-none sm:px-4 sm:py-2 w-full"
//                         style={{
//                             boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
//                         }}>
//                         <option value="">{t("contact.form.selectPlaceholder")}</option>
//                         <option value="support">{t("contact.subjects.support")}</option>
//                         <option value="feedback">{t("contact.subjects.feedback")}</option>
//                         <option value="business">{t("contact.subjects.business")}</option>
//                     </select>
//                     <textarea
//                         name="message"
//                         placeholder={t("contact.form.messagePlaceholder")}
//                         rows="5"
//                         required
//                         className="flex-1 min-w-0 rounded-xl px-3 py-2 border text-justify border-gray-300 focus:outline-none sm:px-4 sm:py-2 w-full"
//                         style={{
//                             boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
//                         }}
//                     ></textarea>
//                     <button
//                         type="submit"
//                         disabled={sending}
//                         className="flex-shrink-0 px-4 py-2 rounded-xl text-white font-bold 
//                      disabled:bg-[#f5f5f5] disabled:cursor-not-allowed cursor-pointer sm:px-6 w-full bg-black mt-5"
//                         style={{
//                             boxShadow:
//                                 "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
//                         }}
//                     >
//                         {sending ? t("contact.button.sending") : t("contact.button.send")}
//                     </button>
//                 </form>

//                 {/* Social Links */}


//                 {/* FAQ Section */}
//                 <div className="bg-[#F5F5F5] p-4 rounded-xl shadow-md">
//                     <h3 className="text-xl font-semibold mb-3">{t("contact.faqTitle")}</h3>
//                     {faqs.map((faq, index) => (
//                         <div key={index} className="border-b py-2">
//                             <button
//                                 onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
//                                 className="flex justify-between w-full text-left text-lg font-medium"
//                             >
//                                 {faq.question}
//                                 <span>{openFAQ === index ? "−" : "+"}</span>
//                             </button>
//                             <AnimatePresence>
//                                 {openFAQ === index && (
//                                     <motion.p
//                                         className="text-gray-700 mt-2"
//                                         initial={{ opacity: 0, height: 0 }}
//                                         animate={{ opacity: 1, height: "auto" }}
//                                         exit={{ opacity: 0, height: 0 }}
//                                         transition={{ duration: 0.3 }}
//                                     >
//                                         {faq.answer}
//                                     </motion.p>
//                                 )}
//                             </AnimatePresence>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }































// "use client";
// import React, { useRef, useState, useEffect } from "react";
// import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
// import emailjs from "@emailjs/browser";
// import { useTranslation } from "react-i18next";

// // GSAP
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// export default function Contact() {
//   const form = useRef(null);
//   const root = useRef(null);
//   const [sending, setSending] = useState(false);
//   const [openFAQ, setOpenFAQ] = useState(null);
//   const { t, i18n } = useTranslation();

//   const sendEmail = async (e) => {
//     e.preventDefault();
//     setSending(true);
//     try {
//       await emailjs.sendForm(
//         "service_r1qcsm7",
//         "template_d2il9zg",
//         form.current,
//         "aJXtZw4PMqHN078NI"
//       );
//       alert(t("contact.success"));
//       form.current.reset();
//     } catch (error) {
//       console.error("EmailJS error:", error);
//       alert(t("contact.failure") + (error?.text ? `: ${error.text}` : ""));
//     } finally {
//       setSending(false);
//     }
//   };

//   const faqs = t("contact.faqs", { returnObjects: true });

//   const handleLanguageChange = (e) => {
//     i18n.changeLanguage(e.target.value);
//   };

//   // Initial mount micro animation for the page title
//   useGSAP(
//     () => {
//       gsap.from(".contact-title", {
//         y: 12,
//         autoAlpha: 0,
//         duration: 0.5,
//         ease: "power2.out",
//       });
//     },
//     { scope: root }
//   ); // Official React pattern for GSAP setup/cleanup [4][2]

//   // Badges then fields animation when section enters viewport
//   useGSAP(
//     () => {
//       // Prepare initial states
//       gsap.set("#badge-email", { x: -48, autoAlpha: 0 });
//       gsap.set("#badge-phone", { y: 48, autoAlpha: 0 });
//       gsap.set("#badge-location", { x: 48, autoAlpha: 0 });

//       const fields = gsap.utils.toArray(".contact-field");
//       fields.forEach((el, i) => {
//         const fromX = i % 2 === 0 ? -48 : 48; // alternate L/R [5]
//         gsap.set(el, { x: fromX, autoAlpha: 0 });
//       });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".contact-root",
//           start: "top 80%",
//           end: "bottom 60%",
//           once: true,
//         },
//         defaults: { ease: "power3.out" },
//       });

//       // Cards one-by-one from different directions
//       tl.to("#badge-email", { x: 0, autoAlpha: 1, duration: 0.5 })
//         .to("#badge-phone", { y: 0, autoAlpha: 1, duration: 0.5 }, "+=0.08")
//         .to("#badge-location", { x: 0, autoAlpha: 1, duration: 0.5 }, "+=0.08");

//       // Form fields after badges, alternating left/right with stagger
//       tl.to(fields, {
//         x: 0,
//         autoAlpha: 1,
//         duration: 0.5,
//         stagger: 0.12,
//       });
//     },
//     { scope: root }
//   ); // Timeline + ScrollTrigger orchestrates sequence and viewport entry [2][3]

//   return (
//     <div ref={root} className="min-h-screen w-full bg-[#f5f5f5] contact-root">
//       <div
//         className="p-6 max-w-4xl mx-auto rounded-xl space-y-8 w-full bg-[#f5f5f5]"
//         style={{
//           boxShadow:
//             "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
//         }}
//       >
//         <h2 className="contact-title text-3xl font-bold text-center text-blue-900">
//           {t("contact.title")}
//         </h2>

//         {/* Contact Info */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//           <div
//             id="badge-email"
//             className="p-4 bg-[#f5f5f5] rounded-xl"
//             style={{
//               boxShadow:
//                 "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
//             }}
//           >
//             <Mail className="mx-auto text-green-600 mb-2" />
//             <p className="font-semibold">{t("contact.email.label")}</p>
//             <p className="text-gray-600">{t("contact.email.value")}</p>
//           </div>
//           <div
//             id="badge-phone"
//             className="p-4 bg-[#f5f5f5] rounded-xl"
//             style={{
//               boxShadow:
//                 "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
//             }}
//           >
//             <Phone className="mx-auto text-green-600 mb-2" />
//             <p className="font-semibold">{t("contact.phone.label")}</p>
//             <p className="text-gray-600">{t("contact.phone.value")}</p>
//           </div>
//           <div
//             id="badge-location"
//             className="p-4 bg-[#f5f5f5] rounded-xl"
//             style={{
//               boxShadow:
//                 "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
//             }}
//           >
//             <MapPin className="mx-auto text-green-600 mb-2" />
//             <p className="font-semibold">{t("contact.location.label")}</p>
//             <p className="text-gray-600">{t("contact.location.value")}</p>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form ref={form} onSubmit={sendEmail} className="space-y-4">
//           <input
//             type="text"
//             name="user_name"
//             placeholder={t("contact.form.namePlaceholder")}
//             required
//             className="contact-field flex-1 min-w-0 rounded-xl px-3 py-2 border text-justify border-gray-300 focus:outline-none sm:px-4 sm:py-2 w-full"
//             style={{
//               boxShadow:
//                 "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
//             }}
//           />
//           <input
//             type="email"
//             name="user_email"
//             placeholder={t("contact.form.emailPlaceholder")}
//             required
//             className="contact-field flex-1 min-w-0 rounded-xl px-3 py-2 border text-justify border-gray-300 focus:outline-none sm:px-4 sm:py-2 w-full"
//             style={{
//               boxShadow:
//                 "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
//             }}
//           />
//           <select
//             name="subject"
//             required
//             className="contact-field flex-1 min-w-0 rounded-xl px-3 py-2 border text-justify border-gray-300 focus:outline-none sm:px-4 sm:py-2 w-full"
//             style={{
//               boxShadow:
//                 "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
//             }}
//           >
//             <option value="">{t("contact.form.selectPlaceholder")}</option>
//             <option value="support">{t("contact.subjects.support")}</option>
//             <option value="feedback">{t("contact.subjects.feedback")}</option>
//             <option value="business">{t("contact.subjects.business")}</option>
//           </select>
//           <textarea
//             name="message"
//             placeholder={t("contact.form.messagePlaceholder")}
//             rows="5"
//             required
//             className="contact-field flex-1 min-w-0 rounded-xl px-3 py-2 border text-justify border-gray-300 focus:outline-none sm:px-4 sm:py-2 w-full"
//             style={{
//               boxShadow:
//                 "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
//             }}
//           ></textarea>
//           <button
//             type="submit"
//             disabled={sending}
//             className="contact-field flex-shrink-0 px-4 py-2 rounded-xl text-white font-bold disabled:bg-[#f5f5f5] disabled:cursor-not-allowed cursor-pointer sm:px-6 w-full bg-black mt-5"
//             style={{
//               boxShadow:
//                 "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
//             }}
//           >
//             {sending ? t("contact.button.sending") : t("contact.button.send")}
//           </button>
//         </form>

        

//         {/* FAQ Section */}
//         <div className="bg-[#F5F5F5] p-4 rounded-xl shadow-md">
//           <h3 className="text-xl font-semibold mb-3">{t("contact.faqTitle")}</h3>
//           {faqs.map((faq, index) => (
//             <div key={index} className="border-b py-2">
//               <button
//                 onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
//                 className="flex justify-between w-full text-left text-lg font-medium"
//               >
//                 {faq.question}
//                 <span>{openFAQ === index ? "−" : "+"}</span>
//               </button>
//               {openFAQ === index && (
//                 <p className="text-gray-700 mt-2">{faq.answer}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }








































"use client";
import React, { useRef, useState } from "react";
import { Mail, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

// GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
  const form = useRef(null);
  const root = useRef(null);
  const [sending, setSending] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const { t } = useTranslation();

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.sendForm(
        "service_r1qcsm7",
        "template_d2il9zg",
        form.current,
        "aJXtZw4PMqHN078NI"
      );
      alert(t("contact.success"));
      form.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(t("contact.failure") + (error?.text ? `: ${error.text}` : ""));
    } finally {
      setSending(false);
    }
  };

  const faqs = t("contact.faqs", { returnObjects: true });

  // Animations
  useGSAP(
    () => {
      gsap.from(".contact-title", { y: 12, autoAlpha: 0, duration: 0.6 });
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      className="min-h-screen w-full bg-[#f5f5f5] px-5 sm:px-10 lg:px-40 py-16 contact-root"
    >
      {/* Title */}
      <h2 className="contact-title text-3xl md:text-6xl font-semibold text-center text-black mb-5">
        {t('Reach Us At Anytime')}
      </h2>
      <p className="text-center text-gray-600 mb-12">
        {t('Have questions or need any help? We’re here to help you with that')}
      </p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 *:"
      
      
      >
        {/* LEFT SIDE CONTACT INFO */}
        <div className="space-y-15">
          {/* Email */}
          <div className=" space-y-5 items-start gap-4 p-6 bg-[#f5f5f5] sm:ml-0 md:ml-20 rounded-xl "
          style={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}}
          >
            <Mail className="w-10 h-10 text-black" />
            <div className="space-y-5" >
              <p className="text-gray-700 text-justify">
                {t('Feel free to email me if you have any questions or need more details!')}
              </p>
              <a
                href="mailto:orbai@support.com"
                className="text-gray-600 "
              >
                clausesense@support.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className=" items-start space-y-5 gap-4 p-6 bg-[#f5f5f5] rounded-2xl sm:ml-0 md:ml-20"
          style={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}}
          >
            <Phone className="w-10 space-y-5 h-10 text-black" />
            <div className="space-y-5" >
              <p className="text-gray-700 text-justify">
                {t('Feel free to book a call if that’s more convenient and easier for you')}
              </p>
              <a href="#" className="text-gray-600 ">
                {t('Book a call')}
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM (original fields, untouched) */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#f5f5f5] rounded-xl shadow-md p-6 space-y-6 sm:mr-0 md:mr-20"
          style={{boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}
        >
          <input
            type="text"
            name="user_name"
            placeholder={t("contact.form.namePlaceholder")}
            required
            className="contact-field w-full rounded-lg px-3 py-3 border border-gray-300 focus:outline-none"
            style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          />
          <input
            type="email"
            name="user_email"
            placeholder={t("contact.form.emailPlaceholder")}
            required
            className="contact-field w-full rounded-lg px-3 py-3 border border-gray-300 focus:outline-none"
            style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          />
          <select
            name="subject"
            required
            className="contact-field w-full rounded-lg px-3 py-3 cursor-pointer border border-gray-300 focus:outline-none"
            style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          >
            <option value="">{t("contact.form.selectPlaceholder")}</option>
            <option value="support" className="cursor-pointer">{t("contact.subjects.support")}</option>
            <option value="feedback" className="cursor-pointer">{t("contact.subjects.feedback")}</option>
            <option value="business" className="cursor-pointer">{t("contact.subjects.business")}</option>
          </select>
          <textarea
            name="message"
            placeholder={t("contact.form.messagePlaceholder")}
            rows="5"
            required
            className="contact-field w-full rounded-lg px-3 py-3 border border-gray-300 focus:outline-none"
            style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          ></textarea>
          <button
            type="submit"
            disabled={sending}
            className="contact-field w-full bg-black text-white cursor-pointer font-semibold rounded-lg py-3 shadow-md disabled:bg-gray-400"
          >
            {sending ? t("contact.button.sending") : t("contact.button.send")}
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="mt-20 bg-[#f5f5f5] p-6 rounded-xl sm:ml-0 md:ml-20 sm:mr-0 md:mr-20"
      style={{boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}
      >
        <h3 className="text-xl font-semibold mb-4">
          {t("contact.faqTitle")}
        </h3>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-2">
            <button
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              className="flex justify-between w-full text-left text-lg font-medium"
            >
              {faq.question}
              <span>{openFAQ === index ? "−" : "+"}</span>
            </button>
            {openFAQ === index && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

