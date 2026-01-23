"use client";

import React, { useState } from "react";
import Wrapper from "@/features/shared/layout/wrapper";
import Title from "../components/title";
import { CONTACT_MODEL } from "@/utils/models";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    // Resetear el formulario
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      className="w-full bg-[#fefefe] relative py-6 lg:py-20"
      id="contact"
    >
      <Wrapper>
        <div className="w-full relative flex flex-col items-center gap-8 lg:gap-12 px-4 lg:px-0">
          {/* Título y descripción */}
          <div className="w-full max-w-[700px] flex flex-col items-center gap-4">
            <Title
              type="primary"
              title={CONTACT_MODEL.title}
              subtitle={CONTACT_MODEL.tooltip}
            />
            <p className="w-full text-center text-[15px] sm:text-2xl font-mulish">
              {CONTACT_MODEL.description}
            </p>
          </div>

          {/* Contenedor principal con formulario e información */}
          <div className="w-full max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Formulario */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-base font-mulish font-semibold text-[#333]"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className="px-4 py-3 border border-[#ddd] rounded-lg focus:outline-none focus:border-[#8b0000] focus:ring-1 focus:ring-[#8b0000] transition-colors"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-base font-mulish font-semibold text-[#333]"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="px-4 py-3 border border-[#ddd] rounded-lg focus:outline-none focus:border-[#8b0000] focus:ring-1 focus:ring-[#8b0000] transition-colors"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-base font-mulish font-semibold text-[#333]"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Tu número de teléfono"
                  className="px-4 py-3 border border-[#ddd] rounded-lg focus:outline-none focus:border-[#8b0000] focus:ring-1 focus:ring-[#8b0000] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-base font-mulish font-semibold text-[#333]"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Asunto de tu mensaje"
                  className="px-4 py-3 border border-[#ddd] rounded-lg focus:outline-none focus:border-[#8b0000] focus:ring-1 focus:ring-[#8b0000] transition-colors"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-base font-mulish font-semibold text-[#333]"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje..."
                  rows={5}
                  className="px-4 py-3 border border-[#ddd] rounded-lg focus:outline-none focus:border-[#8b0000] focus:ring-1 focus:ring-[#8b0000] transition-colors resize-none font-mulish"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#8b0000] text-white px-6 py-3 text-base rounded-xl hover:bg-amber-800 hover:scale-103 transition-all font-mulish font-semibold"
              >
                Enviar Mensaje
              </button>
            </form>

            {/* Información de contacto */}
            <div className="flex flex-col gap-6">
              {/* Email */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold font-cinzel text-[#8b0000]">
                  Correo Electrónico
                </h3>
                <a
                  href={`mailto:${CONTACT_MODEL.email}`}
                  className="text-[15px] sm:text-lg text-[#333] hover:text-[#8b0000] transition-colors font-mulish"
                >
                  {CONTACT_MODEL.email}
                </a>
              </div>

              {/* Teléfono */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold font-cinzel text-[#8b0000]">
                  Teléfono
                </h3>
                <a
                  href={`tel:${CONTACT_MODEL.phone}`}
                  className="text-[15px] sm:text-lg text-[#333] hover:text-[#8b0000] transition-colors font-mulish"
                >
                  {CONTACT_MODEL.phone}
                </a>
              </div>

              {/* Ubicaciones */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold font-cinzel text-[#8b0000]">
                  Ubicación
                </h3>
                {CONTACT_MODEL.locations.map((location, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <p className="text-[15px] sm:text-lg font-semibold text-[#333] font-mulish">
                      {location.city}
                    </p>
                    <p className="text-[15px] sm:text-lg text-[#666] font-mulish">
                      {location.address}
                    </p>
                  </div>
                ))}
              </div>

              {/* Redes sociales */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold font-cinzel text-[#8b0000]">
                  Síguenos
                </h3>
                <div className="flex gap-4">
                  <a
                    href={CONTACT_MODEL.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] sm:text-lg text-[#333] hover:text-[#8b0000] transition-colors font-mulish underline"
                  >
                    Facebook
                  </a>
                  <a
                    href={CONTACT_MODEL.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] sm:text-lg text-[#333] hover:text-[#8b0000] transition-colors font-mulish underline"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ContactSection;
