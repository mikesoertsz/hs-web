# MDX Article Blog Implementation

## Overview

Implementation of an MDX-powered blog system in Next.js that provides dynamic article rendering, pagination, and content management through MDX files. The system reads articles from a local directory, processes MDX content, and provides various ways to fetch and display articles.

## Key Changes

### 1. Core Article Functionality

#### Server Actions (`server/actions/articles.ts`)

- Implements Next.js server actions for MDX article handling using "use server" directive
- Core functions:

  ```typescript
  // Main generator function that reads all MDX files
  const genArticles = async (): Promise<Article[]> => {
    const filenames = await fs.readdir(articlesDir);
    // Process each MDX file and extract frontmatter + content
  };

  // Get all articles with optional limit
  export async function getAllArticlesAction(options?: { max?: number });

  // Get articles filtered by date
  export async function getAllRecentArticlesAction(options?: {
    dateTo?: string;
    max?: number;
  });

  // Get featured articles marked in frontmatter
  export async function getAllFeaturedArticlesAction(options?: {
    max?: number;
  });

  // Get single article by slug
  export async function getArticleBySlugAction(slug: string);

  // Pagination helper
  export async function getArticlePaginationByPageAction(
    page: number,
    perPage: number
  );
  ```

Implementation notes:

- Uses `next-mdx-remote/rsc` for MDX compilation and processing
- Processes frontmatter for article metadata like title, date, slug
- Implements sorting and filtering based on dates using dayjs
- Handles pagination calculations server-side
- Extracts table of contents from MDX content

### 2. Article Components

#### MDX Component (`components/ui/mdx.tsx`)

- Custom MDX components for rendering article content
- Syntax highlighting for code blocks
- Custom styling for headers, lists, and other MDX elements
- Table of contents generation

#### Pagination Component

- Handles navigation between article pages
- Shows current page and total pages
- Previous/Next navigation
- Page number selection

### 3. Blog Pages and Layout

#### Main Blog Page

- Featured articles section
- Recent articles grid
- Pagination for all articles
- Article cards with excerpts

#### Article List Views

- Grid and list view options
- Article metadata display (date, reading time)
- Category/tag filtering
- Sort options

### 4. Individual Article Pages

#### Dynamic Routing (`app/resources/blog/[slug]/page.tsx`)

The dynamic route will be used to generate the individual article pages. When page loads, the server action will be called to fetch the article data and render the page with the MDX component and content of the article.

### 5. Social Sharing Integration

#### Using react-share

```typescript
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const SocialShare = ({ url, title, description }) => {
  return (
    <div className="share-buttons">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title} summary={description}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};
```

Used react-share to add social sharing buttons to the article page because it is a simple and easy to use library. It supports posting customized messages to social platforms for easy link sharing back to the article.

### 6. Styling and Layout

#### Prose Styling

- Typography settings for article content
- Code block styling
- Responsive image handling

File can be found in `components/ui/prose.tsx`

## Dependencies Added

Essential packages for MDX blog functionality:

- `dayjs`: Modern date handling and formatting
- `react-copy-to-clipboard`: One-click code copying
- `react-share`: Comprehensive social media sharing
- `react-to-text`: Text processing for article excerpts

## Developer Notes

### Initial Setup and Core Implementation

Built with Next.js 14 server components and server actions. Uses MDX for content management with server-side processing.

### 1. Server Actions and Article Processing

Server actions in `server/actions/articles.ts` handle MDX processing. The `genArticles` function reads MDX files, extracts frontmatter and content using `next-mdx-remote/rsc`, generates table of contents, and sorts articles by date.

Additional actions handle specific needs: `getAllArticlesAction` for paginated lists, `getAllRecentArticlesAction` for date-filtered content, `getArticleBySlugAction` for single articles, and `getArticlePaginationByPageAction` for pagination.

### 2. Library Implementation

Date handling uses dayjs (`format-time.ts`) with plugins for timezone support, relative time, and consistent formatting across the blog.

Table of contents generation (`toc.ts`) extracts h2 and h3 headings from MDX content using regex, creates anchor IDs, and builds navigation structure.

Type system (`types.ts`) defines interfaces for articles, frontmatter, and component props. Includes fields for article metadata, author info, SEO, and content categorization.

### 3. Styling Implementation

Styling lives in `prose.css`, handling MDX content presentation. Implements responsive typography, code block styling with syntax highlighting, and dark mode support. Uses Tailwind's @apply for consistent styling with the main design system.

### 4. Article Page Implementation

Uses Next.js dynamic routing with `[slug]` for article pages. MDX content renders with custom components for enhanced markdown features. Table of contents provides navigation with scroll position tracking. Social sharing uses react-share. Related articles generate based on tags and categories.

### 5. Development Workflow

Add articles as MDX files with required frontmatter. Build process handles table of contents generation, image processing, and navigation structure. Includes development utilities for frontmatter validation and preview generation.
