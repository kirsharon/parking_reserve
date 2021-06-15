import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { Button, Checkbox, InputNumber } from 'antd'
import bookingPhoto from '../../../resourse/images/booking-photo.png'
import LicenseAgreement from '../../universal-components/LicenseAgreement'



// onChange = e => {
//     console.log('checked = ', e.target.checked);
//     this.setState({
//       checked: e.target.checked,
//     });
//   };

const ParkingReservationForm = ({ history }) => {

    const [checked, setChecked] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [hours, setHours] = useState(1)

    const label = `${checked ? 'Checked' : 'Unchecked'}`

    const onChange = (value) => {
        console.log('changed', value);
    }

    const onClick = (value) => {
        console.log('click', value);
    }

    const onChangeHoursInput = (e) => {
        const val = e.target.value
        // If the current value passes the validity test then apply that to state
        if (e.target.validity.valid) setHours(val)
        // If the current val is just the negation sign, or it's been provided an empty string,
        // then apply that value to state - we still have to validate this input before processing
        // it to some other component or data structure, but it frees up our input the way a user
        // would expect to interact with this component
        else if (val === '' || val === '-') setHours(1)
    }

    return (
        <div className='confirm-info'>
            <h1>Бронирование</h1>
            <div className='confirm-space-info'>
                <img src={bookingPhoto} />

                <div className='confirm-space-street'>
                    ул. Вишнеского, д. 15/3
				</div>

                <div className='confirm-space-city'>
                    Казань, Республика Татарстан, Россия
				</div>

                <div className='confirm-space-total'>
                    Итого
				</div>

                <div className='confirm-space-cost'>
                    160 ₽
				</div>
                    {/* Поставить ограничение снизу */}
                <div className='confirm-space-quantity'>
                    Часы
					<input type='number'
                        step='1'
                        id='num_count'
                        name='quantity'
                        value={hours}
                        onChange={onChangeHoursInput}
                        pattern="^-?[0-9]\d*\.?\d*$"
                        title='Qty'
                    />
                </div>
            </div>
            <div className='border' />
            <LicenseAgreement />
            <NavLink exact to='/payment'>
                <button>Перейти к оплате</button>
            </NavLink>
        </div>
    )
}

export default ParkingReservationForm

// state = {message: '3'};

// updateNumber = (e) => {
//   const val = e.target.value;
//   // If the current value passes the validity test then apply that to state
//   if (e.target.validity.valid) this.setState({message: e.target.value});
//   // If the current val is just the negation sign, or it's been provided an empty string,
//   // then apply that value to state - we still have to validate this input before processing
//   // it to some other component or data structure, but it frees up our input the way a user
//   // would expect to interact with this component
//   else if (val === '' || val === '-') this.setState({message: val});
// }

// render() {
//   return (
//     <input
//       type='tel'
//       value={this.state.message}
//       onChange={this.updateNumber}
//       pattern="^-?[0-9]\d*\.?\d*$"
//     />
//   );
// }

{/* <div className='privacy-policy'>
                        <p style={{ marginBottom: '20px' }}>
                            <Checkbox
                                checked={checked}

                                onChange={onChange}
                            >
                                {label}
                            </Checkbox>
                        </p>
                    </div>
                    <Button disabled={disabled}
                        onClick={onClick}>
                        Перейти к оплате
            </Button> */}