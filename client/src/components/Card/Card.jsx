import { Link } from 'react-router-dom';

const Card = ({ image, heading, subHeading, summary = '', link, styles }) => {
  return (
    <Link to={link}>
      <div style={{ background: '#1e272e', ...styles }} className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img className='w-full h-[200px] object-cover' src={image} alt={heading} />

        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{heading}</div>
          <div className='font-bold text-l mb-2'>{subHeading}</div>
          {summary ? <p className='text-base'>{summary}</p> : null}
        </div>
      </div>
    </Link>
  );
};

export default Card;
