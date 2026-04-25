# Project Dates Reference

This document contains the corrected dates for all projects. **DO NOT modify app/page.tsx until these dates are confirmed.**

## Date Format Guide
- **Display Format**: MMM - MMM YYYY (e.g., "Apr - May 2023") - Used in project cards
- **Gantt Format**: YYYY-MM-DD (e.g., "2023-04-06") - Used in Gantt chart

---

## Projects Requiring Date Updates

### 1. Star Wars Park (VR Experience)
- **Current Dates**: 
  - Display: "Jan - Jun 2024"
  - Gantt: "2024-01-01" to "2024-06-30"
- **Corrected Dates**:
  - Display: "Apr - May 2023"
  - Gantt Start: "2023-04-06"
  - Gantt End: "2023-05-08"
- **Notes**: Maintained Apr 17, 2026 reference

### 2. Asterix Maze (VR Experience)
- **Current Dates**:
  - Display: "Jan - Jun 2024"
  - Gantt: "2024-01-01" to "2024-06-30"
- **Corrected Dates**:
  - Display: "Dec 2022 - Jan 2023"
  - Gantt Start: "2022-12-01"
  - Gantt End: "2023-01-17"
- **Notes**: Maintained Apr 17, 2026 reference

### 3. Snake AI - DQL (Deep Q-Learning)
- **Current Dates**:
  - Display: "Mar - Apr 2026"
  - Gantt: "2026-03-01" to "2026-04-30"
- **Corrected Dates**:
  - Display: "Mar - Apr 2026"
  - Gantt Start: "2026-03-19"
  - Gantt End: "2026-04-17"
- **Notes**: 
  - OLD VERSION (non-working): Sep 28, 2025 to Dec 27, 2025
  - CURRENT VERSION: Mar 19, 2026 to Apr 17, 2026

### 4. Snake AI - Decision Tree
- **Current Dates**:
  - Display: "Mar - Apr 2026"
  - Gantt: "2026-03-01" to "2026-04-30"
- **Corrected Dates**:
  - Display: "Mar - Apr 2026"
  - Gantt Start: "2026-03-23"
  - Gantt End: "2026-04-01"

### 5. Walking AI - Genetic Algorithm
- **Current Dates**:
  - Display: "Oct - Dec 2025"
  - Gantt: "2025-10-01" to "2025-12-31"
- **Corrected Dates**:
  - Display: "Oct - Dec 2025"
  - Gantt Start: "2025-10-24"
  - Gantt End: "2025-12-24"

### 6. 2D Muscular Simulation
- **Current Dates**:
  - Display: "Oct - Dec 2025"
  - Gantt: "2025-10-01" to "2025-12-31"
- **Corrected Dates**:
  - Display: "Oct - Dec 2025"
  - Gantt Start: "2025-10-24"
  - Gantt End: "2025-12-24"

### 7. StarCraft 2 AI (VLM + RL)
- **Current Dates**:
  - Display: "Nov 2025 - Jan 2026"
  - Gantt: "2025-11-01" to "2026-01-31"
- **Corrected Dates**:
  - Display: "Nov 2025 - Jan 2026"
  - Gantt Start: "2025-11-24"
  - Gantt End: "2026-01-24"
- **Notes**: One month after Walking AI - GA and 2D Muscular Simulation

### 8. Snake AI - PPO (Proximal Policy Optimization)
- **Current Dates**:
  - Display: "Mar - Apr 2026"
  - Gantt: "2026-03-01" to "2026-04-30"
- **Corrected Dates**:
  - Display: "Mar - Apr 2026"
  - Gantt Start: "2026-03-23"
  - Gantt End: "2026-04-07"

---

## Projects with Correct Dates (No Changes Needed)

The following projects should already have correct dates. Verify before making any changes:

- Resilient Agentic AI (Jan - Feb 2025)
- Multimodal RAG Assistant (Nov 2024 - Jan 2025)
- ECE France AI Chatbot (Nov - Dec 2024)
- Speech Assistant with Voice Cloning (Aug - Oct 2024)
- Dungeon Game (Jul 2024)
- Text to Speech & Voice Cloning (Oct - Nov 2024)
- PPE Smart Contract (Jun - Jul 2024)
- Personal Portfolio (Apr 2026)
- Video Library Automation (Feb 2025)
- PDF Assistant (Dec 2024)
- Webhook Manager (Dec 2024)
- RFP Automation (Jan 2025)

---

## Summary of Changes

**Total Projects to Update**: 8
- 2 projects from 2022-2023 period (Star Wars, Asterix)
- 2 projects from Oct-Dec 2025 period (Walking AI, 2D Muscular)
- 1 project from Nov 2025-Jan 2026 period (StarCraft 2)
- 3 projects from Mar-Apr 2026 period (Snake AI DQL, DT, PPO)

**Important Notes**:
1. All display dates should use abbreviated month names (Jan, Feb, Mar, etc.)
2. Gantt chart dates must use ISO format (YYYY-MM-DD)
3. Snake AI DQL had an old non-working version - only the current version dates matter for the portfolio
4. Walking AI - GA and 2D Muscular Simulation have identical date ranges
5. StarCraft 2 started one month after Walking AI/2D Muscular ended

---

## Next Steps

1. Review this document and confirm all dates are correct
2. Once confirmed, update app/page.tsx with the corrected dates
3. Test locally with `npm run build`
4. Commit and push changes to the branch
