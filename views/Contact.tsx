import React, { useState } from 'react';
import { Mail, Instagram, Twitter, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    // Simulate API call
    setTimeout(() => {
        setFormState({ name: '', email: '', message: '' });
        // Reset sent state after animation
        setTimeout(() => setIsSent(false), 3000);
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen pt-32 px-6 md:px-12 flex items-center justify-center">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 animate-slide-up">
        
        {/* Info */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Let's Create <br/> <span className="text-noir-red">Together</span></h1>
            <p className="text-gray-400 mb-12">
              Available for freelance projects, collaborations, and film production roles. 
            </p>
          </div>
          
          <div className="space-y-6">
            <a href="mailto:hello@kazutomori.com" className="flex items-center text-xl text-white hover:text-noir-paper transition-colors">
              <Mail className="mr-4 text-noir-red" />
              hello@kazutomori.com
            </a>
            <div className="flex space-x-6">
               <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram /></a>
               <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter /></a>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
          {isSent ? (
             <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <p className="font-serif text-2xl text-white mb-2">Message Transmitted.</p>
                <p className="text-noir-red text-sm tracking-widest uppercase">I will return shortly.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className="group relative">
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-noir-red transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-noir-red peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">Name</label>
                </div>

                <div className="group relative">
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-noir-red transition-colors peer"
                    placeholder=" "
                  />
                  <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-noir-red peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">Email</label>
                </div>

                <div className="group relative">
                  <textarea 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-transparent border-b border-gray-600 py-3 text-white focus:outline-none focus:border-noir-red transition-colors peer resize-none"
                    placeholder=" "
                  ></textarea>
                  <label className="absolute left-0 top-3 text-gray-500 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-noir-red peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs">Message</label>
                </div>

                <button type="submit" className="w-full py-4 bg-white/10 hover:bg-noir-red text-white uppercase tracking-widest text-xs font-bold transition-all duration-300 flex items-center justify-center group">
                   Send Message
                   <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;