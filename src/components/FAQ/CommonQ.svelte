<script lang="ts">
const FAQs = [
{
    question: "I do not have any previous experience with particle accelerators. Can I participate?",
    answer:"Yes. Prior experience in accelerator physics is not required. ELIAC is designed as a learning-driven challenge where teams combine different skills such as physics, engineering, programming, and simulation. Participants are encouraged to learn throughout the competition and collaborate with teammates and faculty advisors."
},
{
    question: "Approximately how much time commitment is required?",
    answer:"The time commitment depends on the scope and ambition of each team's project. Most teams typically work on the project alongside their studies during the academic year. On average, participants may dedicate a few hours per week during design phases, with more intensive work periods close to submission deadlines."
},
{
    question: "Is there a cost to participate?",
    answer:"Participation in ELIAC itself does not require a mandatory registration fee. However, teams are responsible for any costs associated with software licenses, hardware prototypes, or travel to the final event if they decide to attend in person."
},
{
    question: "Can teams from different universities or countries participate?",
    answer:"Yes. Teams can include members from multiple universities and even from different countries. In that case, the team must designate a **host university** and a **Faculty Advisor** affiliated with that institution."
},
{
    question: "Can I participate individually?",
    answer:"ELIAC is designed as a **team-based challenge**, since the development of a LINAC requires expertise from multiple disciplines. While individual participation is not recommended, very small teams may be accepted if they can demonstrate the ability to cover the required technical areas."
},
{
    question: "What is the official language of the competition?",
    answer:"The official language of the competition is **English**. All reports, presentations, and technical documentation must be submitted in English to ensure accessibility for the international jury and participants."
},
{
    question: "How are materials submitted?",
    answer:"Teams will submit their deliverables through the official ELIAC online submission platform. Materials may include technical reports, simulation results, presentations, posters, and supporting documentation according to the deadlines defined in the competition timeline."
},
{
    question: "Do I need specific simulation software?",
    answer:"Simulation is an essential part of the competition, but teams are free to choose the software they prefer. Both open-source and commercial tools are accepted, as long as the results can be properly validated and documented."
}
];

  let activeIndex: number | null = null;

  function toggle(index: number) {
    activeIndex = activeIndex === index ? null : index;
  }
</script>

<div class="contenedor faq-container">
  {#each FAQs as item, index}
    <article class="faq-card" class:active={activeIndex === index}>
      
      <button 
        class="faq-header" 
        aria-expanded={activeIndex === index} 
        on:click={() => toggle(index)}
      >
        <h4 class="faq-question">{item.question}</h4>
        
        <span class="btn btn-light btn-icon faq-btn-override">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </span>
      </button>
      
      <div class="faq-body">
        <div class="faq-body-inner">
          <p class="faq-answer">{item.answer}</p>
        </div>
      </div>
      
    </article>
  {/each}
</div>

<style>
  /* CONTENEDOR PRINCIPAL */
  .faq-container {
    display: flex;
    flex-direction: column;
    gap: 1rem; 
  }

  /* CÁPSULAS*/
  .faq-card {
    background-color: var(--c-slate); 
    border-radius: 3rem;
    overflow: hidden;
    transition: border-radius 0.3s ease;
  }
  
  /* Cuando se abre la tarjeta, quitamos el 9999px para que no se deforme como un huevo gigante */
  .active.faq-card {
    border-radius: 3rem; 
  }

  /* BOTÓN QUE ENVUELVE LA PREGUNTA */
  .faq-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
  }

  /* TEXTO DE LA PREGUNTA */
  .faq-question {
    font-family: var(--ff-display); 
    font-size: var(--fs-h4);        
    font-weight: 500;
    color: var(--c-white);          
    margin: 0;
    transition: color 0.2s ease;
  }

  .faq-header:hover .faq-question {
    color: var(--c-accent);
  }

  /* EL CÍRCULO DEL ICONO */
  .faq-btn-override {
    /*.btn tiene "padding: 10px 20px" (ovalado) */
    padding: 0;
    width: 3.5rem;
    height: 3.5rem;
    flex-shrink: 0;
  }
  
  .faq-header svg {
    transition: transform 0.3s ease;
  }

  /*RESPUESTA */
  .faq-body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
  }

  .faq-body-inner {
    overflow: hidden;
  }

  .faq-answer {
    font-family: var(--ff-body);
    font-size: var(--fs-body);
    font-weight: 500;
    color: var(--c-accent);
    margin: 0;
    padding: 0 2rem 2rem 2rem;
  }

  /* ESTADOS ACTIVOS (AL HACER CLIC) */
  .active .faq-body {
    grid-template-rows: 1fr;
  }

  .active .faq-question {
    color: var(--c-accent); /* Mantiene el amarillo al estar abierto */
  }

  .active .faq-header svg {
    transform: rotate(180deg);
  }
  
  .active .faq-btn-override {
    background-color: var(--c-accent); /* El círculo se pone amarillo al abrir */
  }
</style>