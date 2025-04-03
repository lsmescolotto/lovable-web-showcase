
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') || '';
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'what', label: 'O Que É' },
    { id: 'how', label: 'Como Funciona' },
    { id: 'tools', label: 'Ferramentas' },
    { id: 'example', label: 'Exemplo' },
    { id: 'benefits', label: 'Benefícios' },
    { id: 'workshop', label: 'Mão na Massa' }
  ];
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "py-4"
    )}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lovable-blue to-lovable-purple">
            Lovable
          </div>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm",
                  activeSection === item.id 
                    ? "text-lovable-blue" 
                    : "text-gray-600 hover:text-lovable-blue"
                )}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
