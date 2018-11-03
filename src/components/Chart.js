import Card from '../components/Card';
import './Chart.css';

const data = require('../data/vacancies.json');

const dataComponent = data.map((item, i) => {
})
const Chart = () => {
  return (
    <section className="chart">
      <h1 className="chart__title">Chart</h1>
    {/* <Pagination /> */}

    {dataComponent}
    </section>
  );
}

export default Chart;
