import React from 'react'

const LicenseAgreement = () => {
    return (
        <div className='notification'>
            <input type='checkbox' className='custom-checkbox' />
            <label htmlFor='checkbox'></label>
            <div className='notification-text'>
                Настоящим я соглашаюсь с тем, что <u className='color-text'>PARKING RESERVATION</u>
                может связываться со мной по почте, электронной почте, смс,
                телефону и с помощью других средств связи в целях маркетинга, рекламы и изучения мнений.
                Я согласен на обработку моих персональных данных, включая трансграничную передачу и передачу третьим лицам.
                Я прочитал <u className='color-text'>Политику конфиденциальности</u> и согласен с ее положениями.
			</div>
        </div>
    )
}

export default LicenseAgreement