/**
 * Type definitions for claude-monitor state file
 * Source: https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor/blob/main/STATE_FILE.md
 */

export interface ClaudeMonitorState {
  messages: UsageMetric;
  tokens: UsageMetric;
  cost: UsageMetric;
  reset: ResetInfo;
  burnRate: BurnRate;
  lastUpdate: string; // ISO 8601 timestamp
}

export interface UsageMetric {
  used: number;
  limit: number;
  percent: number;
}

export interface ResetInfo {
  timestamp: string; // ISO 8601 UTC timestamp
  secondsRemaining: number;
  formattedTime: string; // "HH:MM AM/PM"
}

export interface BurnRate {
  tokens: number; // tokens per minute
  messages: number; // currently always 0
}
