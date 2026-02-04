type SectionProps = { mode: string };

export default function ProcessMethod({ mode }: SectionProps) {
  return (
    <section data-section="process-method" data-mode={mode}>
      <header>
        <h2>ProcessMethod</h2>
      </header>
    </section>
  );
}
