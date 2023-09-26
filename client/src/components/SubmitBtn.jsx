const SubmitBtn = ({ formBtn }) => {
  return (
    <button
      type='submit'
      className={`btn btn-block ${formBtn && 'form-btn'}`}
      disabled={isSubmitting}
      >
          {isSubmittitng ? "submitting" : "submit"}
    </button>
  );
};

export default SubmitBtn;
