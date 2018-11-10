import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import FormButton from '../FormButton/FormButton';
import SelectSingle from '../Select/SelectSingle';
import '../EditVacancyForm/EditVacancyForm.css';

const EditVacancyForm = () => {
  return (

    <section className="edit-vacancy-form">
      <h1 className="edit-vacancy-form__title">Edit Vacancy</h1>
      <form>
        <InputWithLabel
          type="text"
          name="title"
          placeholder="Title"
          inputClass="input-with-label input-with-label--edit-vacancy"
        />
        <InputWithLabel
          type="text"
          name="company"
          placeholder="Company" inputClass="input-with-label input-with-label--edit-vacancy"
        />
        <div className="edit-vacancy-form__options-block">
          <InputWithLabel
            type="text"
            name="salary"
            placeholder="Salary" inputClass="input-with-label input-with-label--edit-vacancy input-with-label--option"
          />
          <InputWithLabel
            type="text"
            name="Work Time"
            placeholder="Work Time" inputClass="input-with-label input-with-label--edit-vacancy input-with-label--option"
          />
          <InputWithLabel
            type="text"
            name="Road Time"
            placeholder="Road Time" inputClass="input-with-label input-with-label--edit-vacancy input-with-label--option"
          />
          <SelectSingle />
        </div>
        <div className="edit-vacancy-form__checkbox-block">
          <CustomCheckbox
            blockClass="edit-vacancy-form__checkbox"
            labelClass="checkbox-label checkbox-label--log-reg"
            labelText="Interesting"
            inputClass="checkbox-input"
            checkmarkClass="checkmark checkmark--vac"
            inputId="interest"
           />
          <CustomCheckbox
            blockClass="edit-vacancy-form__checkbox"
            labelClass="checkbox-label checkbox-label--log-reg"
            labelText="Requires Education"
            inputClass="checkbox-input"
            checkmarkClass="checkmark checkmark--vac"
            inputId="education"
           />

        </div>
        <div className="edit-vacancy-form__comments-block">
          <h3 className="edit-vacancy-form__comments">Add a Comment</h3>
          <textarea className="edit-vacancy-form__comments-field"></textarea>
        </div>

        <div className="edit-vacancy-form__buttons-block">
          <FormButton
            buttonClass="edit-vacancy-form__button edit-vacancy-form__button--submit"
            text="Edit" path="/chartPage"
          />

          <FormButton
            buttonClass="edit-vacancy-form__button edit-vacancy-form__button--cancel"
            text="Cancel" path=""
          />
        </div>
      </form>

    </section>

  )
}

export default EditVacancyForm;
