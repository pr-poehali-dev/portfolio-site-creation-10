import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-inter font-bold text-foreground">
              Дмитрий Петров
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Обо мне
              </a>
              <a href="#goals" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Цели
              </a>
              <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Проекты
              </a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-bold text-foreground mb-6">
              Начинающий предприниматель и<br />
              <span className="text-primary">будущий лидер бизнеса</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Активно изучаю мир бизнеса, развиваю навыки и ищу возможности для создания 
              собственного дела. Готов к новым вызовам и амбициозным проектам.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                Связаться со мной
                <Icon name="ArrowRight" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                Мои навыки
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-inter font-bold text-foreground mb-6">
                Обо мне
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Молодой и амбициозный человек, который только начинает свой путь в мире бизнеса. 
                  Активно изучаю основы предпринимательства, посещаю курсы и семинары, читаю профильную литературу.
                </p>
                <p>
                  Верю в силу инноваций и современных технологий. Мечтаю создать собственный бизнес, 
                  который принесет пользу людям и станет успешным проектом. Готов учиться, работать и развиваться.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Учебных проекта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2</div>
                  <div className="text-sm text-muted-foreground">Года обучения</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name="Search" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Изучение рынка</h4>
                      <p className="text-sm text-muted-foreground">
                        Анализ трендов, потребностей клиентов и поиск бизнес-возможностей
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name="BookOpen" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Развитие навыков</h4>
                      <p className="text-sm text-muted-foreground">
                        Постоянное обучение и освоение новых компетенций для бизнеса
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-inter font-bold text-foreground mb-4">
              Мои цели и планы
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Куда стремлюсь и чего хочу достичь
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="GraduationCap" size={24} className="text-primary" />
                </div>
                <div className="text-lg font-bold text-primary mb-2">MBA</div>
                <p className="text-sm text-muted-foreground">Получить бизнес-образование</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Lightbulb" size={24} className="text-primary" />
                </div>
                <div className="text-lg font-bold text-primary mb-2">Стартап</div>
                <p className="text-sm text-muted-foreground">Запустить собственный проект</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div className="text-lg font-bold text-primary mb-2">Команда</div>
                <p className="text-sm text-muted-foreground">Собрать сильную команду</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <div className="text-lg font-bold text-primary mb-2">Рост</div>
                <p className="text-sm text-muted-foreground">Масштабировать бизнес</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-inter font-bold text-foreground mb-4">
              Учебные проекты
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мой опыт и первые шаги в бизнесе
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                <img 
                  src="/img/b7673088-e28e-4c44-a774-5363049a504a.jpg" 
                  alt="Бизнес-план стартапа"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Бизнес-план стартапа</CardTitle>
                <CardDescription>
                  Учебный проект • 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Разработка комплексного бизнес-плана для IT-стартапа с анализом рынка, 
                  финансовой моделью и стратегией развития.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Планирование</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Анализ</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                <img 
                  src="/img/4446696b-eac7-4163-935d-8095773343ad.jpg" 
                  alt="Маркетинговое исследование"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Маркетинговое исследование</CardTitle>
                <CardDescription>
                  Курсовой проект • 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Глубокий анализ потребительских предпочтений на рынке 
                  экологических товаров и разработка рекомендаций.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Маркетинг</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Исследование</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                <img 
                  src="/img/bc071939-7dbe-4ab3-a529-3b4b30b18b2a.jpg" 
                  alt="Проект по менеджменту"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Управление проектом</CardTitle>
                <CardDescription>
                  Командная работа • 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Руководство студенческой командой в разработке концепции 
                  социального предприятия для помощи пожилым людям.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Лидерство</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Команда</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-inter font-bold text-foreground mb-6">
            Готов к новым знакомствам?
          </h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ищу наставников, единомышленников и возможности для развития
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">d.petrov@student.com</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Telegram</h4>
                <p className="text-muted-foreground">@dmitry_petrov</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Linkedin" size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">LinkedIn</h4>
                <p className="text-muted-foreground">dmitry-petrov-business</p>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="text-base px-8">
            <Icon name="Coffee" size={20} />
            Встретиться за кофе
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Дмитрий Петров. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;