#!/usr/bin/env node

/**
 * Aion CLI - Sovereign Local Agent & Voicemail Hub
 * Copyright (c) Bastion Fold LLC. All rights reserved.
 */

console.log("Aion 0.1.0 — Sovereign Local Agent & Voicemail Hub");
console.log("Powered by Bastion Fold LLC (https://github.com/BastionFold/aion)");
console.log("");
console.log("Usage: aion [command] [options]");
console.log("");
console.log("Commands:");
console.log("  start               Launch interactive agent session");
console.log("  voicemail           Start local voice audio capture & processing");
console.log("  boardroom           Spin up local multi-model deliberation");
console.log("  hardware            Detect local compute/RAM tiers");
console.log("  status              Check Ollama connection and active models");
console.log("");
console.log("Options:");
console.log("  -m, --model <name>  Specify model override (default: local Ollama tier)");
console.log("  -v, --version       Display version");
console.log("  -h, --help          Show this help message");
