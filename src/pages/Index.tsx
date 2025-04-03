import React from 'react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import QRCode from '@/components/QRCode';
import CodePreview from '@/components/CodePreview';

const loginFormCode = `// Componente de Login com Modo Escuro e Validação
import { useState } from 'react';
import { z } from 'zod';

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const schema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres')
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validação
    try {
      schema.parse({ email, password });
      alert('Login bem-sucedido!');
    } catch (error) {
      setErrors(error.format());
    }
  };

  return (
    <div className={darkMode ? 'bg-gray-900 text-white' : 'bg-white'}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>
      
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        
        <div>
          <label>Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors?.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        
        <div>
          <label>Senha</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors?.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};`;

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="section-container bg-gradient-to-br from-blue-50 to-purple-50 pt-28">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lovable-blue to-lovable-purple animate-fade-in">
            Criando Front-ends com Lovable
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 animate-fade-in">
            Design inteligente. Código gerado por IA. Agilidade real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button className="bg-lovable-blue hover:bg-lovable-blue/90 text-white px-8 py-6">
              Começar Agora
            </Button>
            <Button variant="outline" className="border-lovable-purple text-lovable-purple hover:bg-lovable-purple/10 px-8 py-6">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>
      
      {/* What Is Section */}
      <section id="what" className="section-container bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">O que é o Lovable?</h2>
          <div className="section-content">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-sm">
              <ul className="space-y-4">
                <li className="list-item">
                  <span className="list-bullet">•</span>
                  <span>Plataforma de IA que transforma prompts em interfaces web modernas.</span>
                </li>
                <li className="list-item">
                  <span className="list-bullet">•</span>
                  <span>Gera código limpo com tecnologias como React, Tailwind e Vite.</span>
                </li>
                <li className="list-item">
                  <span className="list-bullet">•</span>
                  <span>Acelera prototipagem e desenvolvimento front-end.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how" className="section-container bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <h2 className="section-title">Como funciona?</h2>
          <div className="section-content">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-lovable-blue/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-lovable-blue">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Escreva um prompt em linguagem natural</h3>
                <p className="text-gray-600">Descreva sua interface com suas próprias palavras, como se estivesse conversando com um designer.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-lovable-purple/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-lovable-purple">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Visualize a interface gerada</h3>
                <p className="text-gray-600">Veja em tempo real o resultado do seu prompt transformado em uma interface funcional.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-lovable-indigo/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-lovable-indigo">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Copie/exporte o código para seu projeto</h3>
                <p className="text-gray-600">Use o código gerado diretamente no seu projeto ou faça ajustes conforme necessário.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Other Tools Section */}
      <section id="tools" className="section-container bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Outras ferramentas</h2>
          <div className="section-content">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'V0.dev',
                'Teleporthq.io',
                'Builder.io',
                'Uizard.io',
                'Locofy.ai',
                'Shaper.studio'
              ].map((tool, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-center font-medium text-gray-800">{tool}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Real Example Section */}
      <section id="example" className="section-container bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <h2 className="section-title">Exemplo real</h2>
          <div className="section-content">
            <p className="text-center text-xl mb-8">
              Prompt: 'Formulário de login com modo escuro e validação'
            </p>
            
            <CodePreview 
              title="Login.jsx" 
              code={loginFormCode} 
            />
            
            <div className="mt-8 text-center">
              <Button className="bg-lovable-blue hover:bg-lovable-blue/90 text-white">
                <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer">
                  Acesse o Lovable
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="section-container bg-white">
        <div className="container mx-auto">
          <h2 className="section-title">Benefícios para o time</h2>
          <div className="section-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-sm">
                <ul className="space-y-4">
                  <li className="list-item">
                    <span className="list-bullet">•</span>
                    <span>Entregas mais rápidas</span>
                  </li>
                  <li className="list-item">
                    <span className="list-bullet">•</span>
                    <span>Menos retrabalho de interface</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-sm">
                <ul className="space-y-4">
                  <li className="list-item">
                    <span className="list-bullet">•</span>
                    <span>Alinha dev + design + produto</span>
                  </li>
                  <li className="list-item">
                    <span className="list-bullet">•</span>
                    <span>Mais tempo para foco em lógica e experiência</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Workshop Section */}
      <section id="workshop" className="section-container bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <h2 className="section-title">Mão na massa</h2>
          <div className="section-content text-center">
            <p className="mb-8">
              Agora cada um pode acessar o Lovable e criar um pequeno sistema, vão ser 15 minutos para ter uma ideia, montar o prompt e gerar a aplicação.
            </p>
            
            <div className="mx-auto mb-8">
              <QRCode />
            </div>
            
            <p className="text-lg font-medium text-gray-700">
              Depois dos 15 minutos cada um vai apresentar brevemente o que fez e suas impressões.
            </p>
          </div>
        </div>
      </section>
      
      {/* Closing Section */}
      <section id="closing" className="section-container bg-lovable-blue text-white">
        <div className="container mx-auto">
          <div className="section-content text-center">
            <p className="mb-6 max-w-3xl mx-auto">
              Utilizamos a inteligência artificial para potencializar a inteligência humana: promovemos 
              o uso da IA como aliada para melhorar nossa produtividade e tornar o nosso dia a dia
              mais inteligente.
            </p>
            
            <p className="max-w-3xl mx-auto">
              Ferramentas como o Lovable potencializa a colaboração, e nos torna mais produtivos não substitui o talento humano.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>© 2023 - Criado com Lovable</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
