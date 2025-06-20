# PokeNext Challenge

A modern, accessible Pokemon search and discovery application built with Next.js 15, TypeScript, and React 19. Explore the world of Pokemon with advanced search capabilities, favorites management, and a beautiful responsive design.

## 🚀 Features

### 🔍 Advanced Search & Discovery
- **Search by Name**: Find Pokemon by typing their name with real-time search suggestions
- **Filter by Type**: Filter Pokemon by their type (Fire, Water, Grass, etc.) with visual type indicators
- **Smart Sorting**: Sort Pokemon by ID, name (A-Z, Z-A), or other criteria
- **Pagination**: Navigate through Pokemon results with intuitive pagination controls
- **Real-time Results**: Instant search results as you type with debounced input

### ❤️ Favorites Management
- **Add to Favorites**: Save your favorite Pokemon for quick access
- **Favorites Page**: Dedicated page to view and manage your favorite Pokemon
- **Toggle Favorites**: Easily add or remove Pokemon from favorites with visual feedback
- **Persistent Storage**: Favorites are saved locally and persist between sessions

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions
- **Desktop Enhanced**: Enhanced experience on larger screens with improved layout
- **Flexible Grid**: Dynamic Pokemon grid that adapts to screen size
- **Modern UI**: Clean, modern interface with smooth animations and transitions

### ♿ Accessibility First
- **WCAG 2.1 AA Compliant**: Meets accessibility standards for inclusive design
- **Keyboard Navigation**: Full keyboard support with proper focus management
- **Screen Reader Support**: Comprehensive ARIA labels and semantic HTML
- **High Contrast**: Proper color contrast ratios for visual accessibility
- **Focus Indicators**: Clear visual focus indicators for all interactive elements

### 🎨 Enhanced User Experience
- **Loading States**: Beautiful loading animations and states
- **Error Handling**: Graceful error handling with user-friendly messages
- **Empty States**: Informative empty states with helpful illustrations
- **Visual Type System**: Color-coded Pokemon types with custom styling
- **Pokemon Details**: Detailed Pokemon pages with comprehensive information

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Tailwind CSS v4** - Latest version with enhanced features

### State Management & Data Fetching
- **TanStack Query v5** - Server state management and caching
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation and type inference

### UI Components & Accessibility
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful icon library
- **Custom Components** - Reusable, accessible component library
- **ARIA Support** - Comprehensive accessibility implementation

### Development Tools
- **Biome** - Fast linter and formatter
- **ESLint** - Code quality and consistency
- **pnpm** - Fast, efficient package manager
- **Turbopack** - Ultra-fast bundler for development

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/poke-next-challenge.git
   cd poke-next-challenge
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

```bash
# Development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Format code with Biome
pnpm format

# Lint with Biome
pnpm lint:biome

# Check and fix with Biome
pnpm check
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── favorites/         # Favorites page
│   ├── pokemon/[id]/      # Individual Pokemon detail pages
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── favorites/         # Favorites-related components
│   ├── home/             # Home page components
│   ├── pokemon/          # Pokemon-related components
│   └── shared/           # Shared UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── providers/            # React context providers
├── schemas/              # Zod validation schemas
├── services/             # API service functions
└── types/                # TypeScript type definitions
```

## 🎯 API Integration

The application integrates with the [PokéAPI](https://pokeapi.co/) to fetch Pokemon data:
- **Pokemon List**: Paginated Pokemon results with search and filtering
- **Pokemon Details**: Individual Pokemon information including stats, types, and images
- **Type Information**: Pokemon type data for filtering and display
- **Caching**: Intelligent caching for improved performance

## ♿ Accessibility Features

This application is built with accessibility as a core principle:

- **Keyboard Navigation**: Full keyboard support for all functionality
- **Screen Reader Support**: Comprehensive ARIA labels and semantic HTML
- **Focus Management**: Proper focus handling and visual indicators
- **Color Contrast**: WCAG AA compliant color contrast ratios
- **Responsive Design**: Accessible across all screen sizes and devices

For detailed accessibility documentation, see [ACCESSIBILITY.md](src/ACCESSIBILITY.md).

## 🌟 Key Features Deep Dive

### Smart Search
- Debounced search input to reduce API calls
- Real-time filtering and sorting
- URL persistence for shareable search states
- Loading states and error handling

### Favorites System
- Local storage persistence
- Visual feedback for favorite status
- Dedicated favorites page
- Bulk management capabilities

### Performance Optimizations
- Image optimization with Next.js Image component
- Lazy loading for Pokemon cards
- Request deduplication with TanStack Query
- Optimistic updates for favorites

## 🚀 Deployment

The application is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/poke-next-challenge)

### Manual Deployment

1. **Build the application**
   ```bash
   pnpm build
   ```

2. **Start the production server**
   ```bash
   pnpm start
   ```

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests for any improvements.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [Live Demo](https://your-demo-link.vercel.app)
- [PokéAPI](https://pokeapi.co/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Accessibility Documentation](src/ACCESSIBILITY.md)
