<script>
  let isOpen = false;

  const navLinks = [
    { label: 'Home',          href: '/'              },
    { label: 'The Challenge', href: '/the-challenge'  },
    { label: 'Resources',     href: '/resources'      },
    { label: 'FAQs',          href: '/faqs'           },
  ];

  function open()  { isOpen = true;  document.body.style.overflow = 'hidden'; }
  function close() { isOpen = false; document.body.style.overflow = ''; }

  function handleKey(e) {
    if (e.key === 'Escape' && isOpen) close();
  }
</script>

<svelte:window on:keydown={handleKey} />

<!-- ── Hamburger ─────────────────────────────── -->
<button
  class="nav-burger"
  on:click={open}
  aria-label="Abrir menú"
  aria-expanded={isOpen}
  aria-controls="mobile-menu"
>
  <span class="burger-line"></span>
  <span class="burger-line"></span>
  <span class="burger-line"></span>
</button>

<!-- ── Overlay ───────────────────────────────── -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="mobile-backdrop"
  class:is-open={isOpen}
  on:click={close}
  aria-hidden="true"
></div>

<div
  id="mobile-menu"
  class="mobile-menu"
  class:is-open={isOpen}
  role="dialog"
  aria-modal="true"
  aria-hidden={!isOpen}
  aria-label="Navegación móvil"
>
  <!-- Top bar -->
  <div class="mobile-menu__bar">
    <a class="nav-logo" href="/" aria-label="ELIAC inicio">
      <img src="/LogoEliac.svg" alt="ELIAC logo" width="120" height="40" />
    </a>
    <button class="nav-close" on:click={close} aria-label="Cerrar menú">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <line x1="4"  y1="4"  x2="24" y2="24" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="24" y1="4"  x2="4"  y2="24" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    </button>
  </div>

  <!-- Nav links -->
  <nav class="mobile-menu__nav" aria-label="Menú principal móvil">
    <ul>
      {#each navLinks as { label, href }}
        <li>
          <a class="mobile-nav-link link" {href} on:click={close}>
            {label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <!-- Footer -->
  <footer class="mobile-menu__footer">
    <p class="text-muted">
      <strong>ELIAC</strong> – European Linear<br/>Accelerator Challenge
    </p>
    <p class="text-muted">
      Organised by&nbsp;<a class="link" href="https://innovaphysics.com" target="_blank" rel="noopener">Innova Physics</a>
    </p>
  </footer>
</div>

<style>
/* ── Hamburger ──────────────────────────────────── */
.nav-burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.burger-line {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--c-white);
  border-radius: 2px;
}

/* ── Overlay ────────────────────────────────────── */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: var(--c-dark);
  display: flex;
  flex-direction: column;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateX(100%);
  transition: opacity 0.35s ease, transform 0.35s ease, visibility 0s linear 0.35s;
}

.mobile-menu.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(0);
  transition: opacity 0.35s ease, transform 0.35s ease, visibility 0s linear 0s;
}

/* Top bar */
.mobile-menu__bar {
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: clamp(1.25rem, 4vw, 2rem);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  flex-shrink: 0;
}

.nav-logo img {
  height: 2rem;
  width: auto;
  display: block;
}

.nav-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
}

/* Centered nav links */
.mobile-menu__nav {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu__nav ul {
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.mobile-nav-link {
  font-family: var(--ff-display);
  font-size: clamp(1.75rem, 8vw, 2.5rem);
  font-weight: 500;
  line-height: 1;
}

/* Footer */
.mobile-menu__footer {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1.75rem clamp(1.25rem, 4vw, 2rem);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-menu__footer p {
  font-size: var(--fs-micro);
  line-height: 1.5;
}

/* Backdrop */
.mobile-backdrop {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.35s ease, visibility 0s linear 0.35s;
}

.mobile-backdrop.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transition: opacity 0.35s ease, visibility 0s linear 0s;
}

/* ── Breakpoint 390px ───────────────────────────── */
@media (max-width: 400px) {
  .nav-burger { display: flex; }
}
</style>
