import FormGroup from "./Bootstrap/FormGroup";

const Form = ({ FormData, onChange }) => {
  const Desc = {
    FullName: ["text", "Full Name", "This is your full name."],
    FirstName: [
      "text",
      "First Name",
      "Please enter your first name or given name.",
    ],
    LastName: ["text", "Last Name", "Please enter your last name or surname."],
    Thumbnail: [
      "text",
      "Your Photo",
      "Please upload your photo in a CDN (Ex. Imgur) and paste the Direct Image URL here.",
    ],
    URL: [
      "text",
      "Website Link",
      "Please enter the URL of website, where this page is going to be hosted.",
    ],
    Description: ["text", "About You", "Write something nice about you."],
    KeyWords: [
      "text",
      "Keywords",
      "If someone wants to search for you, what keywords they should use.",
    ],
    Address: ["text", "Where are you?", "Type in your full address."],
    Phone: ["tel", "Phone Number", "Please enter your phone number."],
    Email: ["email", "Email Address", "Tell us your primary email"],
  };
  return (
    <div className="Form">
      {Object.keys(FormData).map((fd) => (
        <FormGroup
          key={fd}
          Label={Desc[fd][1]}
          Type={Desc[fd][0]}
          Desc={Desc[fd][2]}
          Id={fd}
          Value={FormData[fd]}
          Placeholder={`Enter value for ${fd}`}
          onChange={fd === "FullName" ? ()=>{} : onChange}
        />
      ))}
    </div>
  );
};

export default Form;
