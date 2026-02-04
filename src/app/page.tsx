import Header from "../components/Header";
import Footer from "../components/Footer";

import HeroPrimary from "../sections/HeroPrimary";
import ValueProposition from "../sections/ValueProposition";
import CapabilitiesServices from "../sections/CapabilitiesServices";
import ProcessMethod from "../sections/ProcessMethod";
import ProofPortfolio from "../sections/ProofPortfolio";
import DifferentiatorsPhilosophy from "../sections/DifferentiatorsPhilosophy";
import CTAPrimary from "../sections/CTAPrimary";
import FooterContextual from "../sections/FooterContextual";

export default function Home() {
  return (
    <>
      <Header />

      <HeroPrimary mode="authority" />
      <ValueProposition mode="clarity" />
      <CapabilitiesServices mode="confidence" />
      <ProcessMethod mode="trust" />
      <ProofPortfolio mode="credibility" />
      <DifferentiatorsPhilosophy mode="alignment" />
      <CTAPrimary mode="conversion" />
      <FooterContextual mode="closure" />

      <Footer />
    </>
  );
}
