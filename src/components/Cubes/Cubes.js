import CubeItem from './CubeItem';
import './Cubes.css'

const cubes = (props) => {
  const createKey = () => Math.random();
  console.log(props.items.data.types);
  const leadersArr = props.items.data.types;
  return (
    <div className="cubes-container">
      {/* Change each item in the array to an ExpenseItem JSX Component */}
      {leadersArr.map((el) => (
        <CubeItem
          key={createKey()}
          cubeTitle={el.name.text}
          titleSize={el.name.type}
          descTitle={el.description[0].text}
          descText={el.description[1].text}
          imageUrl ={el.exemplar_image.url}
          imageDimensions={el.exemplar_image.dimensions}
          colour={el.colour}
          />
        ))};
    </div>
  );
};

export default cubes;