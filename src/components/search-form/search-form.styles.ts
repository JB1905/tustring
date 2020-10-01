import styled from 'styled-components'
import { DebounceInput } from 'react-debounce-input'

export const Wrapper = styled.div`
  padding: 8px 0;
  position: sticky;
`

export const SearchField = styled(DebounceInput)`
  width: 100%;
  padding: 8px 14px;
  font-family: inherit;
  font-size: var(--font-size-md);
  color: var(--text-color);
  background-color: var(--card-color);
  border-radius: var(--radius-corners);
  border: 1px solid var(--border-color);
  -webkit-appearance: none;
`
