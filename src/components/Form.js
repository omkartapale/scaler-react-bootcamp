import FormGroup from "./Bootstrap/FormGroup";

const Form = ({ FormData }) => {
  return (
    <div className="Form">
      {Object.keys(FormData).map(
        (id) => <FormGroup Id={id} Label={id}/>
      )}
    </div>
  );
};

export default Form;
