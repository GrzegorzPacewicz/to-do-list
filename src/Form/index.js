import "./style.css";

const Form = () => (
    <form className="form">
        <input autofocus className="form__newTask" placeholder="Co jest do zrobienia?" />
        <button className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;
