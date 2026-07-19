/**
 * Plays a soft, elegant two-note chime using the Web Audio API.
 * No external audio files required.
 */
export function playSuccessChime() {
  try {
    const ctx = new AudioContext()

    // Master gain envelope
    const master = ctx.createGain()
    master.connect(ctx.destination)
    master.gain.setValueAtTime(0.25, ctx.currentTime)
    master.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8)

    // ── Note 1: E5 (warm sine) ──────────────────────────────────
    const osc1 = ctx.createOscillator()
    osc1.type = 'sine'
    osc1.frequency.setValueAtTime(659.25, ctx.currentTime) // E5
    osc1.connect(master)
    osc1.start(ctx.currentTime)
    osc1.stop(ctx.currentTime + 1.5)

    // ── Note 2: G5 (brighter, slightly delayed) ────────────────
    const osc2 = ctx.createOscillator()
    osc2.type = 'sine'
    osc2.frequency.setValueAtTime(783.99, ctx.currentTime + 0.14) // G5
    const gain2 = ctx.createGain()
    gain2.gain.setValueAtTime(0.18, ctx.currentTime + 0.14)
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8)
    osc2.connect(gain2)
    gain2.connect(master)
    osc2.start(ctx.currentTime + 0.14)
    osc2.stop(ctx.currentTime + 1.5)
  } catch {
    // Audio not available or blocked — silently fail
  }
}
