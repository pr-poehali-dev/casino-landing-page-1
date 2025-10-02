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

  const games: GameCard[] = [
    { id: 1, title: 'Sugar rush 1000', provider: 'PRAGMATIC PLAY', image: 'https://cdn.poehali.dev/files/ff4dd00e-8ef2-4b4a-96b6-c2c1449df14b.jpg', badge: 'NEW' },
    { id: 2, title: 'Gates of Olympus 1000', provider: 'PRAGMATIC PLAY', image: '/img/86d0b0ed-44f1-41f0-8ec8-1db060affac6.jpg' },
    { id: 3, title: 'The Dog House Megaways', provider: 'PRAGMATIC PLAY', image: '/img/58eba794-f91d-489f-8eec-4cea1bf81c4e.jpg' },
    { id: 4, title: 'Zeus vs Hades – Gods of War', provider: 'PRAGMATIC PLAY', image: '/img/86d0b0ed-44f1-41f0-8ec8-1db060affac6.jpg' },
    { id: 5, title: 'Sweet Bonanza 1000', provider: 'PRAGMATIC PLAY', image: '/img/653ea9c0-b444-40ca-9c43-3c557c43b042.jpg' },
    { id: 6, title: 'Le Bandit', provider: 'HACKSAW', image: '/img/58eba794-f91d-489f-8eec-4cea1bf81c4e.jpg' },
    { id: 7, title: 'Great Pigsby Megaways', provider: 'RELAX', image: '/img/86d0b0ed-44f1-41f0-8ec8-1db060affac6.jpg' },
    { id: 8, title: 'Rich Wilde and the Tome of Madness', provider: 'PLAY\'N GO', image: '/img/653ea9c0-b444-40ca-9c43-3c557c43b042.jpg' },
    { id: 9, title: 'Grim the Splitter Dream Drop', provider: 'RELAX', image: '/img/58eba794-f91d-489f-8eec-4cea1bf81c4e.jpg' },
    { id: 10, title: 'Rise of Zeus', provider: 'BELATRA', image: '/img/86d0b0ed-44f1-41f0-8ec8-1db060affac6.jpg' },
  ];

  return (
    <div className="min-h-screen bg-[#0F1419]">
      <header className="border-b border-white/10 bg-[#1A1F2C]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-3xl font-black">
              <span className="gradient-neon bg-clip-text text-transparent">VAVADA</span>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-semibold">12,847</span>
              <span className="text-green-300/70 text-xs">онлайн</span>
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

      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-8">
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-all duration-300">
            <img 
              src="https://cdn.poehali.dev/files/14761b0a-6f8b-4182-8cd4-bf4d15c3952d.jpg" 
              alt="Ставки на ключевые события"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <Button className="gradient-neon text-white font-bold px-8 py-6 text-lg">
                <Icon name="Zap" className="w-5 h-5 mr-2" />
                СДЕЛАТЬ СТАВКУ
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-2xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-4xl font-black text-white mb-2 flex items-center gap-3">
                  <Icon name="Trophy" className="w-10 h-10" />
                  ДЖЕКПОТ
                </h2>
                <p className="text-yellow-100 text-sm">Розыгрыш каждый час!</p>
              </div>
              <Icon name="Sparkles" className="w-12 h-12 text-white animate-pulse" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
                <div className="text-yellow-100 text-sm mb-2">MEGA JACKPOT</div>
                <div className="text-4xl font-black text-white mb-1">$1,234,567</div>
                <div className="text-yellow-200 text-xs">+$1,234/мин</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
                <div className="text-yellow-100 text-sm mb-2">MAJOR JACKPOT</div>
                <div className="text-3xl font-black text-white mb-1">$123,456</div>
                <div className="text-yellow-200 text-xs">+$234/мин</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white/30">
                <div className="text-yellow-100 text-sm mb-2">MINI JACKPOT</div>
                <div className="text-2xl font-black text-white mb-1">$12,345</div>
                <div className="text-yellow-200 text-xs">+$45/мин</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 border-y border-white/10 py-4 overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-yellow-400 mb-2">
              <Icon name="TrendingUp" className="w-5 h-5" />
              <span className="font-bold text-sm">ПОСЛЕДНИЕ ВЫИГРЫШИ</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            <div className="flex gap-6 min-w-max">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Icon name="User" className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm">Alex**</span>
                <span className="text-green-400 font-bold text-sm">+$1,250</span>
                <span className="text-white/50 text-xs">Sugar Rush</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Icon name="User" className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm">Maria**</span>
                <span className="text-green-400 font-bold text-sm">+$3,840</span>
                <span className="text-white/50 text-xs">Gates of Olympus</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Icon name="User" className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm">John**</span>
                <span className="text-green-400 font-bold text-sm">+$890</span>
                <span className="text-white/50 text-xs">Dog House</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Icon name="User" className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm">Serg**</span>
                <span className="text-green-400 font-bold text-sm">+$5,670</span>
                <span className="text-white/50 text-xs">Zeus vs Hades</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Icon name="User" className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm">Anna**</span>
                <span className="text-green-400 font-bold text-sm">+$2,340</span>
                <span className="text-white/50 text-xs">Sweet Bonanza</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Icon name="User" className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm">Mike**</span>
                <span className="text-green-400 font-bold text-sm">+$7,890</span>
                <span className="text-white/50 text-xs">Mega Fortune</span>
              </div>
            </div>
            <div className="flex gap-6 min-w-max">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Icon name="User" className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm">Alex**</span>
                <span className="text-green-400 font-bold text-sm">+$1,250</span>
                <span className="text-white/50 text-xs">Sugar Rush</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Icon name="User" className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm">Maria**</span>
                <span className="text-green-400 font-bold text-sm">+$3,840</span>
                <span className="text-white/50 text-xs">Gates of Olympus</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Icon name="User" className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm">John**</span>
                <span className="text-green-400 font-bold text-sm">+$890</span>
                <span className="text-white/50 text-xs">Dog House</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Icon name="User" className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm">Serg**</span>
                <span className="text-green-400 font-bold text-sm">+$5,670</span>
                <span className="text-white/50 text-xs">Zeus vs Hades</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Icon name="User" className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm">Anna**</span>
                <span className="text-green-400 font-bold text-sm">+$2,340</span>
                <span className="text-white/50 text-xs">Sweet Bonanza</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
                <Icon name="User" className="w-4 h-4 text-primary" />
                <span className="text-white/80 text-sm">Mike**</span>
                <span className="text-green-400 font-bold text-sm">+$7,890</span>
                <span className="text-white/50 text-xs">Mega Fortune</span>
              </div>
            </div>
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
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                {game.badge && (
                  <Badge className="absolute top-2 left-2 bg-red-600 text-white animate-pulse-glow">
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