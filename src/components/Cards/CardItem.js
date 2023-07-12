import './CardItem.scss';

const CardItem = (props) => {
	const cardItemClasses = `card__list-item card__list-item--${props.id}`;

	return (
		<div className={cardItemClasses}>
			<h3 className="card__title">{props.title}</h3>
			<p className="card__desc">{props.desc}</p>
			<div className="card__image">
				<img width="64" height="64" src={props.imageUrl} alt="" />
			</div>
		</div>
	);
};

export default CardItem;
