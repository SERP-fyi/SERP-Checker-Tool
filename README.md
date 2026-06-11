# SERP Checker Tool

[![npm](https://img.shields.io/npm/v/@serp-fyi/serp-checker-tool)](https://npmjs.com/package/@serp-fyi/serp-checker-tool)
[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.XXXXXXX.svg)](https://doi.org/10.5281/zenodo.XXXXXXX)

Analyze search results in real time — uncovering intent signals, SERP features, content gaps, and competitor patterns that drive rankings. Built by [SERPChecker.fyi](https://serpchecker.fyi) powered by BHMarketer.

## Features

- Search Intent Classification — informational, commercial, transactional, navigational
- Competitor Content Analysis — themes, structures, and optimization patterns
- Content Gap Detection — missing topics, questions, entities, and subtopics
- SERP Feature Tracking — AI Overviews, Featured Snippets, PAA boxes, videos, local results
- Topical Coverage Evaluation — depth comparison against top-ranking competitors
- Ranking Pattern Detection — content length, heading structure, entity mentions, schema types
- CLI support in Node.js and Python
- Benchmark dataset included (20 SERP analyses)
- Lightweight, publish-ready, minimal dependencies

## Quick Start

### Node.js

```bash
npm install @serp-fyi/serp-checker-tool
npx serp-checker "best seo analysis tool 2026" informational
```

### Python

```bash
pip install serp-fyi-checker
python -m checker "best seo analysis tool 2026" informational
```

## Output

```
Keyword: best seo analysis tool 2026
Dominant Intent: Informational
AI Overview Present: Yes — 92%
Avg. Word Count: 2,840 words
People Also Ask: 8 questions
Content Gap Score: 38 / 100
Top Content Format: Listicle + Table
SERP Feature Score: 74/100
```

## Project Structure

```
SERP-Checker-Tool/
├── index.ts              # TypeScript checker
├── checker.py            # Python checker
├── package.json          # NPM package config
├── package-lock.json     # NPM lock file
├── tsconfig.json         # TypeScript config
├── schema.json           # JSON-LD structured data
├── zenodo.json           # Zenodo metadata
├── heartbeat.txt         # Auto-updated daily
├── mkdocs.yml            # ReadTheDocs config
├── .readthedocs.yaml     # ReadTheDocs build config
├── docs/
│   ├── index.md          # Documentation
│   └── requirements.txt  # Docs dependencies
├── dataset/
│   └── serp_benchmarks.csv
├── kaggle/
│   └── notebook.ipynb
├── .github/workflows/
│   ├── heartbeat.yml     # Auto-commit daily
│   └── npm-publish.yml   # Auto-publish to NPM
├── README.md
└── LICENSE
```

## SERP Signal Categories

| Signal | Description |
|--------|-------------|
| Search Intent | Informational, Commercial, Transactional, Navigational |
| Competitor Insights | Themes, structures, optimization patterns |
| Content Gaps | Missing topics, questions, entities, subtopics |
| SERP Features | AI Overviews, Featured Snippets, PAA, videos, local |
| Topical Coverage | Depth vs top-ranking competitors |
| Ranking Patterns | Content length, headings, entities, schema |

## Intent Distribution

| Intent | Frequency |
|--------|-----------|
| Informational | 48% |
| Commercial | 31% |
| Transactional | 14% |
| Navigational | 7% |

## Parameters

| Parameter | Type | Options | Description |
|-----------|------|---------|-------------|
| keyword | string | any keyword | Target keyword to analyze |
| intent | string | informational, commercial, transactional, navigational | Search intent type |

## Output Fields

| Field | Description |
|-------|-------------|
| keyword | Target keyword analyzed |
| dominant_intent | Classified search intent |
| ai_overview | AI Overview presence percentage |
| avg_word_count | Average word count of top pages |
| paa_count | Number of People Also Ask questions |
| content_gap_score | Content gap score (0–100) |
| top_format | Top content format detected |
| serp_feature_score | Overall SERP feature score (0–100) |

## Keywords

SERP Analysis · Search Intent Classification · Content Gap Detection · SERP Features · Competitor Analysis · SERPChecker · BHMarketer · AI Visibility · SEO Tool

## Links

| Platform | URL |
|----------|-----|
| Website | https://serpchecker.fyi |
| GitHub | https://github.com/serp-fyi/SERP-Checker-Tool |
| GitHub Pages | https://serp-fyi.github.io/SERP-Checker-Tool/ |
| NPM | https://npmjs.com/package/@serp-fyi/serp-checker-tool |
| Hugging Face | https://huggingface.co/datasets/serp-fyi/serp-checker-benchmarks |
| Kaggle | https://kaggle.com/datasets/serpfyi/serp-checker-benchmarks |
| Zenodo | https://zenodo.org/records/XXXXXXX |
| Docs | https://serp-checker-tool.readthedocs.io |

## About SERPChecker.fyi

SERPChecker.fyi analyzes search results in real time — uncovering intent signals, SERP features, content gaps, and competitor patterns that drive rankings. Powered by BHMarketer.

## License

MIT — [SERPChecker.fyi](https://serpchecker.fyi)
