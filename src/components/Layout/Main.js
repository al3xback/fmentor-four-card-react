import supervisorImage from '../../assets/images/icons/supervisor.svg';
import teamBuilderImage from '../../assets/images/icons/team-builder.svg';
import karmaImage from '../../assets/images/icons/karma.svg';
import calculatorImage from '../../assets/images/icons/supervisor.svg';

const Main = () => {
	return (
		<main>
			<div className="container">
				<section className="section">
					<div className="section__head">
						<h2 className="section__title">
							Reliable, efficient delivery
						</h2>
						<p className="section__subtitle">
							<strong>Powered by Technology</strong>
						</p>
						<p className="section__desc">
							Our Artificial Intelligence powered tools use
							millions of project data points to ensure that your
							project is successful
						</p>
					</div>
					<div className="section__body">
						<div className="card__list">
							<div className="card__list-block">
								<div className="card__list-item card__list-item--supervisor">
									<h3 className="card__title">Supervisor</h3>
									<p className="card__desc">
										Monitors activity to identify project
										roadblocks
									</p>
									<div className="card__image">
										<img
											width="64"
											height="64"
											src={supervisorImage}
											alt=""
										/>
									</div>
								</div>
							</div>
							<div className="card__list-block">
								<div className="card__list-item card__list-item--team-builder">
									<h3 className="card__title">
										Team Builder
									</h3>
									<p className="card__desc">
										Scans our talent network to create the
										optimal team for your project
									</p>
									<div className="card__image">
										<img
											width="64"
											height="64"
											src={teamBuilderImage}
											alt=""
										/>
									</div>
								</div>
								<div className="card__list-item card__list-item--karma">
									<h3 className="card__title">Karma</h3>
									<p className="card__desc">
										Regularly evaluates our talent to ensure
										quality
									</p>
									<div className="card__image">
										<img
											width="64"
											height="64"
											src={karmaImage}
											alt=""
										/>
									</div>
								</div>
							</div>
							<div className="card__list-block">
								<div className="card__list-item card__list-item--calculator">
									<h3 className="card__title">Calculator</h3>
									<p className="card__desc">
										Uses data from past projects to provide
										better delivery estimates
									</p>
									<div className="card__image">
										<img
											width="64"
											height="64"
											src={calculatorImage}
											alt=""
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Main;
