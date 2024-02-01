import CardsList from '../Cards/CardsList';
import CardsSummary from '../Cards/CardsSummary';

import './Section.scss';

const Section = () => {
	return (
		<section className="section">
			<div className="section__head">
				<CardsSummary />
			</div>
			<div className="section__body">
				<CardsList />
			</div>
		</section>
	);
};

export default Section;
