type SectionProps = { mode: string };

export default function ProofPortfolio({ mode }: SectionProps) {
  return (
    <section data-section="proof-portfolio" data-mode={mode}>
      <header>
        <h2>ProofPortfolio</h2>
      </header>
    </section>
  );
}
