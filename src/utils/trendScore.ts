/** Maps a 0–100 score to a fluid type size without per-topic overrides. */
export function trendFontSize(score: number): string {
  const bounded = Math.min(100, Math.max(0, score));
  return `clamp(1.1rem, ${0.6 + bounded * 0.055}vw + ${0.3 + bounded * 0.018}rem, ${1.25 + bounded * 0.065}rem)`;
}

export function trendWidth(score: number): string {
  return `${Math.min(100, Math.max(8, score))}%`;
}
