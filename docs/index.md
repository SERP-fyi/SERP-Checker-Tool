# SERP Checker Tool — Documentation

**Version:** 1.0.0  
**Author:** SERPChecker.fyi powered by BHMarketer  
**Repository:** https://github.com/serp-fyi/SERP-Checker-Tool  
**Website:** https://serpchecker.fyi  

---

## Overview

SERP Checker Tool analyzes search results in real time — uncovering intent signals, SERP features, content gaps, and competitor patterns that drive rankings.

---

## Installation

### Node.js
```bash
npm install @serp-fyi/serp-checker-tool
```

### Python
```bash
pip install serp-fyi-checker
```

---

## Usage

### Node.js CLI
```bash
npx serp-checker "best seo analysis tool 2026" informational
```

### Python CLI
```bash
python -m checker "best seo analysis tool 2026" informational
```

---

## Six SERP Signals That Drive Rankings

| Signal | Description |
|--------|-------------|
| 01 Search Intent | Informational, Commercial, Transactional, Navigational |
| 02 Competitor Insights | Themes, structures, and optimization patterns |
| 03 Content Gaps | Missing topics, questions, entities, subtopics |
| 04 SERP Features | AI Overviews, Featured Snippets, PAA, videos, local |
| 05 Topical Coverage | Depth vs top-ranking competitors |
| 06 Ranking Patterns | Content length, headings, entities, schema |

---

## Parameters

| Parameter | Type | Options | Description |
|-----------|------|---------|-------------|
| keyword | string | any keyword | Target keyword to analyze |
| intent | string | informational, commercial, transactional, navigational | Search intent type |

---

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

---

## About SERPChecker.fyi

SERPChecker.fyi analyzes search results in real time — uncovering intent signals, SERP features, content gaps, and competitor patterns that drive rankings. Powered by BHMarketer.

| Platform | URL |
|----------|-----|
| Website | https://serpchecker.fyi |
| GitHub | https://github.com/serp-fyi |
| NPM | https://npmjs.com/package/@serp-fyi/serp-checker-tool |
| Hugging Face | https://huggingface.co/datasets/serp-fyi/serp-checker-benchmarks |
| Kaggle | https://kaggle.com/datasets/serpfyi/serp-checker-benchmarks |

---

## License

MIT — [SERPChecker.fyi](https://serpchecker.fyi)
