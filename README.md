# 💅 Brenda Beauty - Salão de Beleza

Site profissional e altamente responsivo desenvolvido com HTML5, Tailwind CSS e JavaScript moderno, utilizando GSAP para animações suaves e profissionais.

## 🎯 Características

- ✅ **Design Responsivo**: Mobile First - Perfeito em smartphones, tablets e desktops
- ✅ **Animações Profissionais**: GSAP + ScrollTrigger + SplitText
- ✅ **Performance Otimizada**: Carregamento rápido e suave
- ✅ **UX Excepcional**: Navegação intuitiva e experiência do usuário impecável
- ✅ **SEO Otimizado**: Estrutura semântica HTML5
- ✅ **Acessibilidade**: Seguindo padrões WCAG

## 📁 Estrutura do Projeto

```
brenda-salao/
│
├── index.htm           # Página principal (HTML5)
├── styles.css          # Estilos customizados
├── script.js           # JavaScript e animações GSAP
│
└── img/                # Pasta de imagens
    ├── brenda-001.png  # Background Hero Section
    ├── brenda-02.png   # Background Footer
    ├── brenda-03.png   # Serviço 1 / Animação
    ├── brenda-04.png   # Serviço 2 / Animação
    ├── brenda-05.png   # Serviço 3 / Animação
    ├── brenda-006.png  # Imagem principal Seção Sobre
    └── backgroude-color.png  # Background Seção Serviços
```

## 🎨 Seções do Site

### 1. **Header / Navegação**

- Menu fixo (sticky) com efeito de transparência ao scroll
- Logo animado com gradiente
- Menu responsivo para mobile com animação
- Links de navegação suave (smooth scroll)

### 2. **Hero Section**

- Background com overlay escuro para contraste
- Título com animação letra por letra (SplitText)
- Subtítulo animado
- 2 CTAs principais: "Agendar Meu Horário" e "Conhecer Serviços"
- Efeito parallax no background
- Indicador de scroll animado

### 3. **Seção Serviços**

- Background personalizado com overlay
- 6 cards de serviços em grid responsivo
- Efeito de zoom ao passar o mouse
- Animação de entrada ao scroll
- Ícones Lucide para cada serviço

### 4. **Seção Sobre**

- Layout em 2 colunas (imagem + texto)
- Imagem principal com efeito hover
- **3 imagens animadas**: Entram da esquerda para o centro ao scroll
- Animação de flutuação contínua nas imagens
- Estatísticas animadas
- CTA para contato via WhatsApp

### 5. **Footer / Contatos**

- Background com overlay
- 4 cards informativos: Endereço, Telefone, E-mail, Horário
- Links de redes sociais com animação
- Copyright e créditos

### 6. **WhatsApp Flutuante**

- Botão fixo no canto inferior direito
- Animação de pulso para chamar atenção
- Aparece somente após scroll de 300px

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **Tailwind CSS**: Framework CSS via CDN
- **JavaScript ES6+**: Funcionalidades modernas
- **GSAP 3.12.5**: Biblioteca de animações
- **ScrollTrigger**: Plugin GSAP para animações no scroll
- **SplitType**: Animação de texto letra por letra
- **Lucide Icons**: Biblioteca de ícones SVG

## ⚙️ Instalação e Uso

### Passo 1: Verificar Estrutura

Certifique-se de que todas as imagens estão na pasta `img/`:

```
img/
├── brenda-001.png
├── brenda-02.png
├── brenda-03.png
├── brenda-04.png
├── brenda-05.png
├── brenda-006.png
└── backgroude-color.png
```

### Passo 2: Abrir o Site

Simplesmente abra o arquivo `index.htm` em seu navegador ou use um servidor local:

```bash
# Opção 1: Abrir diretamente
# Clique duas vezes em index.htm

# Opção 2: Usar Live Server (VSCode)
# Clique com botão direito > Open with Live Server

# Opção 3: Python Simple Server
python -m http.server 8000

# Opção 4: Node.js http-server
npx http-server
```

### Passo 3: Personalizar

Edite os arquivos conforme necessário:

- **Textos**: Edite diretamente no `index.htm`
- **Cores**: Modifique as classes Tailwind ou adicione no `styles.css`
- **Animações**: Ajuste timing e easing no `script.js`
- **Contatos**: Atualize números de telefone e links do WhatsApp

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎬 Animações Implementadas

### GSAP Animations:

- ✅ Hero Title: SplitText letra por letra
- ✅ Hero Subtitle: Fade in com delay
- ✅ Hero CTAs: Fade in + scale
- ✅ Service Cards: Fade in + rotation ao scroll
- ✅ Floating Images: Slide da esquerda + flutuação contínua
- ✅ Sobre Text: Fade in em cascata
- ✅ Footer: Animação em grid
- ✅ WhatsApp Float: Pulse contínuo
- ✅ Parallax: Efeito em backgrounds

## 🎨 Paleta de Cores

```css
Primary: #c7a284 (Marrom Rosado / Glamour Brown)
Secondary: #ececea (Bege Claro / Glamour Light)
Accent: #8b7355 (Marrom Escuro / Glamour Dark)
Dark: #000000
Light: #ffffff
Success: #22c55e (Green - WhatsApp)
```

## 🔗 Links Importantes

Atualize os seguintes links no código:

1. **WhatsApp**: Substitua `5585999999999` pelo número real
2. **Instagram**: Adicione o link da conta
3. **Facebook**: Adicione o link da página
4. **E-mail**: Atualize o e-mail de contato

## 📊 Performance

- ⚡ Carregamento rápido com CDN
- 🎯 Lazy loading de imagens
- 🔄 ScrollTrigger otimizado
- 📦 CSS e JS minificados prontos para produção

## 🛠️ Customização Avançada

### Adicionar Novo Serviço

Copie e cole um card existente em `index.htm` na seção de serviços:

```html
<div
  class="service-card bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105"
>
  <div class="service-card-image h-64 overflow-hidden">
    <img
      src="img/nova-imagem.png"
      alt="Novo Serviço"
      class="w-full h-full object-cover transition-transform duration-500"
    />
  </div>
  <div class="p-6">
    <h3 class="text-2xl font-bold text-white mb-3 flex items-center gap-2">
      <i data-lucide="icon-name" class="w-6 h-6 text-pink-400"></i>
      Nome do Serviço
    </h3>
    <p class="text-gray-200">Descrição do serviço aqui.</p>
  </div>
</div>
```

### Mudar Cores do Tema

Edite as classes Tailwind ou adicione no `styles.css`:

```css
/* Mudar cor primária */
.bg-pink-600 {
  background: #sua-cor;
}
.text-pink-400 {
  color: #sua-cor;
}
```

## 📝 Checklist de Implementação

- ✅ HTML5 semântico e estruturado
- ✅ Tailwind CSS via CDN
- ✅ GSAP + ScrollTrigger + SplitText
- ✅ Lucide Icons
- ✅ Responsividade perfeita
- ✅ Animações suaves e profissionais
- ✅ WhatsApp flutuante com pulso
- ✅ Menu mobile funcional
- ✅ Smooth scroll
- ✅ Hover effects nos cards
- ✅ Parallax backgrounds
- ✅ SEO otimizado
- ✅ Performance otimizada

## 🐛 Troubleshooting

### Imagens não aparecem?

- Verifique se todas as imagens estão na pasta `img/`
- Confirme os nomes dos arquivos (case-sensitive)
- Verifique o caminho relativo

### Animações não funcionam?

- Verifique se os CDNs do GSAP estão carregando
- Abra o Console do navegador (F12) para ver erros
- Certifique-se de que o `script.js` está sendo carregado

### Menu mobile não abre?

- Verifique se o JavaScript está habilitado
- Confirme se Lucide Icons está carregando
- Limpe o cache do navegador

## 📞 Suporte

Para dúvidas ou sugestões:

- 📧 E-mail: contato@agendaglamour.com.br
- 📱 WhatsApp: (85) 9 9999-9999

## 📄 Licença

Este projeto foi desenvolvido para o Agenda Glamour.
Todos os direitos reservados © 2026

---

**Desenvolvido com ❤️ por um Desenvolvedor Front-end Sênior**

🚀 **Pronto para uso! Basta abrir o index.htm e ver a mágica acontecer!**
