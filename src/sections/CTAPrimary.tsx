type SectionProps = { mode: string };

export default function CTAPrimary({ mode }: SectionProps) {
  return (
    <section data-section="cta-primary" data-mode={mode}>
      <header>
        <h2>CTAPrimary</h2>
      </header>
    </section>
  );
}
