type SectionProps = { mode: string };

export default function HeroPrimary({ mode }: SectionProps) {
  return (
    <section data-section="hero-primary" data-mode={mode}>
      <header>
        <h1>HeroPrimary</h1>
      </header>
    </section>
  );
}
