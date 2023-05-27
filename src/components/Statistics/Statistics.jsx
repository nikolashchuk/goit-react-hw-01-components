import PropTypes from 'prop-types';
import { Item, List, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(item => {
          return (
            <Item key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </Item>
          );
        })}
      </List>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
