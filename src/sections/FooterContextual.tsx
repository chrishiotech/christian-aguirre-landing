type SectionProps = { mode: string };

export default function FooterContextual({ mode }: SectionProps) {
  return (
    <section data-section="footer-contextual" data-mode={mode}>
      <header>
        <h2>FooterContextual</h2>
      </header>
    </section>
  );
}
