# CyVidya Training Platform - Design Guidelines

## Design Approach
**System-Based with Custom Dark Theme**: Following modern developer tool aesthetics (VS Code, GitHub Dark, Linear) with cybersecurity-inspired visual elements. The platform leverages the provided 3D Spline components and chat interface as hero elements while maintaining a professional, code-first environment.

## Core Design Principles
1. **Code-First Interface**: Maximize screen real estate for code viewing and editing
2. **Dark by Default**: Reduce eye strain for extended coding sessions
3. **Clear Visual Hierarchy**: Distinguish between vulnerable code, exploit output, and fixed code
4. **Minimal Distractions**: Keep focus on the learning flow

---

## Typography System

**Primary Font**: Inter (via Google Fonts CDN)
- Headers (H1): 2.5rem (40px), font-weight 700, tracking-tight
- Headers (H2): 2rem (32px), font-weight 600
- Headers (H3): 1.5rem (24px), font-weight 600
- Body: 1rem (16px), font-weight 400, line-height 1.6
- Small text/labels: 0.875rem (14px), font-weight 500

**Code Font**: JetBrains Mono (via Google Fonts CDN)
- Code editor: 0.875rem (14px), line-height 1.5
- Terminal output: 0.8125rem (13px), line-height 1.4
- Inline code: 0.875rem (14px)

---

## Layout System

**Spacing Scale**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section spacing: space-y-8 or space-y-12
- Card gaps: gap-6
- Button padding: px-6 py-3

**Grid Structure**:
- Main platform: Split-view layout (code viewer | editor) or three-panel (code | terminal | editor)
- Challenge list: Grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for challenge cards
- Dashboard: Max-width container (max-w-7xl) with responsive breakpoints

**Responsive Breakpoints**:
- Mobile: Single column, stacked views with tab navigation
- Tablet (md): Two-column where appropriate
- Desktop (lg): Full multi-panel layouts

---

## Component Library

### Navigation & Structure
**Top Navigation Bar**:
- Height: h-16
- Logo (left), Main nav links (center), User profile + progress indicator (right)
- Sticky positioning with backdrop-blur
- Border-b with subtle glow effect

**Side Navigation** (Challenge Browser):
- Width: w-64 on desktop, collapsible on mobile
- Challenge categories with nested items
- Progress indicators (checkmarks, percentages)
- Difficulty badges (Beginner, Intermediate, Advanced)

### Challenge Interface Components

**Three-Panel Layout** (Find > Exploit > Fix):

1. **Source Code Viewer** (Left Panel):
   - Syntax-highlighted code display
   - Line numbers
   - Vulnerability hint markers (subtle glow on hover)
   - Read-only, scrollable
   - Search functionality

2. **Terminal/Exploit Panel** (Center/Bottom Panel):
   - Dark terminal background
   - Command input with autocomplete
   - Color-coded output (errors in red, success in green)
   - Exploit verification feedback
   - Clear/Reset buttons

3. **Code Editor Panel** (Right Panel):
   - Full syntax highlighting with Monaco/CodeMirror integration
   - Line numbers with diff indicators
   - Submit fix button
   - Real-time validation feedback

**Challenge Card** (for dashboard/browse):
- Compact card design with rounded corners (rounded-lg)
- Challenge title + difficulty badge
- Brief description (2 lines, truncated)
- Technology/language tags
- Progress indicator or "Start" button
- Hover state with subtle lift (transform translate-y-1)

### Interactive Elements

**Buttons**:
- Primary: Solid with gradient backgrounds, px-6 py-3, rounded-lg
- Secondary: Border with transparent background
- Danger: Red accent for "Reset Challenge"
- Icon buttons: Square (h-10 w-10) for toolbar actions

**Status Indicators**:
- Challenge status pills: "Not Started" (gray), "In Progress" (blue), "Completed" (green), "Verified" (green with check)
- Toast notifications for exploit success/failure

**Modal/Overlays**:
- Challenge instructions overlay on challenge start
- Success celebration modal when fix is verified
- Hint system (progressive disclosure)

### Data Display

**Progress Dashboard**:
- Stat cards showing: Challenges completed, Vulnerabilities fixed, Streak count
- Recent activity feed
- Skill progression chart (radar/bar chart)
- Leaderboard widget (if applicable)

**Code Diff Viewer**:
- Side-by-side or unified diff view
- Red/green highlighting for removed/added lines
- Before/after toggle

---

## Visual Elements

**Dark Theme Color Palette** (specific values will be defined by engineer):
- Background layers: Multiple shades from near-black to dark gray
- Accent colors: Cyan/blue for primary actions, red for vulnerabilities, green for success
- Syntax highlighting: Standard dark theme colors for keywords, strings, functions, etc.

**Gradients**:
- Use sparingly for headers and CTAs
- Subtle gradients on cards for depth
- Gradient text for hero sections (from-neutral-50 to-neutral-400 pattern)

**Effects**:
- Backdrop blur on navigation and modals
- Subtle box shadows for elevation
- Border glows on interactive elements (hover states)
- Spotlight effect (using provided component) for hero sections

**Icons**:
- Use Lucide React icons (already imported in chat component)
- Consistent sizing: h-5 w-5 for inline, h-6 w-6 for buttons
- Icons for: Code, Terminal, Check, X, Play, Info, Lock (for locked challenges)

---

## Special Features Integration

**3D Spline Scene**:
- Hero section on landing/dashboard with interactive 3D cybersecurity-themed visualization
- Height: h-[500px] to h-[600px]
- Split layout: Text content (left) | 3D scene (right) on desktop
- Stacked on mobile with scene below text

**Expandable Chat Widget**:
- Position: bottom-right
- Size: md (medium)
- Dark theme consistency
- AI assistant for hints and guidance
- Triggered by floating MessageCircle icon

---

## Accessibility & Usability

- High contrast ratios for text on dark backgrounds
- Keyboard navigation for all interactive elements
- Focus indicators with clear visual feedback
- Screen reader labels for icon-only buttons
- ARIA labels for progress indicators and status changes
- Terminal must support keyboard shortcuts (Ctrl+C, Ctrl+L, etc.)

---

## Images

**Hero Image**: No large hero image needed. The 3D Spline scene serves as the interactive hero element.

**Supporting Visuals**:
- Vulnerability type illustrations (XSS, SQL injection, etc.) as small icons or diagrams
- Technology/language logos for challenge tags (small, 24x24px)
- User avatars (rounded-full, 32x32px or 40x40px)
- Success celebration graphics (optional, small animated SVGs)