import CardItem from './CardItem';

import './CardBlock.scss';

const CardBlock = (props) => {
	return (
		<div className="card__list-block">
			{props.items.map((item) => (
				<CardItem
					key={item.id}
					id={item.id}
					title={item.title}
					desc={item.desc}
					imageUrl={item.imageUrl}
				/>
			))}
		</div>
	);
};

export default CardBlock;
