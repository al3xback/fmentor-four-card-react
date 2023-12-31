import CardList from '../Cards/CardList';

import './Section.scss';

const Section = () => {
	return (
		<section className="section">
			<div className="section__head">
				<h2 className="section__title">Reliable, efficient delivery</h2>
				<p className="section__subtitle">
					<strong>Powered by Technology</strong>
				</p>
				<p className="section__desc">
					Our Artificial Intelligence powered tools use millions of
					project data points to ensure that your project is
					successful
				</p>
			</div>
			<div className="section__body">
				<CardList />
			</div>
		</section>
	);
};

export default Section;
