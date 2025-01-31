import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.section`
  background-color: ${colors.white};
  position: relative;
  overflow: hidden;

  ${TagContainer} {
    margin-right: 4px;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 16px;
  }
`
export const Box = styled.div`
  border: 1px solid ${colors.dark_pink};
  border-top: none;
  width: 100%;
  height: 180px;
  position: relative;
  overflow: hidden;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin: 8px 0 16px;
  margin-left: 7px;
  color: ${colors.dark_pink};
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 7px 16px 7px;
  color: ${colors.dark_pink};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    line-height: 18px;
  }
`

export const Category = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
`

export const Note = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${colors.dark_pink};
  margin: 0;
`
export const Star = styled.img`
  width: 21px;
  height: 21px;
`

export const NoteContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: 217px;
  object-fit: cover;
`
