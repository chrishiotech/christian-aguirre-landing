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
			<HeroPrimary />
			<ValueProposition />
			<CapabilitiesServices />
			<ProcessMethod />
			<ProofPortfolio />
			<DifferentiatorsPhilosophy />
			<CTAPrimary />
			<FooterContextual />
		</>
	);
}
