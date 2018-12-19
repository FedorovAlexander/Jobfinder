import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import FormButton from '../FormButton/FormButton';
import SelectSingle from '../Select/SelectSingle';
import '../NewVacancyForm/NewVacancyForm.css';

const NewVacancyForm = () => {
  return (

    <section className="new-vacancy-form">
      <h1 className="new-vacancy-form__title">New Vacancy</h1>
      <form>
        <InputWithLabel
          type="text"
          name="title"
          placeholder="Title"
          inputClass="input-with-label input-with-label--new-vacancy"
        />
        <InputWithLabel
          type="text"
          name="company"
          placeholder="Company" inputClass="input-with-label input-with-label--new-vacancy"
        />
        <div className="new-vacancy-form__options-block">
          <InputWithLabel
            type="text"
            name="salary"
            placeholder="Salary" inputClass="input-with-label input-with-label--new-vacancy input-with-label--option"
          />
          <InputWithLabel
            type="text"
            name="Work Time"
            placeholder="Work Time" inputClass="input-with-label input-with-label--new-vacancy input-with-label--option"
          />
          <InputWithLabel
            type="text"
            name="Road Time"
            placeholder="Road Time" inputClass="input-with-label input-with-label--new-vacancy input-with-label--option"
          />
          <SelectSingle />
        </div>
        <div className="new-vacancy-form__checkbox-block">
          <CustomCheckbox
            blockClass="new-vacancy-form__checkbox"
            labelClass="checkbox-label checkbox-label--log-reg"
            labelText="Interesting"
            inputClass="checkbox-input"
            checkmarkClass="checkmark checkmark--vac"
            inputId="interest"
           />
          <CustomCheckbox
            blockClass="new-vacancy-form__checkbox"
            labelClass="checkbox-label checkbox-label--log-reg"
            labelText="Requires Education"
            inputClass="checkbox-input"
            checkmarkClass="checkmark checkmark--vac"
            inputId="education"
           />

        </div>
        <div className="new-vacancy-form__comments-block">
          <h2 className="new-vacancy-form__comments-title">Comments</h2>
        </div>

        <div className="new-vacancy-form__buttons-block">
          <FormButton
            buttonClass="new-vacancy-form__button new-vacancy-form__button--submit"
            text="Submit" path={process.env.PUBLIC_URL + "/chartPage"}
          />

          <FormButton
            buttonClass="new-vacancy-form__button new-vacancy-form__button--cancel"
            text="Cancel" path={process.env.PUBLIC_URL + "/chartPage"}
          />
        </div>
      </form>

    </section>

  )
}

export default NewVacancyForm;
