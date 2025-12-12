import React, { useState } from "react";

const FAQ = () => {
    
        const faqs = [
            {
                question: "what is ArtisanHub about?",
                answer:
                "ArtisanHub is an online marketplace where customers can find verified artisans such as tailors, pluumbers, barbers, painters, and more within their local area.",
            }, 
            {
                question: "How can i join the platform as an artisan?",
                answer:
                `Click "Join as Artisan", complete the registration form with
                your details and portfolio, and our team will verify your
                profile within 24-48 hours.`,
            },
            {
                question: "What if i'm not fluent in English?",
                answer: 
                "No problem! Our platform supports Pidgin and major Nigerian languages, plus icons and voice options to make navigation simple for everyone.",
            },
            {
                question: "Is registration free?",
                answer:
                "Yes, registration is completely free. Artisans can later upgrade for verification or premium visibility options.",
            }, 
            {
                question: "How do i know an artisan is trustworthy?",
                answer: 
                "verified artisans display a verification badge after NIN/BVN confirmation. Customers can also see reviews and ratings from past jobs.",
            }, 
            {
                question: "What makes ArtisanHub unique?",
                answer:
                "We 're built specifically for artisans - with voice support, Multilingual translation, Whatsapp integration, and verified profiles for trust and simplicity.",
            },
            {
                question: "How do customers contact artisans?",
                answer:
                "Customers can reach artisans directly through Whatsapp or phone using the contact buttons on artisan profiles"
            },
            {
                question: "What happens if there's a dispute between a customer and an artisan?",
                answer: "Our dispute resolution system ensures fairness. Both sides can submit evidence or feedback, and our support team will review and mediate promptly."
            },
            {
                question: "Can artisans upload images or videos of their work?",
                answer: "Yes! Artisans can upload images and videos, and even voice notes to showcase their skills and attract new clients."
            },
            {
                question: "How can i partner or volunteer with the platform?",
                answer: "We welcome partnerships with artisan associations, youth groups, and volunteers who want to support artisan growth. Contact us through our website to get involved."
            },
        ];

        const [activeIndex, setActiveIndex] = useState(null);
        
        // toggle handler
        const toggleFaq = (index) => {
            setActiveIndex(activeIndex === index ?
                 null : index);
        };

        return (
            <section className="bg-white py-4 px-6 md:px-16 lg:px-32">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center text-orange-600 mb-3 font-aladin">
                        Frequently Asked Questions
                    </h1>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                                    <button
                                    onClick={() => 
                                        toggleFaq(index)
                                    }
                                    className="w-full flex justify-between 
                                    items-center px-5 py-4 text-left text-gray-800 
                                    font-medium focus:outline-none">
                                        <span className="font-aladin">{faq.question}</span>
                                        <span className="text-orange-600 text-xl transition-all duration-700 ease-in-out">
                                            {activeIndex === index ? "-" : "+"}
                                        </span>
                                    </button>
                                        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
                                            activeIndex === index ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0"
                                        }`}>
                                        
                                            <p className="px-5 pb-4 text-gray-600 transition-all duration-700 ease-in-out">
                                                {faq.answer}
                                            </p>
                
                                    </div>
                                    </div>
                        ))}
                    </div>
                </div>
            </section>
        );
};

export default FAQ;