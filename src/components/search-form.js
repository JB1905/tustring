import styled from "styled-components"
import { DebounceInput } from "react-debounce-input"

const SearchForm = styled(DebounceInput)`
  font-family: inherit;
  width: 100%;
  position: sticky;
  top: 65px;
  padding: 8px 14px;
  font-size: 2rem;
  color: var(--text-color);
  background-color: var(--card-color);
  border-radius: var(--radius-corners);
  border: 1px solid var(--border-color);
  -webkit-appearance: none;
`

export default SearchForm
