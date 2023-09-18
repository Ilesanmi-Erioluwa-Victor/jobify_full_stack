

const FormRowSelect = ({name, labelText, list, defaultValue = ""}) => {
  return (
    <div className='form-row'>
      <label
        htmlFor='jobStatus'
        className='from-label'
      >
        job status
      </label>
      <select
        name='jobStatus'
        id='jobStatus'
        className='form-select'
        defaultValue={JOB_STATUS.PENDING}
      >
        {Object.values(JOB_STATUS).map((itemValue) => {
          return (
            <option
              key={itemValue}
              value={itemValue}
            >
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FormRowSelect

