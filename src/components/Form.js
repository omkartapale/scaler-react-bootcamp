import FormGroup from "./Bootstrap/FormGroup";
import Experience from "./Form/Experience";
import Education from "./Form/Education";

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
      <h3>Basic Info</h3>
      {Object.keys(FormData).map(
        (fd) =>
          Object.keys(Desc).includes(fd) && (
            <FormGroup
              key={fd}
              Label={Desc[fd][1]}
              Type={Desc[fd][0]}
              Desc={Desc[fd][2]}
              Id={fd}
              Value={FormData[fd]}
              Placeholder={`Enter value for ${fd}`}
              onChange={fd === "FullName" ? () => {} : onChange}
              readOnly={fd === "FullName" ? true : false}
            />
          )
      )}
      <h3>Experience</h3>
      <Experience Experiences={FormData.Experience} />
      <h3>Education</h3>
      <Education Educations={FormData.Education}/>
      <h3>Skills</h3>
      <pre className="border rounded bg-light p-2">
        {JSON.stringify(FormData.Skills, null, 2)}
      </pre>
      <h3>Interests</h3>
      <pre className="border rounded bg-light p-2">
        {JSON.stringify(FormData.Interests, null, 2)}
      </pre>
      <h3>Awards</h3>
      <pre className="border rounded bg-light p-2">
        {JSON.stringify(FormData.Awards, null, 2)}
      </pre>
    </div>
  );
};

export default Form;
