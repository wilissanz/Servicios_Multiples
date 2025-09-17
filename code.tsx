"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Users, Award, ClipboardCheck } from "lucide-react";

export default function ServiciosMultiplesPage() {
  const [activeService, setActiveService] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      title: "Instalación Profesional",
      description: "Instalación experta de sistemas de aire acondicionado con garantía de trabajo y materiales.",
      features: ["Evaluación técnica", "Selección del equipo adecuado", "Instalación certificada", "Pruebas de funcionamiento"]
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Mantenimiento regular para optimizar el rendimiento y extender la vida útil de su equipo.",
      features: ["Limpieza de filtros", "Revisión de componentes", "Lubricación de partes móviles", "Pruebas de eficiencia"]
    },
    {
      title: "Reparación Especializada",
      description: "Solución rápida y efectiva de fallas en sistemas de climatización.",
      features: ["Diagnóstico preciso", "Reparación con repuestos originales", "Garantía en reparaciones", "Servicio de emergencia"]
    },
    {
      title: "Optimización de Sistemas",
      description: "Mejora del rendimiento y eficiencia energética de sus equipos existentes.",
      features: ["Análisis de eficiencia", "Actualización de componentes", "Optimización energética", "Mejora de capacidad"]
    }
  ];

  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Dueño de Restaurante",
      content: "Excelente servicio de instalación. Llegaron puntuales, hicieron un trabajo limpio y profesional. Mi sistema funciona perfectamente.",
      rating: 5
    },
    {
      name: "María González",
      role: "Propietaria de Residencia",
      content: "Llevo 3 años con su servicio de mantenimiento y nunca he tenido problemas. Muy confiables y profesionales.",
      rating: 5
    },
    {
      name: "Juan Pérez",
      role: "Gerente de Oficinas",
      content: "Repararon nuestro sistema central en menos de 24 horas. El servicio de emergencia es excelente.",
      rating: 4
    }
  ];

  const stats = [
    { value: "10+", label: "Años de Experiencia" },
    { value: "1500+", label: "Clientes Satisfechos" },
    { value: "98%", label: "Trabajos con Éxito" },
    { value: "24/7", label: "Servicio de Emergencia" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("¡Gracias por contactarnos! Te responderemos a la brevedad.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">Servicios Múltiples</h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Inicio</a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors">Servicios</a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">Nosotros</a>
              <a href="#testimonios" className="text-foreground hover:text-primary transition-colors">Testimonios</a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">Contacto</a>
            </nav>

            <div className="hidden md:block">
              <Button className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-4 w-4" />
                Llamar ahora
              </Button>
            </div>

            <button 
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-3">
                <a href="#inicio" className="text-foreground hover:text-primary">Inicio</a>
                <a href="#servicios" className="text-foreground hover:text-primary">Servicios</a>
                <a href="#nosotros" className="text-foreground hover:text-primary">Nosotros</a>
                <a href="#testimonios" className="text-foreground hover:text-primary">Testimonios</a>
                <a href="#contacto" className="text-foreground hover:text-primary">Contacto</a>
                <Button className="bg-primary hover:bg-primary/90 w-full mt-2">
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar ahora
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
                Especialistas en <span className="text-primary">Aire Acondicionado</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Con más de 10 años de experiencia ofreciendo soluciones integrales de climatización 
                para hogares, empresas y comercios. Eficiencia y garantía en cada servicio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="mr-2 h-5 w-5" />
                  Solicitar Servicio
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Ver Servicios
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placeholder-image-service.onrender.com/image/600x400?prompt=Professional HVAC technician installing modern air conditioning unit in a clean room&id=tech-installation-1" 
                alt="Técnico profesional instalando unidad de aire acondicionado moderna" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos soluciones completas de climatización con los más altos estándares de calidad y profesionalismo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className={`cursor-pointer transition-all hover:shadow-lg ${activeService === index ? 'border-primary ring-2 ring-primary' : ''}`} 
                    onClick={() => setActiveService(index)}>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://placeholder-image-service.onrender.com/image/600x400?prompt=Team of HVAC professionals in uniforms with tools and equipment&id=team-photo-1" 
                alt="Equipo de profesionales de Servicios Múltiples con herramientas y equipos" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Nuestra Experiencia</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Servicios Múltiples es una empresa con más de una década de experiencia especializada 
                en soluciones integrales de aire acondicionado. Nos dedicamos a la instalación, 
                mantenimiento preventivo y correctivo, reparación y optimización de sistemas de 
                climatización para todo tipo de espacios.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <span>Técnicos certificados y con amplia experiencia</span>
                </div>
                <div className="flex items-center">
                  <ClipboardCheck className="h-6 w-6 text-primary mr-3" />
                  <span>Garantía en todos nuestros servicios</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  <span>Atención personalizada para cada cliente</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <span>Servicio rápido y eficiente</span>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90">
                Conocer más sobre nosotros
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-muted-foreground">Clientes satisfechos confían en nuestro trabajo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <blockquote className="italic text-muted-foreground mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">¿Necesita ayuda con su aire acondicionado?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contáctenos hoy mismo para obtener una consulta gratuita y presupuesto sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Llamar ahora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Mail className="mr-2 h-5 w-5" />
              Enviar email
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">Contáctenos</h2>
              <p className="text-muted-foreground mb-8">
                Complete el formulario y nos comunicaremos con usted a la brevedad para programar su servicio.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span>info@serviciosmultiples.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>Av. Principal #123, Ciudad, Estado</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <span>Lunes a Sábado: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Solicitar Servicio</CardTitle>
                  <CardDescription>Complete el formulario y nos comunicaremos con usted</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input 
                        name="name"
                        placeholder="Nombre completo" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        name="email"
                        type="email" 
                        placeholder="Correo electrónico" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input 
                        name="phone"
                        type="tel" 
                        placeholder="Teléfono" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Textarea 
                        name="message"
                        placeholder="Describa su necesidad o problema" 
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Enviar Solicitud
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-primary mb-4">Servicios Múltiples</h3>
              <p className="text-muted-foreground mb-6">
                Especialistas en soluciones integrales de aire acondicionado con más de 10 años de experiencia.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Instalación</a></li>
                <li><a href="#" className="hover:text-primary">Mantenimiento</a></li>
                <li><a href="#" className="hover:text-primary">Reparación</a></li>
                <li><a href="#" className="hover:text-primary">Optimización</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@serviciosmultiples.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Av. Principal #123</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2023 Servicios Múltiples. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm">Política de Privacidad</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
