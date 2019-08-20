function submitForm(city, country) {
  return {
    type: 'SUBMIT_FORM',
    city,
    country
  };
};

export {
  submitForm
};

