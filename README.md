# Aion (`@bastionfold/aion`)

**Sovereign Local AI Agent & Voicemail Hub**  
*Built by [Bastion Fold LLC](https://github.com/BastionFold)*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Aion is an autonomous agent CLI optimized for local-first intelligence. It combines localized speech-to-text (STT) voicemail workflows with multi-model deliberation running entirely on your local hardware via Ollama.

---

## Key Features

- **Local-First & Offline Capable**: Zero mandatory cloud dependency. Operates entirely with local models.
- **Voicemail Ingestion**: Ingests, transcribes, and reasons over voice audio inputs directly on your machine.
- **Hardware-Scaled Tiers**: Automatically measures local CPU/RAM capability and scales model parameter sizing (`hardware.py` tiers).
- **Multi-Member Boardroom**: Spawns multiple local models to debate, verify, and reach consensus on complex tasks.
- **Cognitive Reframing**: Built-in Refract protocols to explore alternative perspectives and counter-arguments.

---

## Quick Start

### Installation

```bash
npm install -g @bastionfold/aion
```

*Or run via npx:*
```bash
npx @bastionfold/aion start
```

### Requirements
- **Node.js** >= 18.0.0
- **Ollama** running locally (`ollama serve`) with your preferred model (e.g., `qwen2.5:3b`, `qwen2.5-coder:7b`, or `llama3.1`)

### Basic Commands

```bash
# Check local compute tier and detected hardware
aion hardware

# Launch interactive local agent session
aion start

# Start local voicemail pipeline
aion voicemail

# Run a local multi-model debate
aion boardroom
```

---

## Architecture & System Links

Aion is part of the **Bastion Fold** agent ecosystem:
- **Parent System**: [`BastionFold/aion-system`](https://github.com/BastionFold/aion-system)
- **Engine Core**: [`BastionFold/aion-proteus-hub`](https://github.com/BastionFold/aion-proteus-hub)
- **Cloud Boardroom Sibling**: [`BastionFold/proteus`](https://github.com/BastionFold/proteus)

---

## License

MIT © [Bastion Fold LLC](https://github.com/BastionFold) — Member Alexander Sorrell.
