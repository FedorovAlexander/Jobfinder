import React, {Component} from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import FormButton from '../FormButton/FormButton';
import SelectSingle from '../Select/SelectSingle';
import '../EditVacancyForm/EditVacancyForm.css';
import {vacancies} from '../../data/vacancies'

class EditVacancyForm extends Component {
  constructor(props) {
    super()
    this.state = {
      id: props.id
    }
  }
  render() {
    return (

      <section className="edit-vacancy-form">
        <h1 className="edit-vacancy-form__title">Edit Vacancy</h1>
        <form>
          <InputWithLabel
            type="text"
            name="title"
            placeholder={vacancies[this.state.id].position}
            inputClass="input-with-label input-with-label--edit-vacancy"
          />
          <InputWithLabel
            type="text"
            name="company"
            placeholder={vacancies[this.state.id].companyName}
            inputClass="input-with-label input-with-label--edit-vacancy"
          />
          <div className="edit-vacancy-form__options-block">
            <InputWithLabel
              type="text"
              name="salary"
              placeholder={"$"+vacancies[this.state.id].salary}
              inputClass="input-with-label input-with-label--edit-vacancy input-with-label--option"
            />
            <InputWithLabel
              type="text"
              name="Work Time"
              placeholder={ Math.floor(vacancies[this.state.id].minutes/60) + 'h ' + Math.floor(vacancies[this.state.id].minutes/60) + 'm'}
              inputClass="input-with-label input-with-label--edit-vacancy input-with-label--option"
            />
            <InputWithLabel
              type="text"
              name="Road Time"
              placeholder={vacancies[this.state.id].roadTime + "m"}
              inputClass="input-with-label input-with-label--edit-vacancy input-with-label--option"
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
              text="Cancel" path="/chartPage"
            />
          </div>
        </form>
      </section>
    )
  }
}

export default EditVacancyForm;
