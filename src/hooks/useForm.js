// write your custom hook here to control your checkout form
import useLocalStorage from './useLocalStorage';

const useForm = (initialValues) => {
    const [ values, setValues ] = useLocalStorage('form', initialValues);
    const handleChanges = event => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };
    const clearForm = event => {
        event.preventDefault();
        setValues(initialValues);
    };
    return [values, handleChanges, clearForm];
}
export default useForm;
