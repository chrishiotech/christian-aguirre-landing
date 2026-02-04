type SectionProps = { mode: string };

export default function CapabilitiesServices({ mode }: SectionProps) {
  return (
    <section data-section="capabilities-services" data-mode={mode}>
      <header>
        <h2>CapabilitiesServices</h2>
      </header>
    </section>
  );
}
