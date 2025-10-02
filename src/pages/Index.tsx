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

      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Живые дилеры</h2>
            <p className="text-muted-foreground">Играйте с настоящими крупье в режиме реального времени</p>
          </div>
          <Badge className="bg-red-600 text-white px-4 py-2 text-sm flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            LIVE
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group relative bg-card border-white/10 overflow-hidden cursor-pointer hover:border-primary transition-all duration-300">
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-red-900/30 to-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="CircleDot" className="w-20 h-20 text-red-500 mx-auto mb-4" />
                  <div className="text-white text-2xl font-bold">Рулетка</div>
                </div>
              </div>
              <div className="absolute top-3 left-3">
                <Badge className="bg-red-600 text-white flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  LIVE
                </Badge>
              </div>
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center gap-2">
                <Icon name="Users" className="w-4 h-4" />
                124
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button className="gradient-purple text-white font-bold">
                  <Icon name="Play" className="w-4 h-4 mr-2" />
                  ИГРАТЬ
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-1">European Roulette</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Дилер: Anna M.</span>
                <span className="text-green-400 font-semibold">$5 - $500</span>
              </div>
            </div>
          </Card>

          <Card className="group relative bg-card border-white/10 overflow-hidden cursor-pointer hover:border-primary transition-all duration-300">
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-green-900/30 to-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Spade" className="w-20 h-20 text-green-500 mx-auto mb-4" />
                  <div className="text-white text-2xl font-bold">Блэкджек</div>
                </div>
              </div>
              <div className="absolute top-3 left-3">
                <Badge className="bg-red-600 text-white flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  LIVE
                </Badge>
              </div>
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center gap-2">
                <Icon name="Users" className="w-4 h-4" />
                89
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button className="gradient-purple text-white font-bold">
                  <Icon name="Play" className="w-4 h-4 mr-2" />
                  ИГРАТЬ
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-1">Blackjack VIP</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Дилер: John D.</span>
                <span className="text-green-400 font-semibold">$10 - $1000</span>
              </div>
            </div>
          </Card>

          <Card className="group relative bg-card border-white/10 overflow-hidden cursor-pointer hover:border-primary transition-all duration-300">
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-900/30 to-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Diamond" className="w-20 h-20 text-blue-500 mx-auto mb-4" />
                  <div className="text-white text-2xl font-bold">Покер</div>
                </div>
              </div>
              <div className="absolute top-3 left-3">
                <Badge className="bg-red-600 text-white flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  LIVE
                </Badge>
              </div>
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center gap-2">
                <Icon name="Users" className="w-4 h-4" />
                67
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button className="gradient-purple text-white font-bold">
                  <Icon name="Play" className="w-4 h-4 mr-2" />
                  ИГРАТЬ
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-1">Caribbean Poker</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Дилер: Maria S.</span>
                <span className="text-green-400 font-semibold">$25 - $2500</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Vavada Официальный Сайт 2025: Рабочее Зеркало и Безопасный Вход Сегодня
          </h1>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            В 2025 году онлайн-казино Vavada продолжает оставаться одним из самых востребованных развлекательных порталов для игроков из России, Казахстана, Беларуси и других стран СНГ. Благодаря обширной коллекции слотов, щедрым бонусам и стабильной работе даже в условиях блокировок, платформа завоевала доверие миллионов пользователей. Однако из-за ограничений со стороны регуляторов многие сталкиваются с трудностями при попытке зайти на официальный сайт. В таких случаях на помощь приходят актуальные зеркала — полные копии основного ресурса, обеспечивающие бесперебойный доступ к аккаунту, играм и выплатам.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Icon name="Star" className="w-8 h-8 text-primary" />
            Почему Vavada выбирают миллионы игроков?
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Казино Vavada сочетает в себе современный интерфейс, высокую скорость загрузки и надёжную защиту данных. Игроки ценят возможность мгновенно пополнять счёт через СБП, криптовалюты или электронные кошельки, а также получать выигрыши в течение 10–15 минут. На платформе представлены тысячи лицензионных игровых автоматов от ведущих провайдеров — Pragmatic Play, NetEnt, Evolution Gaming, Play'n GO и других. Отдельного внимания заслуживает раздел live-казино, где можно играть в рулетку, блэкджек и баккару с реальными дилерами в прямом эфире.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            Несмотря на периодические блокировки основного домена, команда Vavada оперативно выпускает рабочие зеркала, которые полностью дублируют функционал официального сайта. Это позволяет пользователям в любой момент получить доступ к своему профилю, бонусам и истории ставок без потери прогресса.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Icon name="Shield" className="w-8 h-8 text-green-500" />
            Как безопасно зайти на официальный сайт Vavada?
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Официальный сайт Vavada — это единственный ресурс, где вы гарантированно получите честную игру, защиту персональных данных и своевременные выплаты. Однако в поисковой выдаче часто появляются поддельные копии с похожими доменами, включая варианты написания вроде «vadaa» или «vavadaa». Такие сайты создаются мошенниками с целью кражи учётных данных и средств.
          </p>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">
            Как распознать подделку?
          </h3>
          
          <p className="text-gray-300 leading-relaxed mb-4">
            Чтобы избежать фишинговых ресурсов, всегда проверяйте:
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6 ml-4">
            <li>наличие SSL-шифрования (замок в адресной строке),</li>
            <li>корректное написание домена (официальные зеркала используют проверенные доменные зоны),</li>
            <li>информацию о лицензии в футере сайта,</li>
            <li>доступность поддержки через Telegram, WhatsApp или онлайн-чат.</li>
          </ul>

          <p className="text-gray-300 leading-relaxed mb-8">
            Регистрация в Vavada не требует паспортных данных и занимает менее минуты. После входа вы сразу получаете доступ ко всем разделам казино, включая демо-режим, турниры и акции.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Icon name="Link" className="w-8 h-8 text-blue-500" />
            Где найти рабочее зеркало Vavada на сегодня?
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Актуальное рабочее зеркало Vavada — это не просто альтернативный адрес, а полная копия официального сайта, которая работает без перебоев даже в дни массовых блокировок. Чтобы всегда оставаться на связи с любимым казино, рекомендуется использовать несколько проверенных источников:
          </p>

          <h3 className="text-2xl font-bold text-white mt-8 mb-4">
            Надёжные способы доступа
          </h3>

          <div className="grid gap-4 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Icon name="MessageCircle" className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Официальный Telegram-канал</div>
                  <div className="text-gray-400 text-sm">здесь публикуются свежие ссылки сразу после появления новых зеркал.</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Icon name="Smartphone" className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Мобильное приложение</div>
                  <div className="text-gray-400 text-sm">доступно для Android и iOS, работает независимо от блокировок и автоматически обновляется.</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Icon name="Bookmark" className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Закладки в браузере</div>
                  <div className="text-gray-400 text-sm">если вы уже заходили через рабочее зеркало, сохраните его, чтобы не искать каждый раз заново.</div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Icon name="Globe" className="w-6 h-6 text-primary mt-1" />
                <div>
                  <div className="font-semibold text-white mb-1">Проверенные обзорные ресурсы</div>
                  <div className="text-gray-400 text-sm">сайты с репутацией публикуют только протестированные ссылки.</div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-8 bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
            <strong className="text-yellow-400">Важно помнить:</strong> даже если вы ищете зеркало Vavada на сегодня, не переходите по первой попавшейся ссылке из поиска. Многие домены, имитирующие официальный ресурс, ведут на фишинговые страницы.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Icon name="AlertTriangle" className="w-8 h-8 text-red-500" />
            Опечатки и альтернативные написания: на что обратить внимание?
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Из-за схожести звучания пользователи часто допускают ошибки при вводе названия казино — например, пишут «вавада vadaa» или «вавада vavadaa». Мошенники активно используют такие опечатки, регистрируя домены вроде vadaa-casino.com или vavadaa-official.net. Эти сайты могут выглядеть как настоящий Vavada, но на деле не имеют отношения к оригиналу.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            Официальный проект никогда не использует удвоенные буквы в домене и не требует предоплаты за вывод средств. Если вы сомневаетесь в подлинности ресурса — закройте вкладку и перейдите через проверенный канал.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Icon name="Gift" className="w-8 h-8 text-pink-500" />
            Бонусы, промокоды и акции в 2025 году
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            Новые игроки могут воспользоваться щедрым приветственным пакетом, включающим до 30 000 рублей и 150 фриспинов. Для активации бонуса достаточно ввести действующий промокод при регистрации. Такие коды регулярно публикуются в официальных каналах казино и у партнёрских обозревателей. Кроме того, Vavada предлагает еженедельный кэшбэк, турниры с крупными призовыми фондами и персональные предложения для постоянных клиентов.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Icon name="MapPin" className="w-8 h-8 text-cyan-500" />
            Vavada для игроков из Казахстана и других стран СНГ
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            Казино полностью адаптировано для аудитории из стран СНГ. Поддерживается работа с тенге, рублями, сомами и другими валютами, а интерфейс доступен на русском языке. Пополнение и вывод средств осуществляются через локальные платёжные системы, включая Kaspi, Payeer, СБП и криптовалюты. Это делает Vavada удобным выбором не только для россиян, но и для пользователей из Казахстана, Узбекистана, Армении и других регионов.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Icon name="Lock" className="w-8 h-8 text-green-500" />
            Безопасность и лицензирование
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-8">
            Vavada работает на основании международной лицензии Curacao eGaming, что подтверждает соблюдение стандартов честной игры. Все транзакции защищены современным SSL-шифрованием, а генератор случайных чисел (RNG) проходит регулярные независимые аудиты. Личные данные пользователей не передаются третьим лицам, а верификация требуется только при первом выводе крупной суммы — и даже в этом случае процесс остаётся максимально простым и анонимным.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Icon name="MessageSquare" className="w-8 h-8 text-purple-500" />
            Отзывы игроков о Vavada в 2025 году
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Мнения реальных пользователей помогают понять, насколько платформа соответствует ожиданиям. Вот несколько типичных отзывов:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Андрей, 34 года, Москва</div>
                  <div className="flex items-center gap-1 text-yellow-400 mt-1">
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                «Играю в Vavada уже два года. Ни разу не было проблем с выплатами — деньги приходят за 10–20 минут. Зеркала работают стабильно, особенно удобно через приложение.»
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 border border-green-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Данияр, 28 лет, Алматы</div>
                  <div className="flex items-center gap-1 text-yellow-400 mt-1">
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                «Для Казахстана — один из лучших вариантов. Пополняю через Kaspi, вывожу в тенге. Поддержка отвечает быстро, даже ночью.»
              </p>
            </div>

            <div className="bg-gradient-to-r from-pink-900/20 to-rose-900/20 border border-pink-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Елена, 41 год, Минск</div>
                  <div className="flex items-center gap-1 text-yellow-400 mt-1">
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                «Сначала боялась мошенников, но нашла официальное зеркало через Telegram. Теперь играю спокойно, бонусы начисляют сразу.»
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-900/20 to-amber-900/20 border border-orange-500/30 rounded-lg p-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">Руслан, 25 лет, Екатеринбург</div>
                  <div className="flex items-center gap-1 text-yellow-400 mt-1">
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                    <Icon name="Star" className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic">
                «Пробовал много казино — Vavada выделяется скоростью и честностью. Даже в демо-режиме слоты работают без тормозов.»
              </p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-8">
            Конечно, встречаются и негативные отзывы — чаще всего они связаны с попытками входа через поддельные сайты или нарушением правил бонусов. Но при использовании официального ресурса подавляющее большинство игроков остаются довольны.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Icon name="HelpCircle" className="w-8 h-8 text-blue-500" />
            Часто задаваемые вопросы (FAQ)
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-primary/20 border-b border-white/10 p-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Icon name="Search" className="w-5 h-5" />
                  Где найти официальный сайт Vavada в 2025 году?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-300">
                  Официальный сайт и его рабочие зеркала публикуются в Telegram-канале казино и на проверенных обзорных ресурсах. Избегайте случайных ссылок из поиска.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-primary/20 border-b border-white/10 p-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Icon name="Link" className="w-5 h-5" />
                  Какое зеркало Vavada работает сегодня?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-300">
                  Актуальные зеркала обновляются ежедневно. Лучший способ — подписаться на официальный Telegram или сохранить рабочую ссылку в закладки.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-primary/20 border-b border-white/10 p-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Icon name="Gamepad2" className="w-5 h-5" />
                  Можно ли играть в Vavada бесплатно?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-300">
                  Да, все слоты доступны в демо-режиме без регистрации и пополнения счёта.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-primary/20 border-b border-white/10 p-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Icon name="FileText" className="w-5 h-5" />
                  Нужен ли паспорт для регистрации?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-300">
                  Нет. Регистрация анонимна. Верификация может потребоваться только при первом выводе крупной суммы.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-primary/20 border-b border-white/10 p-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Icon name="Clock" className="w-5 h-5" />
                  Как быстро выводят выигрыш?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-300">
                  Большинство запросов обрабатываются в течение 15 минут. Максимальное время — 24 часа.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-primary/20 border-b border-white/10 p-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Icon name="Bitcoin" className="w-5 h-5" />
                  Поддерживает ли Vavada криптовалюты?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-300">
                  Да, доступны Bitcoin, Ethereum, USDT и другие популярные криптовалюты.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-primary/20 border-b border-white/10 p-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Icon name="Smartphone" className="w-5 h-5" />
                  Есть ли мобильное приложение Vavada?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-300">
                  Да, приложение доступно для Android и iOS. Оно работает независимо от блокировок и автоматически обновляется.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-primary/20 border-b border-white/10 p-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Icon name="ShieldCheck" className="w-5 h-5" />
                  Безопасно ли использовать зеркало Vavada?
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-300">
                  Да, если оно официальное. Все зеркала используют те же протоколы шифрования и лицензии, что и основной сайт.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Icon name="CheckCircle" className="w-8 h-8 text-green-500" />
            Заключение: играйте с уверенностью в 2025 году
          </h2>
          
          <p className="text-gray-300 leading-relaxed mb-6">
            Vavada остаётся стабильным, безопасным и выгодным выбором для всех, кто ценит качественное онлайн-казино. Даже в условиях ужесточения блокировок платформа обеспечивает бесперебойный доступ через официальные зеркала, поддерживает быстрые выплаты и радует игроков новыми акциями. Главное — всегда использовать проверенные источники для входа и избегать поддельных сайтов.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Сохраните эту страницу в закладки, чтобы в любой момент получить актуальную информацию о рабочем зеркале, бонусах и способах безопасного входа. Vavada — это не просто казино, а надёжное пространство для развлечений, где каждый игрок чувствует себя в безопасности.
          </p>

          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 border-2 border-primary rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Готовы начать?
            </h3>
            <p className="text-gray-300 mb-6">
              Перейдите на официальный сайт Vavada или его актуальное зеркало и получите свой приветственный бонус уже сегодня!
            </p>
            <Button className="gradient-neon text-white font-bold px-12 py-6 text-lg" onClick={() => setRegisterOpen(true)}>
              <Icon name="Rocket" className="w-6 h-6 mr-2" />
              НАЧАТЬ ИГРАТЬ
            </Button>
          </div>
        </article>
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

      <footer className="border-t border-white/10 bg-[#1A1F2C] mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-black mb-4">
                <span className="gradient-neon bg-clip-text text-transparent">VAVADA</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Онлайн казино с лицензией Кюрасао. Играйте безопасно и выигрывайте!
              </p>
              <div className="flex items-center gap-2 text-sm">
                <Icon name="Award" className="w-5 h-5 text-yellow-500" />
                <span className="text-white font-semibold">Лицензия Кюрасао</span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Игры</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Слоты</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Живые дилеры</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Рулетка</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Блэкджек</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Покер</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Правила</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Ответственная игра</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Конфиденциальность</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Поддержка</li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Способы оплаты</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center border border-white/20">
                  <Icon name="CreditCard" className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center border border-white/20">
                  <Icon name="Wallet" className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center border border-white/20">
                  <Icon name="Smartphone" className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center border border-white/20">
                  <Icon name="Bitcoin" className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center border border-white/20">
                  <Icon name="Banknote" className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center border border-white/20">
                  <Icon name="QrCode" className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span>© 2024 VAVADA Casino</span>
                <span className="hidden md:inline">•</span>
                <span>Все права защищены</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge className="bg-green-600/20 text-green-400 border border-green-600/30">
                  <Icon name="Shield" className="w-3 h-3 mr-1" />
                  SSL защита
                </Badge>
                <Badge className="bg-blue-600/20 text-blue-400 border border-blue-600/30">
                  18+
                </Badge>
              </div>
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Играйте ответственно. Азартные игры могут вызывать зависимость.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;