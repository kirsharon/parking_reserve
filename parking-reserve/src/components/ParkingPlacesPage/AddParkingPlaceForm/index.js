import React from 'react'
import { useForm, useField } from 'react-final-form-hooks'
import { addParkingPlaceAction } from '../../../store/features/parking-place/index'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'antd'
import { CameraOutlined } from '@ant-design/icons'
import Gallery from './Gallery'
import Map from './Map'
import css from './add-parking-place.css'
import Modal from 'react-modal'
import cameraImg from '../../../resourse/images/camera.svg'
import plusImg from '../../../resourse/images/plus.svg'
import closeImg from '../../../resourse/images/close.svg'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

const validate = values => {
    const errors = {}

    if (!values.city) {
        errors.city = 'Укажите город!'
    }

    if (!values.street) {
        errors.street = 'Укажите улицу!'
    }

    if (!values.house) {
        errors.house = 'Укажите номер дома!'
    }

    if (!values.payment) {
        errors.payment = 'Укажите стоимость!'
    }

    return errors
}

// placeId: '',
// ownerId: '',
// city: 'Kazan',
// street: 'Fuchike',
//  house: '86A',
//             photos: List(['/...', '/...', '/...']), // photos
// address: 'yл. Вишневского, д.11',
//             payment: 100,
//             coordinates: [-1.135171, 52.6376],
//             placementDate: new Date(2019, 12, 21),
//             status: ''

const AddParkingPlace = () => {

    let subtitle

    const [modalIsOpen, setIsOpen] = React.useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    // const afterOpenModal = () => {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00'
    // }

    const closeModal = () => {
        setIsOpen(false)
    }

    const onSubmit = async values => {
        console.log(JSON.stringify(values, 0, 4))
        dispatch(addParkingPlaceAction(values))
    }

    const dispatch = useDispatch()
    // const profile = useSelector()

    const { form, handleSubmit, values, pristine, submitting } = useForm({
        onSubmit,
        validate
    })

    const city = useField('city', form)
    const street = useField('street', form)
    const house = useField('house', form)
    const payment = useField('payment', form)
    // const coordinates = useField('coordinates', form)
    // const photos = useField('photos', form)

    return (
        <>
            <button onClick={openModal} className={'button-content'}>
                <img src={plusImg} alt={'+'} />
                <span>Добавить место</span>
            </button>
            <Modal
                isOpen={modalIsOpen}
                //onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                className='add-parking-place-modal'
                style={customStyles}
                contentLabel='Добавить парковочное место'
            >
                <div className='close'>
                    <h1 className='close-header'>Разместите парковочное место</h1>
                    <img onClick={closeModal}
                        src={closeImg}
                        alt={'x'}
                        className='close-button' />
                </div>
                {/* <div className='add-parking-place'> */}
                {/* <div className='add'>
                            <input type="text" placeholder="Укажите город" />
                            <input type="text" placeholder="Укажите улицу" />
                            <input type="text" placeholder="Укажите дом" />
                            <input type="text" placeholder="Установите цену" />
                            <button><div className="content"><img src={cameraImg} /><span>Загрузите фото</span></div></button>
                        </div>
                        <Map />
                        <Gallery /> */}
                <form onSubmit={handleSubmit}>
                    <div className='add-place-wrapper-with-map'>
                        <div className='add-place-inputs-wrapper'>

                            <div>
                                <input {...city.input} placeholder="Город" />
                                {street.meta.touched &&
                                    street.meta.error && <span>{street.meta.error}</span>}
                            </div>

                            <div>
                                <input {...street.input} placeholder="Улица" />
                                {street.meta.touched &&
                                    street.meta.error && <span>{street.meta.error}</span>}
                            </div>

                            <div>
                                <input {...house.input} placeholder="Номер дома" />
                                {house.meta.touched &&
                                    house.meta.error && <span>{house.meta.error}</span>}
                            </div>

                            <div>
                                <input {...payment.input} placeholder="Стоимость" />
                                {payment.meta.touched &&
                                    payment.meta.error && <span>{payment.meta.error}</span>}
                            </div>
                        </div>
                        {/* <Map /> */}
                    </div>
                    <Button><CameraOutlined />Загрузите фото</Button>
                    <Gallery />
                    {/* <Button type='primary'>Сохранить</Button> */}
                </form>
                {/* </div> */}
            </Modal>
        </>
    )
}

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#button-content')

export default AddParkingPlace