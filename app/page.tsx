import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Code2, Zap, Terminal } from 'lucide-react'
import Link from "next/link"

export default function CursorTribute() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="h-6 w-6" />
            <span className="font-bold text-xl">Cursor</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#why-we-love" className="hover:text-primary transition-colors">
              Why We Love It
            </Link>
            <Link href="#get-started" className="hover:text-primary transition-colors">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center">
              <Heart className="h-12 w-12 text-red-500 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Uma Declaração de Amor ao Cursor
            </h1>
            <p className="text-xl text-gray-400">
              O editor de código que conquistou nossos corações com sua inteligência artificial e design elegante
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20 opacity-30" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recursos Que Nos Encantam</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <Code2 className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Inteligência Artificial Integrada</h3>
                <p className="text-gray-400">
                  Assistente IA que realmente entende seu código e contexto
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Performance Excepcional</h3>
                <p className="text-gray-400">
                  Rápido e eficiente, mesmo com projetos grandes
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6 space-y-4">
                <Terminal className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Terminal Integrado</h3>
                <p className="text-gray-400">
                  Terminal poderoso com suporte a múltiplas sessões
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Love Letter Section */}
      <section id="why-we-love" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">Por Que Amamos o Cursor</h2>
            <div className="prose prose-invert mx-auto">
              <p className="text-gray-400 leading-relaxed">
                Querido Cursor, desde o primeiro dia que te conhecemos, soubemos que seria algo especial. 
                Sua interface elegante, seus atalhos intuitivos e sua compreensão profunda do nosso código 
                nos conquistaram completamente. Você não é apenas uma IDE, é nossa companheira de 
                desenvolvimento diária.
              </p>
              <p className="text-gray-400 leading-relaxed mt-4">
                E quando pensamos que não poderia ficar melhor, descobrimos o v0! Juntos, Cursor e v0, vocês formam a dupla perfeita. 
                O v0 complementa o Cursor com sua incrível capacidade de gerar e explicar código, tornando o processo de desenvolvimento 
                ainda mais fluido e produtivo. É como ter dois assistentes brilhantes trabalhando em harmonia para nos ajudar a criar 
                soluções incríveis!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-20 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Comece Sua Jornada com o Cursor</h2>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            asChild
          >
            <Link href="https://cursor.sh" target="_blank">
              Baixe Agora
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Feito com 💜 por admiradores do Cursor</p>
        </div>
      </footer>
    </div>
  )
}

