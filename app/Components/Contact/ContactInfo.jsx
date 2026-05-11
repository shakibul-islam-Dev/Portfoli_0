import React from "react";
import { Mail, Phone, MessageCircle, ExternalLink } from "lucide-react";

const ContactInfo = () => {
  const contactData = [
    {
      id: 1,
      title: "Email",
      value: "ishakibul98@gmail.com",
      link: "mailto:ishakibul98@gmail.com?subject=Contact%20Query&body=Hello%20Shakil,",
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      bg: "bg-blue-500/10",
    },
    {
      id: 2,
      title: "Phone",
      value: "+880 1889138530",
      link: "tel:+8801889138530",
      icon: <Phone className="w-6 h-6 text-green-500" />,
      bg: "bg-green-500/10",
    },
    {
      id: 3,
      title: "WhatsApp",
      value: "Message me on WhatsApp",
      link: "https://wa.me/8801617897307",
      icon: <MessageCircle className="w-6 h-6 text-emerald-500" />,
      bg: "bg-emerald-500/10",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-black" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-zinc-400 mb-12 max-w-lg mx-auto text-sm md:text-base">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, my inbox is always open!
        </p>

        {/* Grid: Mobile (1 col), Tablet (2 col), Desktop (3 col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactData.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all duration-300 hover:-translate-y-2 flex flex-col items-center shadow-2xl"
            >
              {/* Icon Container */}
              <div
                className={`p-4 rounded-2xl ${item.bg} mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-zinc-400 text-sm mb-6 text-center break-all">
                {item.value}
              </p>

              <span className="flex items-center gap-2 text-xs font-bold text-blue-500 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                Connect Now <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
