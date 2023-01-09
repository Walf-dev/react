import React, { useState } from "react";

const StepTwo = ({nextStep, handleFormData, values}) => {

    const [error, setError] = useState();
    const [lastName, setLastName] = useState();
    const [firstname, setFirstname] = useState();
    const [message, setMessage] = useState();
    const [email, setEmail] = useState();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!lastName || !firstname || !message || !email) {
            setError("Fill in all the fields")
        }
        else nextStep();
}

    return (
        <>
            <form>
                {error}
                <input type="text" name="lastname" required/>
                <input type="text" name="firstname" required/>
                <input type="email" name="email" required/>
                <input type="text" name="message" required/>
                <button value="Precedent" />
                <button value="Valider" type="submit" />
                <button value="Suivant" />
            </form>
        </>
    )
}
export default StepTwo;