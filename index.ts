#!/usr/bin/env node

interface SERPInput {
  keyword: string;
  intent: "informational" | "commercial" | "transactional" | "navigational";
}

interface SERPOutput {
  keyword: string;
  dominantIntent: string;
  aiOverview: string;
  avgWordCount: number;
  paaCount: number;
  contentGapScore: number;
  topFormat: string;
  serpFeatureScore: number;
}

const INTENT_CONFIGS: Record<string, {
  aiOverview: string;
  avgWordCount: number;
  paaCount: number;
  contentGapScore: number;
  topFormat: string;
  serpFeatureScore: number;
}> = {
  informational: {
    aiOverview: "Yes — 92%",
    avgWordCount: 2840,
    paaCount: 8,
    contentGapScore: 38,
    topFormat: "Listicle + Table",
    serpFeatureScore: 74,
  },
  commercial: {
    aiOverview: "Yes — 65%",
    avgWordCount: 2200,
    paaCount: 6,
    contentGapScore: 45,
    topFormat: "Comparison + Review",
    serpFeatureScore: 68,
  },
  transactional: {
    aiOverview: "No — 12%",
    avgWordCount: 1400,
    paaCount: 3,
    contentGapScore: 55,
    topFormat: "Product Page + Schema",
    serpFeatureScore: 82,
  },
  navigational: {
    aiOverview: "No — 5%",
    avgWordCount: 800,
    paaCount: 2,
    contentGapScore: 20,
    topFormat: "Brand Page",
    serpFeatureScore: 60,
  },
};

export function analyzeSERP(input: SERPInput): SERPOutput {
  const config = INTENT_CONFIGS[input.intent] ?? INTENT_CONFIGS["informational"];

  return {
    keyword: input.keyword,
    dominantIntent: input.intent.charAt(0).toUpperCase() + input.intent.slice(1),
    aiOverview: config.aiOverview,
    avgWordCount: config.avgWordCount,
    paaCount: config.paaCount,
    contentGapScore: config.contentGapScore,
    topFormat: config.topFormat,
    serpFeatureScore: config.serpFeatureScore,
  };
}

const args = process.argv.slice(2);
const keyword = args[0] || "best seo tool 2026";
const intent = (args[1] as SERPInput["intent"]) || "informational";

const result = analyzeSERP({ keyword, intent });

console.log(`Keyword: ${result.keyword}`);
console.log(`Dominant Intent: ${result.dominantIntent}`);
console.log(`AI Overview Present: ${result.aiOverview}`);
console.log(`Avg. Word Count: ${result.avgWordCount.toLocaleString()} words`);
console.log(`People Also Ask: ${result.paaCount} questions`);
console.log(`Content Gap Score: ${result.contentGapScore} / 100`);
console.log(`Top Content Format: ${result.topFormat}`);
console.log(`SERP Feature Score: ${result.serpFeatureScore}/100`);
