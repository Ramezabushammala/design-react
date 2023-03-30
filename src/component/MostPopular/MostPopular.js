import "./MostPopular.css";
import { Card } from "../export";
import popular_01 from '../../assets/images/popular-01.jpg'
import popular_02 from '../../assets/images/popular-02.jpg'
import popular_03 from '../../assets/images/popular-03.jpg'
import popular_04 from '../../assets/images/popular-04.jpg'
import popular_05 from '../../assets/images/popular-05.jpg'
import popular_06 from '../../assets/images/popular-06.jpg'
import popular_07 from '../../assets/images/popular-07.jpg'
import popular_08 from '../../assets/images/popular-08.jpg'
const MostPopular = () => {
  return (
    <>
      <div className="section-wrapper">
        <div className="section-header">
          <h4>
            Most Popular <span className="h42">RightNow</span>
          </h4>
        </div>
        <div className="most-popular-items">
          <Card  image={popular_01} title="Fortnite" rate="3.8" downlod="2.3" />
          <Card  image={popular_02} title="PupG" rate="2.8" downlod="2.4" />
          <Card  image={popular_03} title="Dota2" rate="2.3" downlod="3.5" />
          <Card  image={popular_04} title="CS-Go" rate="1.5" downlod="7.2" />
          <Card  image={popular_05} title="BtlField_1" rate="5.2" downlod="44.2" />
          <Card  image={popular_06} title="BtlField_2" rate="6.8" downlod="10.4" />
          <Card  image={popular_07} title="BtlField_3" rate="7.5" downlod="72.1" />
          <Card  image={popular_08} title="BtlField_4" rate="9.5" downlod="33.2" />
        </div>
      </div>
    </>
  );
};

export default MostPopular;
