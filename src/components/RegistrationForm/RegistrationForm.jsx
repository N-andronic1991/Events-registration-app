import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './RegistrationForm.module.css';
import { createEventUser } from '../../services/api';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const RegistrationSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required'),
  email: yup
    .string()
    .email('You must enter a valid email address')
    .required('This field is required'),
  dateOfBirth: yup
    .date()
    .typeError('Invalid date')
    .required('This field is required'),
  heardFrom: yup.string(),
});

const RegistrationForm = ({ eventId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(RegistrationSchema),
  });
  const onSubmit = async formData => {
    console.log('Fotm data:', formData);
    try {
      const { data } = await createEventUser(formData, eventId);
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }

    reset();
  };
  return (
    <form className={css.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={css.title}>Event Registration</h2>
      <label>
        Full Name
        <input
          className={css.inputText}
          type="text"
          placeholder="Full Name"
          {...register('fullName')}
        />
      </label>
      <div className={css.errorMessage}>
        {errors.fullName && (
          <span className={css.error}>{errors.fullName.message}</span>
        )}
      </div>
      <label>
        Email
        <input
          className={css.inputText}
          type="email"
          placeholder="Email"
          {...register('email')}
        />
      </label>
      <div className={css.errorMessage}>
        {errors.email && (
          <span className={css.error}>{errors.email.message}</span>
        )}
      </div>
      <label>
        Date of birth
        <input
          className={css.inputText}
          type="date"
          {...register('dateOfBirth')}
        />
      </label>
      <div className={css.errorMessage}>
        {errors.dateOfBirth && (
          <span className={css.error}>{errors.dateOfBirth.message}</span>
        )}
      </div>
      {/* <Controller
          name="dateOfBirth"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <div className={css.datePickerWrapper}>
              <label>
                Date of birth
                <DatePicker
                  placeholderText="dd.mm.yyyy"
                  onChange={date => field.onChange(date)}
                  selected={field.value}
                  dateFormat="dd.MM.yyyy"
                  className={css.customDatepicker}
                  calendarClassName={css.customCalendar}
                />
              </label>
              {errors.dateOfBirth && (
                <p className={css.error}>{errors.dateOfBirth.message}</p>
              )}
            </div>
          )}
        /> */}
      <p>Where did you hear about this event:</p>
      <ul className={css.radio}>
        <li className={css.radioItem}>
          <input
            {...register('heardFrom')}
            type="radio"
            value="social media"
            id="field-socials"
          />
          <label htmlFor="field-socials"> social media</label>
        </li>
        <li className={css.radioItem}>
          <input
            {...register('heardFrom')}
            type="radio"
            value="friends"
            id="field-friends"
          />
          <label htmlFor="field-friends">friends</label>
        </li>
        <li className={css.radioItem}>
          <input
            {...register('heardFrom')}
            type="radio"
            value="myself"
            id="field-myself"
          />
          <label htmlFor="field-myself">found myself</label>
        </li>
      </ul>
      <button type="submit">Register</button>
    </form>
  );
};
export default RegistrationForm;
