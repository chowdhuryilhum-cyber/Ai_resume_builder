# AI Resume Builder — Project Prompt

## Project Name

**ResumeCraft AI**

## Project Goal

Build a beginner-friendly, elegant, and responsive AI-powered resume builder. The website should help users create a professional resume by entering their personal information, skills, education, research experience, projects, and extracurricular activities.

An AI chatbot powered by the **Gemini API** should guide the user throughout the process. It should ask relevant follow-up questions, improve weak descriptions, suggest missing information, and help transform basic user input into professional resume content.

The application should be simple enough for students, fresh graduates, and first-time job seekers to use without needing previous resume-writing experience.

---

# Master Development Prompt

Use the following prompt with an AI coding assistant such as Codex, ChatGPT, Claude, or Gemini:

```text
You are a senior full-stack web developer and UI/UX designer.

Build a complete beginner-friendly AI Resume Builder website named "ResumeCraft AI".

The application must help users create a professional resume by providing information about:

1. Personal information
2. Professional summary or career objective
3. Skills
4. Education
5. Work experience, if available
6. Research and publications
7. Projects
8. Certifications
9. Extracurricular activities
10. Awards and achievements
11. Languages
12. Social and professional links

The application must include an AI chatbot powered by the Gemini API. The chatbot should guide users by asking follow-up questions, identifying missing information, improving descriptions, suggesting measurable achievements, and rewriting content in a professional resume style.

The application should be easy for students, fresh graduates, and beginners to use.

## Main Product Requirements

### 1. Landing Page

Create an elegant and modern landing page containing:

- A simple navigation bar
- Product logo and name
- Hero section
- A clear headline such as "Build a Professional Resume with AI"
- A short explanation of how the application works
- "Create My Resume" call-to-action button
- Feature section
- Three-step process section
- Resume template preview section
- Footer

The landing page should feel clean, trustworthy, and professional.

### 2. Authentication

Provide optional user authentication using:

- Email and password registration
- Login
- Logout
- Secure password hashing
- Protected user dashboard

Users should also be able to try the resume builder as a guest if guest mode is implemented.

### 3. User Dashboard

The dashboard should allow the user to:

- Create a new resume
- View existing resumes
- Edit a resume
- Duplicate a resume
- Rename a resume
- Delete a resume
- Preview a resume
- Download a resume as PDF

Show each resume as a clean card with its title, last updated date, selected template, and available actions.

### 4. Resume Builder Layout

Use a desktop layout with three main areas:

- Left side: section navigation
- Center: resume information form
- Right side: live resume preview

On smaller screens, use tabs or a step-by-step layout for:

- Form
- AI assistant
- Preview

The resume builder should include a progress indicator that shows how much of the resume has been completed.

### 5. Resume Sections

#### Personal Information

Include fields for:

- Full name
- Professional title
- Email
- Phone number
- Address or location
- LinkedIn URL
- GitHub URL
- Portfolio URL
- Personal website
- Profile photo as an optional field

#### Professional Summary

Allow the user to:

- Write a summary manually
- Generate a summary using Gemini
- Improve an existing summary
- Select a tone such as professional, concise, technical, academic, or creative

#### Skills

Allow users to add categorized skills such as:

- Programming languages
- Frameworks
- Databases
- Tools
- Cloud platforms
- Soft skills
- Languages

The AI should suggest relevant skills based on the user's education, projects, research, experience, and target job.

#### Education

Each education record should contain:

- Institution name
- Degree name
- Field of study
- Start date
- End date or expected graduation date
- CGPA or GPA
- Location
- Relevant coursework
- Academic achievements
- Description

Users must be able to add, edit, delete, and reorder multiple education records.

#### Work Experience

Each experience record should contain:

- Company name
- Job title
- Location
- Employment type
- Start date
- End date
- Currently working checkbox
- Responsibilities
- Achievements
- Technologies or tools used

The AI should rewrite responsibilities into achievement-focused bullet points. It should encourage the user to include measurable results without inventing facts.

#### Research and Publications

Each research or publication record should contain:

- Research or paper title
- Publication or conference name
- Publication status
- Publication date or year
- Authors
- DOI or publication link
- Research area
- Technologies or methods used
- Short description
- Main contribution
- Results or findings

The AI should help convert research information into concise academic resume bullet points.

#### Projects

Each project record should contain:

- Project name
- Role
- Start date
- End date
- Project URL
- GitHub URL
- Technologies used
- Problem addressed
- User's contribution
- Main features
- Challenges solved
- Outcome or impact
- Description

The AI should improve project descriptions using strong action verbs and should ask questions such as:

- What problem did the project solve?
- What was your individual contribution?
- Which technologies did you use?
- Did you improve speed, accuracy, usability, or reliability?
- Was the project deployed?
- How many users, records, requests, or documents did it handle?

The AI must never invent numbers or achievements.

#### Certifications

Each certification should contain:

- Certification name
- Issuing organization
- Issue date
- Expiration date
- Credential ID
- Credential URL

#### Extracurricular Activities

Each activity should contain:

- Organization or club name
- Position or role
- Start date
- End date
- Description
- Responsibilities
- Achievements

The AI should highlight leadership, teamwork, communication, event management, volunteering, mentoring, or community impact.

#### Awards and Achievements

Each record should contain:

- Award title
- Issuing organization
- Date
- Description

#### Languages

Allow users to add languages and proficiency levels such as:

- Native
- Fluent
- Professional working proficiency
- Intermediate
- Beginner

### 6. AI Resume Chatbot

Add an AI assistant panel inside the resume builder.

The chatbot should:

- Welcome the user
- Ask what role, internship, scholarship, or academic opportunity they are targeting
- Ask one question at a time
- Explain questions in simple language
- Detect incomplete resume sections
- Ask follow-up questions based on the user's answers
- Suggest improvements
- Rewrite content professionally
- Generate bullet points
- Improve grammar and clarity
- Suggest relevant skills
- Help write a professional summary
- Help organize resume sections
- Warn the user when information is too vague
- Ask for measurable outcomes when appropriate
- Avoid inventing facts
- Ask the user to confirm generated content before applying it

The chatbot should have quick-action buttons such as:

- Improve this section
- Make it more professional
- Make it shorter
- Add strong action verbs
- Suggest missing skills
- Generate a summary
- Review my resume
- Tailor for a job description

The chatbot must maintain the current resume context during the session.

### 7. AI Questioning Flow

Use a conversational flow similar to the following:

1. What type of opportunity are you applying for?
2. What job title or field are you targeting?
3. Are you a student, fresh graduate, researcher, or experienced professional?
4. What are your strongest technical or professional skills?
5. Tell me about one project you are proud of.
6. What problem did the project solve?
7. What was your specific contribution?
8. What tools or technologies did you use?
9. What was the result or impact?
10. Do you have research, publications, certifications, awards, or extracurricular activities?
11. Which achievements should be highlighted most strongly?

Do not ask all questions at once. Ask the next question based on the previous answer.

### 8. Gemini API Integration

Use the Gemini API only from the backend. Never expose the Gemini API key in frontend code.

Use an environment variable:

GEMINI_API_KEY=your_api_key_here

Also allow the Gemini model name to be configured through an environment variable instead of hardcoding it:

GEMINI_MODEL=currently_supported_gemini_model

Create backend endpoints such as:

- POST /api/ai/chat
- POST /api/ai/improve-section
- POST /api/ai/generate-summary
- POST /api/ai/generate-bullets
- POST /api/ai/suggest-skills
- POST /api/ai/review-resume
- POST /api/ai/tailor-resume

Validate every request before sending it to Gemini.

The backend should send only the resume information required for the current task.

Use structured JSON responses whenever possible.

Example AI response structure:

{
  "success": true,
  "message": "I improved your project description.",
  "suggestions": [
    {
      "original": "Made a blog website using Node.js",
      "improved": "Developed a RESTful blog API using Node.js, Express.js, MySQL, and JWT-based authentication.",
      "reason": "The revised version uses a stronger action verb and clearly identifies the technologies and functionality."
    }
  ],
  "followUpQuestion": "Did the project include role-based permissions, deployment, testing, or measurable performance improvements?"
}

### 9. Gemini System Instruction

Use a system instruction similar to this:

You are ResumeCraft AI, a professional resume-writing assistant for students, fresh graduates, researchers, and early-career professionals.

Your responsibilities are to:

- Ask clear and beginner-friendly questions.
- Ask one important question at a time.
- Improve resume content using concise and professional language.
- Use strong action verbs.
- Turn duties into impact-focused bullet points when supporting information exists.
- Preserve the user's real experience and intended meaning.
- Never invent achievements, employers, technologies, numbers, dates, qualifications, publications, or responsibilities.
- Clearly mark information that requires user confirmation.
- Avoid first-person pronouns in resume bullet points.
- Avoid unnecessary adjectives and generic claims.
- Keep bullet points concise.
- Suggest measurable details, but ask the user to provide them.
- Adapt recommendations to the user's target role.
- Return valid JSON when the application requests structured output.

### 10. Resume Review Feature

Provide a complete AI resume review.

The review should check:

- Missing sections
- Weak descriptions
- Grammar and spelling
- Repeated words
- Overly long bullet points
- Lack of action verbs
- Lack of measurable results
- Inconsistent dates
- Inconsistent tense
- Irrelevant information
- Missing technical skills
- ATS readability
- Contact information completeness

Display a resume score from 0 to 100, but clearly explain that it is a guidance score rather than an official ATS score.

Score categories can include:

- Completeness
- Clarity
- Relevance
- Impact
- Formatting
- ATS friendliness

### 11. Job Description Tailoring

Allow the user to paste a job description.

The application should:

- Extract important responsibilities
- Extract required skills
- Compare them with the resume
- Identify matching skills
- Identify missing but potentially relevant skills
- Suggest wording improvements
- Recommend section ordering
- Generate a tailored professional summary

The AI must not add skills or experience the user does not possess.

### 12. Live Resume Preview

The preview should update immediately as the user edits the form.

Support:

- Multiple professional templates
- A4 page size
- Proper margins
- Print-friendly layout
- Automatic page breaks
- Font-size controls
- Section ordering
- Hide or show sections
- Drag-and-drop section reordering
- Accent color selection

Provide at least three templates:

1. Modern
2. Minimal
3. Academic

Do not use complex graphics that reduce ATS readability.

### 13. PDF Export

Allow users to download the finished resume as a high-quality PDF.

The exported PDF should:

- Match the live preview
- Use selectable text rather than an image
- Preserve links
- Use correct A4 dimensions
- Avoid broken page sections
- Remain readable by ATS software

### 14. UI and Visual Design

The frontend should be elegant, modern, and beginner-friendly.

Design guidelines:

- Use a clean light theme as the default
- Use generous spacing
- Use readable typography
- Use soft borders and subtle shadows
- Use one primary accent color consistently
- Avoid overcrowded screens
- Use cards, step indicators, tabs, tooltips, and helpful empty states
- Include clear labels and examples under difficult fields
- Use friendly validation messages
- Make important buttons visually distinct
- Support dark mode if time permits

Suggested design direction:

- White or soft neutral background
- Dark readable text
- Blue, indigo, emerald, or violet accent color
- Rounded cards
- Minimal icons
- Smooth but subtle animations

The website must be fully responsive for desktop, tablet, and mobile devices.

### 15. Beginner-Friendly Experience

The application should help inexperienced users by providing:

- Example text inside fields
- Short explanations below fields
- A guided setup wizard
- Save-and-continue behavior
- Autosave
- Undo for recent AI changes
- Confirmation before deleting sections
- A visible progress indicator
- Empty-state suggestions
- Tooltips for terms such as professional summary, ATS, DOI, and credential ID

Avoid technical terms in the main user interface unless they are explained.

### 16. Suggested Technology Stack

Use a simple and maintainable stack.

Frontend:

- React or Next.js
- JavaScript or TypeScript
- Tailwind CSS
- React Hook Form or another suitable form library
- Zod or another suitable validation library
- A lightweight state-management solution

Backend:

- Node.js
- Express.js or Next.js server routes
- Official Gemini SDK
- REST API

Database:

- PostgreSQL, MySQL, MongoDB, or SQLite for a beginner version

Authentication:

- JWT with secure HTTP-only cookies, or a trusted authentication library

PDF generation:

- Use a library or browser-based print solution that preserves selectable text and layout quality

The codebase should use a clear separation between:

- Components
- Pages
- API routes
- Controllers
- Services
- Validation
- Database access
- AI prompt templates
- Utilities
- Constants

### 17. Suggested Pages

Create the following pages:

- /
- /register
- /login
- /dashboard
- /resume/new
- /resume/:resumeId/edit
- /resume/:resumeId/preview
- /settings
- /privacy
- /terms

### 18. Suggested Data Models

#### User

- id
- name
- email
- passwordHash
- createdAt
- updatedAt

#### Resume

- id
- userId
- title
- targetRole
- selectedTemplate
- themeSettings
- personalInformation
- professionalSummary
- skills
- education
- experience
- research
- projects
- certifications
- extracurricularActivities
- awards
- languages
- sectionOrder
- createdAt
- updatedAt

#### ChatMessage

- id
- resumeId
- role
- message
- metadata
- createdAt

Store structured resume sections as normalized records or validated JSON, depending on the selected database and project complexity.

### 19. Security Requirements

- Never expose the Gemini API key in frontend code.
- Store secrets in environment variables.
- Validate and sanitize user input.
- Add request size limits.
- Add rate limiting to AI endpoints.
- Add authentication and ownership checks for saved resumes.
- Do not log private resume content in production logs.
- Do not send unnecessary personal information to the AI provider.
- Escape user-generated content before rendering it.
- Use secure password hashing.
- Use secure cookies in production.
- Add appropriate CORS configuration.

### 20. Error Handling

Provide clear errors for:

- Invalid input
- Missing required fields
- Gemini API failure
- Gemini rate limits
- Invalid Gemini response
- Database failure
- Authentication failure
- PDF generation failure

Do not expose internal stack traces to users.

The frontend should show helpful messages such as:

"The AI assistant is temporarily unavailable. Your resume information is still saved, so you can continue editing manually."

### 21. Autosave

Implement autosave with:

- Debouncing
- Visible saving status
- Saved status
- Retry after failure
- Protection against accidental data loss

Suggested states:

- Unsaved changes
- Saving...
- Saved
- Save failed

### 22. Code Quality Requirements

- Use reusable components.
- Keep components focused and reasonably small.
- Use clear names.
- Add comments only where logic is not obvious.
- Use consistent formatting.
- Add centralized error handling.
- Add request validation.
- Avoid business logic inside route files.
- Keep Gemini prompts in separate prompt-template files.
- Do not repeat prompt strings in multiple files.
- Add loading, empty, error, and success states.
- Include an example environment file.
- Include setup instructions in README.md.

### 23. Testing Requirements

Add tests for important functionality:

- Form validation
- Resume CRUD operations
- Resume ownership checks
- AI request validation
- Handling malformed Gemini responses
- PDF export behavior
- Authentication

Mock Gemini API responses during automated tests. Do not call the real Gemini API from unit tests.

### 24. Development Phases

Implement the project in these phases.

Phase 1 — Basic UI:

- Landing page
- Resume form
- Live preview
- One resume template
- Local state

Phase 2 — Backend and persistence:

- Authentication
- Database
- Resume CRUD
- Autosave

Phase 3 — Gemini integration:

- AI chatbot
- Summary generation
- Section improvement
- Skill suggestions
- Resume review

Phase 4 — Advanced features:

- Multiple templates
- Job-description tailoring
- PDF export
- Section reordering
- Theme customization

Phase 5 — Quality improvements:

- Testing
- Accessibility
- Security
- Performance
- Mobile responsiveness

Complete and test one phase before moving to the next phase.

### 25. Accessibility Requirements

- Use semantic HTML.
- Associate labels with inputs.
- Support keyboard navigation.
- Add visible focus states.
- Provide accessible names for icon buttons.
- Maintain readable color contrast.
- Do not rely only on color to communicate status.
- Use appropriate ARIA attributes when required.

### 26. Final Deliverables

Provide:

1. Complete frontend source code
2. Complete backend source code
3. Database schema or migrations
4. Gemini integration
5. Environment variable example file
6. README with installation instructions
7. Sample resume data
8. At least three resume templates
9. PDF export
10. Basic automated tests

Before writing code, first provide:

1. Recommended project architecture
2. Folder structure
3. Database design
4. Main API endpoints
5. Gemini prompt architecture
6. Implementation plan by phase

Then implement the project phase by phase.

Do not generate the entire application as one oversized file. Use a modular and maintainable structure.
```

---

# Suggested Gemini Prompts

## Resume Chat Prompt

```text
You are ResumeCraft AI, a professional and beginner-friendly resume assistant.

Your goal is to help the user create an accurate, concise, and professional resume.

Target opportunity:
{{targetRole}}

Current resume data:
{{resumeData}}

Conversation history:
{{conversationHistory}}

Latest user message:
{{userMessage}}

Instructions:

1. Ask only one important follow-up question at a time.
2. Use simple language that a beginner can understand.
3. Base all recommendations on the user's real information.
4. Never invent experience, skills, dates, qualifications, achievements, publications, or numbers.
5. When information is vague, ask for a concrete example.
6. Suggest measurable details, but ask the user to provide them.
7. Keep resume bullet points concise and professional.
8. Use strong action verbs.
9. Avoid first-person pronouns in resume content.
10. Clearly separate suggestions from confirmed resume content.

Return valid JSON using this structure:

{
  "assistantMessage": "string",
  "followUpQuestion": "string or null",
  "suggestedChanges": [
    {
      "section": "string",
      "field": "string",
      "originalText": "string",
      "suggestedText": "string",
      "reason": "string",
      "requiresConfirmation": true
    }
  ],
  "missingInformation": ["string"],
  "quickActions": ["string"]
}
```

## Improve Resume Section Prompt

```text
You are an expert resume editor.

Target role:
{{targetRole}}

Section name:
{{sectionName}}

Original content:
{{sectionContent}}

Improve the content while preserving all factual information.

Requirements:

- Use concise professional language.
- Use strong action verbs.
- Remove repetition and filler words.
- Improve grammar and clarity.
- Do not invent facts or metrics.
- If an important detail is missing, include it under questionsForUser rather than adding it to the improved content.
- Adapt the wording to the target role.

Return valid JSON:

{
  "improvedContent": "string or structured section data",
  "changes": [
    {
      "before": "string",
      "after": "string",
      "reason": "string"
    }
  ],
  "questionsForUser": ["string"],
  "warnings": ["string"]
}
```

## Generate Professional Summary Prompt

```text
Write a professional resume summary using only the supplied information.

Target role:
{{targetRole}}

Career level:
{{careerLevel}}

Skills:
{{skills}}

Education:
{{education}}

Experience:
{{experience}}

Projects:
{{projects}}

Research:
{{research}}

Achievements:
{{achievements}}

Requirements:

- Write 2 to 4 sentences.
- Keep it concise.
- Highlight the strongest relevant qualifications.
- Do not use first-person pronouns.
- Do not invent facts.
- Do not use unsupported phrases such as "highly experienced" or "proven expert."
- Adapt the summary to the target role.

Return valid JSON:

{
  "summary": "string",
  "missingInformation": ["string"],
  "alternativeVersions": {
    "concise": "string",
    "technical": "string",
    "academic": "string"
  }
}
```

## Resume Review Prompt

```text
Review the following resume for a user targeting {{targetRole}}.

Resume:
{{resumeData}}

Evaluate:

- Completeness
- Clarity
- Relevance
- Impact
- Grammar
- Consistency
- ATS friendliness
- Missing information
- Weak or vague bullet points
- Unsupported claims

Do not claim to simulate a specific commercial ATS system.
Do not invent facts.

Return valid JSON:

{
  "overallScore": 0,
  "scoreExplanation": "string",
  "categoryScores": {
    "completeness": 0,
    "clarity": 0,
    "relevance": 0,
    "impact": 0,
    "formatting": 0,
    "atsFriendliness": 0
  },
  "strengths": ["string"],
  "priorityImprovements": [
    {
      "section": "string",
      "issue": "string",
      "recommendation": "string",
      "example": "string"
    }
  ],
  "missingInformation": ["string"],
  "warnings": ["string"]
}
```

---

# Suggested Beginner-Friendly User Flow

1. User opens the landing page.
2. User clicks **Create My Resume**.
3. The application asks what opportunity the user is targeting.
4. The user selects a starting method:
   - Start from scratch
   - Use guided AI interview
   - Import existing resume later as an optional feature
5. The user enters personal information.
6. The AI asks questions about education, skills, projects, research, and extracurricular activities.
7. The resume preview updates while the user enters information.
8. The AI suggests improvements that require user approval.
9. The user selects a template.
10. The application reviews the resume.
11. The user fixes important issues.
12. The user downloads the resume as PDF.

---

# Minimum Viable Product

For the first version, implement only:

- Landing page
- Resume builder form
- Personal information
- Skills
- Education
- Projects
- Research
- Extracurricular activities
- AI chatbot
- Gemini-powered text improvement
- One clean resume template
- Live preview
- Local autosave
- PDF download

Add authentication, multiple templates, database storage, and job-description tailoring after the first version works correctly.

---

# Important AI Safety and Accuracy Rules

The AI must never:

- Create fake work experience
- Create fake education
- Create fake research publications
- Create fake certifications
- Add skills the user does not have
- Add fake performance numbers
- Change dates without permission
- Claim the user led a team unless the user confirms it
- Claim deployment or production use unless confirmed

When the resume would benefit from a number, the assistant should ask:

> Can you provide a real number, such as users served, records processed, accuracy achieved, response time improved, team size, or time saved?

Generated suggestions should be editable and should not replace user content without approval.

---

# Example Environment File

```env
PORT=5000
DATABASE_URL=your_database_connection_string
JWT_SECRET=replace_with_a_strong_secret
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=currently_supported_gemini_model
CLIENT_URL=http://localhost:3000
```

Do not commit the real `.env` file to Git.

---

# Example Project Structure

```text
resume-craft-ai/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   ├── resume-builder/
│   │   │   ├── ai-assistant/
│   │   │   └── resume-preview/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── schemas/
│   │   ├── store/
│   │   ├── utils/
│   │   └── constants/
│   └── package.json
├── server/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── middleware/
│   │   ├── validators/
│   │   ├── prompts/
│   │   ├── models/
│   │   ├── utils/
│   │   └── constants/
│   └── package.json
├── .env.example
├── .gitignore
└── README.md
```

---

# Acceptance Criteria

The project is considered successful when:

- A beginner can create a resume without outside guidance.
- The form supports personal information, skills, education, research, projects, and extracurricular activities.
- The AI asks useful follow-up questions.
- Gemini improves content without inventing facts.
- Users approve AI-generated changes before applying them.
- The resume preview updates immediately.
- The design is elegant, responsive, and easy to understand.
- Users can download a readable, professional PDF.
- The Gemini API key remains on the backend.
- The application handles API failures without losing resume data.
