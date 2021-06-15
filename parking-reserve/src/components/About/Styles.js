import styled from 'styled-components'

export const AboutBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 90px;
    align-items: left;
    flex-direction: flex-start;
    margin-bottom: 190px;
`

export const AboutProjectBlock = styled.div`
    align-items: left;
    max-width: 900px;
    color: #333333;
    font-weight: 500;
    font-size: 18px;
`

export const RoleDescription = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    padding-top: 25px;
`

export const RoleHeader = styled.h3`    
    & {
        font-weight: 500;
        font-size: 22px;
        color: #6574FF;        
    }

    & > span {
        font-size: 20px;
        font-weight: 700;
        color: #5868fc;
    }
`

export const RoleCapabilitiesList = styled.ul`
    & {
        margin-top: 20px;
    }
`

export const RoleCapabilitie = styled.li`
    & {
        color: #333333;
        font-weight: 500;
        font-size: 14px;
    }

    &::marker {
        font-size:14px;
        color: #333333;
    }
`