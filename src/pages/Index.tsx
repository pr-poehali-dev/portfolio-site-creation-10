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
              Александр Иванов
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Обо мне
              </a>
              <a href="#achievements" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Достижения
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
              Бизнес-консультант и<br />
              <span className="text-primary">стратегический партнер</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Помогаю компаниям достигать новых высот через инновационные решения 
              и стратегическое планирование. Более 15 лет опыта в развитии бизнеса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                Обсудить проект
                <Icon name="ArrowRight" size={20} />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                Скачать резюме
                <Icon name="Download" size={20} />
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
                  Предприниматель с многолетним опытом создания и развития успешных бизнес-проектов. 
                  Специализируюсь на стратегическом консалтинге, цифровой трансформации и управлении инновациями.
                </p>
                <p>
                  За годы работы помог более чем 100 компаниям оптимизировать процессы, увеличить прибыль 
                  и выйти на новые рынки. Мой подход основан на глубоком анализе, инновационных решениях 
                  и долгосрочном партнерстве.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Успешных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name="Target" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Стратегическое планирование</h4>
                      <p className="text-sm text-muted-foreground">
                        Разработка долгосрочных стратегий развития и роста бизнеса
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon name="TrendingUp" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Масштабирование бизнеса</h4>
                      <p className="text-sm text-muted-foreground">
                        Оптимизация процессов и структур для устойчивого роста
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-inter font-bold text-foreground mb-4">
              Ключевые достижения
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Результаты, которые говорят сами за себя
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">₽2.5М</div>
                <p className="text-sm text-muted-foreground">Средний рост прибыли клиентов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Команд обучено и развито</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">12</div>
                <p className="text-sm text-muted-foreground">Международных проектов</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">95%</div>
                <p className="text-sm text-muted-foreground">Успешность проектов</p>
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
              Избранные проекты
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры успешного сотрудничества с клиентами
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                <img 
                  src="/img/b7673088-e28e-4c44-a774-5363049a504a.jpg" 
                  alt="Проект цифровой трансформации"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Цифровая трансформация</CardTitle>
                <CardDescription>
                  Технологическая компания • 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Полная цифровизация бизнес-процессов, увеличение эффективности на 40% 
                  и сокращение операционных расходов на ₽1.2М в год.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Стратегия</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Digital</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                <img 
                  src="/img/4446696b-eac7-4163-935d-8095773343ad.jpg" 
                  alt="Аналитическая система"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Аналитическая система</CardTitle>
                <CardDescription>
                  Розничная сеть • 2023
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Внедрение системы бизнес-аналитики и прогнозирования, 
                  повышение точности планирования на 60%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Аналитика</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">BI</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                <img 
                  src="/img/bc071939-7dbe-4ab3-a529-3b4b30b18b2a.jpg" 
                  alt="Консалтинговый проект"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Стратегический консалтинг</CardTitle>
                <CardDescription>
                  Производственное предприятие • 2022
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Разработка стратегии выхода на европейский рынок, 
                  увеличение выручки на ₽15М за первый год.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Экспорт</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Рост</span>
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
            Готов к сотрудничеству?
          </h3>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Обсудим ваши цели и найдем решения для развития вашего бизнеса
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Mail" size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-muted-foreground">a.ivanov@business.com</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Phone" size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-primary/10 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Linkedin" size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold mb-2">LinkedIn</h4>
                <p className="text-muted-foreground">alexander-ivanov</p>
              </CardContent>
            </Card>
          </div>
          
          <Button size="lg" className="text-base px-8">
            <Icon name="Calendar" size={20} />
            Записаться на консультацию
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Александр Иванов. Все права защищены.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Icon name="Twitter" size={20} />
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