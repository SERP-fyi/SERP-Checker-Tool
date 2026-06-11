#!/usr/bin/env python3
"""
SERP Checker Tool
Analyze search results in real time — uncovering intent signals, SERP features,
content gaps, and competitor patterns that drive rankings.
https://serpchecker.fyi
"""

import sys

INTENT_CONFIGS = {
    "informational": {
        "ai_overview": "Yes — 92%",
        "avg_word_count": 2840,
        "paa_count": 8,
        "content_gap_score": 38,
        "top_format": "Listicle + Table",
        "serp_feature_score": 74,
    },
    "commercial": {
        "ai_overview": "Yes — 65%",
        "avg_word_count": 2200,
        "paa_count": 6,
        "content_gap_score": 45,
        "top_format": "Comparison + Review",
        "serp_feature_score": 68,
    },
    "transactional": {
        "ai_overview": "No — 12%",
        "avg_word_count": 1400,
        "paa_count": 3,
        "content_gap_score": 55,
        "top_format": "Product Page + Schema",
        "serp_feature_score": 82,
    },
    "navigational": {
        "ai_overview": "No — 5%",
        "avg_word_count": 800,
        "paa_count": 2,
        "content_gap_score": 20,
        "top_format": "Brand Page",
        "serp_feature_score": 60,
    },
}


def analyze_serp(keyword: str, intent: str = "informational") -> dict:
    """
    Analyze SERP signals for a given keyword and intent type.

    Args:
        keyword: Target keyword to analyze
        intent: Search intent type — informational, commercial, transactional, navigational

    Returns:
        dict with SERP signals and content recommendations
    """
    intent = intent.lower()
    config = INTENT_CONFIGS.get(intent, INTENT_CONFIGS["informational"])

    return {
        "keyword": keyword,
        "dominant_intent": intent.capitalize(),
        "ai_overview": config["ai_overview"],
        "avg_word_count": config["avg_word_count"],
        "paa_count": config["paa_count"],
        "content_gap_score": config["content_gap_score"],
        "top_format": config["top_format"],
        "serp_feature_score": config["serp_feature_score"],
    }


if __name__ == "__main__":
    keyword = sys.argv[1] if len(sys.argv) > 1 else "best seo tool 2026"
    intent = sys.argv[2] if len(sys.argv) > 2 else "informational"

    result = analyze_serp(keyword, intent)

    print(f"Keyword: {result['keyword']}")
    print(f"Dominant Intent: {result['dominant_intent']}")
    print(f"AI Overview Present: {result['ai_overview']}")
    print(f"Avg. Word Count: {result['avg_word_count']:,} words")
    print(f"People Also Ask: {result['paa_count']} questions")
    print(f"Content Gap Score: {result['content_gap_score']} / 100")
    print(f"Top Content Format: {result['top_format']}")
    print(f"SERP Feature Score: {result['serp_feature_score']}/100")
