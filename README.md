# ResumeHub - Resume Template Platform

A clean and minimal Next.js frontend application for browsing and selecting resume templates. Built with a user-friendly interface to help job seekers find the perfect resume template.

## Features

- 🎨 **Clean & Minimal UI** - Modern design with focus on usability
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🔍 **Search & Filter** - Find templates by category and search terms
- 👀 **Template Preview** - Detailed view of each template with features
- 🎯 **Featured Templates** - Highlighted popular and recommended templates
- ⚡ **Fast Performance** - Built with Next.js 15 and Turbopack
- 🎭 **Accessibility** - WCAG compliant with proper ARIA labels

## Template Categories

- **Professional** - Clean designs for business professionals
- **Creative** - Bold layouts for creative industries
- **Executive** - Elegant formats for senior positions
- **Tech** - Minimalist designs for technical roles
- **Academic** - Formal layouts for educational positions
- **Sales** - Results-focused designs for sales professionals

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Linting**: ESLint
- **Build Tool**: Turbopack

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Run the development server**:
```bash
npm run dev
```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── template/[id]/     # Dynamic template detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
└── components/            # Reusable components
    ├── Header.tsx         # Navigation header
    ├── SearchBar.tsx      # Search and filter component
    ├── TemplateCard.tsx   # Template display card
    └── Footer.tsx         # Site footer
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features Implementation

### Template Cards
Each template card includes:
- Preview thumbnail
- Template name and category
- Description
- Featured badge (if applicable)
- "Use Template" and "Preview" buttons

### Search & Filter
- Text search across template names and descriptions
- Category-based filtering
- Clean, accessible form inputs

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interface
- Optimized for all screen sizes

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Deployment

The application can be easily deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any hosting service supporting Node.js**

For Vercel deployment:
```bash
npx vercel
```

## Future Enhancements

- [ ] Template preview modal
- [ ] User accounts and favorites
- [ ] Template customization interface
- [ ] PDF export functionality
- [ ] Template rating system
- [ ] Advanced filtering options
- [ ] Template search by industry
