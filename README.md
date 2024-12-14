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
## Guia de Contribuição

### Fluxo de Trabalho

```markdown
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

## Documentação de Testes

### Setup de Testes

```typescript
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/lib/(.*)$': '<rootDir>/src/lib/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);

// jest.setup.js
import '@testing-library/jest-dom';
```

### Estrutura de Testes

```typescript
// __tests__/components/EventCard.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EventCard } from '@/components/events/EventCard';

describe('EventCard', () => {
  const mockEvent = {
    id: '1',
    title: 'Acampamento de Grupo',
    description: 'Descrição do evento',
    startDate: '2024-12-20',
    location: 'Sede do Grupo',
    type: 'grupo' as const,
    status: 'upcoming' as const,
  };

  it('renderiza o título do evento', () => {
    render(<EventCard event={mockEvent} />);
    expect(screen.getByText(mockEvent.title)).toBeInTheDocument();
  });

  it('exibe o botão de inscrição para eventos futuros', () => {
    const onRegister = jest.fn();
    render(<EventCard event={mockEvent} onRegister={onRegister} />);
    
    const button = screen.getByText('Inscrever-se');
    userEvent.click(button);
    
    expect(onRegister).toHaveBeenCalledWith(mockEvent.id);
  });
});

// __tests__/hooks/useInstagram.test.ts
import { renderHook } from '@testing-library/react-hooks';
import { useInstagram } from '@/hooks/useInstagram';

describe('useInstagram', () => {
  it('retorna posts do Instagram', async () => {
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
describe('Página Inicial', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('carrega o feed do Instagram', () => {
    cy.get('[data-testid="instagram-feed"]')
      .should('be.visible')
      .find('.instagram-post')
      .should('have.length.gt', 0);
  });

  it('exibe eventos próximos', () => {
    cy.get('[data-testid="events-section"]')
      .should('be.visible')
      .find('.event-card')
      .should('have.length.gt', 0);
  });
});

// cypress/integration/navigation.spec.ts
describe('Navegação', () => {
  it('navega entre as páginas', () => {
    cy.visit('/');
    
    cy.get('nav')
      .contains('Eventos')
      .click();
    
    cy.url()
      .should('include', '/eventos');
    
    cy.get('h1')
      .should('contain', 'Eventos');
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
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
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

## Guia de Segurança e Boas Práticas

### Segurança

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Headers de Segurança
  const headers = new Headers(request.headers);
  
  // Previne clickjacking
  headers.set('X-Frame-Options', 'DENY');
  
  // Previne MIME type sniffing
  headers.set('X-Content-Type-Options', 'nosniff');
  
  // Política de segurança de conteúdo
  headers.set('Content-Security-Policy', `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://*.cdninstagram.com;
    font-src 'self';
    connect-src 'self' https://api.instagram.com;
  `);
  
  return NextResponse.next({
    request: {
      headers,
    },
  });
}

// lib/security/validation.ts
import { z } from 'zod';

export const eventSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(10).max(1000),
  startDate: z.string().datetime(),
  endDate: z.string().datetime().optional(),
  location: z.string().min(3).max(200),
  type: z.enum(['alcateia', 'escoteiro', 'senior', 'pioneiro', 'grupo']),
  status: z.enum(['upcoming', 'ongoing', 'completed'])
});
```

### Sanitização de Dados

```typescript
// lib/security/sanitization.ts
import DOMPurify from 'dompurify';

export function sanitizeHtml(content: string): string {
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'ul', 'ol', 'li'],
    ALLOWED_ATTR: []
  });
}

// Uso em componentes
function NewsContent({ content }: { content: string }) {
  const sanitizedContent = sanitizeHtml(content);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
}
```

### Rate Limiting

```typescript
// pages/api/_middleware.ts
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // limite por IP
});

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutos
  delayAfter: 50, // permitir 50 requisições por 15 minutos
  delayMs: 500 // adicionar 500ms de delay por requisição
});

export { limiter, speedLimiter };
```

### Logs e Monitoramento

```typescript
// lib/monitoring/logger.ts
type LogLevel = 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: unknown;
}

class Logger {
  private static instance: Logger;
  
  private constructor() {}
  
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(level: LogLevel, message: string, data?: unknown) {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      data
    };

    if (process.env.NODE_ENV === 'production') {
      // Enviar para serviço de logging
      this.sendToLoggingService(entry);
    } else {
      console.log(JSON.stringify(entry, null, 2));
    }
  }

  private sendToLoggingService(entry: LogEntry) {
    // Implementar integração com serviço de logging
  }
}

export const logger = Logger.getInstance();
```

### Backup e Recuperação

```typescript
// scripts/backup.ts
import { exec } from 'child_process';
import { uploadToAzure } from './azure-storage';

async function createBackup() {
  const date = new Date().toISOString().split('T')[0];
  const filename = `backup-${date}.tar.gz`;

  try {
    // Backup de arquivos
    await exec(`tar -czf ${filename} ./public/uploads`);
    
    // Upload para Azure Storage
    await uploadToAzure(filename, 'backups');
    
    console.log(`Backup created successfully: ${filename}`);
  } catch (error) {
    console.error('Backup failed:', error);
  }
}

// Executar backup diário
if (require.main === module) {
  createBackup();
}
```

### Checklist de Segurança

```markdown
## Checklist de Segurança

### Frontend
- [ ] CSP configurado
- [ ] Headers de segurança
- [ ] Sanitização de inputs
- [ ] Validação de dados
- [ ] HTTPS forçado
- [ ] Cookies seguros

### Dados
- [ ] Backup automático
- [ ] Encriptação em trânsito
- [ ] Logs de auditoria
- [ ] Política de retenção

### Acesso
- [ ] Autenticação forte
- [ ] Rate limiting
- [ ] Sessões seguras
- [ ] CORS configurado

### Código
- [ ] Dependências atualizadas
- [ ] Análise estática
- [ ] Revisão de código
- [ ] Testes de segurança
```

## Apêndices e Recursos Adicionais

### A. Cores e Identidade Visual

```markdown
### Escoteiros do Brasil
Conforme manual de identidade visual:

- Verde (foresta): #00853e
- Amarelo (sol): #fff200
- Azul (água): #00accd
- Azul escuro (estrela): #004a8d

### GE Goyaz
Cor principal:
- Azul Royal: #0047AB

Para detalhes completos de cores, consultar a seção de Guia de Estilo.
```

### B. Links Úteis

```markdown
### Documentação Oficial
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api)

### Escoteiros
- [Escoteiros do Brasil](https://www.escoteiros.org.br)
- [Manual de Identidade Visual](link-do-manual)
- [PAXTU](https://paxtu.escoteiros.org.br)

### Ferramentas Recomendadas
- [VS Code](https://code.visualstudio.com)
- [Postman](https://www.postman.com)
- [GitHub Desktop](https://desktop.github.com)
```

### C. Troubleshooting Comum

```markdown
### Problemas Comuns

1. **Build falha com erro de TypeScript**
   ```bash
   # Solução
   npm run type-check
   # Verificar erros e corrigir tipos
   ```

2. **Instagram API não carrega**
   ```bash
   # Verificar
   - Token válido
   - Rate limits
   - Configuração de CORS
   ```

3. **Imagens não aparecem**
   ```bash
   # Verificar
   - Paths corretos
   - Next.js Image config
   - Permissões do CDN
   ```

4. **Problemas de CORS**
   ```typescript
   // next.config.js
   module.exports = {
     async headers() {
       return [
         {
           source: '/api/:path*',
           headers: [
             { key: 'Access-Control-Allow-Origin', value: '*' },
           ],
         },
       ]
     },
   }
   ```
```

### D. Templates e Snippets

```typescript
// templates/ComponentTemplate.tsx
import React from 'react';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  // Props here
}

export const ComponentName: React.FC<ComponentNameProps> = ({ ...props }) => {
  return (
    <div className={styles.container}>
      {/* Component content */}
    </div>
  );
};

// templates/PageTemplate.tsx
import { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '@/components/layout';

interface PageProps {
  // Props here
}

const PageName: NextPage<PageProps> = ({ ...props }) => {
  return (
    <Layout>
      <Head>
        <title>Page Title | GE Goyaz</title>
      </Head>
      <main>
        {/* Page content */}
      </main>
    </Layout>
  );
};

export default PageName;
```

### E. Lista de VS Code Extensions

```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "dsznajder.es7-react-js-snippets",
    "formulahendry.auto-rename-tag",
    "streetsidesoftware.code-spell-checker",
    "streetsidesoftware.code-spell-checker-portuguese-brazilian",
    "eamodio.gitlens",
    "ms-vsliveshare.vsliveshare",
    "christian-kohler.path-intellisense",
    "bradlc.vscode-tailwindcss"
  ]
}
```

### F. Checklists

```markdown
### Checklist de PR
- [ ] Código segue padrões do projeto
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Build passa localmente
- [ ] Lint passa sem erros
- [ ] Revisão de código feita

### Checklist de Feature
- [ ] Especificação clara
- [ ] Design/mockups aprovados
- [ ] Testes planejados
- [ ] Dependências identificadas
- [ ] Riscos avaliados
- [ ] Plano de rollback

### Checklist de Release
- [ ] Testes passando
- [ ] Documentação atualizada
- [ ] Changelog atualizado
- [ ] Versão taggeada
- [ ] Backup realizado
- [ ] Stakeholders notificados
```

## Documentação da API (Futura)

### Estrutura da API

```csharp
// Estrutura base do projeto ASP.NET
GEGoyaz.API/
├── Controllers/
│   ├── NewsController.cs
│   ├── EventsController.cs
│   └── UserController.cs
├── Models/
│   ├── News.cs
│   ├── Event.cs
│   └── User.cs
├── Services/
│   ├── NewsService.cs
│   ├── EventService.cs
│   └── AuthService.cs
└── Data/
    ├── AppDbContext.cs
    └── Repositories/
        ├── NewsRepository.cs
        └── EventRepository.cs
```

### Endpoints Planejados

```markdown
### Notícias
```typescript
// GET /api/news
// Lista todas as notícias
interface ListNewsResponse {
  items: NewsItem[];
  total: number;
  page: number;
  pageSize: number;
}

// GET /api/news/{id}
// Obtém uma notícia específica
interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  image?: {
    url: string;
    alt: string;
  };
}

// POST /api/news
// Cria uma nova notícia
interface CreateNewsRequest {
  title: string;
  content: string;
  tags: string[];
  image?: {
    data: string; // Base64
    alt: string;
  };
}
```

### Eventos
```typescript
// GET /api/events
// Lista todos os eventos
interface ListEventsResponse {
  items: Event[];
  total: number;
  page: number;
  pageSize: number;
}

// GET /api/events/{id}
// Obtém um evento específico
interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  type: EventType;
  status: EventStatus;
  capacity?: number;
  registrations?: number;
}

// POST /api/events/{id}/register
// Registra participação em um evento
interface EventRegistration {
  eventId: string;
  userId: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}
```

### Autenticação (Futura)

```typescript
// POST /api/auth/login
interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
  };
}

// POST /api/auth/refresh
interface RefreshTokenRequest {
  refreshToken: string;
}

// GET /api/auth/me
interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  section: string;
  progressions: Progression[];
  badges: Badge[];
}
```

### Exemplos de Implementação

```csharp
// Controllers/NewsController.cs
[ApiController]
[Route("api/[controller]")]
public class NewsController : ControllerBase
{
    private readonly INewsService _newsService;

    public NewsController(INewsService newsService)
    {
        _newsService = newsService;
    }

    [HttpGet]
    public async Task<ActionResult<ListNewsResponse>> GetNews(
        [FromQuery] int page = 1,
        [FromQuery] int pageSize = 10,
        [FromQuery] string? tag = null)
    {
        var result = await _newsService.GetNewsAsync(page, pageSize, tag);
        return Ok(result);
    }

    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult<NewsItem>> CreateNews(
        [FromBody] CreateNewsRequest request)
    {
        var news = await _newsService.CreateNewsAsync(request);
        return CreatedAtAction(
            nameof(GetNews),
            new { id = news.Id },
            news);
    }
}

// Services/NewsService.cs
public class NewsService : INewsService
{
    private readonly INewsRepository _newsRepository;
    private readonly IStorageService _storageService;

    public async Task<NewsItem> CreateNewsAsync(CreateNewsRequest request)
    {
        // Validação
        if (string.IsNullOrEmpty(request.Title))
            throw new BadRequestException("Title is required");

        // Processamento de imagem
        string? imageUrl = null;
        if (request.Image != null)
        {
            imageUrl = await _storageService.UploadImageAsync(
                request.Image.Data,
                "news-images"
            );
        }

        // Criação da notícia
        var news = new NewsItem
        {
            Id = Guid.NewGuid().ToString(),
            Title = request.Title,
            Content = request.Content,
            Date = DateTime.UtcNow,
            Tags = request.Tags,
            Image = imageUrl != null
                ? new ImageInfo { Url = imageUrl, Alt = request.Image.Alt }
                : null
        };

        // Persistência
        await _newsRepository.CreateAsync(news);

        return news;
    }
}
```

### Swagger Documentation

```yaml
# swagger.yaml
openapi: 3.0.0
info:
  title: GE Goyaz API
  version: '1.0'
  description: API do Grupo Escoteiro Goyaz

paths:
  /api/news:
    get:
      summary: Lista notícias
      parameters:
        - name: page
          in: query
          schema:
            type: integer
        - name: pageSize
          in: query
          schema:
            type: integer
      responses:
        '200':
          description: Lista de notícias
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListNewsResponse'
    post:
      summary: Cria uma notícia
      security:
        - BearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateNewsRequest'
      responses:
        '201':
          description: Notícia criada
```

## Guia de Performance e Otimizações

### 1. Otimizações de Imagem

```typescript
// next.config.js
module.exports = {
  images: {
    domains: [
      'cdninstagram.com',
      'scontent.cdninstagram.com',
      'storage.googleapis.com'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

// components/OptimizedImage.tsx
interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,...`}
    />
  );
};
```

### 2. Code Splitting e Lazy Loading

```typescript
// pages/eventos.tsx
import dynamic from 'next/dynamic';

const EventCalendar = dynamic(
  () => import('@/components/events/EventCalendar'),
  {
    loading: () => <EventCalendarSkeleton />,
    ssr: false
  }
);

const InstagramFeed = dynamic(
  () => import('@/components/instagram/InstagramFeed'),
  {
    loading: () => <InstagramFeedSkeleton />,
    ssr: false
  }
);
```

### 3. Caching

```typescript
// lib/cache/redis.ts
import { Redis } from 'ioredis';

class CacheService {
  private redis: Redis;
  private readonly DEFAULT_TTL = 3600; // 1 hora

  constructor() {
    this.redis = new Redis({
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
      password: process.env.REDIS_PASSWORD
    });
  }

  async get<T>(key: string): Promise<T | null> {
    const data = await this.redis.get(key);
    return data ? JSON.parse(data) : null;
  }

  async set(key: string, value: unknown, ttl = this.DEFAULT_TTL): Promise<void> {
    await this.redis.set(key, JSON.stringify(value), 'EX', ttl);
  }

  async delete(key: string): Promise<void> {
    await this.redis.del(key);
  }
}

// Uso em API routes
import { CacheService } from '@/lib/cache/redis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cache = new CacheService();
  const cacheKey = `events:${req.query.page}`;

  // Tentar cache primeiro
  const cachedData = await cache.get(cacheKey);
  if (cachedData) {
    return res.json(cachedData);
  }

  // Se não houver cache, buscar dados e cachear
  const data = await fetchEvents(req.query);
  await cache.set(cacheKey, data);
  
  res.json(data);
}
```

### 4. Performance Monitoring

```typescript
// lib/monitoring/performance.ts
export const performanceMetrics = {
  getFCP: () => {
    const paint = performance.getEntriesByType('paint')
      .find(entry => entry.name === 'first-contentful-paint');
    return paint?.startTime || 0;
  },

  getLCP: () => {
    return new Promise(resolve => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        resolve(lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });
    });
  },

  getTTFB: () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation.responseStart;
  }
};

// Uso em componentes
useEffect(() => {
  const trackPerformance = async () => {
    const metrics = {
      fcp: performanceMetrics.getFCP(),
      lcp: await performanceMetrics.getLCP(),
      ttfb: performanceMetrics.getTTFB()
    };

    // Enviar métricas para analytics
    trackMetrics(metrics);
  };

  trackPerformance();
}, []);
```

### 5. Bundle Analysis

```json
// package.json
{
  "scripts": {
    "analyze": "ANALYZE=true next build",
    "analyze:server": "BUNDLE_ANALYZE=server next build",
    "analyze:browser": "BUNDLE_ANALYZE=browser next build"
  }
}
```

### 6. Web Vitals

```typescript
// pages/_app.tsx
import { useEffect } from 'react';
import { getCLS, getFID, getLCP } from 'web-vitals';

function reportWebVitals({ id, name, label, value }: any) {
  // Enviar para Analytics
  ga('send', 'event', {
    eventCategory: 'Web Vitals',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value),
    eventLabel: id,
    nonInteraction: true,
  });
}

export function reportWebVitals(onPerfEntry?: (metric: any) => void): void {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getLCP(onPerfEntry);
  }
}
```

## Exemplos de Implementação Avançada

### 1. Sistema de Notificações

```typescript
// lib/services/notifications.ts
interface Notification {
  id: string;
  type: 'event' | 'news' | 'system';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
}

export class NotificationService {
  // Web Push
  async subscribeToNotifications(subscription: PushSubscription): Promise<void> {
    await fetch('/api/notifications/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription),
    });
  }

  // Hook para gerenciar notificações
  const useNotifications = () => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [permission, setPermission] = useState<NotificationPermission>('default');

    useEffect(() => {
      // Verificar permissão
      if ('Notification' in window) {
        setPermission(Notification.permission);
      }
    }, []);

    const requestPermission = async () => {
      if ('Notification' in window) {
        const result = await Notification.requestPermission();
        setPermission(result);
      }
    };

    return {
      notifications,
      permission,
      requestPermission,
    };
  };
}
```

### 2. Sistema de Eventos Avançado

```typescript
// components/events/EventScheduler.tsx
interface EventSchedulerProps {
  events: Event[];
  onEventSelect: (event: Event) => void;
}

export const EventScheduler: React.FC<EventSchedulerProps> = ({
  events,
  onEventSelect,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [view, setView] = useState<'month' | 'week' | 'day'>('month');

  const eventsByDate = useMemo(() => {
    return events.reduce((acc, event) => {
      const date = new Date(event.startDate).toISOString().split('T')[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(event);
      return acc;
    }, {} as Record<string, Event[]>);
  }, [events]);

  // Render calendário com eventos
  return (
    <div className="event-scheduler">
      <div className="controls">
        {/* Controles de navegação */}
      </div>
      <div className="calendar">
        {/* Renderização do calendário */}
      </div>
      <div className="event-list">
        {/* Lista de eventos do dia selecionado */}
      </div>
    </div>
  );
};
```

### 3. Sistema de Progressão

```typescript
// lib/progression/types.ts
interface Achievement {
  id: string;
  name: string;
  description: string;
  requirements: Requirement[];
  category: string;
  section: 'lobinho' | 'escoteiro' | 'senior' | 'pioneiro';
}

interface Requirement {
  id: string;
  description: string;
  completed: boolean;
  completedAt?: string;
  approvedBy?: string;
}

// components/progression/ProgressionTracker.tsx
export const ProgressionTracker: React.FC<{
  userId: string;
  section: string;
}> = ({ userId, section }) => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  
  // Lógica de progressão
  const calculateProgress = (achievement: Achievement) => {
    const completed = achievement.requirements.filter(r => r.completed).length;
    return (completed / achievement.requirements.length) * 100;
  };

  return (
    <div className="progression-tracker">
      {achievements.map(achievement => (
        <div key={achievement.id} className="achievement-card">
          <h3>{achievement.name}</h3>
          <ProgressBar value={calculateProgress(achievement)} />
          <RequirementsList requirements={achievement.requirements} />
        </div>
      ))}
    </div>
  );
};
```

### 4. Sistema de Relatórios

```typescript
// lib/reports/generator.ts
interface ReportOptions {
  startDate: string;
  endDate: string;
  type: 'events' | 'attendance' | 'progression' | 'financial';
  format: 'pdf' | 'excel' | 'csv';
}

class ReportGenerator {
  async generateReport(options: ReportOptions): Promise<Buffer> {
    const data = await this.fetchReportData(options);
    
    switch (options.format) {
      case 'pdf':
        return this.generatePDF(data);
      case 'excel':
        return this.generateExcel(data);
      case 'csv':
        return this.generateCSV(data);
      default:
        throw new Error('Formato não suportado');
    }
  }

  private async fetchReportData(options: ReportOptions) {
    // Buscar dados conforme tipo de relatório
    switch (options.type) {
      case 'events':
        return this.fetchEventsData(options);
      case 'attendance':
        return this.fetchAttendanceData(options);
      // ... outros tipos
    }
  }
}
```

### 5. Sistema de Gamificação

```typescript
// lib/gamification/index.ts
interface Achievement {
  id: string;
  name: string;
  description: string;
  points: number;
  icon: string;
}

interface UserProgress {
  userId: string;
  points: number;
  level: number;
  achievements: string[]; // IDs dos achievements
}

class GamificationSystem {
  private readonly POINTS_PER_LEVEL = 100;

  async awardPoints(userId: string, points: number): Promise<UserProgress> {
    const progress = await this.getUserProgress(userId);
    progress.points += points;
    
    // Checar novo nível
    const newLevel = Math.floor(progress.points / this.POINTS_PER_LEVEL);
    if (newLevel > progress.level) {
      progress.level = newLevel;
      await this.onLevelUp(userId, newLevel);
    }

    await this.saveProgress(progress);
    return progress;
  }

  async checkAchievements(userId: string): Promise<Achievement[]> {
    const progress = await this.getUserProgress(userId);
    const availableAchievements = await this.getAvailableAchievements();
    
    return availableAchievements.filter(achievement => 
      this.meetsRequirements(progress, achievement)
    );
  }
}
```

## Guia de Migração de Dados

### 1. Estrutura de Migração

```typescript
// lib/migrations/types.ts
interface MigrationConfig {
  version: string;
  description: string;
  up: () => Promise<void>;
  down: () => Promise<void>;
}

interface MigrationStatus {
  version: string;
  appliedAt: string;
  success: boolean;
}

// lib/migrations/migrator.ts
class Migrator {
  private readonly migrations: MigrationConfig[];

  constructor(migrations: MigrationConfig[]) {
    this.migrations = migrations.sort((a, b) => 
      a.version.localeCompare(b.version)
    );
  }

  async migrate(targetVersion?: string): Promise<void> {
    const applied = await this.getAppliedMigrations();
    const pending = this.getPendingMigrations(applied);

    for (const migration of pending) {
      if (targetVersion && migration.version > targetVersion) {
        break;
      }

      try {
        await migration.up();
        await this.recordMigration(migration);
      } catch (error) {
        console.error(`Migration ${migration.version} failed:`, error);
        throw error;
      }
    }
  }
}
```

### 2. Exemplo de Migração

```typescript
// migrations/001_initial_schema.ts
export const migration: MigrationConfig = {
  version: '001',
  description: 'Criação do esquema inicial',
  
  async up() {
    // Implementar migração
    await db.execute(`
      CREATE TABLE users (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE events (
        id VARCHAR(36) PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        description TEXT,
        start_date TIMESTAMP NOT NULL,
        end_date TIMESTAMP,
        location VARCHAR(200),
        type VARCHAR(50) NOT NULL,
        status VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  },

  async down() {
    // Reverter migração
    await db.execute(`
      DROP TABLE IF EXISTS events;
      DROP TABLE IF EXISTS users;
    `);
  }
};
```

### 3. Scripts de Migração

```typescript
// scripts/migrate.ts
import { Migrator } from '../lib/migrations/migrator';
import * as migrations from '../migrations';

async function runMigrations() {
  try {
    const migrator = new Migrator(Object.values(migrations));
    await migrator.migrate();
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
}

// Executar migrações
if (require.main === module) {
  runMigrations();
}

// scripts/seed.ts
async function seedDatabase() {
  const seedData = {
    users: [
      {
        id: '1',
        name: 'Admin',
        email: 'admin@gegoyaz.org.br'
      }
    ],
    events: [
      {
        id: '1',
        title: 'Acampamento de Grupo',
        startDate: '2024-12-20'
      }
    ]
  };

  try {
    await db.transaction(async (trx) => {
      // Inserir dados
      await trx('users').insert(seedData.users);
      await trx('events').insert(seedData.events);
    });
    
    console.log('Seed completed successfully');
  } catch (error) {
    console.error('Seed failed:', error);
  }
}
```

### 4. Estratégias de Backup

```typescript
// lib/backup/strategy.ts
interface BackupStrategy {
  create(): Promise<string>; // Retorna URL do backup
  restore(url: string): Promise<void>;
}

// Implementação para Azure Storage
class AzureBackupStrategy implements BackupStrategy {
  private container: string;
  private blobService: BlobServiceClient;

  constructor(connectionString: string, container: string) {
    this.blobService = BlobServiceClient.fromConnectionString(connectionString);
    this.container = container;
  }

  async create(): Promise<string> {
    const timestamp = new Date().toISOString();
    const filename = `backup-${timestamp}.sql`;
    
    // Fazer dump do banco
    const dump = await this.dumpDatabase();
    
    // Upload para Azure
    const blockBlobClient = this.blobService
      .getContainerClient(this.container)
      .getBlockBlobClient(filename);
    
    await blockBlobClient.upload(dump, dump.length);
    
    return blockBlobClient.url;
  }

  async restore(url: string): Promise<void> {
    // Download do backup
    const backup = await this.downloadBackup(url);
    
    // Restaurar banco
    await this.restoreDatabase(backup);
  }
}
```

### 5. Monitoramento de Migração

```typescript
// lib/migrations/monitor.ts
interface MigrationMetrics {
  startTime: Date;
  endTime?: Date;
  duration?: number;
  recordsProcessed: number;
  errors: Error[];
}

class MigrationMonitor {
  private metrics: Record<string, MigrationMetrics> = {};

  startMigration(version: string): void {
    this.metrics[version] = {
      startTime: new Date(),
      recordsProcessed: 0,
      errors: []
    };
  }

  recordProgress(version: string, count: number): void {
    this.metrics[version].recordsProcessed += count;
  }

  recordError(version: string, error: Error): void {
    this.metrics[version].errors.push(error);
  }

  endMigration(version: string): void {
    const migration = this.metrics[version];
    migration.endTime = new Date();
    migration.duration = 
      migration.endTime.getTime() - migration.startTime.getTime();
    
    // Enviar métricas para monitoramento
    this.sendMetrics(version, migration);
  }

  private async sendMetrics(version: string, metrics: MigrationMetrics): Promise<void> {
    // Implementar envio de métricas para sistema de monitoramento
  }
}
```

## Integração com Sistemas Escoteiros

### 1. Integração com PAXTU

```typescript
// lib/integrations/paxtu/types.ts
interface PAXTUConfig {
  apiUrl: string;
  apiKey: string;
  groupCode: string;
}

interface PAXTUMember {
  codigo: string;          // Registro escoteiro
  nome: string;
  secao: string;
  categoria: string;
  dataIngresso: string;
  status: 'Ativo' | 'Inativo';
}

// lib/integrations/paxtu/client.ts
class PAXTUClient {
  private config: PAXTUConfig;

  constructor(config: PAXTUConfig) {
    this.config = config;
  }

  async getMemberInfo(registro: string): Promise<PAXTUMember> {
    const response = await fetch(
      `${this.config.apiUrl}/members/${registro}`,
      {
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'X-Group-Code': this.config.groupCode
        }
      }
    );

    if (!response.ok) {
      throw new Error(`PAXTU API error: ${response.statusText}`);
    }

    return response.json();
  }

  async syncMembers(): Promise<void> {
    // Sincronizar membros do grupo
    const members = await this.getGroupMembers();
    await this.updateLocalDatabase(members);
  }
}
```

### 2. Integração com SIGUE

```typescript
// lib/integrations/sigue/types.ts
interface SIGUECredentials {
  username: string;
  password: string;
}

interface SIGUEActivity {
  id: string;
  name: string;
  date: string;
  type: string;
  participants: string[];
}

// lib/integrations/sigue/client.ts
class SIGUEClient {
  private token: string | null = null;

  async authenticate(credentials: SIGUECredentials): Promise<void> {
    // Implementar autenticação
    const response = await fetch('/sigue/auth', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      throw new Error('SIGUE authentication failed');
    }

    const data = await response.json();
    this.token = data.token;
  }

  async registerActivity(activity: SIGUEActivity): Promise<void> {
    if (!this.token) {
      throw new Error('Not authenticated');
    }

    await fetch('/sigue/activities', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.token}`
      },
      body: JSON.stringify(activity)
    });
  }
}
```

### 3. Mappa Integration

```typescript
// lib/integrations/mappa/types.ts
interface MappaConfig {
  apiKey: string;
  groupId: string;
}

interface Progression {
  memberId: string;
  competency: string;
  status: 'pending' | 'completed';
  completedAt?: string;
}

// lib/integrations/mappa/client.ts
class MappaClient {
  private config: MappaConfig;

  constructor(config: MappaConfig) {
    this.config = config;
  }

  async updateProgression(progression: Progression): Promise<void> {
    await fetch('/mappa/progression', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'X-Group-Id': this.config.groupId
      },
      body: JSON.stringify(progression)
    });
  }

  async syncProgressions(): Promise<void> {
    // Sincronizar progressões
    const progressions = await this.fetchProgressions();
    await this.updateLocalDatabase(progressions);
  }
}
```

### 4. Gestor de Integrações

```typescript
// lib/integrations/manager.ts
class IntegrationManager {
  private paxtu: PAXTUClient;
  private sigue: SIGUEClient;
  private mappa: MappaClient;

  constructor() {
    this.paxtu = new PAXTUClient({
      apiUrl: process.env.PAXTU_API_URL!,
      apiKey: process.env.PAXTU_API_KEY!,
      groupCode: process.env.PAXTU_GROUP_CODE!
    });

    this.sigue = new SIGUEClient();
    this.mappa = new MappaClient({
      apiKey: process.env.MAPPA_API_KEY!,
      groupId: process.env.MAPPA_GROUP_ID!
    });
  }

  async syncAll(): Promise<void> {
    await Promise.all([
      this.paxtu.syncMembers(),
      this.mappa.syncProgressions()
    ]);
  }

  async registerActivity(activity: SIGUEActivity): Promise<void> {
    // Registrar atividade em todos os sistemas necessários
    await Promise.all([
      this.sigue.registerActivity(activity),
      this.updateLocalActivity(activity)
    ]);
  }
}
```

### 5. Middleware de Sincronização

```typescript
// middleware/sync.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Verificar se precisa sincronizar
  const lastSync = request.cookies.get('last-sync');
  const now = Date.now();
  
  if (!lastSync || now - parseInt(lastSync) > 24 * 60 * 60 * 1000) {
    // Sincronizar a cada 24 horas
    const manager = new IntegrationManager();
    await manager.syncAll();
    
    // Atualizar cookie
    const response = NextResponse.next();
    response.cookies.set('last-sync', now.toString());
    return response;
  }

  return NextResponse.next();
}
```

## Estratégias de Deployment Avançado

### 1. Azure Static Web Apps

```yaml
# .github/workflows/azure-static-web-apps.yml
name: Deploy to Azure Static Web Apps

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    name: Build and Deploy
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Application
        run: npm run build
        env:
          NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
          INSTAGRAM_ACCESS_TOKEN: ${{ secrets.INSTAGRAM_ACCESS_TOKEN }}

      - name: Deploy to Azure
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: "out"
          skip_app_build: true
```

### 2. Azure App Configuration

```typescript
// lib/config/azure.ts
import { AppConfigurationClient } from '@azure/app-configuration';

export class ConfigService {
  private client: AppConfigurationClient;

  constructor() {
    this.client = new AppConfigurationClient(
      process.env.AZURE_APP_CONFIG_CONNECTION_STRING!
    );
  }

  async getConfig<T>(key: string): Promise<T> {
    const setting = await this.client.getConfigurationSetting({ key });
    return JSON.parse(setting.value!);
  }

  async setConfig<T>(key: string, value: T): Promise<void> {
    await this.client.setConfigurationSetting({
      key,
      value: JSON.stringify(value)
    });
  }
}

// Uso
const config = new ConfigService();
const instagramConfig = await config.getConfig('instagram');
```

### 3. Google Cloud Platform Setup

```yaml
# app.yaml
runtime: nodejs18
service: gegoyaz-web

env_variables:
  NEXT_PUBLIC_API_URL: "https://api.gegoyaz.org.br"
  NODE_ENV: "production"

handlers:
  - url: /.*
    secure: always
    redirect_http_response_code: 301
    script: auto

automatic_scaling:
  target_cpu_utilization: 0.65
  min_instances: 1
  max_instances: 10
```

### 4. Multi-Environment Setup

```typescript
// config/environments.ts
interface Environment {
  name: string;
  apiUrl: string;
  cdnUrl: string;
  storageUrl: string;
}

const environments: Record<string, Environment> = {
  development: {
    name: 'development',
    apiUrl: 'http://localhost:3000',
    cdnUrl: 'http://localhost:3000',
    storageUrl: 'http://localhost:3000/storage'
  },
  staging: {
    name: 'staging',
    apiUrl: 'https://staging-api.gegoyaz.org.br',
    cdnUrl: 'https://staging-cdn.gegoyaz.org.br',
    storageUrl: 'https://staging-storage.gegoyaz.org.br'
  },
  production: {
    name: 'production',
    apiUrl: 'https://api.gegoyaz.org.br',
    cdnUrl: 'https://cdn.gegoyaz.org.br',
    storageUrl: 'https://storage.gegoyaz.org.br'
  }
};

export const currentEnvironment = environments[process.env.NODE_ENV || 'development'];
```

### 5. Deployment Pipeline

```yaml
# .github/workflows/deployment.yml
name: Deployment Pipeline

on:
  push:
    branches:
      - main
      - staging

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run Tests
        run: npm test
      - name: Run Lint
        run: npm run lint
      - name: Type Check
        run: npm run type-check

  build:
    needs: validate
    runs-on: ubuntu-latest
    steps:
      - name: Build Application
        run: npm run build
      - name: Upload Artifacts
        uses: actions/upload-artifact@v3
        with:
          name: build
          path: .next

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Download Build
        uses: actions/download-artifact@v3
        with:
          name: build
          
      - name: Deploy to Azure
        if: github.ref == 'refs/heads/main'
        uses: azure/webapps-deploy@v2
        with:
          app-name: 'gegoyaz'
          publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
          
      - name: Deploy to GCP
        if: github.ref == 'refs/heads/staging'
        uses: google-github-actions/deploy-appengine@v1
        with:
          credentials: ${{ secrets.GCP_SA_KEY }}
```

### 6. Monitoramento de Deployment

```typescript
// lib/monitoring/deployment.ts
interface DeploymentMetrics {
  version: string;
  timestamp: string;
  duration: number;
  status: 'success' | 'failure';
  errors?: Error[];
}

class DeploymentMonitor {
  private metrics: DeploymentMetrics;
  
  constructor(version: string) {
    this.metrics = {
      version,
      timestamp: new Date().toISOString(),
      duration: 0,
      status: 'success'
    };
  }

  async trackDeployment(): Promise<void> {
    const startTime = Date.now();
    
    try {
      // Enviar métricas para Azure Application Insights
      await this.sendToApplicationInsights({
        name: 'Deployment Started',
        properties: {
          version: this.metrics.version,
          environment: process.env.NODE_ENV
        }
      });

      // Enviar métricas para Google Analytics
      await this.sendToGoogleAnalytics({
        eventCategory: 'Deployment',
        eventAction: 'Started',
        eventLabel: this.metrics.version
      });
      
    } catch (error) {
      this.metrics.status = 'failure';
      this.metrics.errors = [error as Error];
    } finally {
      this.metrics.duration = Date.now() - startTime;
      await this.saveMetrics();
    }
  }
}
```