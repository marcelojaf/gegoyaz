# Documentação do Site - Grupo Escoteiro Goyaz

## Índice

1. [Visão Geral](#visão-geral)
2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Guia de Estilo](#guia-de-estilo)
4. [Componentes](#componentes)
5. [Integração com Instagram](#integração-com-instagram)
6. [Diretrizes para Fotos](#diretrizes-para-fotos)
7. [Boas Práticas e Clean Code](#boas-práticas-e-clean-code)
8. [Plano de Evolução](#plano-de-evolução)

## Visão Geral

### Objetivos

- Apresentar o grupo escoteiro
- Compartilhar notícias e eventos
- Integrar com redes sociais
- Seguir identidade visual dos Escoteiros do Brasil
- Fornecer informações sobre atividades e programação
- Servir como ponto de contato inicial para interessados

### Tecnologias Principais

- Next.js 13+
- React 18+
- TypeScript 5+
- Bootstrap 5
- Instagram Basic Display API

### Requisitos de Sistema

- Node.js 18.17 ou superior
- npm 9+ ou yarn 1.22+
- Git para controle de versão

## Estrutura do Projeto

```bash
src/
├── app/                    # Diretório principal do Next.js App Router
│   ├── layout.tsx         # Layout principal da aplicação
│   ├── page.tsx           # Página inicial
│   ├── about/            # Página Sobre
│   ├── news/             # Página de Notícias
│   ├── events/           # Página de Eventos
│   └── contact/          # Página de Contato
├── components/
│   ├── layout/           # Componentes de layout
│   │   ├── Header/
│   │   │   ├── index.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── styles.module.css
│   │   ├── Footer/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.css
│   │   └── Container.tsx
│   ├── news/             # Componentes relacionados a notícias
│   │   ├── NewsCard.tsx
│   │   ├── NewsGrid.tsx
│   │   └── NewsHighlight.tsx
│   ├── events/           # Componentes relacionados a eventos
│   │   ├── EventCard.tsx
│   │   ├── EventList.tsx
│   │   └── EventCalendar.tsx
│   └── ui/               # Componentes de UI reutilizáveis
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Input.tsx
├── lib/
│   ├── constants/        # Constantes e configurações
│   │   ├── colors.ts
│   │   ├── config.ts
│   │   └── routes.ts
│   ├── data/            # Dados estáticos
│   │   ├── news.ts
│   │   └── events.ts
│   ├── services/        # Serviços externos
│   │   └── instagram.ts
│   └── utils/           # Funções utilitárias
│       ├── dates.ts
│       └── formatters.ts
├── styles/              # Estilos globais
│   ├── globals.css
│   └── variables.css
├── types/              # Definições de tipos TypeScript
│   └── index.ts
└── public/             # Arquivos estáticos
    ├── images/
    ├── logos/
    └── icons/
```

## Guia de Estilo

### Sistema de Cores

```typescript
const THEME_COLORS = {
  // Cores Principais
  primary: {
    main: "#0047AB", // Azul Royal (cor do grupo)
    light: "#1E90FF", // Azul mais claro para hover
    dark: "#00008B", // Azul escuro para contraste
    100: "#E6F3FF",
    200: "#B3D9FF",
    300: "#80BFFF",
    400: "#4DA6FF",
    500: "#0047AB", // main
    600: "#003D91",
    700: "#003377",
    800: "#00295D",
    900: "#001F43",
  },

  // Cores Secundárias (dos Escoteiros)
  secondary: {
    green: {
      main: "#00853e", // Verde (foresta)
      light: "#00A84E",
      dark: "#006230",
      100: "#E6F6ED",
      200: "#B3E6CC",
      300: "#80D6AB",
      400: "#4DC68A",
      500: "#00853e", // main
      600: "#006E33",
      700: "#005728",
      800: "#00401D",
      900: "#002912",
    },
    yellow: {
      main: "#fff200", // Amarelo (sol)
      light: "#FFFF4D",
      dark: "#CCB900",
      100: "#FFFEE6",
      200: "#FFFCB3",
      300: "#FFFA80",
      400: "#FFF84D",
      500: "#fff200", // main
      600: "#E6D900",
      700: "#BFB500",
      800: "#998F00",
      900: "#736A00",
    },
    blue: {
      main: "#00accd", // Azul (água)
      light: "#00D1F5",
      dark: "#007A91",
      100: "#E6F9FF",
      200: "#B3EFFF",
      300: "#80E5FF",
      400: "#4DDBFF",
      500: "#00accd", // main
      600: "#0090AB",
      700: "#00748A",
      800: "#005868",
      900: "#003C47",
    },
    darkBlue: {
      main: "#004a8d", // Azul escuro (estrela)
      light: "#0060B8",
      dark: "#003466",
      100: "#E6EEF7",
      200: "#B3CEE8",
      300: "#80AED9",
      400: "#4D8ECA",
      500: "#004a8d", // main
      600: "#003D75",
      700: "#00305D",
      800: "#002345",
      900: "#00162E",
    },
  },

  // Cores Neutras
  neutral: {
    white: "#FFFFFF",
    black: "#000000",
    background: "#F8F9FA",
    text: {
      primary: "#2D3748",
      secondary: "#4A5568",
      disabled: "#A0AEC0",
    },
    gray: {
      50: "#F7FAFC",
      100: "#EDF2F7",
      200: "#E2E8F0",
      300: "#CBD5E0",
      400: "#A0AEC0",
      500: "#718096",
      600: "#4A5568",
      700: "#2D3748",
      800: "#1A202C",
      900: "#171923",
    },
  },

  // Cores de Estado
  state: {
    success: {
      light: "#68D391",
      main: "#48BB78",
      dark: "#2F855A",
      surface: "#F0FFF4",
    },
    warning: {
      light: "#F6E05E",
      main: "#ECC94B",
      dark: "#B7791F",
      surface: "#FFFFF0",
    },
    error: {
      light: "#FC8181",
      main: "#F56565",
      dark: "#C53030",
      surface: "#FFF5F5",
    },
    info: {
      light: "#63B3ED",
      main: "#4299E1",
      dark: "#2B6CB0",
      surface: "#EBF8FF",
    },
  },
};
```

## Sistema de Design

### Tipografia

```typescript
const TYPOGRAPHY = {
  // Famílias de Fonte
  fontFamily: {
    base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    monospace:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },

  // Tamanhos de Fonte
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "4rem", // 64px
  },

  // Pesos de Fonte
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Altura da Linha
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Espaçamento entre Letras
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
};

// Aplicações de Tipografia
const TEXT_STYLES = {
  h1: {
    fontSize: TYPOGRAPHY.fontSize["4xl"],
    fontWeight: TYPOGRAPHY.fontWeight.bold,
    lineHeight: TYPOGRAPHY.lineHeight.tight,
  },
  h2: {
    fontSize: TYPOGRAPHY.fontSize["3xl"],
    fontWeight: TYPOGRAPHY.fontWeight.semibold,
    lineHeight: TYPOGRAPHY.lineHeight.tight,
  },
  h3: {
    fontSize: TYPOGRAPHY.fontSize["2xl"],
    fontWeight: TYPOGRAPHY.fontWeight.semibold,
    lineHeight: TYPOGRAPHY.lineHeight.tight,
  },
  h4: {
    fontSize: TYPOGRAPHY.fontSize.xl,
    fontWeight: TYPOGRAPHY.fontWeight.semibold,
    lineHeight: TYPOGRAPHY.lineHeight.tight,
  },
  h5: {
    fontSize: TYPOGRAPHY.fontSize.lg,
    fontWeight: TYPOGRAPHY.fontWeight.semibold,
    lineHeight: TYPOGRAPHY.lineHeight.tight,
  },
  h6: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: TYPOGRAPHY.fontWeight.semibold,
    lineHeight: TYPOGRAPHY.lineHeight.tight,
  },
  body1: {
    fontSize: TYPOGRAPHY.fontSize.base,
    fontWeight: TYPOGRAPHY.fontWeight.regular,
    lineHeight: TYPOGRAPHY.lineHeight.normal,
  },
  body2: {
    fontSize: TYPOGRAPHY.fontSize.sm,
    fontWeight: TYPOGRAPHY.fontWeight.regular,
    lineHeight: TYPOGRAPHY.lineHeight.normal,
  },
  caption: {
    fontSize: TYPOGRAPHY.fontSize.xs,
    fontWeight: TYPOGRAPHY.fontWeight.regular,
    lineHeight: TYPOGRAPHY.lineHeight.normal,
  },
};

// Sistema de Espaçamento
const SPACING = {
  // Unidades Base
  px: "1px",
  0: "0",
  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  1.5: "0.375rem", // 6px
  2: "0.5rem", // 8px
  2.5: "0.625rem", // 10px
  3: "0.75rem", // 12px
  3.5: "0.875rem", // 14px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  8: "2rem", // 32px
  9: "2.25rem", // 36px
  10: "2.5rem", // 40px
  11: "2.75rem", // 44px
  12: "3rem", // 48px
  14: "3.5rem", // 56px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  28: "7rem", // 112px
  32: "8rem", // 128px
  36: "9rem", // 144px
  40: "10rem", // 160px
  44: "11rem", // 176px
  48: "12rem", // 192px
  52: "13rem", // 208px
  56: "14rem", // 224px
  60: "15rem", // 240px
  64: "16rem", // 256px
  72: "18rem", // 288px
  80: "20rem", // 320px
  96: "24rem", // 384px
};

// Breakpoints
const BREAKPOINTS = {
  xs: "320px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1400px",
};

// Z-Index
const Z_INDEX = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};
```

### Aplicação de Estilos

#### Exemplo de uso em componentes:

```typescript
// components/ui/Title.tsx
interface TitleProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ level = 1, children, className = "" }: TitleProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const styles = TEXT_STYLES[`h${level}`];

  return (
    <Tag
      style={styles}
      className={className}>
      {children}
    </Tag>
  );
};

// Exemplo de uso
<Title level={2}>Grupo Escoteiro Goyaz</Title>;
```

## Componentes e Interfaces

### Estrutura Base dos Componentes

#### Layout Base

```typescript
// components/layout/Layout.tsx
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

// components/layout/Header.tsx
const Header: React.FC = () => {
  return (
    <header className="bg-primary-main text-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Image
              src="/logos/goyaz.svg"
              alt="GE Goyaz"
              width={60}
              height={60}
            />
            <h1 className="text-xl font-bold">Grupo Escoteiro Goyaz</h1>
          </div>
          <Navigation />
        </nav>
      </div>
    </header>
  );
};

// components/layout/Footer.tsx
const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logos/escoteiros-brasil.svg"
              alt="Escoteiros do Brasil"
              width={150}
              height={60}
            />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <address className="not-italic">
              <p>Grupo Escoteiro Goyaz - 9º GO</p>
              <p>Endereço: ...</p>
              <p>Email: ...</p>
              <p>Telefone: ...</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {/* Ícones de redes sociais */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
```

### Componentes de Notícias

```typescript
// types/news.ts
export interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  image?: {
    url: string;
    alt: string;
  };
  tags: string[];
  author: string;
}

// components/news/NewsCard.tsx
interface NewsCardProps {
  news: NewsItem;
  variant?: "compact" | "full";
}

export const NewsCard: React.FC<NewsCardProps> = ({
  news,
  variant = "compact",
}) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      {news.image && (
        <div className="relative h-48 w-full">
          <Image
            src={news.image.url}
            alt={news.image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-center space-x-2 text-sm text-neutral-600 mb-2">
          <time dateTime={news.date}>
            {new Date(news.date).toLocaleDateString("pt-BR")}
          </time>
          <span>•</span>
          <span>{news.author}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{news.title}</h3>
        <p className="text-neutral-700 mb-4">
          {variant === "compact" ? news.excerpt : news.content}
        </p>
        <div className="flex flex-wrap gap-2">
          {news.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-primary-100 text-primary-700 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
```

### Componentes de Eventos

```typescript
// types/events.ts
export interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  type: "alcateia" | "escoteiro" | "senior" | "pioneiro" | "grupo";
  status: "upcoming" | "ongoing" | "completed";
  image?: {
    url: string;
    alt: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
  organizer: string;
  capacity?: number;
  registrationDeadline?: string;
}

// components/events/EventCard.tsx
interface EventCardProps {
  event: Event;
  variant?: "compact" | "full";
  onRegister?: (eventId: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  variant = "compact",
  onRegister,
}) => {
  const statusColors = {
    upcoming: "bg-green-100 text-green-800",
    ongoing: "bg-blue-100 text-blue-800",
    completed: "bg-gray-100 text-gray-800",
  };

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      {event.image && variant === "full" && (
        <div className="relative h-64 w-full">
          <Image
            src={event.image.url}
            alt={event.image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold">{event.title}</h3>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              statusColors[event.status]
            }`}>
            {event.status === "upcoming"
              ? "Próximo"
              : event.status === "ongoing"
              ? "Em andamento"
              : "Concluído"}
          </span>
        </div>

        <div className="grid gap-2 text-sm text-neutral-600 mb-4">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime={event.startDate}>
              {new Date(event.startDate).toLocaleDateString("pt-BR")}
            </time>
            {event.endDate && (
              <>
                <span>-</span>
                <time dateTime={event.endDate}>
                  {new Date(event.endDate).toLocaleDateString("pt-BR")}
                </time>
              </>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <MapPinIcon className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          {event.capacity && (
            <div className="flex items-center space-x-2">
              <UsersIcon className="h-4 w-4" />
              <span>Capacidade: {event.capacity} pessoas</span>
            </div>
          )}
        </div>

        {variant === "full" && (
          <p className="text-neutral-700 mb-4">{event.description}</p>
        )}

        <div className="flex items-center justify-between">
          <span className="px-2 py-1 text-sm bg-primary-100 text-primary-700 rounded-full">
            {event.type}
          </span>
          {onRegister && event.status === "upcoming" && (
            <button
              onClick={() => onRegister(event.id)}
              className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
              Inscrever-se
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
```

## Integração com Instagram e Serviços

### Instagram Service

```typescript
// lib/services/instagram.ts
interface InstagramPost {
  id: string;
  caption: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

interface InstagramConfig {
  accessToken: string;
  userId: string;
  baseUrl: string;
}

class InstagramService {
  private static config: InstagramConfig = {
    accessToken: process.env.INSTAGRAM_ACCESS_TOKEN || "",
    userId: process.env.INSTAGRAM_USER_ID || "",
    baseUrl: "https://graph.instagram.com",
  };

  static async getFeed(limit: number = 9): Promise<InstagramPost[]> {
    try {
      const url = new URL(`${this.config.baseUrl}/${this.config.userId}/media`);
      url.searchParams.append("access_token", this.config.accessToken);
      url.searchParams.append(
        "fields",
        "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp"
      );
      url.searchParams.append("limit", limit.toString());

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Error fetching Instagram feed:", error);
      return [];
    }
  }

  static async refreshToken(): Promise<void> {
    try {
      const url = new URL(`${this.config.baseUrl}/refresh_access_token`);
      url.searchParams.append("grant_type", "ig_refresh_token");
      url.searchParams.append("access_token", this.config.accessToken);

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`Token refresh failed: ${response.statusText}`);
      }

      const data = await response.json();
      // Implementar lógica para salvar o novo token
    } catch (error) {
      console.error("Error refreshing Instagram token:", error);
    }
  }
}

// components/instagram/InstagramFeed.tsx
interface InstagramFeedProps {
  posts: InstagramPost[];
  columns?: number;
}

export const InstagramFeed: React.FC<InstagramFeedProps> = ({
  posts,
  columns = 3,
}) => {
  return (
    <div className={`grid grid-cols-${columns} gap-4`}>
      {posts.map((post) => (
        <InstagramPost
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

// components/instagram/InstagramPost.tsx
interface InstagramPostProps {
  post: InstagramPost;
}

export const InstagramPost: React.FC<InstagramPostProps> = ({ post }) => {
  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="block relative aspect-square overflow-hidden group">
      {post.media_type === "VIDEO" ? (
        <div className="relative w-full h-full">
          <Image
            src={post.thumbnail_url || ""}
            alt={post.caption}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayIcon className="w-12 h-12 text-white" />
          </div>
        </div>
      ) : (
        <Image
          src={post.media_url}
          alt={post.caption}
          layout="fill"
          objectFit="cover"
        />
      )}

      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
        <p className="text-white text-sm px-4 line-clamp-3">{post.caption}</p>
      </div>
    </a>
  );
};
```

### Configuração do Instagram

1. Criar uma conta de desenvolvedor Facebook:

   ```bash
   # Passos para configuração
   1. Acessar developers.facebook.com
   2. Criar uma nova conta de desenvolvedor
   3. Criar um novo app do tipo "Consumer"
   4. Adicionar o produto "Instagram Basic Display"
   ```

2. Configurar variáveis de ambiente:

   ```env
   # .env.local
   INSTAGRAM_ACCESS_TOKEN=seu_token_aqui
   INSTAGRAM_USER_ID=seu_user_id_aqui
   ```

3. Permissões necessárias:
   - `instagram_graph_user_profile`
   - `instagram_graph_user_media`

### Exemplos de Uso

```typescript
// pages/index.tsx
export async function getStaticProps() {
  const instagramPosts = await InstagramService.getFeed(6);

  return {
    props: {
      instagramPosts,
    },
    revalidate: 3600, // Revalidar a cada hora
  };
}

// Uso no componente
const HomePage: React.FC<HomePageProps> = ({ instagramPosts }) => {
  return (
    <div>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Instagram</h2>
          <InstagramFeed posts={instagramPosts} />
        </div>
      </section>
    </div>
  );
};
```

### Tratamento de Erros e Fallbacks

```typescript
// components/instagram/InstagramFallback.tsx
interface InstagramFallbackProps {
  columns?: number;
}

export const InstagramFallback: React.FC<InstagramFallbackProps> = ({
  columns = 3,
}) => {
  return (
    <div className={`grid grid-cols-${columns} gap-4`}>
      {Array.from({ length: columns * 2 }).map((_, index) => (
        <div
          key={index}
          className="aspect-square bg-gray-200 animate-pulse rounded-lg"
        />
      ))}
    </div>
  );
};
```

## Diretrizes de Implementação e Clean Code

### Princípios de Clean Code

1. **Nomenclatura**

```typescript
// Ruim ❌
const d = new Date();
const x = calculateTotal(items);
function calc(a: number, b: number) {}

// Bom ✅
const currentDate = new Date();
const totalAmount = calculateTotal(items);
function calculateSum(firstNumber: number, secondNumber: number) {}
```

2. **Funções**

```typescript
// Princípio da Responsabilidade Única
// Ruim ❌
function handleUserData(user: User) {
  validateUser(user);
  saveToDatabase(user);
  sendWelcomeEmail(user);
}

// Bom ✅
function processNewUser(user: User) {
  const validatedUser = validateUser(user);
  if (validatedUser) {
    saveUser(validatedUser);
    notifyUser(validatedUser);
  }
}

// Funções pequenas e focadas
function validateUser(user: User): ValidationResult {
  // Lógica de validação
}

function saveUser(user: ValidUser): void {
  // Lógica de salvamento
}

function notifyUser(user: ValidUser): void {
  // Lógica de notificação
}
```

3. **Constantes e Configurações**

```typescript
// lib/constants/config.ts
export const CONFIG = {
  site: {
    name: "Grupo Escoteiro Goyaz",
    description: "Grupo Escoteiro Goyaz - 9º GO",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },
  pagination: {
    defaultLimit: 10,
    maxLimit: 50,
  },
  dates: {
    format: "DD/MM/YYYY",
    locale: "pt-BR",
  },
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    timeout: 5000,
  },
} as const;

// Uso
import { CONFIG } from "@/lib/constants/config";
const formattedDate = format(date, CONFIG.dates.format);
```

4. **Organização de Componentes**

```typescript
// Estrutura de um componente
import { useState, useEffect } from "react";
import type { ComponentProps } from "./types";
import { useComponentLogic } from "./hooks";
import { StyledComponent } from "./styles";
import { CONFIG } from "@/lib/constants";

export const ExampleComponent: React.FC<ComponentProps> = ({
  initialData,
  onUpdate,
  ...props
}) => {
  // 1. Hooks
  const [data, setData] = useState(initialData);
  const { processData } = useComponentLogic();

  // 2. Effects
  useEffect(() => {
    // Lógica do efeito isolada
  }, [dependencies]);

  // 3. Handlers
  const handleUpdate = () => {
    const updatedData = processData(data);
    setData(updatedData);
    onUpdate?.(updatedData);
  };

  // 4. Render
  return <StyledComponent {...props}>{/* JSX */}</StyledComponent>;
};
```

### Padrões de Projeto

1. **Custom Hooks**

```typescript
// hooks/useLocaleStorage.ts
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Estado
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Método para atualizar valor
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}
```

2. **Context API**

```typescript
// contexts/ThemeContext.tsx
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
```

### Tratamento de Erros

```typescript
// lib/utils/error.ts
export class AppError extends Error {
  constructor(
    public message: string,
    public code: string,
    public statusCode: number = 400
  ) {
    super(message);
    this.name = "AppError";
  }
}

// utils/errorHandler.ts
export function handleError(error: unknown) {
  if (error instanceof AppError) {
    // Tratar erro conhecido
    console.error(`[${error.code}] ${error.message}`);
    return error;
  }

  if (error instanceof Error) {
    // Tratar erro genérico
    console.error(error.message);
    return new AppError("Ocorreu um erro inesperado", "UNKNOWN_ERROR", 500);
  }

  // Tratar erro desconhecido
  console.error("Unknown error:", error);
  return new AppError("Erro desconhecido", "UNKNOWN_ERROR", 500);
}
```

## Plano de Evolução

### Fase 1 - MVP (Atual)

```markdown
#### Objetivos

- Site estático inicial
- Integração básica com Instagram
- Exibição de notícias e eventos
- Layout responsivo
- SEO básico

#### Funcionalidades

- [x] Página inicial
- [x] Feed do Instagram
- [x] Listagem de notícias
- [x] Listagem de eventos
- [x] Layout responsivo
- [x] Componentes base

#### Stack Tecnológico

- Next.js 13+
- React 18+
- TypeScript
- Bootstrap
```

### Fase 2 - Administrativo

```markdown
#### Objetivos

- Painel administrativo para gestão de conteúdo
- Sistema de autenticação
- Banco de dados para conteúdo dinâmico
- API REST

#### Funcionalidades Planejadas

- [ ] Sistema de autenticação
  - [ ] Login/Logout
  - [ ] Recuperação de senha
  - [ ] Níveis de acesso
- [ ] Painel administrativo
  - [ ] Gestão de notícias
  - [ ] Gestão de eventos
  - [ ] Gestão de usuários
  - [ ] Upload de imagens
- [ ] Banco de dados
  - [ ] Modelagem de dados
  - [ ] Migrations
  - [ ] Seeds iniciais

#### Stack Tecnológico Adicional

- ASP.NET Core para API
- SQL Server ou PostgreSQL
- Entity Framework Core
- Identity para autenticação
```

### Fase 3 - Área do Membro

```markdown
#### Objetivos

- Área restrita para membros
- Sistema de progressão
- Gestão de conquistas
- Comunicação interna

#### Funcionalidades Planejadas

- [ ] Perfil do membro
  - [ ] Dados pessoais
  - [ ] Histórico escoteiro
  - [ ] Conquistas e especialidades
- [ ] Sistema de progressão
  - [ ] Trilha de progressão
  - [ ] Registro de atividades
  - [ ] Aprovações e validações
- [ ] Comunicação
  - [ ] Chat interno
  - [ ] Notificações
  - [ ] Calendário pessoal

#### Stack Tecnológico Adicional

- SignalR para comunicação em tempo real
- Azure Storage para arquivos
- SendGrid para emails
```

### Fase 4 - Expansão e Integração

```markdown
#### Objetivos

- Integração com sistemas escoteiros nacionais
- App mobile
- Análises e relatórios
- Gamificação

#### Funcionalidades Planejadas

- [ ] Aplicativo mobile
  - [ ] Versão PWA
  - [ ] Notificações push
  - [ ] Modo offline
- [ ] Integrações
  - [ ] PAXTU
  - [ ] Mappa
  - [ ] SIGUE
- [ ] Analytics
  - [ ] Dashboard de métricas
  - [ ] Relatórios personalizados
  - [ ] Exportação de dados

#### Stack Tecnológico Adicional

- React Native para app mobile
- Firebase para notificações
- Power BI ou similar para analytics
```

### Roadmap de Implementação

```markdown
2024 Q4 (MVP)

- [x] Setup inicial do projeto
- [x] Desenvolvimento das páginas estáticas
- [x] Integração com Instagram
- [x] Deploy inicial

2025 Q1 (Administrativo)

- [ ] Implementação da API ASP.NET
- [ ] Setup do banco de dados
- [ ] Sistema de autenticação básico
- [ ] CRUD de notícias e eventos

2025 Q2 (Área do Membro - Parte 1)

- [ ] Perfis de usuário
- [ ] Sistema de progressão básico
- [ ] Upload de arquivos
- [ ] Gestão de conquistas

2025 Q3 (Área do Membro - Parte 2)

- [ ] Chat e comunicação
- [ ] Notificações
- [ ] Calendário personalizado
- [ ] Sistema de aprovações

2025 Q4 (Expansão)

- [ ] Desenvolvimento do app mobile
- [ ] Integrações com sistemas externos
- [ ] Analytics e relatórios
```

### Considerações Técnicas

```markdown
#### Escalabilidade

- Usar CDN para conteúdo estático
- Implementar cache em vários níveis
- Otimizar consultas ao banco de dados
- Monitorar performance

#### Segurança

- Implementar HTTPS
- Proteger endpoints da API
- Sanitizar inputs
- Validar uploads
- Implementar rate limiting
- Fazer backup regular dos dados

#### Manutenibilidade

- Documentar todas as APIs
- Manter cobertura de testes
- Usar CI/CD
- Monitorar logs e erros

#### Performance

- Otimizar imagens
- Implementar lazy loading
- Usar server-side rendering quando apropriado
- Monitorar métricas de performance
```

## Deployment

### Requisitos do Ambiente

```markdown
#### Desenvolvimento

- Node.js 18.17 ou superior
- npm 9+ ou yarn 1.22+
- Git
- VS Code (recomendado)
  - Extensões recomendadas:
    - ESLint
    - Prettier
    - GitLens
    - ES7+ React/Redux/React-Native snippets

#### Produção

- Servidor Azure Static Web Apps ou similar
- Variáveis de ambiente configuradas
- SSL/TLS ativo
- Domínio configurado
```

### Configuração de Ambiente

```bash
# 1. Clone do repositório
git clone https://github.com/seu-usuario/gegoyaz.git
cd gegoyaz

# 2. Instalação de dependências
npm install   # ou yarn install

# 3. Configuração das variáveis de ambiente
cp .env.example .env.local

# 4. Build do projeto
npm run build   # ou yarn build

# 5. Iniciar em desenvolvimento
npm run dev   # ou yarn dev
```

### Variáveis de Ambiente

```bash
# .env.example
# Base
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000

# Instagram
INSTAGRAM_ACCESS_TOKEN=seu_token_aqui
INSTAGRAM_USER_ID=seu_user_id_aqui

# Analytics (futuro)
NEXT_PUBLIC_GA_ID=seu_ga_id_aqui

# API (futuro)
DATABASE_URL=sua_connection_string_aqui
JWT_SECRET=seu_jwt_secret_aqui
```

### Scripts Disponíveis

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "prepare": "husky install"
  }
}
```

### Deploy na Azure Static Web Apps

```yaml
# .github/workflows/azure-static-web-apps.yml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install Dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          INSTAGRAM_ACCESS_TOKEN: ${{ secrets.INSTAGRAM_ACCESS_TOKEN }}
          INSTAGRAM_USER_ID: ${{ secrets.INSTAGRAM_USER_ID }}

      - name: Deploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          api_location: "api"
          output_location: "out"
        env:
          IS_STATIC_EXPORT: true

  close_pull_request_job:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close Pull Request Job
    steps:
      - name: Close Pull Request
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          action: "close"
```

### Checklist de Deploy

```markdown
#### Pré-deploy

- [ ] Todas as variáveis de ambiente configuradas
- [ ] Build local testado
- [ ] Testes passando
- [ ] Lint passando
- [ ] Commits atualizados com main
- [ ] Documentação atualizada

#### Deploy

- [ ] Push para main ou criar PR
- [ ] Verificar build no GitHub Actions
- [ ] Monitorar deploy na Azure
- [ ] Verificar logs de erro

#### Pós-deploy

- [ ] Testar site em produção
- [ ] Verificar integração com Instagram
- [ ] Verificar meta tags
- [ ] Verificar performance (Lighthouse)
- [ ] Monitorar erros no console
```

### Monitoramento

```typescript
// lib/monitoring/sentry.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
});

// lib/monitoring/analytics.ts
export function trackPageView(url: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
}

// Uso nos componentes
import { trackPageView } from "@/lib/monitoring/analytics";

useEffect(() => {
  trackPageView(router.asPath);
}, [router.asPath]);
```

## Guia de Contribuição

### Fluxo de Trabalho

````markdown
### Branches

- `main` - Produção
- `develop` - Desenvolvimento
- `feature/*` - Novas funcionalidades
- `fix/*` - Correções de bugs
- `hotfix/*` - Correções urgentes
- `release/*` - Preparação para release

### Processo de Contribuição

1. Fork do repositório (para externos)
2. Criar branch a partir de `develop`
3. Implementar mudanças
4. Rodar testes e lint
5. Criar Pull Request
6. Code Review
7. Merge na `develop`

### Padrões de Commit

Seguimos o Conventional Commits:

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação
- `refactor`: Refatoração
- `test`: Testes
- `chore`: Tarefas de build, etc

Exemplo:

```bash
git commit -m "feat: adiciona componente de calendário"
git commit -m "fix: corrige integração com Instagram"
```
````

## Documentação de Testes

### Setup de Testes

```typescript
// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/lib/(.*)$": "<rootDir>/src/lib/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);

// jest.setup.js
import "@testing-library/jest-dom";
```

### Estrutura de Testes

```typescript
// __tests__/components/EventCard.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EventCard } from "@/components/events/EventCard";

describe("EventCard", () => {
  const mockEvent = {
    id: "1",
    title: "Acampamento de Grupo",
    description: "Descrição do evento",
    startDate: "2024-12-20",
    location: "Sede do Grupo",
    type: "grupo" as const,
    status: "upcoming" as const,
  };

  it("renderiza o título do evento", () => {
    render(<EventCard event={mockEvent} />);
    expect(screen.getByText(mockEvent.title)).toBeInTheDocument();
  });

  it("exibe o botão de inscrição para eventos futuros", () => {
    const onRegister = jest.fn();
    render(
      <EventCard
        event={mockEvent}
        onRegister={onRegister}
      />
    );

    const button = screen.getByText("Inscrever-se");
    userEvent.click(button);

    expect(onRegister).toHaveBeenCalledWith(mockEvent.id);
  });
});

// __tests__/hooks/useInstagram.test.ts
import { renderHook } from "@testing-library/react-hooks";
import { useInstagram } from "@/hooks/useInstagram";

describe("useInstagram", () => {
  it("retorna posts do Instagram", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useInstagram());

    await waitForNextUpdate();

    expect(result.current.posts).toBeDefined();
    expect(result.current.isLoading).toBe(false);
  });
});
```

### Testes de Integração

```typescript
// cypress/integration/home.spec.ts
describe("Página Inicial", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("carrega o feed do Instagram", () => {
    cy.get('[data-testid="instagram-feed"]')
      .should("be.visible")
      .find(".instagram-post")
      .should("have.length.gt", 0);
  });

  it("exibe eventos próximos", () => {
    cy.get('[data-testid="events-section"]')
      .should("be.visible")
      .find(".event-card")
      .should("have.length.gt", 0);
  });
});

// cypress/integration/navigation.spec.ts
describe("Navegação", () => {
  it("navega entre as páginas", () => {
    cy.visit("/");

    cy.get("nav").contains("Eventos").click();

    cy.url().should("include", "/eventos");

    cy.get("h1").should("contain", "Eventos");
  });
});
```

### Scripts de Teste

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "cypress run",
    "test:e2e:dev": "cypress open"
  }
}
```

### GitHub Actions para Testes

```yaml
# .github/workflows/tests.yml
name: Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm ci

      - name: Run lint
        run: npm run lint

      - name: Run tests
        run: npm test

      - name: Run e2e tests
        run: npm run test:e2e

      - name: Upload coverage
        uses: codecov/codecov-action@v3
```
