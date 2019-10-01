import { Field } from "formik";

function Checkbox(props) {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <div className={`form-check ${props.className}`}>
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              {...props}
              checked={field.value.includes(props.value)}
              onChange={() => {
                if (field.value.includes(props.value)) {
                  const nextValue = field.value.filter(
                    value => value !== props.value
                  );
                  form.setFieldValue(props.name, nextValue);
                } else {
                  const nextValue = field.value.concat(props.value);
                  form.setFieldValue(props.name, nextValue);
                }
              }}
            />
            {props.value}
            <span className="form-check-sign">
              <span className="check"></span>
            </span>
          </label>
        </div>
      )}
    </Field>
  );
}

export default Checkbox;
