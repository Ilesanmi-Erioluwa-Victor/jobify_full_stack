const SubmitBtn = ({ formBtn }) => {
  return (
    <button
      type='submit'
      className={`btn btn-block ${formBtn && 'form-btn'}`}
    ></button>
  );
};

export default SubmitBtn;
