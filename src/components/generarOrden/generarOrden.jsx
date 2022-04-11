import React, {useState,useEffect} from 'react';
import {addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch} from "@firebase/firestore";
import {useCartContext} from "../../context/CartContext";
import Alert from "../alertas/alertas";

const GenerarOrden = () => {
    const {cartList, precioTotal} = useCartContext()
    const [showModal, setShowModal] = React.useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formErrors, setFormErrors] = useState({})
    const [id, setId] = useState(null)
    const [dataForm, setDataForm] = useState({
        email: '',
        phone: '',
        name: ''
    })

    const generarOrdenS = async (e) => {

        let order = {}
        order.buyer = dataForm
        order.total = precioTotal()
        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.tittle
            const precio = cartItem.price * cartItem.cantidad
            const cantidad =  cartItem.cantidad
            return {id, nombre, precio,cantidad}
        })

        const db = getFirestore()
        const queryCollectionItems = collection(db, 'orders')
        await addDoc(queryCollectionItems, order)
            .then(({ id }) => setId(id))
            .catch(err => console.log(err))
            .finally(() => setShowModal(false) )

        const queryCollection = collection(db, 'productos')
        const queryActulizarStock = await query(
            queryCollection, //                   ['jlksjfdgl','asljdfks'] -> ejemplo del map ,
            where( documentId() , 'in', cartList.map(it => it.id) )
        )

        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            }) ))
            .finally(()=> console.log('Stock actulalizado'))
        batch.commit()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(dataForm));
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }

    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const soloNumero = /^[0-9]+$/


        if (!values.email) {
            errors.email = "Email requerido";
        } else if (!regex.test(values.email)) {
            errors.email = "Formato Email invalido";
        }

        if (!values.validarEmail) {
            errors.validarEmail = "Confirmar Email requerido";
        } else if (!regex.test(values.validarEmail)) {
            errors.validarEmail = "Formato Email invalido";
        } else if (values.validarEmail !== values.email) {
            errors.validarEmail = "El Email debe ser coincidir";
        }

        if (!values.name) {
            errors.name = "Nombre requerido";
        }

        if (!values.phone) {
            errors.phone = "Teléfono requerido";
        }else if (!soloNumero.test(values.phone)) {
            errors.phone = "Formato invalido, Utiliza solo números";
        }
        return errors;
    };
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            generarOrdenS()
        }
    }, [formErrors]);
    return (
        <div>
            {id && <Alert mensaje={id}/>}
            <div className=" mt-8 flex justify-end  w-full">
                <>
                    <button
                        className="block  w-96 m-auto text-xs   py-2.5 px-5   font-medium text-gray-900 bg-white rounded-lg border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700"
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                        Generar orden
                    </button>
                    {showModal ? (
                        <>
                            <div
                                className="justify-center rounded-lg items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
                            >
                                <div className="relative  w-auto my-6 mx-auto max-w-3xl">
                                    <div
                                        className="border-0 rounded-lg shadow-lg z-10 relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                        <div>
                                            <div className=" w-full rounded-lg">
                                                <div className="text-right w-min  m-auto shadow-md sm:rounded-lg ">

                                                    <table className=" text-sm text-left text-gray-500 p-2 w-96">
                                                        <thead
                                                            className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                                        <tr>
                                                            <th scope="col"
                                                                className="px-6 py-3  flex justify-between  items-center">
                                                                <div className=' '>Datos del comprador</div>
                                                                <button
                                                                    className="p-1 text-black  bg-transparent border-0 p-0 text-3xl float-right leading-none font-semibold outline-none focus:outline-none"
                                                                    onClick={() => setShowModal(false)}>
                                                                    <div className="text-black"> ×</div>
                                                                </button>
                                                            </th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td scope="row "
                                                                className="p-3">
                                                                <form
                                                                    className='mt-5'
                                                                    onSubmit={handleSubmit} noValidate
                                                                >

                                                                    <div className="mb-2 ">
                                                                        <label htmlFor="nombre"
                                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                                                                        <input type="text" id="nombre"
                                                                               name='name'
                                                                               onChange={handleChange}
                                                                               value={dataForm.name}
                                                                               className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${formErrors.name && 'border-2 border-rose-500'}`}
                                                                               placeholder='Nombre'
                                                                               required/>
                                                                        {formErrors.name && (
                                                                            <span className="text-rose-500">{formErrors.name}</span>
                                                                        )}
                                                                    </div>
                                                                    <div className="mb-2">
                                                                        <label htmlFor="telefono"
                                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefono</label>
                                                                        <input type="text" id="telefono"
                                                                               name='phone'
                                                                               onChange={handleChange}
                                                                               value={dataForm.phone}
                                                                               pattern="[0-9]{0,13}"
                                                                               className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${formErrors.phone && 'border-2 border-rose-500'}`}
                                                                               placeholder='Telefono'
                                                                               required/>
                                                                        {formErrors.phone && (
                                                                            <span className="text-rose-500">{formErrors.phone}</span>
                                                                        )}
                                                                    </div>
                                                                    <div className="mb-2">
                                                                        <label htmlFor="email"
                                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                                                        <input type="email" id="email"
                                                                               name='email'
                                                                               placeholder='email'
                                                                               onChange={handleChange}
                                                                               value={dataForm.email}
                                                                               className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${formErrors.email && 'border-2 border-rose-500'}`}
                                                                               required/>
                                                                        {formErrors.email && (
                                                                            <span className="text-rose-500">{formErrors.email}</span>
                                                                        )}
                                                                    </div>
                                                                    <div className="mb-2">
                                                                        <label htmlFor="email2"
                                                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirmar
                                                                            Email</label>
                                                                        <input type="email" id="email2"
                                                                               name='validarEmail'
                                                                               placeholder='Repetir Email'
                                                                               onChange={handleChange}
                                                                               className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${formErrors.validarEmail && 'border-2 border-rose-500'}`}
                                                                               value={dataForm.validarEmail}
                                                                               required/>
                                                                        {formErrors.validarEmail && (
                                                                            <span className="text-rose-500">{formErrors.validarEmail}</span>
                                                                        )}
                                                                    </div>
                                                                    <div className="mt-8 mb-8 ">
                                                                        <button
                                                                            type='submit'
                                                                            className='block w-96  m-auto    py-2.5 px-5   text-mdtext-gray-900 bg-white rounded-lg border border-blue-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700'>Generar
                                                                            orden
                                                                        </button>
                                                                    </div>
                                                                </form>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="opacity-50 fixed inset-0 z-10 bg-gray-700"></div>
                        </>
                    ) : null}
                </>

            </div>
        </div>
    );
};

export default GenerarOrden;
