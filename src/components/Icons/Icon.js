import './Icon.css';
import picture from '../../images/climbing-goals.png';

const Icon = () => {
  return (
    <div id="icon-hero__container">
      <img className='icon__image'
       src={picture}
       alt="Climbing Icon" 
       />
       <h1 id="icon-hero__title">The 9 Leader Types</h1>
    </div>
  )
}

export default Icon;