import { useFormik } from "formik";

export default function AddHotelForm() {

    const formHandler = useFormik({
        initialValues: {

        },
        validationSchema: () => {
        },
        onSubmit: () => {

        }
    });


    return (
        <form onSubmit={formHandler.handleSubmit} >

        </form>
    )
}
