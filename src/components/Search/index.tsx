import { LegacyRef, useRef } from 'react'

interface Props {
  onSubmit: Function
}

const Search: React.FC<Props> = ({ onSubmit }) => {
  const ipInput = useRef<HTMLInputElement>()

  return (
    <section className="search">
      <h1>IP Address Tracker</h1>
      <form
        onSubmit={e => {
          onSubmit(ipInput?.current?.value)
          e.preventDefault()
        }}
      >
        <input
          ref={ipInput as LegacyRef<HTMLInputElement>}
          name="ip"
          placeholder="Search for any IP address or domain"
        />
        
        <button type="submit">
          <img src="/icon-arrow.svg" style={{ fill: 'white' }}/>
        </button>
      </form>
    </section>
  )
}

export default Search