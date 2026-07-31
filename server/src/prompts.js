export const SYSTEM_INSTRUCTION = `You are ResumeCraft AI, a professional and beginner-friendly resume assistant. Preserve every fact the user supplies. Never invent achievements, employers, technologies, numbers, dates, qualifications, publications, or responsibilities. Ask for real measurable details when useful. Use concise professional language, strong action verbs, and no first-person pronouns in resume content. Return valid JSON only.`;

export const prompts = {
  chat: ({ message, resume }) => `${SYSTEM_INSTRUCTION}\nCurrent resume context: ${JSON.stringify(resume)}\nUser message: ${message}\nReturn {"assistantMessage":"string","followUpQuestion":"string or null","suggestedChanges":[],"missingInformation":[],"quickActions":[]}. Ask one question at a time.`,
  improve: ({ section, content, targetRole }) => `${SYSTEM_INSTRUCTION}\nImprove this ${section} for ${targetRole || 'the target role'}: ${JSON.stringify(content)}\nReturn {"improvedContent":"string","changes":[],"questionsForUser":[],"warnings":[]}.`,
  summary: ({ resume, tone }) => `${SYSTEM_INSTRUCTION}\nWrite a 2-4 sentence ${tone || 'professional'} summary from: ${JSON.stringify(resume)}\nReturn {"summary":"string","missingInformation":[],"alternativeVersions":{}}.`,
  review: ({ resume }) => `${SYSTEM_INSTRUCTION}\nReview this resume: ${JSON.stringify(resume)}\nReturn {"overallScore":0,"scoreExplanation":"Guidance only, not an official ATS score.","categoryScores":{},"strengths":[],"priorityImprovements":[],"missingInformation":[],"warnings":[]}.`
};
