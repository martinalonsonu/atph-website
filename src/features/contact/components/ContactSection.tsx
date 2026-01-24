"use client";

import React, { useState } from "react";
import Wrapper from "@/features/shared/layout/wrapper";
import { CONTACT_MODEL } from "@/utils/models";

const CheckIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.email.trim()) newErrors.email = "El email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email inválido";
    if (!formData.subject.trim()) newErrors.subject = "El asunto es requerido";
    if (!formData.message.trim()) newErrors.message = "El mensaje es requerido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simular envío - aquí iría la lógica real
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Formulario enviado:", formData);
      setSubmitStatus("success");

      // Resetear el formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Limpiar el mensaje de éxito después de 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Error al enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="w-full bg-gradient-to-br from-[#fff8f5] via-[#fffcf9] to-[#fff3ed] relative py-6 lg:py-20"
      id="contact"
    >
      <Wrapper>
        <div className="w-full relative flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-14 px-4 lg:px-0">
          {/* Título y descripción */}
          <div className="w-full max-w-[700px] flex flex-col gap-3 sm:gap-4 animate-fade-in">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <p className="font-work uppercase text-center text-xs sm:text-sm md:text-base lg:text-xl font-bold text-[#cca21c]">
                {CONTACT_MODEL.tooltip}
              </p>
              <h2 className="font-cinzel font-bold text-[#8b0000] text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase text-center leading-tight">
                {CONTACT_MODEL.title}
              </h2>
            </div>
            <p className="w-full text-center text-sm sm:text-base md:text-lg lg:text-xl font-mulish text-[#555] leading-relaxed">
              {CONTACT_MODEL.description}
            </p>
          </div>

          {/* Contenedor principal con formulario e información */}
          <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16">
            {/* Formulario */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:gap-5 md:gap-5 lg:gap-6"
            >
              {/* Mensaje de estado */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 flex items-start gap-2 sm:gap-3 animate-slide-down">
                  <CheckIcon />
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-green-800 font-mulish">
                      ¡Mensaje enviado!
                    </p>
                    <p className="text-xs sm:text-sm text-green-700 font-mulish">
                      Nos pondremos en contacto pronto.
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 flex items-start gap-2 sm:gap-3">
                  <p className="text-xs sm:text-sm text-red-800 font-mulish">
                    Hubo un error al enviar el mensaje. Intenta de nuevo.
                  </p>
                </div>
              )}

              {/* Nombre */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm sm:text-base font-mulish font-semibold text-[#333]"
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
                  className={`px-3 sm:px-4 py-2.5 sm:py-3.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#8b0000] transition-all font-mulish ${
                    errors.name
                      ? "border-red-300 bg-red-50"
                      : "border-[#ddd] focus:border-[#8b0000]"
                  }`}
                  required
                />
                {errors.name && (
                  <span className="text-xs sm:text-sm text-red-600 font-mulish">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm sm:text-base font-mulish font-semibold text-[#333]"
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
                  className={`px-3 sm:px-4 py-2.5 sm:py-3.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#8b0000] transition-all font-mulish ${
                    errors.email
                      ? "border-red-300 bg-red-50"
                      : "border-[#ddd] focus:border-[#8b0000]"
                  }`}
                  required
                />
                {errors.email && (
                  <span className="text-xs sm:text-sm text-red-600 font-mulish">
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Teléfono */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm sm:text-base font-mulish font-semibold text-[#333]"
                >
                  Teléfono{" "}
                  <span className="font-normal text-[#999] text-xs sm:text-sm">
                    (Opcional)
                  </span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Tu número de teléfono"
                  className="px-3 sm:px-4 py-2.5 sm:py-3.5 border text-sm sm:text-base border-[#ddd] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b0000] focus:border-[#8b0000] transition-all font-mulish"
                />
              </div>

              {/* Asunto */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm sm:text-base font-mulish font-semibold text-[#333]"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="¿Sobre qué deseas escribir?"
                  className={`px-3 sm:px-4 py-2.5 sm:py-3.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#8b0000] transition-all font-mulish ${
                    errors.subject
                      ? "border-red-300 bg-red-50"
                      : "border-[#ddd] focus:border-[#8b0000]"
                  }`}
                  required
                />
                {errors.subject && (
                  <span className="text-xs sm:text-sm text-red-600 font-mulish">
                    {errors.subject}
                  </span>
                )}
              </div>

              {/* Mensaje */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm sm:text-base font-mulish font-semibold text-[#333]"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos más detalles..."
                  rows={4}
                  className={`px-3 sm:px-4 py-2.5 sm:py-3.5 border rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#8b0000] transition-all resize-none font-mulish ${
                    errors.message
                      ? "border-red-300 bg-red-50"
                      : "border-[#ddd] focus:border-[#8b0000]"
                  }`}
                  required
                ></textarea>
                {errors.message && (
                  <span className="text-xs sm:text-sm text-red-600 font-mulish">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#8b0000] text-white px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base rounded-xl font-mulish font-semibold hover:bg-[#a01010] disabled:bg-[#999] disabled:cursor-not-allowed transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </button>
            </form>

            {/* Información de contacto */}
            <div className="flex flex-col gap-6 sm:gap-7 md:gap-8 lg:mt-4">
              {/* Email */}
              <div className="group hover:bg-[#fff8f5] p-3 sm:p-4 rounded-lg transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-[#8b0000] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 sm:w-6 h-5 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold font-cinzel text-[#8b0000] mb-1 sm:mb-2">
                      Correo Electrónico
                    </h3>
                    <a
                      href={`mailto:${CONTACT_MODEL.email}`}
                      className="text-xs sm:text-sm md:text-base text-[#555] hover:text-[#8b0000] transition-colors font-mulish break-all"
                    >
                      {CONTACT_MODEL.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Teléfono */}
              <div className="group hover:bg-[#fff8f5] p-3 sm:p-4 rounded-lg transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-[#8b0000] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 sm:w-6 h-5 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold font-cinzel text-[#8b0000] mb-1 sm:mb-2">
                      Teléfono
                    </h3>
                    <a
                      href={`tel:${CONTACT_MODEL.phone.replace(/\s/g, "")}`}
                      className="text-xs sm:text-sm md:text-base text-[#555] hover:text-[#8b0000] transition-colors font-mulish"
                    >
                      {CONTACT_MODEL.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Ubicación */}
              <div className="group hover:bg-[#fff8f5] p-3 sm:p-4 rounded-lg transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-[#8b0000] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 sm:w-6 h-5 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold font-cinzel text-[#8b0000] mb-2 sm:mb-3">
                      Ubicación
                    </h3>
                    <div className="space-y-1.5 sm:space-y-2">
                      {CONTACT_MODEL.locations.map((location, index) => (
                        <div key={index} className="flex flex-col gap-0.5">
                          <p className="text-xs sm:text-sm md:text-base font-semibold text-[#333] font-mulish">
                            {location.city}
                          </p>
                          <p className="text-xs sm:text-sm md:text-base text-[#888] font-mulish">
                            {location.address}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="bg-gradient-to-br from-[#fff8f5] to-[#ffe8e0] p-4 sm:p-5 md:p-6 rounded-lg border border-[#ffe0d0]">
                <h3 className="text-base sm:text-lg font-semibold font-cinzel text-[#8b0000] mb-3 sm:mb-4">
                  Síguenos en Redes
                </h3>
                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  <a
                    href={CONTACT_MODEL.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-[#8b0000] text-[#8b0000] rounded-lg hover:bg-[#8b0000] hover:text-white transition-all duration-300 font-mulish font-semibold text-xs sm:text-sm"
                  >
                    <svg
                      className="w-4 sm:w-5 h-4 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                  <a
                    href={CONTACT_MODEL.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-green-500 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300 font-mulish font-semibold text-xs sm:text-sm"
                  >
                    <svg
                      fill="#00c950"
                      width={20}
                      height={20}
                      viewBox="-2 -2 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMinYMin"
                      className="jam jam-whatsapp"
                    >
                      <path d="M9.516.012C4.206.262.017 4.652.033 9.929a9.8 9.8 0 0 0 1.085 4.465L.06 19.495a.387.387 0 0 0 .47.453l5.034-1.184a10 10 0 0 0 4.284 1.032c5.427.083 9.951-4.195 10.12-9.58C20.15 4.441 15.351-.265 9.516.011zm6.007 15.367a7.78 7.78 0 0 1-5.52 2.27 7.8 7.8 0 0 1-3.474-.808l-.701-.347-3.087.726.65-3.131-.346-.672A7.6 7.6 0 0 1 2.197 9.9c0-2.07.812-4.017 2.286-5.48a7.85 7.85 0 0 1 5.52-2.271c2.086 0 4.046.806 5.52 2.27a7.67 7.67 0 0 1 2.287 5.48c0 2.052-.825 4.03-2.287 5.481z" />
                      <path d="m14.842 12.045-1.931-.55a.72.72 0 0 0-.713.186l-.472.478a.71.71 0 0 1-.765.16c-.913-.367-2.835-2.063-3.326-2.912a.69.69 0 0 1 .056-.774l.412-.53a.71.71 0 0 0 .089-.726L7.38 5.553a.723.723 0 0 0-1.125-.256c-.539.453-1.179 1.14-1.256 1.903-.137 1.343.443 3.036 2.637 5.07 2.535 2.349 4.566 2.66 5.887 2.341.75-.18 1.35-.903 1.727-1.494a.713.713 0 0 0-.408-1.072" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      {/* Estilos CSS para animaciones */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
