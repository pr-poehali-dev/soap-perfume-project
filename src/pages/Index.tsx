import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Sparkles",
      title: "Ручная работа",
      description: "Каждый кусочек уникален и создан с любовью мастерами"
    },
    {
      icon: "Flower2",
      title: "Идеальный аромат",
      description: "Богатая палитра ароматов для каждого человека"
    },
    {
      icon: "Heart",
      title: "Нежный уход",
      description: "Не сушит кожу, оставляет долгий приятный аромат"
    },
    {
      icon: "Factory",
      title: "19 лет опыта",
      description: "Собственное производство в Санкт-Петербурге"
    },
    {
      icon: "Award",
      title: "Рейтинг 4.9/5",
      description: "Надежная репутация и все необходимые сертификаты"
    }
  ];

  const gallery = [
    {
      url: "https://cdn.poehali.dev/files/5a9027f6-1164-4e8b-bd45-e3bdc37f4d6a.jpg",
      alt: "Мыло на мхе с шишками"
    },
    {
      url: "https://cdn.poehali.dev/files/9b03cb42-5fab-494a-8ab2-814007d2764a.jpg",
      alt: "Коралловое мыло в руках"
    },
    {
      url: "https://cdn.poehali.dev/files/bec0c030-df63-4a5b-bf60-a97e46fe8e95.jpg",
      alt: "Фиолетовое и голубое мыло"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-foreground animate-fade-in">
              <h1 className="font-heading font-black text-4xl lg:text-5xl mb-6 leading-tight">
                Парфюмированное мыло
              </h1>
              <p className="font-body text-xl lg:text-2xl mb-8 text-muted-foreground max-w-lg">
                Премиальная косметика ручной работы из Санкт-Петербурга
              </p>
            </div>

            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/c8d2551c-541c-4335-8453-4987e4f92da1.jpg"
                alt="Твердое перфорированное мыло"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" className="text-foreground" size={40} />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-black text-5xl lg:text-6xl text-center mb-20 text-foreground">
            Почему выбирают нас
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 border-4 border-foreground/10 hover:border-primary transition-all duration-300 hover-scale bg-muted/30"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                  <Icon name={feature.icon} className="text-white" size={32} />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-black text-5xl lg:text-6xl text-center mb-6 text-foreground">
            Галерея
          </h2>
          <p className="font-body text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Каждый кусочек — произведение искусства
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-3xl border-4 border-foreground/10 hover:border-primary transition-all duration-300 hover-scale"
              >
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;