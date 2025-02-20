# Starlight Lab Website

This is the official website for the Starlight Lab at Carnegie Mellon University. The website is built using React, TypeScript, and Tailwind CSS, and is deployed using GitHub Pages.

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/starlightcmu/starlightcmu.github.io.git
cd starlightcmu.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/         # Reusable React components
├── data/              # JSON data files for content
├── pages/             # Page components
├── types/             # TypeScript type definitions
└── styles/            # CSS and styling files
```

## 🚧 Maintenance Mode

The website includes a maintenance overlay that can be toggled on/off using a single variable:

1. Open `src/App.tsx`
2. Locate the `MAINTENANCE_MODE` variable at the top of the file:
```typescript
export const MAINTENANCE_MODE = true;
```
3. Set it to `false` to disable the maintenance overlay and show the full website
4. Set it to `true` to enable the maintenance overlay

## 📝 Making Changes

### Updating Content

All content is stored in JSON files in the `src/data` directory:

- `news.json`: Latest news and announcements
- `team.json`: Team member information
- `publications.json`: Research publications
- `projects.json`: Research projects

To update content, simply edit the corresponding JSON file. The changes will be automatically reflected in the website.

#### Adding News Items

Add new items to the `news` array in `src/data/news.json`:

```json
{
  "news": [
    {
      "date": "March 20, 2024",
      "title": "Your News Title",
      "content": "Your news content"
    },
    // ... existing items
  ]
}
```

#### Adding Team Members

Add new members to the `labMembers` array in `src/data/team.json`:

```json
{
  "labMembers": [
    {
      "name": "New Member Name",
      "role": "Role Title",
      "bio": "Member bio",
      "image": "https://image-url.com",
      "links": {
        "google_scholar": "optional-url",
        "github": "optional-url",
        "website": "optional-url",
        "email": "optional-email",
        "linkedin": "optional-url"
      }
    },
    // ... existing members
  ]
}
```

#### Adding Publications

Add new publications to the `publications` array in `src/data/publications.json`:

```json
{
  "publications": [
    {
      "title": "Publication Title",
      "authors": ["Author 1", "Author 2"],
      "venue": "Conference/Journal Name",
      "year": 2024,
      "pdf": "optional-pdf-url",
      "code": "optional-code-url",
      "abstract": "Publication abstract"
    },
    // ... existing publications
  ]
}
```

#### Adding Projects

Add new projects to the `projects` array in `src/data/projects.json`:

```json
{
  "projects": [
    {
      "title": "Project Title",
      "description": "Project description",
      "image": "https://image-url.com",
      "tags": ["Tag1", "Tag2"],
      "link": "optional-project-url"
    },
    // ... existing projects
  ]
}
```

### Styling Changes

The website uses Tailwind CSS for styling. The main configuration is in:
- `tailwind.config.js`: Tailwind configuration
- `src/index.css`: Global styles and animations

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add the navigation link in `src/components/Navbar.tsx`

## 🚀 Deployment

The website is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by the GitHub Actions workflow in `.github/workflows/deploy.yml`.

To deploy manually:

1. Push your changes to the main branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. The GitHub Actions workflow will automatically:
   - Build the project
   - Deploy to GitHub Pages
   - Make the changes live at https://starlightcmu.github.io

## 🛠️ Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint

### TypeScript Types

The types for all data structures are defined in `src/types/index.ts`. Update these types if you modify the data structure in the JSON files.

## 📱 Responsive Design

The website is fully responsive with three main breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 SEO

Update the metadata in `index.html` to improve SEO:
- Title
- Description
- Open Graph tags
- Twitter card tags

## 🤝 Contributing

1. Create a new branch for your changes
2. Make your changes
3. Test locally
4. Create a pull request
5. Wait for review and merge

## 📄 License

MIT License - see LICENSE file for details