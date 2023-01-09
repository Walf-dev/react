import React, { useState } from "react";

const StepOne = ({nextStep, handleFormData, values}) => {

    const [error, setError] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        if () {
            setError("Fill in all the fields")
        }
        else nextStep();
}

    return (
        <>
            <form onSubmit = {onSubmit}>
                {error}
                <label>Nom</label>
                <input type="text" name="lastname" required defaultValue={values.lastname} 
                onChange= {handleFormData("lastname")}/>
                <label>Prenom</label>
                <input type="text" name="firstname" required  defaultValue={values.firstname}
                onChange= {handleFormData("firstname")}/>
                <label>Email</label>
                <input type="email" name="email" required  defaultValue={values.email}
                onChange= {handleFormData("email")}/>
                <label>Message</label>
                <textArea type="text" name="message" required  defaultValue={values.message}
                onChange= {handleFormData("message")}/>
                <button value="Precedent" />
                <button value="Valider" type="submit" />
                <button value="Suivant" />
            </form>
        </>
    )
}
export default StepOne;