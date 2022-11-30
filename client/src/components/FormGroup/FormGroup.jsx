const FormGroup = ({ className, label, id, ...inputAttributes }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className='block mb-2 text-xl'>
        {label}
      </label>
      <input id={id} {...inputAttributes} className='rounded px-4 py-3 block w-full' />
    </div>
  );
};

export default FormGroup;
