type SectionProps = { mode: string };

export default function ValueProposition({ mode }: SectionProps) {
  return (
    <section data-section="value-proposition" data-mode={mode}>
      <header>
        <h2>ValueProposition</h2>
      </header>
    </section>
  );
}
