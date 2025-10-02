import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface GameCard {
  id: number;
  title: string;
  provider: string;
  image: string;
  badge?: string;
}

const Index = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const winners = [
    { multiplier: '×100', gradient: 'from-purple-600 to-purple-400' },
    { multiplier: '×560', gradient: 'from-blue-600 to-blue-400' },
    { multiplier: '×1780', gradient: 'from-green-600 to-green-400' },
    { multiplier: '×9560', gradient: 'from-orange-600 to-orange-400' },
    { multiplier: '×13550', gradient: 'from-red-600 to-red-400' },
  ];

  const games: GameCard[] = [
    { id: 1, title: 'Sugar rush 1000', provider: 'PRAGMATIC PLAY', image: 'https://cdn.poehali.dev/files/1b5f5ca9-6d3c-4082-a2fd-1e7263fef488.jpg', badge: 'NEW' },
    { id: 2, title: 'Gates of Olympus 1000', provider: 'PRAGMATIC PLAY', image: 'https://cdn.poehali.dev/files/1b5f5ca9-6d3c-4082-a2fd-1e7263fef488.jpg' },
    { id: 3, title: 'The Dog House Megaways', provider: 'PRAGMATIC PLAY', image: 'https://cdn.poehali.dev/files/1b5f5ca9-6d3c-4082-a2fd-1e7263fef488.jpg' },
    { id: 4, title: 'Zeus vs Hades – Gods of War', provider: 'PRAGMATIC PLAY', image: 'https://cdn.poehali.dev/files/1b5f5ca9-6d3c-4082-a2fd-1e7263fef488.jpg' },
    { id: 5, title: 'Sweet Bonanza 1000', provider: 'PRAGMATIC PLAY', image: 'https://cdn.poehali.dev/files/1b5f5ca9-6d3c-4082-a2fd-1e7263fef488.jpg' },
    { id: 6, title: 'Le Bandit', provider: 'HACKSAW', image: 'https://cdn.poehali.dev/files/1b5f5ca9-6d3c-4082-a2fd-1e7263fef488.jpg' },
    { id: 7, title: 'Great Pigsby Megaways', provider: 'RELAX', image: 'https://cdn.poehali.dev/files/1b5f5ca9-6d3c-4082-a2fd-1e7263fef488.jpg' },
    { id: 8, title: 'Rich Wilde and the Tome of Madness', provider: 'PLAY\'N GO', image: 'https://cdn.poehali.dev/files/1b5f5ca9-6d3c-4082-a2fd-1e7263fef488.jpg' },
    { id: 9, title: 'Grim the Splitter Dream Drop', provider: 'RELAX', image: 'https://cdn.poehali.dev/files/1b5f5ca9-6d3c-4082-a2fd-1e7263fef488.jpg' },
    { id: 10, title: 'Rise of Zeus', provider: 'BELATRA', image: 'https://cdn.poehali.dev/files/1b5f5ca9-6d3c-4082-a2fd-1e7263fef488.jpg' },
  ];

  return (
    <div className="min-h-screen bg-[#0F1419]">
      <header className="border-b border-white/10 bg-[#1A1F2C]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-black">
              <span className="gradient-neon bg-clip-text text-transparent">VAVADA</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="text-white hover:text-primary"
              onClick={() => setLoginOpen(true)}
            >
              ВОЙТИ
            </Button>
            <Button 
              className="gradient-neon text-white font-semibold px-6 hover:opacity-90 transition-opacity"
              onClick={() => setRegisterOpen(true)}
            >
              РЕГИСТРАЦИЯ
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center gap-4 overflow-x-auto pb-4">
            {winners.map((winner, idx) => (
              <div 
                key={idx}
                className={`relative min-w-[200px] h-[240px] rounded-xl bg-gradient-to-br ${winner.gradient} p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Trophy" className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-black text-white mb-2 text-glow">
                    {winner.multiplier}
                  </div>
                  <Badge className="bg-yellow-500 text-black hover:bg-yellow-400">
                    WINNER
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">Популярные игры</h2>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Показать все
            <Icon name="ChevronRight" className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {games.map((game) => (
            <Card 
              key={game.id}
              className="group relative bg-card border-white/10 overflow-hidden cursor-pointer hover:border-primary transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 flex items-center justify-center">
                  <Icon name="Sparkles" className="w-16 h-16 text-white/40" />
                </div>
                {game.badge && (
                  <Badge className="absolute top-2 left-2 bg-red-600 text-white">
                    {game.badge}
                  </Badge>
                )}
                <div className="absolute top-2 right-2 text-xs text-white/60 bg-black/50 px-2 py-1 rounded">
                  {game.provider}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="gradient-purple text-white font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Icon name="Play" className="w-4 h-4 mr-2" />
                    ИГРАТЬ
                  </Button>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-white line-clamp-2 mb-1">
                  {game.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="sm:max-w-md bg-[#1A1F2C] border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center gradient-neon bg-clip-text text-transparent">
              Вход в VAVADA
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              Войдите в свой аккаунт для продолжения
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="login-email" className="text-white">Email</Label>
              <Input 
                id="login-email" 
                type="email" 
                placeholder="your@email.com"
                className="bg-muted border-white/10 text-white placeholder:text-white/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="login-password" className="text-white">Пароль</Label>
              <Input 
                id="login-password" 
                type="password" 
                placeholder="••••••••"
                className="bg-muted border-white/10 text-white placeholder:text-white/40"
              />
            </div>
            <Button className="w-full gradient-neon text-white font-bold py-6 hover:opacity-90">
              <Icon name="LogIn" className="w-5 h-5 mr-2" />
              ВОЙТИ
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Нет аккаунта?{' '}
              <button 
                onClick={() => {
                  setLoginOpen(false);
                  setRegisterOpen(true);
                }}
                className="text-primary hover:underline font-semibold"
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
        <DialogContent className="sm:max-w-md bg-[#1A1F2C] border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center gradient-neon bg-clip-text text-transparent">
              Регистрация в VAVADA
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              Создайте аккаунт и получите бонус
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="reg-email" className="text-white">Email</Label>
              <Input 
                id="reg-email" 
                type="email" 
                placeholder="your@email.com"
                className="bg-muted border-white/10 text-white placeholder:text-white/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reg-password" className="text-white">Пароль</Label>
              <Input 
                id="reg-password" 
                type="password" 
                placeholder="••••••••"
                className="bg-muted border-white/10 text-white placeholder:text-white/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reg-confirm" className="text-white">Подтвердите пароль</Label>
              <Input 
                id="reg-confirm" 
                type="password" 
                placeholder="••••••••"
                className="bg-muted border-white/10 text-white placeholder:text-white/40"
              />
            </div>
            <Button className="w-full gradient-neon text-white font-bold py-6 hover:opacity-90">
              <Icon name="UserPlus" className="w-5 h-5 mr-2" />
              ЗАРЕГИСТРИРОВАТЬСЯ
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Уже есть аккаунт?{' '}
              <button 
                onClick={() => {
                  setRegisterOpen(false);
                  setLoginOpen(true);
                }}
                className="text-primary hover:underline font-semibold"
              >
                Войти
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2024 VAVADA Casino. Играйте ответственно. 18+</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
