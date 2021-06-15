import React from 'react'
import { 
    AboutBlock,
    AboutProjectBlock,
    RoleDescription, 
    RoleHeader, 
    RoleCapabilitiesList, 
    RoleCapabilitie 
} from './Styles'

export const About = () => {
    return (
        <AboutBlock>
            <AboutProjectBlock>
                Данный проект призван решить актуальную проблему с поиском парковочного места в крупных городах
            </AboutProjectBlock>
            <RoleDescription>
                <RoleHeader>РОЛЬ: <span>Владелец приложения</span></RoleHeader>
                <RoleCapabilitiesList>
                    <RoleCapabilitie>Как владелец частной парковки, я хочу зарегистрировать свободные места на частной парковке, чтобы сдавать их в аренду общедоступным пользователям.</RoleCapabilitie>
                    <RoleCapabilitie>Зарегистрируйте свободные места на частной парковке</RoleCapabilitie>
                    <RoleCapabilitie>Установите цену за час на парковочные места</RoleCapabilitie>
                </RoleCapabilitiesList>
            </RoleDescription>
            <RoleDescription>
                <RoleHeader>РОЛЬ: <span>Клиент</span></RoleHeader>
                <RoleCapabilitiesList>
                    <RoleCapabilitie>Как автовладелец, ищущий место для парковки, я хочу найти ближайшие свободные места для парковки, чтобы арендовать их на некоторое время.</RoleCapabilitie>
                </RoleCapabilitiesList>
            </RoleDescription>
        </AboutBlock>
    )
}

export default About