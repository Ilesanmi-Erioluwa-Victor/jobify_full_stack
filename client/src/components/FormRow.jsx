
const FormRow = () => {
  return (
    <div className='form-row'>
      <label
        htmlFor='name'
        className='form-label'
      >
        name
      </label>
      <input
        type='text'
        id='name'
        name='name'
        className='form-input'
        defaultValue={'Erioluwa'}
        required
      />
    </div>
  );
}

export default FormRow
