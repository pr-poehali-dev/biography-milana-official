import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center z-20">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-gradient-to-r from-coral to-orange-500 text-white border-none px-4 py-2 text-sm font-medium">
              Начинающий блогер
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Milana
              <br />
              Official
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              Мечтаю создать большую аудиторию и запустить свой сольный концерт.
              Каждый день работаю над своей мечтой! 🚀
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-coral to-orange-500 hover:from-coral/90 hover:to-orange-500/90 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                Подписаться
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg rounded-full transition-all duration-300"
              >
                Связаться
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-coral/20 to-orange-500/20 rounded-3xl blur-3xl transform rotate-3"></div>
            <img
              src="/img/5126812f-21a8-46ca-910a-6af459800d98.jpg"
              alt="Milana Official"
              className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-coral to-orange-500 bg-clip-text text-transparent">
              Обо мне
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Я начинающий блогер с большими амбициями. Некоторые меня уже
              узнают на улице и просят сфотографироваться — может быть и по
              шутке, но это невероятно приятно! 💕
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-coral/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-coral to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Страсть
                </h3>
                <p className="text-gray-300">
                  Создаю контент с душой и делюсь своими мечтами с аудиторией
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-coral/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-coral to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Амбиции
                </h3>
                <p className="text-gray-300">
                  Стремлюсь к большой аудитории и собственному концерту
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-coral/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-coral to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Сообщество
                </h3>
                <p className="text-gray-300">
                  Люди начинают меня узнавать — это невероятно вдохновляет!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-coral to-orange-500 bg-clip-text text-transparent">
              Карьера
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Путь от мечты к реальности — каждый день новые достижения и планы
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-coral to-orange-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Начало пути
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Только начинаю свой путь в блогинге, но уже чувствую
                    поддержку аудитории. Каждый новый подписчик — это шаг к
                    большой мечте!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-coral to-orange-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Узнаваемость
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Люди начинают меня узнавать на улице! Это невероятное
                    чувство — понимать, что твой контент достигает людей.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-coral to-orange-500 w-3 h-3 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Большая мечта
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Моя цель — собрать большую аудиторию и организовать свой
                    сольный концерт. Каждый день работаю над этой мечтой!
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 p-8">
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-coral to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Music" size={32} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Сольный концерт
                    </h3>
                    <p className="text-gray-300">Главная мечта и цель</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Прогресс к цели</span>
                      <span className="text-coral font-semibold">25%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-coral to-orange-500 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-coral to-orange-500 bg-clip-text text-transparent">
              Фото
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Моменты из жизни блогера — от съемок до встреч с подписчиками
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-coral/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon
                    name="Camera"
                    size={32}
                    className="text-gray-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">Фото {index}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Networks Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-coral to-orange-500 bg-clip-text text-transparent">
              Социальные сети
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Подписывайтесь и следите за моим путем к большой мечте! 🚀
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-coral/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Instagram" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Instagram
                </h3>
                <p className="text-gray-300 mb-4">@milana_official</p>
                <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white w-full rounded-full">
                  Подписаться
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-coral/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Twitter" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Twitter
                </h3>
                <p className="text-gray-300 mb-4">@milana_official</p>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white w-full rounded-full">
                  Подписаться
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-coral/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-red-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Youtube" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  YouTube
                </h3>
                <p className="text-gray-300 mb-4">Milana Official</p>
                <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white w-full rounded-full">
                  Подписаться
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-coral/50 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name="MessageCircle" size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Telegram
                </h3>
                <p className="text-gray-300 mb-4">@milana_official</p>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white w-full rounded-full">
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Присоединяйтесь к моему путешествию!
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Вместе мы дойдем до сольного концерта 🎤✨
            </p>
            <Button className="bg-gradient-to-r from-coral to-orange-500 hover:from-coral/90 hover:to-orange-500/90 text-white px-12 py-4 text-xl font-semibold rounded-full transition-all duration-300 hover:scale-105">
              Подписаться на все соцсети
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-coral to-orange-500 bg-clip-text text-transparent">
            Milana Official
          </h4>
          <p className="text-gray-400 mb-4">
            Начинающий блогер с большими мечтами
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Milana Official. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
